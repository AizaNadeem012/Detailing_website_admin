# Google Sheet Setup Guide

This guide explains how to set up the Google Sheet for the Car Detailing Booking Management System.

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click the "+" button to create a new spreadsheet
3. Name it "Car Detailing Bookings" or your preferred name

## Step 2: Set Up the Columns

Add the following column headers to Row 1 of your sheet:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I | Column J |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| ID | Name | Phone | Email | Service | Date | Time | Notes | Status | CreatedAt |

## Step 3: Configure Column Properties

1. Make the header row bold for better visibility
2. Adjust column widths as needed for readability
3. Format the Date column (F) as date format
4. Format the Time column (G) as time format
5. Format the CreatedAt column (J) as date-time format

## Step 4: Set Up Permissions

1. Click "Share" in the top-right corner
2. Set the sharing permissions to "Anyone with the link can edit" or "Specific people" depending on your security needs
3. Copy the Sheet ID from the URL (the long string between `/spreadsheets/d/` and `/edit`)

## Step 5: Configure Google Apps Script

1. Open the Google Apps Script code file
2. Replace `YOUR_SPREADSHEET_ID_HERE` with the actual Sheet ID you copied
3. Update `ADMIN_EMAIL` with your admin email address
4. Save and deploy the script as a Web App

## Step 6: Sample Row Format

The first few rows of your sheet should look like this:

| ID | Name | Phone | Email | Service | Date | Time | Notes | Status | CreatedAt |
|----|------|-------|-------|---------|------|------|-------|--------|-----------|
| 1703123456789 | John Smith | 07123456789 | john@example.com | Full Valet | 2023-12-15 | 10:00 | Interior extra clean | Pending | 2023-12-10T14:30:00Z |

## Step 7: Protect the Header Row (Optional)

1. Select Row 1 (the header row)
2. Right-click and select "Protect range"
3. Configure the protection settings as needed
4. This prevents accidental changes to the headers

## Step 8: Set Up Data Validation (Optional)

You can add data validation to certain columns:

- **Status Column**: Allow only "Pending", "Confirmed", "Cancelled", "Completed"
- **Service Column**: Create a dropdown with your available services
- **Time Column**: Restrict to valid time slots (e.g., 09:00, 10:00, etc.)

That's it! Your Google Sheet is now ready to work with the Car Detailing Booking Management System.