// app/App.tsx
import OpportunityCard from "./components/molecules/OpportunityCard";

const opportunities = {
  id: 1,
  name: "Politécnico Jaime Isaza Cadavid",
  description: "Oportunidad en Politécnico Jaime Isaza Cadavid dentro de la categoría OPORTUNIDADES ACADÉMICAS",
  categoryId: 1,
  institutionId: 5,
  location: "Medellín, Colombia",
  requirements: "Requisitos específicos de la institución",
  benefits: "Beneficios según el programa",
  createdAt: "2025-03-01T20:50:49.226318+00:00",
  expiration: "-infinity",
  ownerId: 9,
  status: "abierta",
};

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <OpportunityCard opportunity={opportunities} />
    </div>
  )
};

export default App;