export async function GET() {
  const res = await fetch('https://restcountries.com/v3.1/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const data = await res.json();
  
  return Response.json({ data });
}