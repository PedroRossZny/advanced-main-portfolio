"use client";

import { Laptop, Wrench, GraduationCap, Languages, Moon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[var(--fundo-card)] border-b border-[var(--borda)] px-5 py-2 flex justify-end sticky top-0 z-50 transition-colors duration-400">
      <nav id="menu">
        <ul className="list-none flex gap-4 m-0 p-0">
          <li>
            <Link href="#tecnologias" className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center">
              <Laptop size={22} />
            </Link>
          </li>
          <li>
            <Link href="#projetos" className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center">
              <Wrench size={22} />
            </Link>
          </li>
          <li>
            <Link href="#formacao" className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center">
              <GraduationCap size={22} />
            </Link>
          </li>
          <li>
            {/* O botão de idioma receberá a lógica do next-intl depois */}
            <button className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center cursor-pointer bg-transparent border-none">
              <Languages size={22} />
            </button>
          </li>
          <li>
            {/* O botão de tema receberá a lógica do next-themes depois */}
            <button className="text-[var(--texto)] text-lg p-2 rounded-lg transition-all duration-300 hover:text-[var(--destaque)] flex items-center justify-center cursor-pointer bg-transparent border-none">
              <Moon size={22} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}