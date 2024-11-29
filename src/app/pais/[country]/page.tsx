'use client';

import Card from "@/components/card/Card";
import Pagina from "@/components/template/Pagina";
import { FC, useState } from "react";

// Tipagem do componente PaginaPais
const PaginaPais: FC = () => {
  // Estado para armazenar o termo de busca, com tipo string
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Função para resetar o filtro de busca
  const resetFilters = (): void => {
    setSearchTerm("");
  };

  return (
    <Pagina resetFilters={resetFilters}>
      {/* Passando a função resetFilters para o Card */}
      <Card resetFilters={resetFilters} />
    </Pagina>
  );
};

export default PaginaPais;
