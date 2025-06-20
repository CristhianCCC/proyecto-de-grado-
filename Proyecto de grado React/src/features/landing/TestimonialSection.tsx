import { useRef } from "react";
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
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 bg-gray-900 text-white relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
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

        {/* Scroll horizontal responsivo */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 max-w-full scroll-smooth px-1"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[33%]"
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
