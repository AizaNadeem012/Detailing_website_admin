import { motion } from "framer-motion";
import { useState } from "react";

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleDrag = (e) => {
    const rect = e.target.parentNode.getBoundingClientRect();
    const pos = ((e.clientX - rect.left) / rect.width) * 100;
    if (pos >= 0 && pos <= 100) setSliderPos(pos);
  };

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          See the Transformation
        </h2>

        <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-xl">
          {/* After Image */}
          <img
            src="/car-after.jpg"
            alt="After Detailing"
            className="w-full h-full object-cover"
          />

          {/* Before Image with dynamic width */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/car-before.jpg"
              alt="Before Detailing"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slider */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDrag={(e) => handleDrag(e)}
            style={{ left: `${sliderPos}%` }}
            className="absolute top-0 -translate-x-1/2 h-full w-1 cursor-ew-resize bg-primary/50 hover:bg-primary rounded"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg" />
          </motion.div>
        </div>

        <p className="text-center text-muted-foreground mt-6">
          Drag the slider to see how our detailing transforms your car.
        </p>
      </div>
    </section>
  );
}
