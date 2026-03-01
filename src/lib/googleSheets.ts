import { JWT } from 'google-auth-library';
import { google, sheets_v4 } from 'googleapis';

// Service Account Credentials
const credentials = {
  "type": "service_account",
  "project_id": "srv-detailing-488818",
  "private_key_id": "e1648dcccd09e38d588fdf633028f22a18299222",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1mRFcxcgI3yNf\nsJDFt4X5ZXRx7wYct9vCBhel4QbmMMr+cO1GeBzQYbsPsjOHFq22Bljne6gZZrXb\nkStmz5+pjEK1IHbuPRJnX4Vx5R/caf/syvJTJIkwjnHFVFybgFjSByLZs9sGTH+G\n6lgzDTWyMIVRAoEhUM4R68n6bvhJ1WLTAsymvxzsbyB+Rti7hBMGg89CD2c9JhjL\nzZugKrL5VAdx7ujbUTmN4d5sdk11S765SkuGiqMSNmD+kkUQSRhKBstTRlZ8qS5P\nKUr+Rj9EWmFrhqXhhaEcOGEzgLs+/dp//Bor3fCf5/PmTwXq21/fZmK/xRpbX8aT\nAIRIFlizAgMBAAECggEAO1KakmTl2MgUBTFnyb8PHA6hgIqlw4HoXzSgSwb8uvvb\nhE0dpfSc7RHQCuua25lz+8+NAWmq20lrRSPiOr6+mKOCMys8zszSk0RoEnHX+6gA\n+7i8ep6n1l3iGqVZb075NPsxzk5r0V3yFv+8+khpbyFcm78msdx0xPPy0kWoBG4M\nngAwmwznNXwRy1DecOMpsz3z5F7NhOQZrtOvbE3p0wIrZ9XGltQpUwbyOzjkf5oU\nyrloGGNT6dHlKsJMfXk5esjtzWERldnLuLM/NnS9Pvsw96YGBbhBnBiSE6wryFVr\n+3ZnDYrhr+bvPN++yuQb6fqZlKCsDEldWjpMsIhHoQKBgQDms2JvpPdXuHaSwpf0\nl9KFa0QeDVYx1sVvxgTCxbUZyXUz/OTHrgLTG0Bw3TKO4HyZpyJ2YXEKv9vAb9uh\n2KzKuyI46Lmq79cFJSXVPKsNr/znc7x2Kv2qPAQVFBaT1Dg3fPPhTHhfg0WiVNHz\nC2A/v8sMsdOojrVYNt7mfe+lQwKBgQDJgzAGxyVuVqUDvOs4WQFWz9q4ghe8Eeba\nd9TluEfSvWN3cYio42xdM8pLwOYq7152uDtu6PXQdfdLr8hU8hGSU36gYQVVpdHX\n0pqa3T2kHNgEtrd6CFFTgcwGblTvjqFgqRtAoj8Vpv/08nb9xa17MP+5sb9DLWXP\nkWgSS2CP0QKBgQC+jouPdm7L6VUf0lZbtZAxnjGMtS1uS12X/rNuAoqdezcxMwHy\nIby5jTgEQeGB/NFOxawEpmYOH/2vDXYYUHYhmsMgyLKcDDHKUS3X3Z3Y13YJ5CJW\nZRpUI/CnTIl9n/yzcKWtglGnazH4bSFiJRJiddSNbtFK2F3YOLKTJpDtKwKBgQCH\nD2NgF5fR5UbCQ5vP72/DVJq+8Yqg5cq5gHlz4lhZOdBx3OmAcLVPnoem0Eo0Wq0Q\nmxhSlNc0eexekRmPPZNjZIzJR13A8tu7cI9o3oIS/bYXKrO8mdiQRL2PTeGlkg49\nb/oxDs2DYKPK87unCRfmKogrWKPdjY7gWQ/MuzKkEQKBgHb6W0yQYKKyE776R5LG\nO+0rBb/h+6BMJQcn8niESuxRCqEx/GAJoNY89D9K0EsgQ4XHwcWYylzM6OmcVXPC\nDDAJE6pnABSTXpEq+0PqOQu1Udo0GKlSHy249TqcNoC9Y0BEnaJOOGyPStk3I2Y9\nIjeApBzyY7CgjseYHGxO55Jn\n-----END PRIVATE KEY-----\n",
  "client_email": "srv-detailing@srv-detailing-488818.iam.gserviceaccount.com",
  "client_id": "114207910256305466164",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/srv-detailing%40srv-detailing-488818.iam.gserviceaccount.com",
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