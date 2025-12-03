import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

const Contacto: React.FC = () => {
  const [enviado, setEnviado] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_8ms7ghx",    // Reemplaza esto
          "template_qmkbkwj",   // Reemplaza esto
          formRef.current,
          "Ny1Iot6OjebyOEAV6"     // Reemplaza esto
        )
        .then(
          () => {
            setEnviado(true);
            formRef.current?.reset();
          },
          (error) => {
            console.error("Error al enviar", error);
            alert("Error al enviar el mensaje.");
          }
        );
    }
  };

  return (
    
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-xl mx-auto mt-16 p-8 bg-white shadow-lg rounded-xl border border-gray-200"
>
  <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
    Contáctanos
  </h2>

  {enviado && (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="text-green-600 font-medium mb-4 text-center"
    >
      ¡Mensaje enviado correctamente!
    </motion.p>
  )}

  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
    {/* Nombre */}
    <div>
      <label className="block text-gray-700 font-medium">Nombre</label>
      <input
        type="text"
        name="from_name"
        required
        className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
        placeholder="Tu nombre"
      />
    </div>

    {/* Correo */}
    <div>
      <label className="block text-gray-700 font-medium">Correo electrónico</label>
      <input
        type="email"
        name="reply_to"
        required
        className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
        placeholder="correo@ejemplo.com"
      />
    </div>

    {/* Teléfono */}
    <div>
      <label className="block text-gray-700 font-medium">Teléfono</label>
      <input
        type="tel"
        name="phone"
        required
        className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
        placeholder="+57 300 123 4567"
      />
    </div>

    {/* Mensaje */}
    <div>
      <label className="block text-gray-700 font-medium">Mensaje</label>
      <textarea
        name="message"
        rows={4}
        required
        className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
        placeholder="Escribe tu mensaje aquí..."
      />
    </div>

    {/* Botón */}
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      type="submit"
      className="w-full bg-gray-800 text-white p-3 rounded-lg font-semibold shadow hover:bg-gray-700 transition"
    >
      Enviar mensaje
    </motion.button>
  </form>
</motion.div>

  );
};

export default Contacto;