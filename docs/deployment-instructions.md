# Deployment Instructions

This document provides step-by-step instructions for deploying the Car Detailing Booking Management System.

## Prerequisites

Before deployment, ensure you have:

- A Google Account for Google Sheets and Google Apps Script
- Access to a web hosting platform (Vercel, Netlify, or similar for the Next.js frontend)
- A domain name (optional but recommended)

## Part 1: Setting up Google Apps Script Backend

### Step 1: Create Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the code from `google-apps-script-code.gs`
4. Update the configuration variables:
   - `SPREADSHEET_ID`: Your Google Sheet ID
   - `SHEET_NAME`: The name of your bookings sheet
   - `ADMIN_EMAIL`: Your admin email address

### Step 2: Set up Google Sheet

1. Create a new Google Sheet with the required columns:
   - ID, Name, Phone, Email, Service, Date, Time, Notes, Status, CreatedAt
2. Note the Sheet ID from the URL
3. Share the sheet with the Google Apps Script project

### Step 3: Deploy Google Apps Script as Web App

1. In the Apps Script editor, click "Deploy" > "New deployment"
2. Select "Web app" as the type
3. Configure:
   - Execute as: Me
   - Who has access: Anyone (or restrict as needed)
4. Click "Deploy"
5. Note the Web App URL - you'll need this for the frontend

## Part 2: Configuring the Next.js Frontend

### Step 1: Update Environment Variables

Create a `.env.local` file in your Next.js project root with:

```
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from your deployed Google Apps Script.

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Build and Deploy

```bash
npm run build
npm start
```

Or deploy to your preferred platform (Vercel, Netlify, etc.).

## Part 3: Admin Dashboard Access

The admin dashboard is available at `/admin`. For production environments, you should implement authentication:

1. Add authentication middleware to protect the `/admin` route
2. Consider using NextAuth.js or another authentication provider
3. Implement role-based access control

## Part 4: Security Considerations

### Google Apps Script Security

- Limit access to the Web App to specific users if needed
- Implement rate limiting in the script
- Add input validation and sanitization
- Consider adding reCAPTCHA for additional security

### Frontend Security

- Use HTTPS for all connections
- Validate inputs on the frontend
- Implement CSRF protection
- Sanitize all user inputs

## Part 5: Maintenance and Monitoring

### Regular Tasks

1. Monitor booking volume and adjust daily limits as needed
2. Check email delivery rates and spam folder placement
3. Review logs for errors or suspicious activity
4. Backup Google Sheets regularly

### Performance Optimization

1. Implement caching for frequently accessed data
2. Optimize Google Apps Script for faster execution
3. Minimize external API calls
4. Compress images and assets

## Troubleshooting

### Common Issues

1. **Booking form not submitting**: Check that the Google Apps Script URL is correctly configured
2. **Emails not sending**: Verify GmailApp permissions in Google Apps Script
3. **Admin dashboard not loading**: Ensure proper authentication is implemented
4. **Duplicate bookings**: Confirm the duplicate check logic is working correctly

### Error Logging

Check Google Apps Script execution logs for backend errors and browser console for frontend errors.

## Scaling Considerations

As your business grows:

1. Consider implementing a more robust database solution
2. Add load balancing for high traffic periods
3. Implement queue systems for email notifications
4. Add caching layers for improved performance
5. Set up automated monitoring and alerts

## Updates and Maintenance

To update the system:

1. Update the Google Apps Script code in the online editor
2. Redeploy the Web App with a new version
3. Update the frontend code as needed
4. Test thoroughly before going live

That's it! Your Car Detailing Booking Management System is now ready for production use.