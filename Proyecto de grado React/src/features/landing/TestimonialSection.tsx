// TestimonialsSection.tsx
import { useRef } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      name: "Juan Pérez",
      text: "Excelente servicio, todo fue muy rápido y seguro.",
      image: "/images/perfil2.png",
    },
    {
      name: "Laura Martínez",
      text: "Muy buen trato y el carro estaba impecable.",
      image: "/images/perfil1.png",
    },
    {
      name: "Carlos Ruiz",
      text: "La experiencia fue genial. Repetiré seguro.",
      image: "/images/perfil3.png",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Testimonios de nuestros clientes
      </motion.h2>

      <div className="relative">
        {/* Botón izquierdo */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("left")}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 p-3 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Scroll horizontal */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-6 max-w-full scroll-smooth px-2"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[33%] flex justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Botón derecho */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("right")}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 p-3 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
