// src/components/pesquisa/Pesquisa.tsx
'use client';

import Filter from "./Filter";
import Input from "./Input";
import { PesquisaProps } from "@/types/pesquisa"; // Importando a tipagem

export default function Pesquisa({ onSearch, onFilterChange }: PesquisaProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:gap-y-0 gap-y-9 justify-between max-w-[1310px] w-full sm:items-center items-start mx-auto mt-32 mb-12 px-4">
            <div className="sm:w-1/2 sm:max-w-full w-full">
                <Input onSearch={onSearch} />
            </div>
            <div>
                <Filter onFilterChange={onFilterChange} />
            </div>
        </div>
    );
}

