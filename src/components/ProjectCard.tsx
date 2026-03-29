"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import { Expand, Shrink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Definindo quais informações o nosso "Molde" precisa receber
interface ProjectCardProps {
  title: string;
  summary: string;
  imageSrc: string;
  iconSrc: string;
  techs: string; // Ex: "nextjs typescript tailwindcss" para o filtro futuramente
  children: ReactNode; // O conteúdo detalhado que vai aparecer ao expandir
}

export default function ProjectCard({ title, summary, imageSrc, iconSrc, techs, children }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout 
      // O 'data-tech' ficará aqui para o sistema de filtros ler depois
      data-tech={techs}
      className={`bg-[var(--fundo-principal)] border border-[var(--borda)] rounded-xl flex flex-col overflow-hidden transition-colors duration-400 shadow-sm hover:shadow-md ${isExpanded ? 'col-span-1 md:col-span-full order-[-1]' : ''}`}
    >
      <div className="flex justify-end pt-4 pr-3 pb-2 pl-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[var(--texto-mutado)] hover:text-[var(--destaque)] hover:scale-110 transition-all duration-300 cursor-pointer"
          title="Expandir/Recolher"
        >
          {isExpanded ? <Shrink size={22} /> : <Expand size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {!isExpanded && (
          <motion.div 
            initial={{ height: 250, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full relative h-[250px] overflow-hidden"
          >
            <Image src={imageSrc} alt={`Projeto ${title}`} fill className="object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div layout className="flex items-center p-5">
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ width: 0, opacity: 0, marginRight: 0 }}
              animate={{ width: 50, opacity: 1, marginRight: 15 }}
              exit={{ width: 0, opacity: 0, marginRight: 0 }}
              className="relative h-[50px] rounded-lg overflow-hidden shrink-0"
            >
              <Image src={iconSrc} alt={`Icon ${title}`} fill className="object-contain" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col grow">
          <h3 className="text-[var(--texto)] text-xl font-poppins font-semibold mb-1">{title}</h3>
          <p className="text-[var(--texto-mutado)] text-sm">{summary}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 pb-5 pt-2 border-t border-[var(--borda)] mt-2 text-[var(--texto)]"
          >
            {/* O conteúdo específico de cada projeto entra magicamente aqui! */}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}