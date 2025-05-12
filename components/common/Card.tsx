import Image from "next/image";
import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md max-w-sm">
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-base font-bold">{price}</p>
      </div>
    </div>
  );
};

export default Card;
