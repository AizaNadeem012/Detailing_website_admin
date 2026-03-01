import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import Service from "@/components/Services.jsx";
import FeaturesSection from "@/components/FeaturesSection";
import MarqueeSection from "@/components/MarqueeSection";
import Testimonials from "@/components/Testimonials";

// Lucide Icons for use in inline sections
import { Award, Compass, Zap, Wrench, Shield, Star, DollarSign, CheckCircle, Heart, Lock, Handshake, Calendar, UserCheck, Layers, Feather, Car, Aperture, Clock } from "lucide-react";

// Assume 'primary' is your Tailwind CSS theme color.
const PRIMARY_COLOR_CLASSES = "text-primary border-primary";


// --- 1. Inline Component: About Us / Detailing Philosophy (Existing) ---
const AboutUsSection = () => (
  <section className="py-24 bg-white" id="about">
    <div className="container mx-auto px-8 max-w-6xl">
      <div className="text-center mb-16">
        <span className={`inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4`}>
          Our Foundation
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          22 Years of <span className="text-primary">Mastery and Precision</span> Detailing
        </h2>
      </div>
      <div className="lg:flex lg:gap-12 items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed border-l-4 border-primary pl-4 italic bg-primary/5 p-4 rounded-lg">
            "Our philosophy goes beyond cleaning; it's a commitment to the preservation and enhancement of automotive aesthetics. Our expertise shines on every surface."
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At SRV Detailing, we approach every vehicle with an unwavering attention to detail. With over two decades of dedicated service, we guarantee our clients the highest standard of paint restoration, protection, and long-term care using certified, industry-leading products.
          </p>
          <a href="#contact" className="mt-8 inline-block px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-primary transition duration-300">
            Consult Our Experts
          </a>
        </div>
        <div className="lg:w-1/2 space-y-4">
          <div className="flex items-start p-4 bg-gray-50 rounded-xl shadow-md">
            <Award className={`w-8 h-8 mr-4 flex-shrink-0 ${PRIMARY_COLOR_CLASSES}`} />
            <div>
              <h3 className="font-bold text-xl mb-1">Industry-Accredited Expertise</h3>
              <p className="text-gray-600 text-sm">We are certified ceramic coating applicators, ensuring professional-grade and warrantied protection for your vehicle's finish.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-xl shadow-md">
            <Compass className={`w-8 h-8 mr-4 flex-shrink-0 ${PRIMARY_COLOR_CLASSES}`} />
            <div>
              <h3 className="font-bold text-xl mb-1">Transparent and Client-Focused</h3>
              <p className="text-gray-600 text-sm">We begin every project with a clear inspection and a transparent, non-obligatory quote, focusing entirely on your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


// --- 2. Inline Component: Working Process / Workflow (Existing) ---
const ProcessSection = () => {
  const processSteps = [
    { icon: Compass, title: "1. Assessment & Consultation", desc: "Understanding your needs and conducting a detailed 30-point vehicle condition inspection." },
    { icon: Zap, title: "2. Deep Decontamination Wash", desc: "Multi-stage safe wash and full chemical and mechanical decontamination to prepare the surface." },
    { icon: Wrench, title: "3. Paint Correction", desc: "Precision multi-stage machine polishing to safely remove defects and maximize paint clarity." },
    { icon: Shield, title: "4. Protection Application", desc: "Professional application of chosen protection (Ceramic Coating / Sealant) for maximum durability." },
    { icon: Star, title: "5. Final Quality Check", desc: "Detailed interior valeting and a joint final inspection to ensure your complete satisfaction." },
  ];

  return (
    <section className="py-24 bg-gray-50" id="process">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Our <span className="text-primary">Meticulous</span> Detailing Process</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
          Our success is rooted in a proven, rigorous workflow, ensuring comprehensive and professional treatment for every vehicle.
        </p>
        {/* Placeholder for a visual flow chart */}
        <div className="text-gray-400 italic mb-8"></div>
        <div className="grid gap-8 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative group">
              <div className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition duration-300 group-hover:bg-primary/10 border-t-4 border-transparent group-hover:border-primary`}>
                <div className={`w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-2xl font-bold shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <step.icon className="w-8 h-8"/>
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
  );
};


// --- 3. Inline Component: Pricing/CTA Section (Existing) ---
const PricingCTA = () => {
    const packages = [
        { title: "Standard Valet", price: "From £45", description: "Exterior wash, interior vacuum, and tire shine. Perfect for regular maintenance and quick presentation." },
        { title: "Full Enhancement Detail", price: "From £250", description: "Single-stage machine polish to boost gloss, paint sealant application, and deep interior cleaning." },
        { title: "Ceramic Protection Package", price: "Quote Required", description: "Full paint correction and application of accredited, multi-year warranty ceramic coating." },
    ];

    return (
        <section className="py-24 bg-white" id="pricing-cta">
            <div className="container mx-auto px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Popular <span className="text-primary">Service Packages</span></h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
                    Each package is tailored to match your vehicle's condition and your specific care requirements.
                </p>

                <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`bg-gray-50 rounded-3xl p-8 shadow-xl flex flex-col transition duration-300 hover:shadow-2xl hover:border-b-4 hover:border-primary`}>
                            <DollarSign className={`w-10 h-10 mx-auto mb-4 ${PRIMARY_COLOR_CLASSES}`} />
                            <h3 className="text-2xl font-extrabold mb-3 text-gray-900">{pkg.title}</h3>
                            <p className={`text-4xl font-bold mb-6 ${PRIMARY_COLOR_CLASSES}`}>{pkg.price}</p>
                            <p className="text-gray-700 flex-grow mb-6">{pkg.description}</p>
                            <a href="#contact" className="mt-auto px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition duration-300">
                                Contact for Booking
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- 4. Inline Component: Guarantees & Confidence Section (Existing) ---
const GuaranteesSection = () => (
    <section className="py-20 bg-gray-100" id="guarantees">
        <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Detailing with <span className="text-primary">Confidence</span></h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
                Your peace of mind is paramount. We back our work with comprehensive warranties, professional insurance, and a commitment to perfection.
            </p>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-primary/50">
                    <Shield className={`w-12 h-12 mx-auto mb-4 ${PRIMARY_COLOR_CLASSES}`} />
                    <h3 className="font-bold text-xl mb-2">Fully Insured Service</h3>
                    <p className="text-gray-600 text-sm">Comprehensive liability and damage insurance ensures your vehicle is protected at all times, whether mobile or at our unit.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-primary/50">
                    <Handshake className={`w-12 h-12 mx-auto mb-4 ${PRIMARY_COLOR_CLASSES}`} />
                    <h3 className="font-bold text-xl mb-2">3-7 Year Warranty</h3>
                    <p className="text-gray-600 text-sm">Our accredited ceramic coatings come with manufacturer-backed warranties covering durability and performance.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-primary/50">
                    <Lock className={`w-12 h-12 mx-auto mb-4 ${PRIMARY_COLOR_CLASSES}`} />
                    <h3 className="font-bold text-xl mb-2">100% Satisfaction</h3>
                    <p className="text-gray-600 text-sm">We don't leave until you are absolutely delighted with the finish. Your complete satisfaction is our final step.</p>
                </div>
            </div>
        </div>
    </section>
);


// --- 6. Inline Component: FAQ Section (Existing) ---
const FAQSection = () => {
    const faqs = [
        { question: "Do you offer mobile service outside of London?", answer: "Our mobile service typically covers the M25 corridor and surrounding counties. For specialized services like ceramic coating, we primarily operate from our secure detailing unit." },
        { question: "How long does a paint correction session take?", answer: "This varies based on the vehicle's condition and size. A single-stage enhancement may take 1 day, while a full, multi-stage correction can take 2-4 days." },
        { question: "What maintenance is required after ceramic coating?", answer: "After coating, we recommend only using pH-neutral car shampoos and avoiding automated car washes. We provide a full maintenance guide and optional maintenance wash plans." },
    ];

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="container mx-auto px-8 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Common Questions, <span className="text-primary">Clear Answers</span></h2>
                <div className="space-y-6">
                    {faqs.map(({ question, answer }, index) => (
                        <details key={index} className="group bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
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
    );
};

// --- 7. NEW Inline Component: Unique Selling Proposition (USP) / Why Us Focused (Existing) ---
const USPSection = () => (
    <section className="py-24 bg-primary/5" id="usp">
        <div className="container mx-auto px-8 text-center max-w-5xl">
            <span className={`inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4`}>
                The SRV Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Why <span className="text-primary">Choose Experts</span> for Your Vehicle?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
                    <UserCheck className={`w-10 h-10 mb-3 ${PRIMARY_COLOR_CLASSES}`} />
                    <h3 className="font-bold text-lg mb-1">Certified Craftsmanship</h3>
                    <p className="text-gray-600 text-sm">Trained and accredited professionals guarantee flaw-free results.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
                    <Layers className={`w-10 h-10 mb-3 ${PRIMARY_COLOR_CLASSES}`} />
                    <h3 className="font-bold text-lg mb-1">Premium Products</h3>
                    <p className="text-gray-600 text-sm">We only use top-tier, industry-leading protection and restoration compounds.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
                    <Feather className={`w-10 h-10 mb-3 ${PRIMARY_COLOR_CLASSES}`} />
                    <h3 className="font-bold text-lg mb-1">Detailing Precision</h3>
                    <p className="text-gray-600 text-sm">Minute attention to every curve, crevice, and paint particle.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
                    <Calendar className={`w-10 h-10 mb-3 ${PRIMARY_COLOR_CLASSES}`} />
                    <h3 className="font-bold text-lg mb-1">Aftercare Support</h3>
                    <p className="text-gray-600 text-sm">Dedicated plans and advice to keep your finish perfect, long-term.</p>
                </div>
            </div>
        </div>
    </section>
);

// --- 8. NEW Inline Component: Blog/Latest News Preview Section (Existing) ---
const BlogPreviewSection = () => {
    const latestPosts = [
        { title: "The Hidden Cost of Automated Car Washes", date: "Dec 10, 2025", link: "/blog/post1" },
        { title: "Ceramic Coating vs. Traditional Wax: A Deep Dive", date: "Nov 28, 2025", link: "/blog/post2" },
        { title: "Interior Detailing: Beyond Vacuuming", date: "Nov 15, 2025", link: "/blog/post3" },
    ];

    return (
        <section className="py-24 bg-white" id="blog-news">
            <div className="container mx-auto px-8 text-center max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Latest <span className="text-primary">Detailing Insights</span></h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
                    Stay informed with expert tips, product reviews, and in-depth guides from our detailing specialists.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-md text-left transition duration-300 hover:shadow-xl border-t-4 border-transparent hover:border-primary">
                            <p className="text-sm text-gray-500 mb-2 flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {post.date}
                            </p>
                            <h3 className="font-extrabold text-xl mb-3 text-gray-900 leading-snug hover:text-primary transition">
                                <a href={post.link}>{post.title}</a>
                            </h3>
                            <a href={post.link} className="text-primary font-semibold text-sm flex items-center mt-4">
                                Read More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>
                        </div>
                    ))}
                </div>
                <a href="/blog" className="mt-12 inline-block px-8 py-3 border border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition duration-300">
                    Visit Our Full Blog
                </a>
            </div>
        </section>
    );
};

// --- 9. NEW Inline Component: Stats / Numbers Section ---
const StatsSection = () => {
    const stats = [
        { number: "22+", label: "Years of Master Experience", icon: Clock },
        { number: "1,500+", label: "Vehicles Detailed & Protected", icon: Car },
        { number: "98%", label: "Client Satisfaction Rating", icon: Heart },
        { number: "7 Yr", label: "Maximum Coating Warranty", icon: Shield },
    ];

    return (
        <section className="py-20 bg-green-900 text-white" id="stats">
            <div className="container mx-auto px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-200">
                    Performance <span className="text-primary">Metrics</span> You Can Trust
                </h2>
                <div className="grid md:grid-cols-4 gap-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <stat.icon className={`w-10 h-10 mb-3 text-primary`} />
                            <p className="text-5xl font-extrabold mb-1">
                                {stat.number}
                            </p>
                            <p className="text-lg font-light uppercase tracking-wide text-gray-400">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 10. NEW Inline Component: Tools & Technology Section ---
const TechnologySection = () => {
    const techItems = [
        { title: "Certified Ceramic Coatings", desc: "Warrantied, ultra-durable protection for paint, wheels, and glass.", icon: Shield },
        { title: "Multi-Stage Polishers", desc: "Precision rotary and dual-action polishers for flawless paint correction.", icon: Aperture },
        { title: "Safe Decontamination Wash", desc: "pH-neutral cleaners and iron removers to ensure safe, deep surface cleaning.", icon: Wrench },
        { title: "UV Curing Lights", desc: "Used to rapidly cure ceramic coatings, maximizing hardness and durability.", icon: Zap },
    ];

    return (
        <section className="py-24 bg-white" id="technology">
            <div className="container mx-auto px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <span className={`inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4`}>
                        Our Competitive Edge
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        The <span className="text-primary">Technology & Products</span> We Use
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techItems.map((item) => (
                        <div key={item.title} className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-b-4 border-transparent hover:border-primary">
                            <item.icon className={`w-10 h-10 mb-4 ${PRIMARY_COLOR_CLASSES}`} />
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- The Main Index Component (Home Page) ---

const Index = () => {
    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white">
            <Navbar />
            <main>
                {/* 1. Hero Section (Top Banner) */}
                <Hero />

                {/* 2. Marquee Section (Scrolling Logos/Brands) */}
                <MarqueeSection />

                {/* 3. Stats / Numbers (NEW: Trust Metrics) */}
                <StatsSection />

                {/* 4. Unique Selling Proposition */}
                <USPSection />

                {/* 5. Guarantees & Confidence */}
                <GuaranteesSection />
                
                {/* 6. Features Section (General Benefits - optional) */}
                <FeaturesSection />

                {/* 7. About Us / Detailing Philosophy */}
                <AboutUsSection />

                {/* 8. Services Overview */}
                <Service/>
                
                {/* 9. Technology & Tools (NEW: Professionalism) */}
                <TechnologySection />

                {/* 10. Working Process */}
                <ProcessSection />

              

                {/* 12. Pricing Tiers & CTA */}
                <PricingCTA/>

                {/* 13. Testimonials (Social Proof) */}
                <Testimonials />
                
                {/* 14. Blog/Latest News Preview */}
                <BlogPreviewSection />
                
                {/* 15. FAQ Section */}
                <FAQSection />

                {/* 16. Contact Section (Final CTA) */}
                <ContactSection />
            </main>

            {/* 17. Footer */}
            <Footer />
        </div>
    );
};

export default Index;