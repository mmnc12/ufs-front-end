import axios from "axios";

const BASE_URL = "https://apiufsbrasil.onrender.com/ufs"
export async function retornaUfs(termo="") {
  try {
    const endpoint = termo 
    ? `${BASE_URL}?busca=${encodeURIComponent(termo)}` 
    : BASE_URL;
    const {data} = await axios.get(endpoint, { timeout: 10000 });
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return Array.isArray(data) ? data : [];
  }
}