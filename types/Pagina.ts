// Tipagem para o componente Pagina
export interface PaginaProps {
    children: React.ReactNode; // Conteúdo filho a ser renderizado
    className?: string; // Classes CSS opcionais
    resetFilters: () => void; // Função para resetar os filtros
}
