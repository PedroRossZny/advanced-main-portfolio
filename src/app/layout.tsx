import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Importando os seus novos componentes
import Loader from "@/components/Loader";
import InteractiveBackground from "@/components/InteractiveBackground";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

// Configuração das fontes (substituindo o @font-face manual por Google Fonts otimizadas)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["600"], 
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Portfolio - Pedro Henrique Rodrigues Ross",
  description: "Full-Stack Developer & Founder of LaborWaze",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {/* Envolvendo a aplicação no ThemeProvider */}
        <ThemeProvider>
          
          {/* O Loader aparece primeiro e se auto-remove */}
          <Loader />
          
          {/* O Fundo Interativo fica fixo atrás de tudo */}
          <InteractiveBackground />
          
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            
            {/* O conteúdo das páginas (page.tsx) entra aqui */}
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}