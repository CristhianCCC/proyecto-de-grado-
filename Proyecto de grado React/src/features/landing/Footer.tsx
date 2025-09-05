import { motion } from "framer-motion";

export default function Footer() {
  const columnas = [
    {
      titulo: "Contacto",
      contenido: (
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="font-medium mr-2">Email:</span>
            dimecars@gmail.com
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">Teléfono:</span>
            301-855-0488
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">Instagram:</span>
            @dimecacrs
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">Ubicación:</span>
            34 Adams Avenue, Maryland, EE.UU.
          </li>
        </ul>
      ),
    },
    {
      titulo: "Horarios",
      contenido: (
        <ul className="space-y-2">
          <li>Lunes a Viernes: 9:00 AM - 7:30 PM</li>
          <li>Sábados: 9:00 AM - 2:00 PM</li>
          <li>Domingos: Cerrado</li>
          <li className="text-green-400">Soporte 24/7 en redes</li>
        </ul>
      ),
    },
    {
      titulo: "Enlaces rápidos",
      contenido: (
        <ul className="space-y-2">
          {[
            { label: "Inicio", href: "#" },
            { label: "Beneficios", href: "#beneficios" },
            { label: "Testimonios", href: "#testimonios" },
            { label: "Preguntas Frecuentes", href: "#faq" },
            { label: "Catálogo", href: "/vehiculos" },
          ].map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 5, color: "#22c55e" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <a href={link.href}>{link.label}</a>
            </motion.li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Grid animado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {columnas.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }} //index para añadir que aparezcan en cascada
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">{col.titulo}</h3>
              {col.contenido}
            </motion.div>
          ))}
        </div>

        {/* Botón animado */}
        <motion.div
          className="mt-8 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://maps.app.goo.gl/z18optBguQnuMp3P6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition text-sm"
          >
            Ver ubicación en Google Maps
          </a>
        </motion.div>

        {/* Footer legal */}
        <motion.div
          className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Dimmecars. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
