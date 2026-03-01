import { motion } from "framer-motion";

/* ---------------- MARQUEE ITEMS ---------------- */
const items = [
  "Ceramic Coating",
  "Paint Correction",
  "Mobile Valeting",
  "Paint Protection",
  "Detailing Experts",
  "Fast & Reliable",
];

export default function MarqueeSection() {
  return (
    <section className="overflow-hidden py-6 bg-gray-100">
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap animate-marquee"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {items.map((item, index) => (
            <span
              key={index}
              className="text-xl font-semibold text-primary px-4 py-2 bg-white/50 rounded-full shadow"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
