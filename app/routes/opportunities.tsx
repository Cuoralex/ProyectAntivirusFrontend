import { LoaderFunction, json } from "@remix-run/node";
import { useState } from "react";
import { getOpportunities } from "../utils/ProyectAntivirusFrontend";
import { useSearchParams, useLoaderData } from "@remix-run/react";

import OpportunityCard from "../components/molecules/OpportunityCard";
import OpportunityFilter from "../components/molecules/OpportunityFilter";
import ButtonWhatsapp from "../components/organisms/button-whatsapp";
import ButtonDonateWompi from "~/components/organisms/button-donate-wompi/button-donate-wompi";
import ButtonGoUp from "~/components/organisms/button-go-up/button-go-up";
import Pagination from "~/components/organisms/pagination";

interface Opportunity {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  categoryName: string;
  institutionId: number;
  institutionName: string;
  institutionImage: string;
  institutionLink: string;
  opportunityTypeId: number;
  opportunityTypeName: string;
  sectorId: number;
  sectorName: string;
  localityId: number;
  localityCity: string;
  requirements: string;
  benefits: string;
  modality: string;
  publicationDate: string;
  expirationDate: string;
  createdAt: string;
  ownerId: number;
  status: string;
  price: number;
  discountPrice: number;
  rating: number;
  ratingCount: number;
  stock: boolean;
  freeShipping: boolean;
  score: number;
  userId?:number;
  comment: string;
}

// Definimos el tipo de datos que el loader devolverá
type LoaderData = {
  opportunities: Opportunity[];
};

// Implementamos el loader
export const loader: LoaderFunction = async () => {
  const opportunities = await getOpportunities();
  console.log(opportunities);
  return json<LoaderData>({ opportunities });
};

// Componente principal
export default function Opportunities() {
  const { opportunities } = useLoaderData<LoaderData>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<Partial<Opportunity>>({
    title: "",
    opportunityTypeId: 0,
    localityId: 0,
    institutionId: 0,
    sectorId: 0,
    status: "",
    publicationDate: "",
    expirationDate: "",
    price: undefined,
  });

  // Manejo de filtros
  const handleFilterChange = (newFilters: Partial<Opportunity>) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, ...newFilters };
      return updatedFilters;
    });
  };

  // Estado de paginación
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const pageSize = 10;

  // Filtrar oportunidades basadas en los filtros aplicados
  const filteredOpportunities = opportunities.filter((opportunity) => {
    // Convertir fechas de filtro a objetos Date (si existen)
    const expirationDateFilter = filters.expirationDate
      ? new Date(filters.expirationDate)
      : null;
    const publicationDateFilter = filters.publicationDate
      ? new Date(filters.publicationDate)
      : null;

    // Convertir fechas de oportunidad a objetos Date (si existen)
    const opportunityExpirationDate = opportunity.expirationDate
      ? new Date(opportunity.expirationDate)
      : null;
    const opportunityPublicationDate = opportunity.publicationDate
      ? new Date(opportunity.publicationDate)
      : null;
    return (
      (!filters.title ||
        opportunity.title
          .toLowerCase()
          .includes(filters.title.toLowerCase())) &&
      (!filters.opportunityTypeId ||
        opportunity.opportunityTypeId === Number(filters.opportunityTypeId)) &&
      (!filters.localityId ||
        opportunity.localityId === Number(filters.localityId)) &&
      (!filters.institutionId ||
        opportunity.institutionId === Number(filters.institutionId)) &&
      (!filters.sectorId ||
        opportunity.sectorId === Number(filters.sectorId)) &&
      (!filters.status || opportunity.status === filters.status) &&
      (!expirationDateFilter ||
        (opportunityExpirationDate &&
          opportunityExpirationDate.toISOString().split("T")[0] ===
            expirationDateFilter.toISOString().split("T")[0])) &&
      (!publicationDateFilter ||
        (opportunityPublicationDate &&
          opportunityPublicationDate.toISOString().split("T")[0] ===
            publicationDateFilter.toISOString().split("T")[0])) &&
      (!filters.price || opportunity.price <= filters.price)
    );
  });

  // Aplicar paginación
  const paginatedOpportunities = filteredOpportunities.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 pb-20">
      {/* Header al inicio de la página */}

      <div className="flex-grow flex flex-col md:flex-row p-6 gap-4">
        {/* Filtro fijo en móviles y sticky en pantallas grandes */}
        <div className="w-full md:w-1/4 p-4 bg-white shadow-lg rounded-xl md:sticky md:top-4 md:self-start md:h-[calc(100vh-2rem)] overflow-y-auto">
          <OpportunityFilter onFilterChange={handleFilterChange} />
        </div>

        {/* Contenedor de tarjetas con ajuste responsivo */}
        <div className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 justify-center">
          {paginatedOpportunities.length > 0 ? (
            paginatedOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))
          ) : (
            <p className="text-gray-600">No se encontraron oportunidades.</p>
          )}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={filteredOpportunities.length}
        pageSize={pageSize}
        onPageChange={(page: number) => {
          setCurrentPage(page);
          setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set("page", String(page));
            return newParams;
          });
        }}
      />

      <ButtonWhatsapp />
      <ButtonDonateWompi />
      <ButtonGoUp />
    </div>
  );
}