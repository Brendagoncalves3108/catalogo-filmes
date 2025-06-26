const API_URL = "http://localhost:5000/filmes";

export async function getFilmes() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
