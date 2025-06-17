interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
}

const TestimonialCard = ({ name, text, image }: TestimonialCardProps) => {
  return (
    <div className="w-[300px] bg-white text-black shadow-md rounded-2xl p-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mb-2 object-cover"
      />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default TestimonialCard;
