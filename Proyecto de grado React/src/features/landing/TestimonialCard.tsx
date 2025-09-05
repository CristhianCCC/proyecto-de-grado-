// TestimonialCard.tsx
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
}

const TestimonialCard = ({ name, text, image }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="w-[300px] bg-white text-black shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center relative"
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mb-3 object-cover border-2 border-orange-500"
      />
      <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mt-2 italic">“{text}”</p>
    </motion.div>
  );
};

export default TestimonialCard;
