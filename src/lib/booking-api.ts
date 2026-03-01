// API utility for connecting to Google Sheets API

interface BookingData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

interface BookingResponse {
  success: boolean;
  message?: string;
}

export const submitBooking = async (bookingData: BookingData): Promise<BookingResponse> => {
  try {
    // Prepare data for Google Sheets API
    const sheetsApiData = {
      name: bookingData.fullName.trim(), // Changed to name to match admin panel expectations
      phone: bookingData.phone.trim(),
      email: bookingData.email.trim().toLowerCase(),
      service: bookingData.service,
      date: bookingData.date,
      time: bookingData.time,
      notes: bookingData.notes?.trim() || '',
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    // Call Google Sheets API
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetsApiData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: BookingResponse = await response.json();
    return result;
  } catch (error) {
    console.error('Booking submission error:', error);
    return {
      success: false,
      message: 'Failed to submit booking. Please try again later.'
    };
  }
};

export default submitBooking;