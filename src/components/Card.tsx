import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex-shrink-0 max-w-xs mx-2 my-3 bg-background rounded-md shadow-md overflow-hidden">
      <div className="flex flex-col h-full justify-between">
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-center text-primary font-semibold mb-2">
            {title}
          </div>
          <p className="text-gray-300 text-left">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
