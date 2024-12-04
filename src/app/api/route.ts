import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    
    if (!res.ok) {
      throw new Error('Erro ao buscar dados da API');
    }
    const data = await res.json();
    
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error); // Logue o erro
    return NextResponse.json(
      { error: 'Falha ao buscar dados da API' },
      { status: 500 }
    );
  }
}



