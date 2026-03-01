import { useState } from "react";
import { Car, Sparkles, Shield, Droplets, Wrench, Star, Clock, Heart, Zap, CheckCircle, Award, Compass, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar"
import mobileValeting from "@/assets/mobileValeting.jpg";
import paintCorrection from "@/assets/paintCorrection.jpg"
import hero from "@/assets/hero1.jpg"
import Marquee from "@/components/MarqueeSection.jsx"
import ceramicCoating from "@/assets/ceramicCoating.jpg"
import engineDetailing from "@/assets/engineDetailing.jpg"
import hero1 from "@/assets/hero.jpeg"

// Data remains the same, but with an added icon for new sections
const services = [
  {
    icon: Car,
    title: "Mobile Valeting",
    desc: "Convenient fully equipped mobile service at your location for a fast, quality clean.",
    image: mobileValeting
  },
  {
    icon: Sparkles,
    title: "Paint Correction",
    desc: "Multi-stage polishing to remove swirl marks, oxidation, and scratches for a true showroom finish.",
    image: paintCorrection,
  },
  { icon: Shield, title: "Ceramic Coating", desc: "Long-lasting paint protection with accredited, professional-grade SiO2 and SiC products.", image: ceramicCoating },
  { icon: Droplets, title: "Paint Protection Film (PPF)", desc: "Invisible, self-healing film to guard against stone chips, scratches, and abrasions.", image: paintCorrection },
  { icon: Wrench, title: "Engine Bay Detailing", desc: "Thorough, safe degreasing and cleaning for a spotless and well-maintained engine bay.", image: engineDetailing },
  { icon: Star, title: "Interior Deep Cleaning", desc: "Vapor cleaning, extraction, and deep sanitisation for carpets, seats, and all interior surfaces.", image: hero1 },
];

const features = [
  { icon: Shield, title: "Accredited Ceramic Coating", desc: "Certified and trained to apply industry-leading ceramic protection systems with warranted results." },
  { icon: Droplets, title: "Advanced Paint Protection", desc: "Comprehensive defense against UV rays, acid rain, dirt, and industrial fallout for total peace of mind." },
  { icon: Car, title: "Full Mobile & Unit Services", desc: "Flexibility with fully equipped vans or secure unit-based solutions for complex paint jobs." },
  { icon: Clock, title: "Detail-Oriented & Reliable", desc: "Punctual service with an unwavering focus on meticulous, high-quality results, every time." },
];

const testimonials = [
  { name: "Jonathan D.", role: "Collector Car Owner", message: "Absolutely amazing service! The paint correction was flawless, and the ceramic coat is stunning. Highly recommended for premium vehicles." },
  { name: "Sarah K.", role: "Busy Professional", message: "Professional and incredibly reliable. The mobile valeting service is a massive time-saver, and my car looks and smells brand new every time." },
  { name: "Michael J.", role: "Fleet Manager", message: "SRV Detailing handles our small fleet. Their consistency and attention to detail are unmatched. Great value for the exceptional quality provided." },
];

const processSteps = [
  { icon: Compass, title: "1. Consultation & Assessment", desc: "We discuss your needs and conduct a thorough 30-point inspection of your vehicle's condition." },
  { icon: Zap, title: "2. Preparation & Decontamination", desc: "Safe, multi-stage wash and full chemical and mechanical decontamination of all exterior surfaces." },
  { icon: Wrench, title: "3. Correction & Enhancement", desc: "Multi-stage machine polishing to safely remove defects and maximize paint clarity and gloss." },
  { icon: Shield, title: "4. Protection Application", desc: "Application of chosen protection: ceramic coating, sealant, or wax, ensuring maximum durability." },
  { icon: Star, title: "5. Final Detail & Inspection", desc: "Detailed interior valeting, final wipe-down, and a joint final quality check with the client." },
];

const pricingTiers = [
  { title: "Standard Valet", price: "Starting at £45", emphasis: false, features: ["Exterior Wash & Dry", "Vacuum Carpets & Seats", "Dash Wipe Down", "Tire Shine Application"] },
  { title: "Full Enhancement Detail", price: "Starting at £250", emphasis: false, features: ["Standard Valet Features", "Single-Stage Machine Polish", "Paint Sealant Application", "Deep Interior Clean"] },
  { title: "Ceramic Protection Package", price: "Contact for Quote", emphasis: true, features: ["Full Enhancement Detail Features", "Full Paint Correction", "Accredited Ceramic Coating (3-5 Year Warranty)", "Wheels-Off Coating"] },
];

const faqs = [
  { question: "What is the difference between valeting and detailing?", answer: "Valeting is generally a deep clean, focusing on presentation. Detailing is a more meticulous, restorative process that involves paint correction and long-term protection like ceramic coating, aimed at restoring and preserving the finish." },
  { question: "How long does a ceramic coating last?", answer: "Our professional, accredited ceramic coatings typically last between 3 to 7 years, depending on the product, preparation, and maintenance. We provide detailed care instructions upon completion." },
  { question: "Can you remove deep scratches?", answer: "We can safely remove light to moderate scratches (those confined to the clear coat) with paint correction. Deep scratches (down to the primer/metal) may require professional bodywork, but we can advise on the best solution." },
];

// Re-using the primary color concept in the CSS classes (assuming 'primary' is a Tailwind color)
const PRIMARY_COLOR_CLASSES = "text-primary border-primary";


export default function About() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been sent successfully! We will be in touch soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />

      {/* Hero Section - Elevated and Elegant */}
      <section className="relative min-h-screen flex items-center bg-gray-900">
        <img src={(hero as any).src || hero} alt="Professional car detailing" className="absolute inset-0 w-full h-full object-cover opacity-60 transition duration-1000 ease-in-out hover:opacity-70" />
        <div className="relative container mx-auto px-8 py-24 text-center text-white z-10">
          <span className="animate-pulse inline-block bg-primary/20 text-primary border border-primary px-6 py-2 rounded-full font-medium mb-6 text-sm uppercase tracking-widest">Est. 2003 - 22 Years of Master Craftsmanship</span>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            The Pinnacle of Mobile <span className="text-primary block lg:inline-block transition duration-500 ease-in-out hover:text-white hover:bg-primary/50 p-1 rounded-lg">Car Detailing</span> & Protection
          </h1>
          <p className="max-w-3xl mx-auto text-xl mb-10 font-light opacity-90">
            As accredited detailing specialists, we deliver unparalleled paint correction, ceramic coating, and bespoke valeting services, combining 22 years of expertise with state-of-the-art technology.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-2xl hover:bg-primary/80 transition transform hover:scale-105 duration-300">Book Your Detail</a>
            <a href="#services" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition duration-300 hover:border-primary">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Features Section - Sophisticated Icons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Why Entrust Your Vehicle to <span className="text-primary">SRV Detailing</span></h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary/50 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
                <Icon className={`mx-auto ${PRIMARY_COLOR_CLASSES} w-12 h-12 mb-5 animate-bounce-slow`} />
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-gray-600 font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* About Us: Our Detailing Philosophy (New Elegant Text Section) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className={`inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4`}>Our Foundation</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Mastery Built on <span className="text-primary">Passion and Precision</span></h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At SRV Detailing, our philosophy goes beyond mere cleaning; it is a commitment to the preservation and enhancement of automotive aesthetics. With over two decades of dedicated service, we treat every vehicle—from daily drivers to high-end classics—with the respect and meticulous care it deserves.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed border-l-4 border-primary pl-4 italic bg-primary/5 p-4 rounded-lg">
              "Excellence is not an act, but a habit. We apply this principle to every panel, every stitch, and every protective layer we apply." - Aristotle (A sentiment we adopt)
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-800"><CheckCircle className={`w-5 h-5 mr-3 text-primary transition duration-300 hover:scale-110`} /> **Accredited Applicators** for Premium Coatings</li>
              <li className="flex items-center text-gray-800"><CheckCircle className={`w-5 h-5 mr-3 text-primary transition duration-300 hover:scale-110`} /> Commitment to **Safe, pH-Neutral** Detailing Products</li>
              <li className="flex items-center text-gray-800"><CheckCircle className={`w-5 h-5 mr-3 text-primary transition duration-300 hover:scale-110`} /> Full Insurance and **Reliability Guaranteed**</li>
            </ul>
          </div>
          <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-primary/50 hover:scale-[1.01]">
            {/* Image section for visual break without changing main service structure */}
            <img src={(hero1 as any).src || hero1} alt="Car interior detail" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Services Section - Detailed Card Design */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our <span className="text-primary">Core Services</span> Portfolio</h2>
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, desc, icon: Icon, image }) => (
              <div key={title} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/20 transition-transform duration-500 hover:scale-[1.02]">
                <div className="h-56 overflow-hidden">
                  <img src={(image as any).src || image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                </div>
                <div className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-md`}>
                    <Icon className={`text-primary w-9 h-9 animate-pulse-slow`} />
                  </div>
                  <h3 className="font-extrabold text-2xl mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Banner (New Section) */}
      <section className="py-20 bg-primary/90">
        <div className="container mx-auto px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready for the Showroom Finish?</h2>
            <p className="text-xl font-light mb-8">
                Don't settle for less. Contact us today for a bespoke consultation and free quote on your vehicle's detailing needs.
            </p>
            <a href="#contact" className="inline-block px-10 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition transform hover:scale-105 duration-300">
                Request a Free Quote
            </a>
        </div>
      </section>

      {/* Our Workflow/Process Section (Enhanced with Image Tag) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our <span className="text-primary">Meticulous</span> Detailing Process</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
            A step-by-step commitment to excellence, ensuring your vehicle receives a comprehensive, professional treatment from start to spectacular finish.
          </p>
          
          <div className="grid gap-8 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative group">
                <div className={`flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-lg transition duration-300 group-hover:bg-primary/10 border-t-4 group-hover:border-primary`}>
                  <div className={`w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-2xl font-bold border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{step.desc}</p>
                </div>
                {/* Connector line for large screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-full h-1 bg-gray-200 transform -translate-x-1/2 -translate-y-1/2 -z-10 group-last:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview Section (Enhanced Styling for Tiers) */}
      <section className="py-24 bg-gray-100" id="pricing">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Transparent <span className="text-primary">Pricing</span> Overview</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
            We offer tiered services to match every need, from a quick refresh to our signature long-term ceramic protection packages.
          </p>
          <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className={`bg-white rounded-3xl p-10 shadow-2xl flex flex-col transition duration-500 hover:shadow-3xl hover:-translate-y-1 ${tier.emphasis ? 'border-4 border-primary/70 transform scale-105 bg-primary/5' : 'border border-gray-200'}`}>
                <h3 className={`text-3xl font-extrabold mb-3 ${tier.emphasis ? 'text-primary' : 'text-gray-900'}`}>{tier.title}</h3>
                <p className={`text-5xl font-bold mb-6 ${PRIMARY_COLOR_CLASSES}`}>{tier.price}</p>
                <ul className="text-left space-y-4 flex-grow mb-10">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700 font-medium">
                      <CheckCircle className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${PRIMARY_COLOR_CLASSES}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-auto px-8 py-3 rounded-full font-bold text-lg transition duration-300 shadow-lg ${tier.emphasis ? 'bg-primary text-white hover:bg-primary/90' : 'border-2 border-gray-400 text-gray-800 hover:bg-gray-200'}`}>
                  {tier.emphasis ? 'Secure Your Coating' : 'View Details & Book'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced Look */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Voices of <span className="text-primary">Our Valued Clients</span></h2>
          <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map(({ name, role, message }) => (
              <div key={name} className="bg-gray-50 rounded-3xl p-8 shadow-xl border-t-4 border-primary/20 hover:shadow-2xl transition duration-300 hover:bg-primary/5">
                <div className="flex justify-center mb-3">
                    {/* Render 5 Star Icons */}
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 fill-yellow-500 text-yellow-500 inline-block mx-0.5`} />
                    ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-5">"{message}"</p>
                <h3 className="font-extrabold text-lg mb-1">{name}</h3>
                <p className={`text-sm ${PRIMARY_COLOR_CLASSES} font-medium`}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Enhanced Accordion Styling) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked <span className="text-primary">Questions</span></h2>
          <div className="space-y-6">
            {faqs.map(({ question, answer }, index) => (
              <details key={index} className="group bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer transition text-gray-900 hover:text-primary">
                  {question}
                  <svg className={`w-6 h-6 transform transition-transform duration-300 group-open:rotate-180 ${PRIMARY_COLOR_CLASSES}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100 text-gray-700 leading-relaxed font-light">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Form - Refined Look */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Let's Discuss Your <span className="text-primary">Detailing Needs</span></h2>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6 p-10 bg-gray-50 rounded-2xl shadow-2xl border-t-4 border-primary/50">
            <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-4 focus:ring-primary/50 transition duration-300" required />
            <input type="email" name="email" placeholder="Your Best Email Address" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-4 focus:ring-primary/50 transition duration-300" required />
            <textarea name="message" placeholder="Tell us about your vehicle (Make, Model, Year) and the services you are interested in..." value={formData.message} onChange={handleChange} rows={6} className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-4 focus:ring-primary/50 transition duration-300" required />
            <button type="submit" className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-xl hover:bg-primary/90 transition transform hover:scale-[1.01] duration-300">
              Send Service Inquiry
            </button>
          </form>
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
            <p className="flex items-center gap-3 text-gray-700 hover:text-primary transition duration-300">
              <Phone className="w-6 h-6 text-primary" /> <strong>Phone:</strong> <a href="tel:+447375759686" className="hover:underline">+44 7375 759686</a>
            </p>
            <p className="flex items-center gap-3 text-gray-700 hover:text-primary transition duration-300">
              <Mail className="w-6 h-6 text-primary" /> <strong>Email:</strong> <a href="mailto:srv_detailing@icloud.com" className="hover:underline">srv_detailing@icloud.com</a>
            </p>
            
          </div>
        </div>
      </section>

      {/* Footer - Comprehensive and Elegant */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-3xl font-extrabold mb-6 text-primary">SRV Detailing</h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-400 font-light">
            Your trusted partner for professional mobile and unit-based car valeting and detailing. Specialist in paint correction and accredited long-term ceramic coating application.
          </p>
          <div className="flex justify-center gap-6 flex-wrap mb-8 text-lg font-medium">
            <a href="#" className="hover:text-primary transition duration-300">Home</a>
            <a href="#services" className="hover:text-primary transition duration-300">Services</a>
            <a href="#pricing" className="hover:text-primary transition duration-300">Pricing</a>
            <a href="/listings" className="hover:text-primary transition duration-300">Listings</a>
            <a href="#contact" className="hover:text-primary transition duration-300">Contact</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} SRV Detailing. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">
              <a href="/privacy" className="hover:text-primary transition duration-300">Privacy Policy</a> | <a href="/terms" className="hover:text-primary transition duration-300">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
