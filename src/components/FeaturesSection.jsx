import { Shield, Droplets, Car, Clock } from "lucide-react";

/* ---------------- FEATURES DATA ---------------- */
const features = [
  {
    icon: Shield,
    title: "Ceramic Coating Accredited",
    desc: "Professional certified ceramic coating services for lasting protection.",
  },
  {
    icon: Droplets,
    title: "Paint Protection",
    desc: "Protect your vehicle from UV rays, dirt, and contaminants.",
  },
  {
    icon: Car,
    title: "Mobile Services",
    desc: "We come to your location fully equipped for detailing.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable",
    desc: "Quick response with flexible scheduling for your convenience.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 whitespace-nowrap">
          Why <span className="text-primary">Choose Us</span>
        </h2>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-white/90 to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 text-center backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
