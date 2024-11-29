"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Importando useRouter
import Link from "next/link";
import { CountryData, BorderCountry } from "@/types/Card";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme"; // Importando o hook de tema

interface CardProps {
  resetFilters: () => void; // Tipando a função resetFilters que vem de PaginaPais
}

const Card: React.FC<CardProps> = ({ resetFilters }) => {
  const { country } = useParams();
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [borderCountries, setBorderCountries] = useState<BorderCountry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Inicializando o router
  const { isDarkMode } = useTheme(); // Obtendo o estado do tema (dark ou light)

  // Função de reset quando o botão for clicado
  const handleReset = () => {
    resetFilters();
  };

  // Função para voltar à página anterior
  const handleBack = () => {
    router.back(); // Navega para a página anterior
  };

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        let response;

        // Verifica se a URL deve ser `name` ou `alpha`
        if (country && country.length === 3) {
          response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
        } else {
          response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        }

        if (!response.ok) {
          throw new Error(`Erro ao carregar dados do país. Status: ${response.status}`);
        }

        const data = await response.json();
        setCountryData(data[0]);

        if (data[0]?.borders?.length) {
          const borderResponses = await Promise.all(
            data[0].borders.map((borderCode: string) =>
              fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
            )
          );

          const borderData = await Promise.all(
            borderResponses.map(async (res) => {
              if (!res.ok) throw new Error(`Erro ao carregar dados do país de fronteira. Status: ${res.status}`);
              const borderInfo = await res.json();
              return {
                code: borderInfo[0].cca3,
                name: borderInfo[0].name.common,
              };
            })
          );

          setBorderCountries(borderData);
        }
      } catch (error: any) {
        console.error("Detalhes do erro:", error);
        setError(error.message || "Erro ao carregar dados do país");
      }
    };

    if (country) {
      fetchCountryData();
    }
  }, [country]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!countryData) {
    return <div>Carregando...</div>;
  }

  const flagImageUrl = `https://flagcdn.com/w640/${countryData.cca2.toLowerCase()}.jpg`;

  return (
    <div className={`max-w-[1310px] mx-auto px-4 flex flex-col mb-12 ${isDarkMode ? 'bg-b-dark text-e-t-light' : 'bg-b-light text-black'}`}>
      <div className="flex mt-8 mb-20">
        {/* Botão de Voltar */}
        <button
    onClick={handleBack} // Chama a função de voltar ao clicar
    style={{
        backgroundColor: isDarkMode
            ? "var(--elements-dark-mode)"
            : "var(--elements-light-mode)",
        color: isDarkMode ? "var(--text-dark-mode)" : "var(--text-light-mode)",
    }}
    className="flex mt-28 items-center gap-x-[6px] py-[6px] px-6 rounded shadow-[0px_0px_6px_rgba(0,0,0,0.28)]"
>
    <IconArrowNarrowLeft stroke={2} />
    <span>Back</span>
</button>
      </div>

      <div className="flex flex-col lg:gap-y-0 gap-y-12 lg:gap-x-8 lg:flex-row items-center justify-between">
        <div className="drop-shadow-[0px_0px_15px_rgba(0,0,0,0.15)]">
          <img
            src={flagImageUrl}
            className="w-[275px] sm:w-[366px] md:w-[550px] h-[210px] sm:h-[350px] md:h-[420px] "
            alt={`${countryData.name.common} Flag`}
          />
        </div>

        <div className="flex flex-col justify-between max-w-[550px]">
          <div className="flex flex-col lg:flex-row justify-between gap-y-9 mb-16 lg:mb-20">
            <div>
              <h2 className="font-bold text-3xl mb-6">{countryData.name.common}</h2>
              <ul className="font-semibold flex flex-col gap-y-2">
                <li>Native Name: <span className="font-normal">{countryData.name.common}</span></li>
                <li>Population: <span className="font-normal">{countryData.population.toLocaleString()}</span></li>
                <li>Region: <span className="font-normal">{countryData.region}</span></li>
                <li>Sub Region: <span className="font-normal">{countryData.subregion}</span></li>
                <li>Capital: <span className="font-normal">{countryData.capital?.join(", ") || "N/A"}</span></li>
              </ul>
            </div>

            <div className="flex items-center">
              <ul className="font-semibold flex flex-col gap-y-2">
                <li>Top Level Domain: <span className="font-normal">{countryData.tld?.join(", ") || "N/A"}</span></li>
                <li>Currencies: <span className="font-normal">{Object.values(countryData.currencies || {}).map(currency => currency.name).join(", ")}</span></li>
                <li>Languages: <span className="font-normal">{Object.values(countryData.languages || {}).join(", ")}</span></li>
              </ul>
            </div>
          </div>

          <div className="font-semibold flex flex-wrap gap-y-4">
            <span className="me-3">Border Countries: </span>
            {borderCountries.map((borderCountry) => (
              <Link key={borderCountry.code} href={`/pais/${borderCountry.code}`}>
                <span
                  className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                    } px-6 py-1 rounded shadow-[0px_0px_15px_rgba(0,0,0,0.15)] m-1`}
                >
                  {borderCountry.name}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
