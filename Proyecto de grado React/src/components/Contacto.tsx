import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto: React.FC = () => {
  const [enviado, setEnviado] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_vv841ws",    // Reemplaza esto
          "template_28p9epp",   // Reemplaza esto
          formRef.current,
          "JuPOktLpbFRMWzi7H"     // Reemplaza esto
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
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contáctanos</h2>
      {enviado && (
        <p className="text-green-600 font-semibold mb-4 text-center">
          ¡Mensaje enviado correctamente!
        </p>
      )}
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Correo electrónico</label>
          <input
            type="email"
            name="reply_to"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Teléfono</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700">Mensaje</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;