'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { authenticateAdmin, authenticateAdminWithPasswordOnly, isAdminAuthenticated, setAdminAuthentication } from '@/lib/adminAuth';

const SendEmailPage = () => {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState<any[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState('');
  const [filterService, setFilterService] = useState('All Services');
  const [filterName, setFilterName] = useState('');
  const router = useRouter();

  // Check authentication on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isAdminAuthenticated()) {
        setIsAuthenticated(true);
        // Load bookings after authentication
        loadBookings();
      }
    }
  }, []);
  
  const loadBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/bookings');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch bookings: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setBookings(result.data);
        setFilteredBookings(result.data); // Set both original and filtered bookings
      } else {
        console.error('API responded with error:', result.message);
        setBookings([]);
        setFilteredBookings([]);
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
      setBookings([]);
      setFilteredBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Use the password-only authentication function since we don't have the username on this page
      const isAuthenticated = await authenticateAdminWithPasswordOnly(password);
      
      if (isAuthenticated) {
        setAdminAuthentication(true);
        setIsAuthenticated(true);
        setPassword('');
      } else {
        alert('Invalid password');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      alert('An error occurred during authentication. Please try again.');
    }
  };

  const handleLogout = () => {
    setAdminAuthentication(false);
    setIsAuthenticated(false);
    router.push('/admin/send-email');
  };

  const handleEmailClick = () => {
    // Open default email client with the email address and set sender to official email
    const senderEmail = 'srv_detailing@icloud.com';
    window.location.href = `mailto:${email}?from=${senderEmail}`;
  };

  const copyBookingData = (booking: any) => {
    const bookingData = JSON.stringify(booking, null, 2);
    navigator.clipboard.writeText(bookingData).then(() => {
      alert('Booking data copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy booking data: ', err);
      alert('Failed to copy booking data.');
    });
  };
  
  // Function to get unique services from bookings
  const getUniqueServices = () => {
    const services = new Set(bookings.map(booking => booking.service));
    return Array.from(services).filter(service => service) as string[];
  };
  
  // Function to apply filters
  const applyFilters = () => {
    let result = [...bookings];
    
    // Filter by date
    if (filterDate) {
      result = result.filter(booking => {
        if (!booking.date) return true;
        // Convert both dates to YYYY-MM-DD format for comparison
        const bookingDate = new Date(booking.date).toISOString().split('T')[0];
        const filterDateConverted = new Date(filterDate).toISOString().split('T')[0];
        return bookingDate === filterDateConverted;
      });
    }
    
    // Filter by service
    if (filterService && filterService !== 'All Services') {
      result = result.filter(booking => 
        booking.service && 
        booking.service.toLowerCase().includes(filterService.toLowerCase())
      );
    }
    
    // Filter by name
    if (filterName) {
      result = result.filter(booking => 
        booking.name && 
        booking.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }
    
    setFilteredBookings(result);
  };
  
  // Function to clear all filters
  const clearFilters = () => {
    setFilterDate('');
    setFilterService('All Services');
    setFilterName('');
    setFilteredBookings([...bookings]);
  };
  
  // Apply filters when filter values change
  useEffect(() => {
    applyFilters();
  }, [filterDate, filterService, filterName, bookings]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen mt-12 bg-gray-50 py-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center ">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">Enter password to access email feature</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
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
                placeholder="Enter admin password"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#0A5A3B] hover:bg-[#084830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A5A3B] transition-colors duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/admin')}
              className="text-sm text-gray-600 hover:text-gray-900 transition"
            >
              ← Back to Admin Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      <div className="py-4 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">Send Email</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Connect with your customers directly from their booking records. Select an email from recent bookings or enter a custom address.</p>
          </div>

          <div className="flex gap-3 justify-end mb-8">
            <a
              href="/admin/settings"
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl hover:from-green-600 hover:to-green-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-green-600/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold">Settings</span>
            </a>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl hover:from-red-600 hover:to-red-800 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-red-600/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="font-semibold">Logout</span>
            </button>
          </div>

          {/* Filters Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 mb-8 border border-gray-200/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Date</label>
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Service</label>
                <select
                  value={filterService}
                  onChange={(e) => setFilterService(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 text-base"
                >
                  <option value="All Services">All Services</option>
                  {getUniqueServices().map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search by Name</label>
                <input
                  type="text"
                  value={filterName}
                  onChange={(e) => setFilterName(e.target.value)}
                  placeholder="Search customer name..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 text-base"
                />
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="w-full py-3 px-6 bg-gradient-to-br from-gray-500 to-gray-700 text-white rounded-xl hover:from-gray-600 hover:to-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-gray-600/20"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 mb-10 border border-gray-200/50 backdrop-blur-sm">
            <div className="flex items-center mb-8 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mr-5 shadow-inner">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Recent Bookings</h2>
                <p className="text-gray-600 mt-1">Connect with customers from their recent bookings</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Service</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {loading ? (
                        <tr>
                          <td colSpan={5} className="px-4 py-6 text-center">
                            <div className="flex justify-center items-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                              <span className="ml-3 text-gray-600">Loading bookings...</span>
                            </div>
                          </td>
                        </tr>
                      ) : filteredBookings.length > 0 ? (
                        filteredBookings.map((booking, index) => (
                          <tr key={booking.id || `booking-${index}`} className="hover:bg-gray-50 transition-colors duration-150">
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{booking.name || 'N/A'}</div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm text-gray-500 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className="truncate max-w-xs">{booking.email || 'N/A'}</div>
                              </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 truncate max-w-xs">
                                  {booking.service || 'N/A'}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                              {booking.date ? new Date(booking.date).toLocaleDateString('en-GB') : 'N/A'}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                              <div className="flex flex-wrap gap-2">
                                <button
                                  onClick={() => {
                                    setEmail(booking.email);
                                    // Scroll to the email form
                                    document.getElementById('email-form-section')?.scrollIntoView({ behavior: 'smooth' });
                                  }}
                                  className="inline-flex items-center px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                                >
                                  Use
                                </button>
                                <button
                                  onClick={() => {
                                    const senderEmail = 'srv_detailing@icloud.com';
                                    window.location.href = `mailto:${booking.email}?from=${senderEmail}`;
                                  }}
                                  className="inline-flex items-center px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                >
                                  Send
                                </button>
                                <button
                                  onClick={() => copyBookingData(booking)}
                                  className="inline-flex items-center px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                                >
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                  Copy
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-4 py-6 text-center">
                            <div className="flex flex-col items-center">
                              <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <p className="text-gray-600">No bookings found</p>
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

          <div id="email-form-section" className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-10 mb-10 border border-gray-200/50 backdrop-blur-sm">
            <div className="flex items-center mb-8 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mr-5 shadow-inner">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Compose Email</h2>
                <p className="text-gray-600 mt-1">Enter an email address to send a message</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-4">
                  Recipient Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-14 pr-4 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 text-lg font-medium shadow-sm"
                    placeholder="Enter recipient email address"
                  />
                </div>
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={handleEmailClick}
                  disabled={!email}
                  className={`w-full py-5 px-8 rounded-2xl text-white font-bold transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                    email 
                      ? 'bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 border border-green-600/30' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Open Email Client
                  </div>
                </button>
              </div>
            </div>
            
            <div className="mt-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50 shadow-inner">
              <div className="flex items-start">
                <div className="mr-5 mt-1 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">How it works</h3>
                  <ul className="text-blue-800 space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-bold text-center flex items-center justify-center shadow-md">
                          1
                        </div>
                      </div>
                      <span className="text-lg leading-relaxed">Select a customer from recent bookings or enter an email address manually</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-bold text-center flex items-center justify-center shadow-md">
                          2
                        </div>
                      </div>
                      <span className="text-lg leading-relaxed">Click "Open Email Client" to launch your default email application</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-bold text-center flex items-center justify-center shadow-md">
                          3
                        </div>
                      </div>
                      <span className="text-lg leading-relaxed">Compose and send your email directly from your email client</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmailPage;