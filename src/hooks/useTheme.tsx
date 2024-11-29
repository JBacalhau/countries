// src/hooks/useTheme.tsx

'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextProps } from '@/types/themeContext'; // Importando a tipagem

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verifica tema inicial do sistema ou localStorage
        const storedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme) {
            const isDark = storedTheme === "dark";
            setIsDarkMode(isDark);
            document.documentElement.classList.toggle("dark", isDark);
        } else {
            setIsDarkMode(systemPrefersDark);
            document.documentElement.classList.toggle("dark", systemPrefersDark);
        }

        // Listener para detectar alterações no tema do sistema
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (event: MediaQueryListEvent) => {
            setIsDarkMode(event.matches);
            document.documentElement.classList.toggle("dark", event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newMode);
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
