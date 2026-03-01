'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { authenticateAdmin, isAdminAuthenticated, setAdminAuthentication } from '@/lib/adminAuth';

interface Booking {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  address?: string;
  service: 'Car Wash' | 'Car Detailing' | 'Ceramic Coating' | 'Paint Correction' | 'Interior Detailing' | 'Exterior Detailing' | 'Engine Bay Detailing' | 'Headlight Restoration' | 'Leather Conditioning' | 'Swirl Mark Removal' | 'New Car Protection' | 'Full Valet' | 'Mini Valet' | 'Mobile Valeting' | 'Interior Valeting' | 'Exterior Valeting' | 'Pet Hair Removal' | 'Odour Removal' | 'Upholstery Cleaning' | string;
  date: string;
  time: string;
  notes: string;
  status: string;
  [key: string]: any; // Allow additional fields from Google Sheet
}

// Custom XAxis tick component for angled labels
const CustomizedAxisTick = (props: any) => {
  const { x, y, payload } = props;
  
  return (
    <g transform={`translate(${x},${y})`}>
      <text 
        x={0} 
        y={0} 
        dy={16} 
        textAnchor="end" 
        fill="#666" 
        fontSize={12}
        transform="rotate(-45)"
      >
        {payload.value}
      </text>
    </g>
  );
};

const AdminDashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState('');
  const [filterService, setFilterService] = useState('');
  const [searchName, setSearchName] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    confirmed: 0,
    cancelled: 0,
    completed: 0
  });

  const [chartData, setChartData] = useState<any[]>([]);
  const [serviceData, setServiceData] = useState<any[]>([]);
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [showAllBookings, setShowAllBookings] = useState(false);

  // Check if user is already authenticated on component mount
  useEffect(() => {
    if (isAdminAuthenticated()) {
      setIsAuthenticated(true);
      loadDashboardData();
    } else {
      setLoading(false);
    }
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/bookings');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch bookings: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();

      if (result.success) {
        setBookings(result.data);
        calculateStats(result.data);
      } else {
        console.error('API responded with error:', result.message);
        setBookings([]);
        calculateStats([]);
      }
    } catch (error: any) {
      console.error('Error loading bookings:', error);
      // Set an error state to show to the user
      setBookings([]);
      calculateStats([]);
      
      // Check if it's a specific permission error
      if (error.message && error.message.includes('403')) {
        alert('Permission denied: Please share the Google Sheet with the service account email: srv-detailing@srv-detailing-488818.iam.gserviceaccount.com');
      } else {
        alert('Error loading bookings. Please make sure the Google Sheet is shared with the service account email: srv-detailing@srv-detailing-488818.iam.gserviceaccount.com');
      }
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (bookings: Booking[]) => {
    const total = bookings.length;
    const pending = bookings.filter(b => b.status?.toLowerCase() === 'pending').length;
    const confirmed = bookings.filter(b => b.status?.toLowerCase() === 'confirmed').length;
    const cancelled = bookings.filter(b => b.status?.toLowerCase() === 'cancelled').length;
    const completed = bookings.filter(b => b.status?.toLowerCase() === 'completed').length;

    setStats({
      total,
      pending,
      confirmed,
      cancelled,
      completed
    });
    
    // Generate chart data
    generateChartData(bookings);
  };
  
  const generateChartData = (bookings: Booking[]) => {
    // Service distribution data
    const serviceCountMap: Record<string, number> = {};
    bookings.forEach(booking => {
      const service = booking.service;
      serviceCountMap[service] = (serviceCountMap[service] || 0) + 1;
    });
    
    const serviceChartData = Object.entries(serviceCountMap).map(([service, count]) => ({
      name: service,
      value: count
    }));
    
    setServiceData(serviceChartData);
    
    // Daily booking trend data
    const dailyCountMap: Record<string, number> = {};
    bookings.forEach(booking => {
      const date = booking.date;
      dailyCountMap[date] = (dailyCountMap[date] || 0) + 1;
    });
    
    const dailyChartData = Object.entries(dailyCountMap)
      .map(([date, count]) => ({
        date,
        bookings: count
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      
    setDailyData(dailyChartData);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const isAuthenticated = await authenticateAdmin(username, password);
      
      if (isAuthenticated) {
        setIsAuthenticated(true);
        setAdminAuthentication(true);
        loadDashboardData();
        setLoginError('');
      } else {
        setLoginError('Invalid username or password. Please try again.');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setLoginError('An error occurred during authentication. Please try again.');
      setUsername('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setLoginError('');
    setAdminAuthentication(false);
    router.push('/');
  };

  // Helper function to get bookings for specific day of week
  const getBookingsForDay = (dayName: string, bookings: Booking[]): number => {
    const dayMap: Record<string, number> = {
      'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 
      'Thursday': 4, 'Friday': 5, 'Saturday': 6
    };
    
    return bookings.filter(booking => {
      if (!booking.date) return false;
      const bookingDate = new Date(booking.date);
      return bookingDate.getDay() === dayMap[dayName];
    }).length;
  };

  // Filter bookings
  const filteredBookings = bookings.filter((booking: Booking) => {
    const matchesDate = !filterDate || booking.date?.includes(filterDate);
    const matchesService = !filterService || booking.service?.toLowerCase().includes(filterService.toLowerCase());
    const matchesName = !searchName || booking.name?.toLowerCase().includes(searchName.toLowerCase());

    return matchesDate && matchesService && matchesName;
  });

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-GB');
    } catch {
      return dateString; // Return as-is if parsing fails
    }
  };

  const formatTime = (timeString: string) => {
    return timeString || 'N/A';
  };

  const updateBookingStatus = (id: string, newStatus: string) => {
    // Update the status locally without saving to Google Sheet
    setBookings((prevBookings: Booking[]) => {
      const updatedBookings = prevBookings.map((booking: Booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      );
      
      // Recalculate stats after status update
      calculateStats(updatedBookings);
      
      return updatedBookings;
    });
  };
  
  const cycleBookingStatus = (id: string, currentStatus: string) => {
    // Define the order of status cycling
    const statusOrder = ['Pending', 'Cancelled', 'Confirmed', 'Completed'];
    
    // Find current status index and get the next one
    const currentIndex = statusOrder.findIndex(status => 
      status.toLowerCase() === (currentStatus || 'Pending').toLowerCase()
    );
    
    const nextIndex = (currentIndex + 1) % statusOrder.length;
    const newStatus = statusOrder[nextIndex];
    
    // Update the status
    updateBookingStatus(id, newStatus);
  };

  const copyBookingData = (booking: Booking) => {
    const bookingData = JSON.stringify(booking, null, 2);
    navigator.clipboard.writeText(bookingData).then(() => {
      alert('Booking data copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy booking data: ', err);
      alert('Failed to copy booking data.');
    });
  };

  const deleteBooking = (id: string) => {
    if (confirm('Are you sure you want to delete this booking? This action cannot be undone.')) {
      // Remove the booking from the local state
      setBookings((prevBookings: Booking[]) => {
        const updatedBookings = prevBookings.filter((booking: Booking) => booking.id !== id);
        
        // Recalculate stats after deletion
        calculateStats(updatedBookings);
        
        return updatedBookings;
      });
      
      alert('Booking deleted successfully!');
    }
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    if (loading) {
      return (
        <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="h-10 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-64 mx-auto"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">Enter credentials to access dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5A3B] focus:border-[#0A5A3B] transition"
                placeholder="Enter username"
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5A3B] focus:border-[#0A5A3B] transition"
                placeholder="Enter password"
              />
            </div>

            {loginError && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{loginError}</h3>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#0A5A3B] hover:bg-[#084830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A5A3B] transition-colors duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-sm text-gray-600 hover:text-gray-900 transition"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show dashboard if authenticated
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="animate-pulse flex flex-col space-y-4 sm:space-y-6">
            <div className="h-8 sm:h-10 bg-gray-200 rounded w-1/2 sm:w-1/4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 sm:h-24 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
            <div className="h-10 sm:h-12 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 sm:h-96 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header with Logout */}
        <div className="mb-6 sm:mb-8 flex flex-wrap justify-between items-center gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Manage and monitor all bookings</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href="/admin/send-email"
              className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-1 sm:gap-2 text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden xs:inline">Send Email</span>
              <span className="xs:hidden">Email</span>
            </a>
            <a
              href="/admin/settings"
              className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center gap-1 sm:gap-2 text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="hidden xs:inline">Settings</span>
              <span className="xs:hidden">Settings</span>
            </a>
            <button
              onClick={handleLogout}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center gap-1 sm:gap-2 text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden xs:inline">Logout</span>
              <span className="xs:hidden">Logout</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="space-y-1">
              <label htmlFor="filterDate" className="block text-xs sm:text-sm font-medium text-gray-700">
                Filter by Date
              </label>
              <input
                type="date"
                id="filterDate"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5A3B] focus:border-[#0A5A3B] text-sm transition-all hover:border-gray-400"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="filterService" className="block text-xs sm:text-sm font-medium text-gray-700">
                Filter by Service
              </label>
              <select
                id="filterService"
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5A3B] focus:border-[#0A5A3B] text-sm transition-all hover:border-gray-400"
              >
                <option value="">All Services</option>
                <option value="Car Wash">Car Wash</option>
                <option value="Car Detailing">Car Detailing</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Paint Correction">Paint Correction</option>
                <option value="Interior Detailing">Interior Detailing</option>
                <option value="Exterior Detailing">Exterior Detailing</option>
                <option value="Engine Bay Detailing">Engine Bay Detailing</option>
                <option value="Headlight Restoration">Headlight Restoration</option>
                <option value="Leather Conditioning">Leather Conditioning</option>
                <option value="Swirl Mark Removal">Swirl Mark Removal</option>
                <option value="New Car Protection">New Car Protection</option>
                <option value="Full Valet">Full Valet</option>
                <option value="Mini Valet">Mini Valet</option>
                <option value="Mobile Valeting">Mobile Valeting</option>
                <option value="Interior Valeting">Interior Valeting</option>
                <option value="Exterior Valeting">Exterior Valeting</option>
                <option value="Pet Hair Removal">Pet Hair Removal</option>
                <option value="Odour Removal">Odour Removal</option>
                <option value="Upholstery Cleaning">Upholstery Cleaning</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="searchName" className="block text-xs sm:text-sm font-medium text-gray-700">
                Search by Name
              </label>
              <input
                type="text"
                id="searchName"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search customer name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5A3B] focus:border-[#0A5A3B] text-sm transition-all hover:border-gray-400"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilterDate('');
                  setFilterService('');
                  setSearchName('');
                }}
                className="w-full py-2 px-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Bookings Table - Card layout for mobile, table for larger screens */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8 border border-gray-100">
          {/* Mobile Card View - Visible only on small screens */}
          <div className="block md:hidden">
            {filteredBookings.length > 0 ? (
              <>
                {filteredBookings.slice(0, 4).map((booking, index) => (
                  <div key={booking.id || `booking-${index}`} className="border-b border-gray-100 last:border-b-0 p-3 hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="font-mono bg-gray-100 px-2 py-1 rounded text-xs mb-1">
                            {booking.id?.substring(0, 6) || `BK${index}`}
                          </div>
                          <span
                            onClick={() => cycleBookingStatus(booking.id, booking.status)}
                            className={`cursor-pointer text-[9px] font-semibold rounded-full px-2 py-1 border whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                              (booking.status || '').toLowerCase() === 'pending'
                                ? 'bg-yellow-50 text-yellow-800 border-yellow-300 hover:bg-yellow-100'
                                : (booking.status || '').toLowerCase() === 'confirmed'
                                  ? 'bg-blue-50 text-blue-800 border-blue-300 hover:bg-blue-100'
                                  : (booking.status || '').toLowerCase() === 'completed'
                                    ? 'bg-green-50 text-green-800 border-green-300 hover:bg-green-100'
                                    : (booking.status || '').toLowerCase() === 'cancelled'
                                      ? 'bg-red-50 text-red-800 border-red-300 hover:bg-red-100'
                                      : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                            }`}
                          >
                            {booking.status || 'Pending'}
                          </span>
                        </div>
                        
                        <div className="text-sm font-medium text-gray-900 truncate mb-1">
                          {booking.name || 'N/A'}
                        </div>
                        
                        <div className="text-xs text-gray-500 mb-1 flex items-center">
                          <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {booking.phone || 'N/A'}
                        </div>
                        
                        <div className="text-xs text-gray-500 mb-1 flex items-center">
                          <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {booking.email || 'N/A'}
                        </div>
                        
                        <div className="text-xs text-gray-500 mb-1 flex items-center">
                          <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div className="truncate">{booking.address || 'N/A'}</div>
                        </div>
                        
                        <div className="text-xs text-gray-500 mb-1 flex items-center">
                          <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <div>{formatDate(booking.date)} {formatTime(booking.time)}</div>
                        </div>
                        
                        <div className="text-xs text-gray-500 mb-1">
                          <strong>Service:</strong> {booking.service || 'N/A'}
                        </div>
                        
                        <div className="text-xs text-gray-500 mb-2">
                          <strong>Notes:</strong> {booking.notes || 'N/A'}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-1 ml-2">
                        <button
                          onClick={() => copyBookingData(booking)}
                          className="inline-flex items-center px-2 py-1 border border-transparent text-[10px] leading-3 font-medium rounded text-white bg-gradient-to-r from-[#0A5A3B] to-[#084830] hover:from-[#084830] hover:to-[#063624] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A5A3B] transition-all duration-200 shadow-sm hover:shadow-md"
                          title="Copy booking data"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteBooking(booking.id)}
                          className="inline-flex items-center px-2 py-1 border border-transparent text-[10px] leading-3 font-medium rounded text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-sm hover:shadow-md"
                          title="Delete booking"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredBookings.length > 4 && (
                  <div className="p-3 text-center">
                    <button
                      onClick={() => {
                        const button = document.getElementById('show-more-btn');
                        if (button) {
                          const expandedCards = document.querySelectorAll('.expanded-booking-card');
                          expandedCards.forEach(card => {
                            (card as HTMLElement).style.display = (card as HTMLElement).style.display === 'none' ? 'block' : 'none';
                          });
                          button.textContent = button.textContent?.includes('Show All') ? 'Show Less' : `Show All (${filteredBookings.length})`;
                        }
                      }}
                      id="show-more-btn"
                      className="text-sm font-medium text-[#0A5A3B] hover:text-[#084830] underline"
                    >
                      Show All ({filteredBookings.length})
                    </button>
                  </div>
                )}
                
                {filteredBookings.length > 4 && (
                  <>
                    {filteredBookings.slice(4).map((booking, index) => (
                      <div key={booking.id || `booking-${index + 4}`} className="expanded-booking-card border-b border-gray-100 last:border-b-0 p-3 hover:bg-gray-50 transition-colors duration-150" style={{display: 'none'}}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <div className="font-mono bg-gray-100 px-2 py-1 rounded text-xs mb-1">
                                {booking.id?.substring(0, 6) || `BK${index + 4}`}
                              </div>
                              <span
                                onClick={() => cycleBookingStatus(booking.id, booking.status)}
                                className={`cursor-pointer text-[9px] font-semibold rounded-full px-2 py-1 border whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                                  (booking.status || '').toLowerCase() === 'pending'
                                    ? 'bg-yellow-50 text-yellow-800 border-yellow-300 hover:bg-yellow-100'
                                    : (booking.status || '').toLowerCase() === 'confirmed'
                                      ? 'bg-blue-50 text-blue-800 border-blue-300 hover:bg-blue-100'
                                      : (booking.status || '').toLowerCase() === 'completed'
                                        ? 'bg-green-50 text-green-800 border-green-300 hover:bg-green-100'
                                        : (booking.status || '').toLowerCase() === 'cancelled'
                                          ? 'bg-red-50 text-red-800 border-red-300 hover:bg-red-100'
                                          : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                                }`}
                              >
                                {booking.status || 'Pending'}
                              </span>
                            </div>
                            
                            <div className="text-sm font-medium text-gray-900 truncate mb-1">
                              {booking.name || 'N/A'}
                            </div>
                            
                            <div className="text-xs text-gray-500 mb-1 flex items-center">
                              <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {booking.phone || 'N/A'}
                            </div>
                            
                            <div className="text-xs text-gray-500 mb-1 flex items-center">
                              <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {booking.email || 'N/A'}
                            </div>
                            
                            <div className="text-xs text-gray-500 mb-1 flex items-center">
                              <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <div className="truncate">{booking.address || 'N/A'}</div>
                            </div>
                            
                            <div className="text-xs text-gray-500 mb-1 flex items-center">
                              <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <div>{formatDate(booking.date)} {formatTime(booking.time)}</div>
                            </div>
                            
                            <div className="text-xs text-gray-500 mb-1">
                              <strong>Service:</strong> {booking.service || 'N/A'}
                            </div>
                            
                            <div className="text-xs text-gray-500 mb-2">
                              <strong>Notes:</strong> {booking.notes || 'N/A'}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-1 ml-2">
                            <button
                              onClick={() => copyBookingData(booking)}
                              className="inline-flex items-center px-2 py-1 border border-transparent text-[10px] leading-3 font-medium rounded text-white bg-gradient-to-r from-[#0A5A3B] to-[#084830] hover:from-[#084830] hover:to-[#063624] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A5A3B] transition-all duration-200 shadow-sm hover:shadow-md"
                              title="Copy booking data"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => deleteBooking(booking.id)}
                              className="inline-flex items-center px-2 py-1 border border-transparent text-[10px] leading-3 font-medium rounded text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-sm hover:shadow-md"
                              title="Delete booking"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            ) : (
              <div className="p-8 text-center text-sm text-gray-500">
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="font-medium">No bookings found</p>
                  <p className="text-gray-400">Try adjusting your filters</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Desktop Table View - Hidden on small screens */}
          <div className="hidden md:block overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-[#0A5A3B] to-[#084830]">
                    <tr>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[60px]">
                        ID
                      </th>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[80px]">
                        Customer
                      </th>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[70px] hidden sm:table-cell">
                        Contact
                      </th>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[80px] hidden md:table-cell">
                        Address
                      </th>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[100px] hidden lg:table-cell">
                        Service
                      </th>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[80px]">
                        Date & Time
                      </th>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[70px]">
                        Status
                      </th>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[70px] hidden md:table-cell">
                        Notes
                      </th>
                      <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider min-w-[80px]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {filteredBookings.length > 0 ? (
                      filteredBookings.map((booking, index) => (
                        <tr key={booking.id || `booking-${index}`} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="px-2 py-2 whitespace-nowrap text-xs text-gray-500">
                            <div className="font-mono bg-gray-100 px-1 py-0.5 rounded text-[10px]">{booking.id?.substring(0, 4) || `B${index}`}</div>
                          </td>
                          <td className="px-2 py-2">
                            <div className="text-xs font-medium text-gray-900 truncate max-w-[60px] xs:max-w-[70px] sm:max-w-[90px]">{booking.name || 'N/A'}</div>
                            <div className="text-[9px] text-gray-500 truncate max-w-[60px] xs:max-w-[70px] sm:max-w-[90px] md:hidden">{booking.email || 'N/A'}</div>
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-xs text-gray-500 hidden sm:table-cell">
                            <div className="flex items-center">
                              <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {booking.phone || 'N/A'}
                            </div>
                            <div className="text-[9px] text-gray-500 sm:hidden">{booking.email || 'N/A'}</div>
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-xs text-gray-500 hidden md:table-cell">
                            <div className="flex items-center">
                              <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <div className="truncate max-w-[60px] xs:max-w-[70px] md:max-w-[80px]">{booking.address || 'N/A'}</div>
                            </div>
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-xs text-gray-900 hidden lg:table-cell">
                            <div className="truncate max-w-[60px] xs:max-w-[70px] lg:max-w-[80px]">{booking.service || 'N/A'}</div>
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-xs text-gray-500">
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div className="truncate max-w-[50px] xs:max-w-[60px]">{formatDate(booking.date)}</div>
                              </div>
                              <div className="flex items-center text-[9px] mt-0.5">
                                <svg className="w-2.5 h-2.5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {formatTime(booking.time)}
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap">
                            <span
                              onClick={() => cycleBookingStatus(booking.id, booking.status)}
                              className={`cursor-pointer text-[8px] font-semibold rounded-full px-1 py-0.5 border whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                                (booking.status || '').toLowerCase() === 'pending'
                                  ? 'bg-yellow-50 text-yellow-800 border-yellow-300 hover:bg-yellow-100'
                                  : (booking.status || '').toLowerCase() === 'confirmed'
                                    ? 'bg-blue-50 text-blue-800 border-blue-300 hover:bg-blue-100'
                                    : (booking.status || '').toLowerCase() === 'completed'
                                      ? 'bg-green-50 text-green-800 border-green-300 hover:bg-green-100'
                                      : (booking.status || '').toLowerCase() === 'cancelled'
                                        ? 'bg-red-50 text-red-800 border-red-300 hover:bg-red-100'
                                        : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                              }`}
                            >
                              {booking.status || 'P'}
                            </span>
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-xs text-gray-500 hidden md:table-cell">
                            <div className="flex items-start">
                              <svg className="w-3 h-3 text-gray-400 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                              </svg>
                              <div className="truncate max-w-[50px] xs:max-w-[60px] md:max-w-[70px]">{booking.notes || 'N/A'}</div>
                            </div>
                          </td>
                          <td className="px-2 py-2 whitespace-nowrap text-xs font-medium">
                            <div className="flex gap-1">
                              <button
                                onClick={() => copyBookingData(booking)}
                                className="inline-flex items-center px-1 py-0.5 border border-transparent text-[9px] leading-3 font-medium rounded text-white bg-gradient-to-r from-[#0A5A3B] to-[#084830] hover:from-[#084830] hover:to-[#063624] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A5A3B] transition-all duration-200 shadow-sm hover:shadow-md"
                                title="Copy booking data"
                              >
                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                              <button
                                onClick={() => deleteBooking(booking.id)}
                                className="inline-flex items-center px-1 py-0.5 border border-transparent text-[9px] leading-3 font-medium rounded text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-sm hover:shadow-md"
                                title="Delete booking"
                              >
                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={9} className="px-4 py-8 text-center text-sm text-gray-500">
                          <div className="flex flex-col items-center">
                            <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="font-medium">No bookings found</p>
                            <p className="text-gray-400">Try adjusting your filters</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border-l-4 border-[#0A5A3B] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#0A5A3B]/10 mr-4">
                <svg className="w-6 h-6 text-[#0A5A3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-500">Total Bookings</h3>
                <p className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-500/10 mr-4">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-500">Pending</h3>
                <p className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">{stats.pending}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-500/10 mr-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-500">Confirmed</h3>
                <p className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">{stats.confirmed}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-500/10 mr-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-500">Completed</h3>
                <p className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-500/10 mr-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-500">Cancelled</h3>
                <p className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">{stats.cancelled}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="relative">
          {/* Decorative element */}
          <div className="absolute -top-4 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          <div className="absolute -top-4 right-0 w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Service Distribution Bar Chart */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="p-2 rounded-lg bg-blue-50 mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-900 font-semibold">Service Distribution</span>
            </h3>
            {serviceData.length > 0 ? (
              <div className="h-72 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={serviceData} layout="vertical" margin={{ top: 20, right: 50, left: 30, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" horizontal={false} />
                    <XAxis 
                      type="number" 
                      stroke="#666" 
                      fontSize={12}
                      tick={{ fill: '#4B5563' }}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      stroke="#666" 
                      fontSize={0}
                      tick={{ fill: 'transparent', fontSize: 0 }}
                      width={30}
                      hide={true}
                      interval={0}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #0A5A3B', 
                        borderRadius: '8px', 
                        fontSize: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                      formatter={(value, name) => [`${value} bookings`, name]}
                      cursor={{ fill: 'transparent' }}
                    />
                    <Bar 
                      dataKey="value" 
                      name="Bookings" 
                      radius={[0, 4, 4, 0]}
                    >
                      {serviceData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={[
                            '#0A5A3B', '#4F46E5', '#10B981', '#EF4444', '#F59E0B',
                            '#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#64748B',
                            '#0EA5E9', '#84CC16', '#F43F5E', '#A855F7', '#14B8A6'
                          ][index % 15]} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-gray-500">No data available</p>
              </div>
            )}
          </div>
                  
          {/* Service Distribution Doughnut Chart */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="p-2 rounded-lg bg-blue-50 mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.029 9.001 0 0120.488 9z" />
                </svg>
              </div>
              <span className="text-gray-900 font-semibold">Service Distribution (Doughnut)</span>
            </h3>
            {serviceData.length > 0 ? (
              <div className="h-72 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={2}
                      dataKey="value"
                      label={false}
                    >
                      {serviceData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={[
                            '#0A5A3B', '#4F46E5', '#10B981', '#EF4444', '#F59E0B',
                            '#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#64748B',
                            '#0EA5E9', '#84CC16', '#F43F5E', '#A855F7', '#14B8A6'
                          ][index % 15]} 
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #0A5A3B', 
                        borderRadius: '8px', 
                        fontSize: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                      formatter={(value, name, props) => [`${value} bookings`, name]}
                      cursor={{ fill: 'transparent' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-gray-500">No data available</p>
              </div>
            )}
          </div>
        </div>
      </div>
        
        {/* Additional Charts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Booking Status Distribution */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Booking Status</h3>
            <div className="h-56 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: 'Pending', value: stats.pending, color: '#F59E0B' },
                  { name: 'Confirmed', value: stats.confirmed, color: '#3B82F6' },
                  { name: 'Completed', value: stats.completed, color: '#10B981' },
                  { name: 'Cancelled', value: stats.cancelled, color: '#EF4444' }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#666" 
                    fontSize={12}
                    tick={{ fontSize: 11, fill: '#4B5563' }}
                  />
                  <YAxis 
                    stroke="#666" 
                    width={40}
                    tick={{ fontSize: 11, fill: '#4B5563' }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #0A5A3B', borderRadius: '8px', fontSize: '12px' }}
                    itemStyle={{ color: '#2582A1' }}
                    formatter={(value) => [`${value} bookings`, 'Bookings']}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {[
                      { name: 'Pending', value: stats.pending, color: '#F59E0B' },
                      { name: 'Confirmed', value: stats.confirmed, color: '#2582A1' },
                      { name: 'Completed', value: stats.completed, color: '#3A9BC1' },
                      { name: 'Cancelled', value: stats.cancelled, color: '#EF4444' }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Monthly Booking Trend */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Monthly Trend</h3>
            <div className="h-56 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData.slice(-30)} margin={{ top: 25, right: 35, left: 25, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="date" 
                    fontSize={9} 
                    stroke="#666"
                    tick={{ fontSize: 8, fill: '#4B5563' }}
                    interval={Math.max(0, Math.floor(Math.min(30, dailyData.length) / 8))}
                    angle={-45}
                    textAnchor="end"
                    height={40}
                  />
                  <YAxis 
                    stroke="#666" 
                    width={40}
                    tick={{ fontSize: 9, fill: '#4B5563' }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #0A5A3B', borderRadius: '8px', fontSize: '12px' }}
                    itemStyle={{ color: '#2582A1' }}
                    formatter={(value) => [`${value} bookings`, 'Bookings']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="bookings" 
                    name="Daily Bookings" 
                    stroke="#8B5CF6" 
                    strokeWidth={2} 
                    activeDot={{ r: 4, fill: '#8B5CF6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Service Performance Radar */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Top Services</h3>
            <div className="space-y-2 sm:space-y-3">
              {serviceData
                .sort((a, b) => b.value - a.value)
                .slice(0, 5)
                .map((service, index) => (
                  <div key={service.name} className="flex items-center justify-between">
                    <div className="flex items-center min-w-0 flex-1">
                      <div 
                        className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 flex-shrink-0" 
                        style={{ 
                          backgroundColor: [
                            '#0A5A3B', '#4F46E5', '#10B981', '#EF4444', '#F59E0B'
                          ][index % 5] 
                        }}
                      ></div>
                      <span className="text-xs sm:text-sm text-gray-700 truncate">{service.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 ml-2">{service.value}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        
        {/* Area Chart - Performance Overview */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Performance Overview</h3>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyData.slice(-60)} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="date" 
                  fontSize={9} 
                  stroke="#666"
                  tick={{ fontSize: 8, fill: '#4B5563' }}
                  interval={Math.max(0, Math.floor(Math.min(60, dailyData.length) / 10))}
                  angle={-45}
                  textAnchor="end"
                  height={40}
                />
                <YAxis 
                  stroke="#666" 
                  width={40}
                  tick={{ fontSize: 9, fill: '#4B5563' }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #0A5A3B', borderRadius: '8px', fontSize: '12px' }}
                  itemStyle={{ color: '#2582A1' }}
                  formatter={(value) => [`${value} bookings`, 'Bookings']}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="bookings" 
                  name="Bookings" 
                  stroke="#1E6B82" 
                  fill="#1E6B82" 
                  fillOpacity={0.4}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Daily Bookings Trend */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Daily Bookings Trend</h3>
          {dailyData.length > 0 ? (
            <div className="h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData} margin={{ top: 25, right: 35, left: 25, bottom: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="date" 
                    fontSize={10} 
                    stroke="#666"
                    tick={{ fontSize: 9, fill: '#4B5563' }}
                    interval={Math.max(0, Math.floor(dailyData.length / 10))}
                    angle={-45}
                    textAnchor="end"
                    height={50}
                  />
                  <YAxis 
                    stroke="#666" 
                    width={45}
                    tick={{ fontSize: 10, fill: '#4B5563' }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #0A5A3B', borderRadius: '8px', fontSize: '12px' }}
                    itemStyle={{ color: '#2582A1' }}
                    formatter={(value) => [`${value} bookings`, 'Bookings']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="bookings" 
                    name="Bookings" 
                    stroke="#2582A1" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: '#2582A1' }} 
                    activeDot={{ r: 6, fill: '#1E6B82' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-6 sm:py-8">No data available</p>
          )}
        </div>
        
        {/* New Additional Charts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Weekly Booking Pattern */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Weekly Booking Pattern</h3>
            <div className="h-56 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { day: 'Mon', bookings: getBookingsForDay('Monday', bookings) },
                  { day: 'Tue', bookings: getBookingsForDay('Tuesday', bookings) },
                  { day: 'Wed', bookings: getBookingsForDay('Wednesday', bookings) },
                  { day: 'Thu', bookings: getBookingsForDay('Thursday', bookings) },
                  { day: 'Fri', bookings: getBookingsForDay('Friday', bookings) },
                  { day: 'Sat', bookings: getBookingsForDay('Saturday', bookings) },
                  { day: 'Sun', bookings: getBookingsForDay('Sunday', bookings) }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#666" 
                    fontSize={12}
                    tick={{ fontSize: 11, fill: '#4B5563' }}
                  />
                  <YAxis 
                    stroke="#666" 
                    width={40}
                    tick={{ fontSize: 11, fill: '#4B5563' }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #0A5A3B', borderRadius: '8px', fontSize: '12px' }}
                    itemStyle={{ color: '#2582A1' }}
                    formatter={(value) => [`${value} bookings`, 'Bookings']}
                  />
                  <Bar dataKey="bookings" fill="#F97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Time Slot Popularity */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="p-2 rounded-lg bg-blue-50 mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-900 font-semibold">Time Slot Popularity</span>
            </h3>
            <div className="h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { time: '9AM-12PM', bookings: bookings.filter(b => {
                      const hour = b.time ? parseInt(b.time.split(':')[0]) : 0;
                      return hour >= 9 && hour < 12;
                    }).length },
                    { time: '12PM-4PM', bookings: bookings.filter(b => {
                      const hour = b.time ? parseInt(b.time.split(':')[0]) : 0;
                      return hour >= 12 && hour < 16;
                    }).length },
                    { time: '4PM-7PM', bookings: bookings.filter(b => {
                      const hour = b.time ? parseInt(b.time.split(':')[0]) : 0;
                      return hour >= 16 && hour < 19;
                    }).length }
                  ]}
                  layout="horizontal"
                  margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis type="number" stroke="#666" />
                  <YAxis 
                    dataKey="time" 
                    type="category" 
                    width={90} 
                    stroke="#666" 
                    tick={{ fontSize: 12 }}
                    interval={0}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #0A5A3B', 
                      borderRadius: '8px', 
                      fontSize: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value, name) => [`${value} bookings`, 'Time Slot']}
                    cursor={{ fill: 'transparent' }}
                  />
                  <Bar dataKey="bookings" radius={[0, 4, 4, 0]}>
                    {[
                      { time: 'Morning (9AM-12PM)', bookings: 0, color: '#0A5A3B' },
                      { time: 'Afternoon (12PM-4PM)', bookings: 0, color: '#34D399' },
                      { time: 'Evening (4PM-7PM)', bookings: 0, color: '#FBBF24' }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={[
                        '#0A5A3B', '#34D399', '#FBBF24'
                      ][index % 3]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;