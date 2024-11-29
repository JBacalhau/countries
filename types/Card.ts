// types/Card.ts

// Definição do tipo para os dados do país
export interface CountryData {
    name: {
        common: string;
        nativeName?: { [key: string]: { common: string } };
    };
    population: number;
    region: string;
    subregion?: string;
    capital?: string[];
    borders?: string[];
    tld?: string[];
    currencies?: { [key: string]: { name: string; symbol?: string } };
    languages?: { [key: string]: string };
    cca2: string; // Código de duas letras do país
    cca3: string; // Código de três letras do país
}

// Tipo para os dados dos países de fronteira
export interface BorderCountry {
    code: string; // Código do país de fronteira
    name: string; // Nome do país de fronteira
}

