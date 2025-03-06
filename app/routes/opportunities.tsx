import { useLoaderData } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/node";
import { useState } from "react";
import { getOpportunities } from "../utils/ProyectAntivirusFrontend";
import OpportunityCard from "../components/molecules/OpportunityCard";
import OpportunityFilter from "../components/molecules/OpportunityFilter";
import Footer from "../components/organisms/footer";
import Header from "~/components/organisms/header";
import Bottom from "~/components/organisms/bottom";

// Definimos la interfaz de Opportunity
interface Opportunity {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  institutionsId: number;
  sectorsId: number;
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
  opportunity_Types: number;
}

// Definimos el tipo de datos que el loader devolverá
type LoaderData = {
  opportunities: Opportunity[];
};

// Implementamos el loader
export const loader: LoaderFunction = async () => {
  const opportunities = await getOpportunities();
  return json<LoaderData>({ opportunities });
};

{/* Header al inicio de la página */}
<Header />

// Componente principal
export default function Opportunities() {
  const { opportunities } = useLoaderData<LoaderData>();
  const [filters, setFilters] = useState<Partial<Opportunity>>({
    name: "",
    location: "",
    categoryId: undefined,
    status: "",
  });

  // Manejo de filtros
  const handleFilterChange = (newFilters: Partial<Opportunity>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  // Filtrar oportunidades basadas en los filtros aplicados
  const filteredOpportunities = opportunities.filter((opportunity) => {
    return (
      (!filters.name || opportunity.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.location || opportunity.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.categoryId || opportunity.categoryId === filters.categoryId) &&
      (!filters.status || opportunity.status === filters.status)
    );
  });

  return (
      
      

    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header al inicio de la página */}
      <Header />
      <div className="flex-grow flex p-6">
        {/* Filtro fijo en el lado izquierdo */}
        <div className="w-1/4 p-4 bg-white shadow-lg rounded-xl">
          <OpportunityFilter opportunity={{} as Opportunity} onFilterChange={handleFilterChange} />
        </div>

        {/* Contenedor de tarjetas en el lado derecho */}
        <div className="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))
          ) : (
            <p className="text-gray-600">No se encontraron oportunidades.</p>
          )}
        </div>
      </div>
      {/* Footer al final de la página */}
      <Bottom />
      <Footer />
    </div>
  );
}
