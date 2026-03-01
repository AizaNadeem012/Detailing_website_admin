'use client';

import { motion } from "framer-motion";
import { Calendar, Clock, Car, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 mt-16" // <- updated margin-top
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Book Your Service
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              Schedule your professional car detailing or valeting service with our mobile team
            </p>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="lg:flex">
              
              {/* Form Section */}
              <div className="lg:w-2/3 p-5 lg:p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Complete Your Booking</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Fill out the form below and we'll contact you to confirm your appointment.
                </p>

                <div className="w-full">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfQ_psKKr32ImlSywvgWqqASJM-AReOWnmKzk7Wrr47TOD7nw/viewform?embedded=true"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-xl border border-gray-200 shadow-sm"
                    title="Booking Form"
                  >
                    Loading…
                  </iframe>
                </div>

                <div className="mt-2 text-xs text-gray-500">
                  <p>
                    Can't see the form? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQ_psKKr32ImlSywvgWqqASJM-AReOWnmKzk7Wrr47TOD7nw/viewform" target="_blank" rel="noopener noreferrer" className="text-[#0A5A3B] hover:underline">Open it in a new tab</a>
                  </p>
                </div>
              </div>

              {/* Info Sidebar */}
              <div className="lg:w-1/3 bg-gray-50 p-5 lg:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Service Info</h3>

                <div className="space-y-3 text-xs md:text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#0A5A3B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Areas</h4>
                      <p className="text-gray-600">Manchester, Stockport, Tameside & nearby</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#0A5A3B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Working Hours</h4>
                      <p className="text-gray-600">Mon-Sun: 8 AM - 8 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-[#0A5A3B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact</h4>
                      <p className="text-gray-600">+44 7375 759686</p>
                      <p className="text-gray-600">srv_detailing@icloud.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-[#0A5A3B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Popular Services</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                        <li>Full Valet (£60)</li>
                        <li>Mini Valet (£40)</li>
                        <li>Car Detailing (£120)</li>
                        <li>Ceramic Coating (£300)</li>
                        <li>Paint Correction (£250)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Customer Feedback</h4>
                  <div className="bg-white rounded-lg p-2 shadow-sm text-xs md:text-sm">
                    <p className="text-gray-600 italic">"Outstanding service! My car looks brand new. Highly recommend SRV Detailing."</p>
                    <p className="text-gray-900 font-medium mt-1">- Sarah M.</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}