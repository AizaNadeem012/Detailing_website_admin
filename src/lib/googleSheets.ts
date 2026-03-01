import { JWT } from 'google-auth-library';
import { google, sheets_v4 } from 'googleapis';

// Service Account Credentials from environment variables
const credentials = {
  "type": "service_account",
  "project_id": "srv-detailing-488818",
  "private_key_id": "e1648dcccd09e38d588fdf633028f22a18299222",
  "private_key": process.env.GOOGLE_PRIVATE_KEY || "",
  "client_email": process.env.GOOGLE_CLIENT_EMAIL || "",
  "client_id": "114207910256305466164",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLIENT_EMAIL || "")}`,
  "universe_domain": "googleapis.com"
};

// Google Sheet ID
const SPREADSHEET_ID = '1D9ZQRGQ1fs90XepFzLit6T3N0AtoeWZKyW16_0iI7zc';

// Scopes for accessing Google Sheets
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

/**
 * Authenticate with Google using service account
 */
async function authenticate(): Promise<JWT> {
  const jwtClient = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
  });

  await jwtClient.authorize();
  return jwtClient;
}

/**
 * Get all bookings from Google Sheet
 */
export async function getBookingsFromSheet(): Promise<any[]> {
  try {
    const auth = await authenticate();
    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1', // Adjust sheet name if needed
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    // Assuming first row contains headers
    const headers = rows[0];
    const bookings = rows.slice(1).map((row, index) => {
      const booking: any = {
        id: `${Date.now()}-${index}`, // Generate a unique ID
        createdAt: new Date().toISOString(),
      };

      headers.forEach((header, colIndex) => {
        if (row[colIndex] !== undefined) {
          // Convert header to camelCase property name
          const prop = header
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)/g, (_: string, chr: string) => chr.toUpperCase())
            .replace(/^[A-Z]/, (match: string) => match.toLowerCase());
          
          booking[prop] = row[colIndex];
        }
      });

      // Map common field names to our booking structure
      booking.name = booking.name || booking['full name'] || booking['customer name'];
      booking.phone = booking.phone || booking['phone number'] || booking.telephone;
      booking.email = booking.email || booking['email address'];
      booking.service = booking.service || booking['service required'] || booking.serviceType;
      booking.date = booking.date || booking['preferred date'] || booking.bookingDate;
      booking.time = booking.time || booking['preferred time'] || booking.bookingTime;
      booking.notes = booking.notes || booking['special requests'] || booking.comments || '';
      booking.status = booking.status || 'Pending'; // Default to Pending
      
      return booking;
    });

    return bookings;
  } catch (error) {
    console.error('Error fetching bookings from Google Sheet:', error);
    return [];
  }
}

/**
 * Add a new booking to Google Sheet
 */
export async function addBookingToSheet(booking: any): Promise<boolean> {
  try {
    const auth = await authenticate();
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row data based on your form structure
    const newRow = [
      booking.name || '',
      booking.email || '',
      booking.phone || '',
      booking.service || '',
      booking.date || '',
      booking.time || '',
      booking.notes || '',
      'Pending', // Status
      new Date().toISOString(), // Timestamp
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1', // Adjust sheet name if needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [newRow],
      },
    });

    return true;
  } catch (error) {
    console.error('Error adding booking to Google Sheet:', error);
    return false;
  }
}