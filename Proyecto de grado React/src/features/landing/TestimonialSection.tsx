import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  // Tipado de scrollRef como referencia a un div
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      name: "Juan Pérez",
      text: "Excelente servicio, todo fue muy rápido y seguro.",
      image: "/assets/juan.png",
    },
    {
      name: "Laura Martínez",
      text: "Muy buen trato y el carro estaba impecable.",
      image: "/assets/laura.png",
    },
    {
      name: "Carlos Ruiz",
      text: "La experiencia fue genial. Repetiré seguro.",
      image: "/assets/carlos.png",
    },
  ];

  // Tipado para la función scroll
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-white relative">
      <h2 className="text-3xl font-bold text-center mb-6">
        Testimonios de nuestros clientes
      </h2>

      <div className="relative">
        {/* Botón izquierdo */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Contenedor scroll horizontal */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 max-w-full scroll-smooth"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="snap-center shrink-0"
              style={{ scrollSnapAlign: "center" }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Botón derecho */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
