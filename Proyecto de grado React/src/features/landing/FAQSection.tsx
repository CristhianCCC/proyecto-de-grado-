import { motion } from "framer-motion";
import FAQCard, { FAQCardProps } from "./FAQCard";
import { HelpCircle, Clock, Car, CreditCard } from "lucide-react";

const faqs: FAQCardProps[] = [
  {
    icon: <HelpCircle />,
    question: "¿Cómo puedo reservar un vehículo?",
    answer: "Puedes reservar en línea a través de nuestra plataforma en pocos pasos sencillos.",
  },
  {
    icon: <Clock />,
    question: "¿Con cuánta anticipación debo reservar?",
    answer: "Recomendamos reservar con al menos 24 horas de anticipación para asegurar disponibilidad.",
  },
  {
    icon: <Car />,
    question: "¿Qué documentos necesito?",
    answer: "Debes presentar tu licencia de conducir vigente y un documento de identidad.",
  },
  {
    icon: <CreditCard />,
    question: "¿Cuáles son los métodos de pago?",
    answer: "Aceptamos tarjetas de crédito, débito y transferencias bancarias.",
  },
];

const PreguntasFrecuentes = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQCard icon={f.icon} question={f.question} answer={f.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
