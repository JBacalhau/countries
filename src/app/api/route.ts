// pages/api/countries.ts

export async function GET() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Erro ao carregar dados dos países. Status: ${res.status}`);
    }

    const data = await res.json();

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Erro ao carregar dados da API' }),
      { status: 500 }
    );
  }
}

