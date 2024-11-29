'use client';  // Marca o arquivo como Client Component

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextProps } from '../types/themeContext'; // Importa a tipagem

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verifica o tema armazenado no localStorage (se existir)
        const isDark = localStorage.getItem('theme') === 'dark';
        setIsDarkMode(isDark);

        // Aplica a classe 'dark' no <html> dependendo do tema
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);  // Executa uma vez quando o componente é montado

    // Função para alternar o tema
    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', newMode);  // Alterna a classe 'dark'
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
