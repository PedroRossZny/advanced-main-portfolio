"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <article 
      id="formacao" 
      className="bg-[var(--fundo-card)] border border-[var(--borda)] p-6 mb-10 rounded-xl transition-colors duration-400"
    >
      <header className="flex items-center gap-2 mb-6 border-b-2 border-[var(--borda)] pb-3">
        <div className="flex items-center gap-2 text-[var(--destaque)]">
          <GraduationCap size={24} />
          <h2 className="text-xl font-poppins font-semibold uppercase tracking-wide">
            Formação
          </h2>
        </div>
      </header>

      <div className="flex flex-col gap-4">
        {/* Curso: UNIFRAN */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          // Aqui traduzimos perfeitamente o seu border-left de 5px!
          className="bg-[var(--fundo-principal)] rounded-lg border-l-[5px] border-[var(--destaque)] py-4 px-5 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <p className="text-[var(--texto-mutado)] text-sm font-semibold mb-1">
            2023 - 2026
          </p>
          <h3 className="text-[var(--texto)] text-lg font-poppins font-bold">
            UNIFRAN
          </h3>
          <p className="text-[var(--texto-mutado)]">
            Bacharelado em Ciência da Computação
          </p>
        </motion.div>
      </div>
    </article>
  );
}