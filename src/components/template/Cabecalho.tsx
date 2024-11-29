'use client';

import Btn from './Btn';
import Logo from './Logo';
import { useTheme } from '@/hooks/useTheme'; // Importando o hook personalizado
import { CabecalhoProps } from '@/types/Cabecalho'; // Importando a tipagem

export default function Cabecalho({ resetFilters }: CabecalhoProps) {
    const { isDarkMode } = useTheme(); // Obtendo o estado do tema (dark ou light)

    return (
        <header
            className={`shadow-[0px_4px_4px_rgba(0,0,0,0.08)] w-full fixed py-6 px-4 z-20 
            ${isDarkMode ? 'bg-e-dark text-e-t-light' : 'bg-e-t-light text-t-light'}`}
        >
            <div className="flex justify-between items-center m-auto max-w-[1280px]">
                <Logo resetFilters={resetFilters} />
                <Btn />
            </div>
        </header>
    );
}
