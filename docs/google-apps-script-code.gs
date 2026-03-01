/**
 * Google Apps Script Web App for Car Detailing Booking Management System
 * 
 * This script handles booking submissions, validates data, checks for duplicates,
 * stores data in Google Sheets, and sends email notifications.
 */

// CONFIGURATION - Update these variables with your specific values
var SPREADSHEET_ID = '1D9ZQRGQ1fs90XepFzLit6T3N0AtoeWZKyW16_0iI7zc'; // Replace with your Google Sheet ID
var SHEET_NAME = 'Bookings'; // Name of the sheet where bookings will be stored
var ADMIN_EMAIL = 'admin@yourcompany.com'; // Replace with admin email address

/**
 * doGet - Handles GET requests (useful for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Car Detailing Booking API is running!' 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * doPost - Handles POST requests for booking submissions
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    var jsonString = e.postData.getDataAsString();
    var data = JSON.parse(jsonString);
    
    // Validate required fields
    var requiredFields = ['id', 'name', 'phone', 'email', 'service', 'date', 'time'];
    for (var i = 0; i < requiredFields.length; i++) {
      if (!data[requiredFields[i]] || data[requiredFields[i]].toString().trim() === '') {
        return ContentService
          .createTextOutput(JSON.stringify({ 
            success: false, 
            message: 'Missing required field: ' + requiredFields[i] 
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Sanitize inputs
    var sanitizedData = {
      id: data.id.toString().trim(),
      name: data.name.toString().trim(),
      phone: data.phone.toString().trim(),
      email: data.email.toString().toLowerCase().trim(),
      service: data.service.toString().trim(),
      date: data.date.toString().trim(),
      time: data.time.toString().trim(),
      notes: data.notes ? data.notes.toString().trim() : '',
      status: data.status || 'Pending',
      createdAt: data.createdAt || new Date().toISOString()
    };
    
    // Open the spreadsheet and sheet
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Check if the sheet exists, create if it doesn't
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers to the new sheet
      sheet.appendRow([
        'ID',
        'Name', 
        'Phone', 
        'Email', 
        'Service', 
        'Date', 
        'Time', 
        'Notes', 
        'Status', 
        'CreatedAt'
      ]);
    }
    
    // Check for duplicate booking (same date, time, and service)
    var duplicateCheckResult = checkForDuplicateBooking(sheet, sanitizedData.date, sanitizedData.time, sanitizedData.service);
    if (duplicateCheckResult.isDuplicate) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          success: false, 
          message: 'This time slot is already booked for the selected service. Please choose a different time or date.' 
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append the new booking to the sheet
    sheet.appendRow([
      sanitizedData.id,
      sanitizedData.name,
      sanitizedData.phone,
      sanitizedData.email,
      sanitizedData.service,
      sanitizedData.date,
      sanitizedData.time,
      sanitizedData.notes,
      sanitizedData.status,
      sanitizedData.createdAt
    ]);
    
    // Send email notifications
    sendEmailNotifications(sanitizedData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Booking created successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Booking submission error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'An error occurred while processing your booking: ' + error.message 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Checks if a booking already exists for the same date, time, and service
 */
function checkForDuplicateBooking(sheet, date, time, service) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) { // No data rows yet (excluding header)
    return { isDuplicate: false };
  }
  
  var range = sheet.getRange(2, 6, lastRow - 1, 3); // Starting from row 2 (after headers), columns F, G, H (Date, Time, Service)
  var values = range.getValues();
  
  for (var i = 0; i < values.length; i++) {
    var rowDate = values[i][0]; // Column F (Date)
    var rowTime = values[i][1]; // Column G (Time)
    var rowService = values[i][2]; // Column H (Service)
    
    if (rowDate === date && rowTime === time && rowService === service) {
      return { isDuplicate: true };
    }
  }
  
  return { isDuplicate: false };
}

/**
 * Sends email notifications to customer and admin
 */
