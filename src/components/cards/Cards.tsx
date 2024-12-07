'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Country } from "@/types/Cards";
import { PulseLoader } from "react-spinners";

interface CardsProps {
  searchTerm: string; // Termo de pesquisa
  filterRegion: string; // Região filtrada
}

export default function Cards({ searchTerm, filterRegion }: CardsProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      const response = await fetch("/api/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Falha ao carregar dados da API");
      }
      const data = await response.json();
      setCountries(data.data);
    } catch (error) {
      console.error("Erro:", error);
      setError("Falha ao carregar dados da API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearchTerm = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion =
      filterRegion === "All" || country.region === filterRegion;
    return matchesSearchTerm && matchesRegion;
  });

  if (loading) {
    return (
      <div>
        <PulseLoader color="hsl(0, 0%, 52%)" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex max-w-[1440px] mx-auto justify-center items-center gap-x-[73px] px-4 gap-y-[76px] flex-wrap">
      {filteredCountries.map((country) => (
        <Link href={`/pais/${country.cca3}`} key={country.cca3}>
          <div
            className={`w-[265px] h-[335px] overflow-hidden rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.15)] 
              bg-e-t-light text-t-light dark:bg-e-dark dark:text-e-t-light`}
          >
            <div className="drop-shadow-[0px_0px_15px_rgba(0,0,0,0.15)]">
              <Image
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-[160px]"
                width={265}
                height={160}
                priority
              />
            </div>
            <div className="text-lg px-6 py-7 rounded-b-md">
              <h2 className="font-bold">{country.name.common}</h2>
              <ul className="font-semibold text-sm py-1">
                <li>
                  Population:
                  <span className="font-normal text-base py-1 ml-1">
                    {country.population.toLocaleString()}
                  </span>
                </li>
                <li>
                  Region:
                  <span className="font-normal text-base py-1 ml-1">
                    {country.region}
                  </span>
                </li>
                <li>
                  Capital:
                  <span className="font-normal text-base py-1 ml-1">
                    {country.capital?.join(", ") || "N/A"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
