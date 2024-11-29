// src/types/country.ts
export interface Country {
    name: {
        common: string;
        official: string;
    };
    capital: string[];
    region: string;
    subregion: string;
    population: number;
    flags: {
        png: string;
        svg: string;
    };
}
// Tipagem para a resposta da API
interface ApiResponse {
    data: Country[];
}  