import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

const mainFontFamily = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
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




