"use client";

import { Laptop } from "lucide-react";
import { motion } from "framer-motion";

const TECH_DATA = [
  {
    category: "Frontend & Mobile",
    techs: [
      { name: "HTML5", icon: "devicon-html5-plain", filter: "html5" },
      { name: "CSS3", icon: "devicon-css3-plain", filter: "css3" },
      { name: "JavaScript", icon: "devicon-javascript-plain", filter: "javascript" },
      { name: "Next.js", icon: "devicon-nextjs-plain", filter: "nextjs" },
      { name: "TypeScript", icon: "devicon-typescript-plain", filter: "typescript" },
      { name: "React Native", icon: "devicon-reactnative-original", filter: "reactnative" },
      { name: "Expo", icon: "devicon-expo-original", filter: "expo" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", filter: "tailwindcss" },
    ]
  },
  {
    category: "Backend & Banco de Dados",
    techs: [
      { name: "Node.js", icon: "devicon-nodejs-plain", filter: "nodejs" },
      { name: "Python", icon: "devicon-python-plain", filter: "python" },
      { name: "NestJS", icon: "devicon-nestjs-original", filter: "nestjs" },
      { name: "Express.js", icon: "devicon-express-original", filter: "express" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", filter: "postgresql" },
      { name: "SQLite", icon: "devicon-sqlite-plain", filter: "sqlite" },
      { name: "Sequelize", icon: "devicon-sequelize-plain", filter: "sequelize" },
    ]
  },
  {
    category: "Ferramentas & Extras",
    techs: [
      { name: "Git", icon: "devicon-git-plain", filter: "git" },
      { name: "GitHub", icon: "devicon-github-original", filter: "github" },
      { name: "Styled Components", icon: "devicon-styledcomponents-plain", filter: "styledcomponents" },
      { name: "Mobile Core", icon: "devicon-reactnavigation-original", filter: "ecossistemareactnative" },
      { name: "Axios", icon: "devicon-axios-plain", filter: "axios" },
      { name: "UI Libs", icon: "devicon-materialui-plain", filter: "recursosui" },
    ]
  }
];

export default function TechSection() {
  return (
    <article id="tecnologias" className="bg-[var(--fundo-card)] border border-[var(--borda)] p-6 mb-6 rounded-xl transition-colors duration-400">
      <header className="flex flex-col md:flex-row md:items-center gap-2 mb-8 border-b-2 border-[var(--borda)] pb-3">
        <div className="flex items-center gap-2 text-[var(--destaque)]">
          <Laptop size={24} />
          <h2 className="text-xl font-poppins font-semibold uppercase tracking-wide">
            Tecnologias
          </h2>
        </div>
        <span className="text-[0.75rem] text-[var(--texto-mutado)] italic md:ml-2">
          (Clique em uma para filtrar os projetos)
        </span>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {TECH_DATA.map((group, idx) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col gap-4 bg-[var(--fundo-principal)] border border-[var(--borda)] rounded-xl p-4 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-[var(--destaque)] font-poppins font-semibold text-[1.05em] border-b-2 border-[var(--borda)] pb-2">
              {group.category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {group.techs.map((tech) => (
                <button
                  key={tech.filter}
                  className="flex items-center gap-2 bg-[var(--fundo-card)] text-[var(--texto)] border border-[var(--borda)] px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:border-[var(--destaque)] hover:text-[var(--destaque)] hover:-translate-y-1 cursor-pointer"
                >
                  <i className={`${tech.icon} text-lg`}></i>
                  {tech.name}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </article>
  );
}