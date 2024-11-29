// Tipagem para o componente Home
export interface HomeProps {
    // Função para resetar filtros
    resetFilters: () => void;
    // Definir a tipagem para o estado de busca
    searchTerm: string;
    // Definir a tipagem para o filtro de região
    filterRegion: string;
}
