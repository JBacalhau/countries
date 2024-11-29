// src/components/pesquisa/pesquisa.ts
export interface PesquisaProps {
    onSearch: (searchTerm: string) => void;
    onFilterChange: (region: string) => void;
}
