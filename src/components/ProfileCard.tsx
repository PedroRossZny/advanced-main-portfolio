"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.section 
      id="ficha"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="md:overflow-y-auto pr-0 md:pr-2.5"
    >
      <article className="bg-[var(--fundo-card)] border border-[var(--borda)] p-5 mb-6 rounded-xl transition-colors duration-400">
        {/* Foto de Perfil */}
        <div className="relative w-[180px] h-[180px] mx-auto mb-5">
          <Image
            src="/images/pedro.jpg"
            alt="Foto de Pedro Henrique Rodrigues Ross"
            fill
            className="object-cover rounded-full border-4 border-[var(--fundo-principal)] outline-3 outline-[var(--destaque)]"
          />
        </div>

        {/* Nome e Descrição */}
        <h1 className="text-center text-[var(--destaque)] text-[1.4em] font-poppins font-semibold mb-2">
          Pedro Henrique Rodrigues Ross
        </h1>
        
        <p className="text-center text-[0.85em] leading-relaxed mb-1.5">
          Desenvolvedor Full-Stack (Mobile & Web), com foco em Nest.js, Next.js, React Native, React, Node.js, Python, PostgreSQL e desenvolvimento de REST APIs. Atualmente atuo como freelancer, criando projetos web e mobile sob medida.
        </p>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-4 mt-2.5 text-[1.4em]">
          <a 
            href="mailto:pedrohenriquerodriguesross@gmail.com" 
            className="text-[var(--texto-mutado)] hover:text-[var(--destaque)] hover:scale-110 transition-all duration-300"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/pedro-ross" 
            target="_blank" 
            rel="nofollow"
            className="text-[var(--texto-mutado)] hover:text-[var(--destaque)] hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/PedroRossZny" 
            target="_blank" 
            rel="nofollow"
            className="text-[var(--texto-mutado)] hover:text-[var(--destaque)] hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.instagram.com/pedro.rzny/" 
            target="_blank" 
            rel="nofollow"
            className="text-[var(--texto-mutado)] hover:text-[var(--destaque)] hover:scale-110 transition-all duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </article>
    </motion.section>
  );
}