// src/app/api/countries/route.ts
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    // Faz a requisição para a API de países
    const res = await fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    // Verifica se a resposta foi bem-sucedida
    if (!res.ok) {
      throw new Error(`Erro ao carregar dados dos países. Status: ${res.status}`);
    }

    // Converte os dados para JSON
    const data = await res.json();

    // Retorna os dados com status 200
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    // Log do erro no servidor (ajuda na depuração)
    console.error('Erro ao buscar dados da API:', error);

    // Retorna uma mensagem de erro com status 500
    return NextResponse.json(
      { error: 'Falha ao buscar dados da API' },
      { status: 500 }
    );
  }
}




