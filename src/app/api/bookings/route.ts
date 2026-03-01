import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import type { JWT } from 'google-auth-library';

const SPREADSHEET_ID = '1D9ZQRGQ1fs90XepFzLit6T3N0AtoeWZKyW16_0iI7zc';
const SHEET_NAME = 'Bookings';

const authClient = new google.auth.GoogleAuth({
  credentials: {
    type: 'service_account',
    project_id: 'srv-detailing-488818',
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL || 'srv-detailing@srv-detailing-488818.iam.gserviceaccount.com',
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// GET → fetch bookings for admin panel
export async function GET() {
  try {
    const client = await authClient.getClient() as JWT;
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:I`,
    });

    const rows = response.data.values || [];
    const bookings = rows.map((row, index) => ({
      id: `booking_row_${index + 2}`, // Generate a unique ID based on row number (starting from row 2)
      createdAt: row[0], // Timestamp
      name: row[1], // Full Name
      phone: row[2], // Phone Number
      email: row[3], // Email Address
      address: row[4], // Address
      service: row[5], // Service (this was the issue - was row[3], now row[5])
      date: row[6], // Preferred Date
      time: row[7], // Preferred Time
      notes: row[8], // Additional Notes
      status: row[9] || 'Pending', // Status might be in column J (index 9) if it exists, otherwise default to Pending
    }));

    return NextResponse.json({ success: true, data: bookings });
  } catch (error: any) {
    console.error('Failed to fetch bookings:', error);
    
    // Check if it's a permission error
    if (error.status === 403) {
      return NextResponse.json(
        { success: false, data: [], message: 'Permission denied. Please check if the Google Sheet is shared with the service account.' },
        { status: 403 }
      );
    }
    
    return NextResponse.json(
      { success: false, data: [], message: 'Failed to load bookings: ' + error.message },
      { status: 500 }
    );
  }
}

// POST → create new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const client = await authClient.getClient() as JWT;
    const sheets = google.sheets({ version: 'v4', auth: client });

    const newRow = [
      new Date().toISOString(), // Timestamp (createdAt)
      body.name || body.fullName, // Full Name
      body.phone, // Phone Number
      body.email, // Email Address
      body.address || '', // Address
      body.service, // Service
      body.date, // Preferred Date
      body.time, // Preferred Time
      body.notes || '', // Additional Notes
      'Pending', // Status (to ensure the column exists)
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:I`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [newRow] },
    });

    return NextResponse.json({ success: true, message: 'Booking created successfully' });
  } catch (error: any) {
    console.error('Failed to create booking:', error);
    
    // Check if it's a permission error
    if (error.status === 403) {
      return NextResponse.json(
        { success: false, message: 'Permission denied. Please check if the Google Sheet is shared with the service account.' },
        { status: 403 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to create booking: ' + error.message },
      { status: 500 }
    );
  }
}