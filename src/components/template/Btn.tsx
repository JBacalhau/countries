'use client';

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";

export default function Btn() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: isDarkMode
                    ? "var(--elements-dark-mode)"
                    : "var(--elements-light-mode)",
                color: isDarkMode ? "var(--text-dark-mode)" : "var(--text-light-mode)",
            }}
            className="flex items-center font-semibold text-sm gap-1 px-4 py-2 rounded-md"
        >
            {isDarkMode ? (
                <>
                    <IconSun size={18} stroke={1.5} />
                    Light Mode
                </>
            ) : (
                <>
                    <IconMoon size={18} stroke={1.5} />
                    Dark Mode
                </>
            )}
        </button>
    );
}
