import React from "react";
import { Star } from "lucide-react";

interface Opportunity {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  institutionId: number;
  location: string;
  requirements: string;
  benefits: string;
  createdAt: string;
  expiration: string;
  ownerId: number;
  status: string;
  price: number;
  discountPrice: number;
  rating: number;
  stock: boolean;
  freeShipping: boolean;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full border border-gray-200">
      {/* Imagen con etiqueta de descuento */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/400x300"
          alt={`Imagen de ${opportunity.name}`}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          SALE
        </span>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{opportunity.name}</h2>
        <p className="text-sm text-gray-600">{opportunity.description}</p>

        {/* Precios con descuento */}
        <div className="flex items-center space-x-2 my-2">
          <span className="text-green-600 font-bold text-lg">
            ${opportunity.discountPrice?.toFixed(2)}
          </span>
          <span className="text-gray-500 line-through text-sm">
            ${opportunity.price?.toFixed(2)}
          </span>
        </div>

        {/* Calificación */}
        <div className="flex items-center text-yellow-500 text-sm">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill={index < Math.round(opportunity.rating) ? "currentColor" : "none"}
              stroke="currentColor"
              className="mr-1"
            />
          ))}
          <span className="text-gray-700 ml-1 text-sm">({opportunity.rating}/5)</span>
        </div>

        {/* Información adicional */}
        <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
          {opportunity.freeShipping && (
            <div className="flex items-center space-x-1">
              <span className="text-blue-500">🚚</span>
              <span>Free Shipping</span>
            </div>
          )}
          {opportunity.stock ? (
            <div className="flex items-center space-x-1">
              <span className="text-green-500">✔</span>
              <span>In Stock</span>
            </div>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </div>

        {/* Botones */}
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 text-sm font-bold py-2 rounded-lg hover:bg-gray-300 transition">
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