function sendEmailNotifications(bookingData) {
  try {
    // Send customer confirmation email
    var customerSubject = 'Your Booking Confirmation - SRV Detailing';
    var customerBody = createCustomerEmailTemplate(bookingData);
    
    GmailApp.sendEmail(
      bookingData.email,
      customerSubject,
      'Your booking confirmation (HTML version preferred)',
      {
        htmlBody: customerBody
      }
    );
    
    // Send admin notification email
    var adminSubject = 'New Booking Alert - ' + bookingData.name;
    var adminBody = createAdminEmailTemplate(bookingData);
    
    GmailApp.sendEmail(
      ADMIN_EMAIL,
      adminSubject,
      'New booking received (HTML version preferred)',
      {
        htmlBody: adminBody
      }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    // Don't throw error here as it shouldn't affect the booking process
  }
}

/**
 * Creates the customer confirmation email template
 */
function createCustomerEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background-color: #0A5A3B; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .booking-details { background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-row:last-child { border-bottom: none; }
        .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SRV Detailing</h1>
          <h2>Booking Confirmation</h2>
        </div>
        <div class="content">
          <p>Dear ${data.name},</p>
          
          <p>Thank you for choosing SRV Detailing! Your booking has been received and is being processed.</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <div class="detail-row">
              <span>Booking ID:</span>
              <strong>${data.id}</strong>
            </div>
            <div class="detail-row">
              <span>Service:</span>
              <strong>${data.service}</strong>
            </div>
            <div class="detail-row">
              <span>Date:</span>
              <strong>${formatDate(data.date)}</strong>
            </div>
            <div class="detail-row">
              <span>Time:</span>
              <strong>${data.time}</strong>
            </div>
            <div class="detail-row">
              <span>Name:</span>
              <strong>${data.name}</strong>
            </div>
            <div class="detail-row">
              <span>Contact:</span>
              <strong>${data.phone}</strong>
            </div>
          </div>
          
          <p>If you need to make any changes to your booking, please contact us at least 24 hours in advance.</p>
          
          <p>We look forward to servicing your vehicle!</p>
          
          <p>Best regards,<br/>The SRV Detailing Team</p>
        </div>
        <div class="footer">
          <p>SRV Detailing<br/>Professional Mobile Car Valeting & Detailing<br/>Contact: info@srvdetailing.co.uk</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Creates the admin notification email template
 */
function createAdminEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background-color: #0A5A3B; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .booking-details { background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-row:last-child { border-bottom: none; }
        .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SRV Detailing</h1>
          <h2>New Booking Alert</h2>
        </div>
        <div class="content">
          <p>A new booking has been received:</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <div class="detail-row">
              <span>Booking ID:</span>
              <strong>${data.id}</strong>
            </div>
            <div class="detail-row">
              <span>Customer Name:</span>
              <strong>${data.name}</strong>
            </div>
            <div class="detail-row">
              <span>Phone:</span>
              <strong>${data.phone}</strong>
            </div>
            <div class="detail-row">
              <span>Email:</span>
              <strong>${data.email}</strong>
            </div>
            <div class="detail-row">
              <span>Service:</span>
              <strong>${data.service}</strong>
            </div>
            <div class="detail-row">
              <span>Date:</span>
              <strong>${formatDate(data.date)}</strong>
            </div>
            <div class="detail-row">
              <span>Time:</span>
              <strong>${data.time}</strong>
            </div>
            <div class="detail-row">
              <span>Notes:</span>
              <strong>${data.notes || 'None'}</strong>
            </div>
            <div class="detail-row">
              <span>Status:</span>
              <strong>${data.status}</strong>
            </div>
            <div class="detail-row">
              <span>Created At:</span>
              <strong>${data.createdAt}</strong>
            </div>
          </div>
          
          <p>Please update the booking status as needed in the admin dashboard.</p>
        </div>
        <div class="footer">
          <p>SRV Detailing Admin Panel<br/>New Booking Notification</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Formats date for display
 */
function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toLocaleDateString('en-GB', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
}

/**
 * Function to handle daily booking limit (optional enhancement)
 * This would typically be called from a time-driven trigger
 */
function enforceDailyBookingLimit() {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  // Get today's date
  var today = new Date();
  today.setHours(0, 0, 0, 0); // Start of day
  
  // Count bookings for today
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return; // No data rows yet
  
  var dateColumn = 6; // Column F (Date)
  var statusColumn = 9; // Column I (Status)
  
  var dateRange = sheet.getRange(2, dateColumn, lastRow - 1, 1);
  var statusRange = sheet.getRange(2, statusColumn, lastRow - 1, 1);
  
  var dateValues = dateRange.getValues();
  var statusValues = statusRange.getValues();
  
  var todaysBookings = 0;
  for (var i = 0; i < dateValues.length; i++) {
    var bookingDate = new Date(dateValues[i][0]);
    bookingDate.setHours(0, 0, 0, 0); // Start of day
    
    // Count only confirmed/pending bookings
    if (bookingDate.getTime() === today.getTime() && 
        (statusValues[i][0] === 'Pending' || statusValues[i][0] === 'Confirmed')) {
      todaysBookings++;
    }
  }
  
  // Example limit of 10 bookings per day
  var DAILY_LIMIT = 10;
  if (todaysBookings > DAILY_LIMIT) {
    // Could send an alert email to admin
    console.warn('Daily booking limit exceeded: ' + todaysBookings + ' bookings scheduled for today');
  }
}

/**
 * Function to close bookings on specified days (optional enhancement)
 * This would typically be called from a time-driven trigger
 */
function checkForClosedDays() {
  // Example: Close bookings on December 25th and January 1st
  var today = new Date();
  var month = today.getMonth();
  var day = today.getDate();
  
  // Christmas and New Year's Day
  if ((month === 11 && day === 25) || (month === 0 && day === 1)) {
    return true; // Closed today
  }
  
  return false; // Not a closed day
}
  `;