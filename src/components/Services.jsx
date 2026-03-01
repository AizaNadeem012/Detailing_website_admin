import { Car, Sparkles, Shield, Droplets, Wrench, Star } from "lucide-react";

/* ---------------- SERVICES DATA ---------------- */
const services = [
  {
    icon: Car,
    title: "Mobile Valeting",
    desc: "Convenient fully equipped mobile service at your location.",
    image: "https://www.freshcar.co.uk/wp-content/uploads/2023/10/9Y6A2000-4-scaled.jpg",
  },
  {
    icon: Sparkles,
    title: "Paint Correction",
    desc: "Remove swirl marks & scratches for showroom finish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXs-Munn1OyQcplWUCjoCIcMgOFwEP1ejVUw&s",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    desc: "Long-lasting paint protection with accredited products.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7eBuvlPZUlN4u9xC6NkXKIF0nmz6lLutgQ&s",
  },
  {
    icon: Droplets,
    title: "Paint Protection",
    desc: "Protect your car from UV rays, dirt & contaminants.",
    image: "https://carrera.pk/cdn/shop/articles/Reasons_Why_Car_Paint_Protection_is_Important.webp?v=1706187238",
  },
  {
    icon: Wrench,
    title: "Engine Detailing",
    desc: "Thorough cleaning for a spotless engine bay.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTLvnY8buOHx5bUVLdmZwP1-b288mW5NgyQ&s",
  },
  {
    icon: Star,
    title: "Interior Cleaning",
    desc: "Deep cleaning for carpets, seats & interiors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFvdCeZ4hWWNa3DMKsHzKJyd_5iWD11mBoA&s",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-12 mb-20">
          Our <span className="text-primary">Services</span>
        </h2>

        {/* Grid: 3 columns on medium+ screens with larger gaps */}
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-3">
          {services.map(({ title, desc, icon: Icon, image }) => (
            <div
              key={title}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden border border-gray-200"
            >
              {/* Service Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Service Content */}
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
