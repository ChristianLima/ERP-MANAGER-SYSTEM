// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

export async function getHealthStatus() {
  const res = await fetch(`${API_URL}/health`);
  return res.json();
}
