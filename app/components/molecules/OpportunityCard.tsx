import React, { useState, useEffect, ReactNode } from "react";
import StarRating from "./StarRating";

interface OpportunityCardProps {
  opportunity: {
    categoryName: ReactNode;
    modality: ReactNode;
    score: number;
    comment: string;
    userId: number | undefined;
    publicationDate: string | number | Date;
    localityCity: ReactNode;
    opportunityTypeName: ReactNode;
    sectorName: ReactNode;
    title: ReactNode;
    discountPrice?: number;
    price?: number;
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
  };
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const price = opportunity.price ?? 0;
  const discountPrice = opportunity.discountPrice ?? price;
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Devuelve "YYYY-MM-DD"
  };

  const handleMarkFavorite = async () => {
    try {
      const response = await fetch(
        `http://localhost:5055/api/v1/favorites/${opportunity.id}`, // Aquí se usa opportunity.id correctamente
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            opportunityId: opportunity.id,
          }),
        }
      );

      if (response.ok) {
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error al marcar como favorita:", error);
    }
  };

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const response = await fetch(`http://localhost:5055/api/v1/favorites`);
        if (!response.ok) {
          throw new Error(
            `Error en la API: ${response.status} - ${response.statusText}`
          );
        }

        // Verifica si la respuesta tiene contenido antes de intentar parsearla
        const favorites = await response.json().catch(() => {
          console.warn("La respuesta de favoritos no es JSON válido");
          return []; // Si hay un error, devuelve un array vacío
        });

        setIsFavorite(
          favorites.some(
            (favorite: { opportunityId: number }) =>
              favorite.opportunityId === opportunity.id
          )
        );
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      }
    };

    checkFavorite();
  }, [opportunity.id]);

  return (
    <div className="mx-auto flex flex-wrap justify-center items-start gap-8 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-72 h-96 border border-gray-200">
        {/* Cara A */}
        {!showDetails ? (
          <div
            className={`h-full flex flex-col justify-between p-4 ${
              [2, 8, 9].includes(opportunity.institutionId)
                ? "bg-[#3C3C3C] text-white"
                : "bg-white"
            }`}
          >
            {/* Imagen con etiqueta de estado */}
            <div className="relative w-full h-32 overflow-hidden">
              <img
                src={`/images/institutions/${opportunity.institutionId}.png`} // ✅ ahora es string
                alt={`Logo de ${opportunity.institutionId}`}
                className="w-full h-full object-contain"
              />

              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                {opportunity.status}
              </span>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="flex flex-col flex-grow justify-between">
              <h2
                className={`text-lg font-semibold ${
                  [2, 8, 9].includes(opportunity.institutionId)
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {opportunity.title}
              </h2>

              {/* Ubicación, Categoría e Institución */}
              <div
                className={`text-xs mt-2 ${
                  [2, 8, 9].includes(opportunity.institutionId)
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                <p>
                  <strong>Institución:</strong> {opportunity.institutionId}
                </p>
                <p>
                  <strong>Sector:</strong> {opportunity.sectorName}
                </p>
                <p>
                  <strong>Tipo de Oportunidad:</strong>{" "}
                  {opportunity.opportunityTypeName}
                </p>
                <p>
                  <strong>Ubicación:</strong> {opportunity.localityCity}
                </p>
                <p>
                  <strong>Fecha de Publicación:</strong>{" "}
                  {formatDate(opportunity.publicationDate)}
                </p>
                <p>
                  <strong>Fecha de Expiración:</strong>{" "}
                  {formatDate(opportunity.expiration)}
                </p>
              </div>
            </div>

            {/* Contenedor de precio y calificación */}
            <div className="flex items-center justify-between mt-2">
              {/* Precio */}
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-bold text-lg">
                  ${discountPrice.toFixed(2)}
                </span>
                {discountPrice < price && (
                  <span
                    className={`line-through text-sm ${
                      [2, 8, 9].includes(opportunity.institutionId)
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    ${price.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Estrellas de votación */}
              <div
                className={
                  [2, 8, 9].includes(opportunity.institutionId)
                    ? "text-white"
                    : "text-gray-500"
                }
              >
                <StarRating
                  opportunityId={opportunity.id}
                  userId={opportunity.userId}
                  comment={opportunity.comment}
                  score={opportunity.score}
                  isWhiteText={[2, 8, 9].includes(opportunity.institutionId)}
                />
              </div>
            </div>

            {/* Botones */}
            <div className="mt-4 flex space-x-2">
              <button
                className={`flex-1 text-sm font-bold py-2 rounded-lg transition ${
                  isFavorite
                    ? "bg-gray-500 cursor-not-allowed text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
                onClick={handleMarkFavorite}
                disabled={isFavorite}
              >
                {isFavorite ? "Marcada como Favorita" : "Marcar Favorita"}
              </button>

              <button
                className={`flex-1 text-sm font-bold py-2 rounded-lg hover:bg-gray-300 transition ${
                  [2, 8, 9].includes(opportunity.institutionId)
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setShowDetails(true)}
              >
                Más información
              </button>
            </div>
          </div>
        ) : (
          /* Cara B */
          <div className="h-full flex flex-col justify-between p-4 bg-yellow-400 text-gray-900">
            <h2 className="text-lg font-semibold">{opportunity.title}</h2>
            <p className="text-sm">{opportunity.description}</p>

            <div className="text-xs mt-2">
              <p>
                <strong>Categoría:</strong> {opportunity.categoryName}
              </p>
              <p>
                <strong>Beneficios:</strong> {opportunity.benefits}
              </p>
              <p>
                <strong>Modalidad:</strong> {opportunity.modality}
              </p>
              <p>
                <strong>Fecha de Expiración:</strong>{" "}
                {formatDate(opportunity.expiration)}
              </p>
            </div>

            {/* Botones */}
            <div className="mt-4 flex space-x-2">
              <button
                className="flex-1 bg-blue-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => setShowDetails(false)}
              >
                Volver
              </button>
              <button
                className="flex-1 bg-gray-800 text-white text-sm font-bold py-2 rounded-lg hover:bg-gray-900 transition"
                onClick={() =>
                  window.open(
                    `/instituciones/${opportunity.institutionId}`,
                    "_blank"
                  )
                }
              >
                Postularme
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default OpportunityCard;
