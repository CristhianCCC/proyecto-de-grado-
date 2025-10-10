import React from "react";

export interface FAQCardProps {
  icon?: React.ReactNode;
  question: string;
  answer: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ icon, question, answer }) => {
  return (
    <div className="flex items-start gap-4 p-6 border border-white/20 rounded-xl bg-gray-800">
      <div className="text-orange-500 text-2xl">{icon}</div>
      <div>
        < h3 className="font-semibold text-white mb-2">{question}</h3>
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
