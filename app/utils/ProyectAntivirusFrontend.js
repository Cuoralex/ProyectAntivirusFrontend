const API_URL = "http://localhost:5055/api/v1/opportunity";

export async function getOpportunities() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al obtener oportunidades");
  }
  return response.json();
}

export async function getOpportunityById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Oportunidad no encontrada");
  }
  return response.json();
}

export async function createOpportunity(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Error al crear oportunidad");
  }
  return response.json();
}

export async function updateOpportunity(id, data) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Error al actualizar oportunidad");
  }
}

export async function deleteOpportunity(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Error al eliminar oportunidad");
  }
}
