// TarjetaBeneficio.tsx
import { motion } from "framer-motion";

type TarjetaBeneficioProps = {
  titulo: string;
  descripcion: string;
};

const TarjetaBeneficio = ({ titulo, descripcion }: TarjetaBeneficioProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 text-left"
    >
      <h3 className="text-orange-600 font-semibold text-xl mb-3">{titulo}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{descripcion}</p>
    </motion.div>
  );
};

export default TarjetaBeneficio;
