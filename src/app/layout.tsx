import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

const mainFontFamily = Nunito_Sans({
  weight: ["300", "400", "600", "800"], // Adicione todos os pesos usados
  subsets: ["latin"], // Certifique-se de que o subset está correto
  display: "swap", // Opção recomendada para evitar problemas de carregamento
});

export const metadata: Metadata = {
  title: "REST Countries API",
  description: "API REST Countries com alternador de tema de cores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={mainFontFamily.className}>
        <ThemeProvider> {/* Envolva a árvore de componentes com ThemeProvider */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}




