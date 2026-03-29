"use client";

import { Laptop, Wrench, GraduationCap, Languages, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Função que substitui o seu JS original de Scroll Suave
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    const detalhesSection = document.getElementById("detalhes");

    if (targetElement) {
      if (window.innerWidth <= 1050) {
        // Mobile scroll
        const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        const y = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 15;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (detalhesSection) {
        // Desktop scroll (dentro da área da direita)
        detalhesSection.scrollTo({
          top: (targetElement as HTMLElement).offsetTop - 20,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="bg-[var(--fundo-card)] border-b border-[var(--borda)] px-5 py-2 flex justify-end sticky top-0 z-50 transition-colors duration-400">
      <nav id="menu">
        <ul className="list-none flex gap-4 m-0 p-0">
          <li>
            <a href="#tecnologias" onClick={(e) => handleScroll(e, "#tecnologias")} className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center cursor-pointer">
              <Laptop size={22} />
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={(e) => handleScroll(e, "#projetos")} className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center cursor-pointer">
              <Wrench size={22} />
            </a>
          </li>
          <li>
            <a href="#formacao" onClick={(e) => handleScroll(e, "#formacao")} className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center cursor-pointer">
              <GraduationCap size={22} />
            </a>
          </li>
          <li>
            <button className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center cursor-pointer bg-transparent border-none">
              <Languages size={22} />
            </button>
          </li>
          <li>
            {/* Botão de Tema Funcional */}
            <button 
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center cursor-pointer bg-transparent border-none"
            >
              {mounted && resolvedTheme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}