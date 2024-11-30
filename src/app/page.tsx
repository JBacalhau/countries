'use client';
import Cards from "@/components/cards/Cards";
import Pagina from "@/components/template/Pagina";
import Pesquisa from "@/components/template/Pesquisa";
import { useState } from "react";

// Tipando o componente Home
export default function Home() {
    // Estado para o termo de busca
    const [searchTerm, setSearchTerm] = useState<string>("");

    // Estado para o filtro de região
    const [filterRegion, setFilterRegion] = useState<string>("All");

    // Função para resetar filtros
    const resetFilters = () => {
        setSearchTerm("");
        setFilterRegion("All");
    };

    return (
        <Pagina resetFilters={resetFilters}>
            <Pesquisa onSearch={setSearchTerm} onFilterChange={setFilterRegion} />
            <div className="flex gap-5 flex-wrap justify-center">
                <Cards searchTerm={searchTerm} filterRegion={filterRegion} />
            </div>
        </Pagina>
    );
}
