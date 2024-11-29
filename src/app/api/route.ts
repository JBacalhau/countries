import { Country } from "@/types/country"; // Importando os tipos



// Função GET tipada
export async function GET(): Promise<Response> {
  const res = await fetch('https://restcountries.com/v3.1/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const data: Country[] = await res.json(); // Tipando os dados da resposta da API
  
  return Response.json({ data });
}
