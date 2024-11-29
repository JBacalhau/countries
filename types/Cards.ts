// Tipagem para os dados de um país
export interface Country {
    name: { common: string }; // Nome comum do país
    capital: string[]; // Lista de capitais
    region: string; // Região do país
    population: number; // População
    cca3: string; // Código único ISO de três letras
    flags: { png: string }; // URL da bandeira no formato PNG
}
