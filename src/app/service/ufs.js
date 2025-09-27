import axios from "axios";

export async function retornaUfs() {
  try {
    const endpoint = "https://apiufsbrasil.onrender.com/ufs";
    const {data} = await axios.get(endpoint, { timeout: 10000 });
    return data || [];
  } catch (error) {
    return { erro: "Erro ao acessar a API DE UFs: " + error.message }
  }
}