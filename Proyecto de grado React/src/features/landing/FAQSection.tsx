import FAQCard from "./FAQCard";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuáles son los requisitos para alquilar un vehículo?",
      answer:
        "Edad mínima, licencia de conducir vigente y método de pago aceptado.",
    },
    {
      question: "¿Cuáles son los métodos de pago aceptados?",
      answer: "Tarjetas de crédito/débito, transferencias o pagos digitales.",
    },
    {
      question: "¿Qué incluye el costo del alquiler?",
      answer:
        "Seguro, kilometraje, asistencia en carretera y otros beneficios.",
    },
    {
      question: "¿Los vehículos incluyen seguro?",
      answer: "Sí, todos nuestros vehículos incluyen seguro básico.",
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
        <p className="text-lg mb-12">Estamos aquí para resolver tus dudas!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            icon="❓"
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
