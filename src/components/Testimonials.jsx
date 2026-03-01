import React from "react";
import { Star, Quote } from "lucide-react";

/* ---------------- TESTIMONIALS DATA ---------------- */
const testimonials = [
  {
    name: "John Doe",
    role: "Car Enthusiast",
    company: "AutoWorld",
    rating: 5,
    comment:
      "Absolutely amazing service! My car has never looked this good. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Business Owner",
    company: "Tech Solutions",
    rating: 5,
    comment:
      "Professional and reliable. The mobile valeting service saved me so much time.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Car Collector",
    company: "Luxury Cars",
    rating: 4,
    comment:
      "Great paint correction and ceramic coating. My car shines like new!",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

/* ---------------- REUSABLE TESTIMONIAL CARD ---------------- */
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gray-800 border-2 border-green-500 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
    {/* Quotation */}
    <div className="text-green-500 mb-3">
      <Quote className="w-8 h-8" />
    </div>

    {/* Comment */}
    <p className="text-gray-300 text-sm md:text-base mb-4 flex-1">{testimonial.comment}</p>

    {/* Rating */}
    <div className="flex mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-green-500" />
      ))}
    </div>

    {/* User Info */}
    <div className="flex items-center gap-3 mt-auto">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-green-500"
      />
      <div>
        <h4 className="text-green-500 font-semibold">{testimonial.name}</h4>
        <span className="text-gray-400 text-sm">
          {testimonial.role} @ {testimonial.company}
        </span>
      </div>
    </div>
  </div>
);

/* ---------------- MAIN TESTIMONIALS COMPONENT ---------------- */
export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 text-center">
        {/* Top Label */}
        <p className="text-gray-400 uppercase tracking-widest mb-2">Testimonials</p>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-green-500 mb-4">
          Voices of 
Professional Mobile
Car Detailing
& Valeting Services
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Our clients trust us for top-notch service, and here’s what they have to say about their experience.
        </p>

        {/* Client Avatars Row */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-green-500 mb-2"
              />
              <h4 className="text-green-500 font-semibold text-sm">{t.name}</h4>
              <span className="text-gray-400 text-xs">{t.role}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
