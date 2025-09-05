// Beneficios.tsx
import { motion } from "framer-motion";
import TarjetaBeneficio from "./TarjetaBeneficio";

const beneficios = [
  {
    titulo: "Variedad de Vehículos",
    descripcion:
      "Amplia gama de autos desde compactos hasta SUVs y modelos de lujo, adaptados a distintas necesidades y presupuestos.",
  },
  {
    titulo: "Precios Competitivos",
    descripcion:
      "Tarifas accesibles y opciones de pago flexibles que permiten encontrar soluciones económicas sin sacrificar calidad.",
  },
  {
    titulo: "Proceso de Reserva Sencillo",
    descripcion:
      "Plataforma digital intuitiva y atención eficiente, facilitando la reserva rápida y sin complicaciones.",
  },
  {
    titulo: "Atención Personalizada",
    descripcion:
      "Asistencia al cliente dedicada para garantizar una experiencia de alquiler satisfactoria y sin estrés.",
  },
  {
    titulo: "Seguridad Garantizada",
    descripcion:
      "Vehículos inspeccionados y mantenidos regularmente, brindando confianza y tranquilidad durante el uso.",
  },
  {
    titulo: "Flexibilidad de Entrega",
    descripcion:
      "Opciones de entrega y devolución en distintos puntos, ajustándose a la conveniencia del cliente.",
  },
];

const Beneficios = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué adquirir nuestros servicios?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15, // animación en cascada
              }}
              viewport={{ once: true }}
            >
              <TarjetaBeneficio titulo={b.titulo} descripcion={b.descripcion} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
