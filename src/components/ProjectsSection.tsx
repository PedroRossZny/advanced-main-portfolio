"use client";

import ProjectCard from "./ProjectCard";
import { Wrench, Mail } from "lucide-react";
import { FaYoutube, FaInstagram, FaTiktok, FaFilePdf } from "react-icons/fa6";

export default function ProjectsSection() {
  return (
    <article id="projetos" className="bg-[var(--fundo-card)] border border-[var(--borda)] p-6 mb-10 rounded-xl transition-colors duration-400 min-h-[400px]">
      <header className="flex items-center justify-between mb-6 border-b-2 border-[var(--borda)] pb-3">
        <div className="flex items-center gap-2 text-[var(--destaque)]">
          <Wrench size={24} />
          <h2 className="text-xl font-poppins font-semibold uppercase tracking-wide">
            Projetos
          </h2>
          <span id="filtro-ativo" className="text-sm font-normal text-[var(--texto-mutado)] ml-2"></span>
        </div>
        {/* O botão de limpar filtro que ativaremos depois */}
        <button id="limpar-filtro" className="hidden text-[var(--texto-mutado)] hover:text-red-500 hover:scale-110 transition-all cursor-pointer">
          Limpar Filtro
        </button>
      </header>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        
        {/* --- 1. LABORWAZE --- */}
        <ProjectCard
          title="Projeto LaborWaze"
          summary="Empresa focada no desenvolvimento de sistemas web e mobile personalizados e eficientes."
          imageSrc="/images/projects/laborwaze-project.png"
          iconSrc="/images/icons/laborwaze-icon.png"
          techs=""
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre a LaborWaze</h4>
          <p className="mb-2.5 leading-relaxed">A <strong>LaborWaze</strong> é uma iniciativa voltada ao desenvolvimento de soluções digitais modernas, com foco na criação de sistemas web e aplicações mobile personalizadas. O projeto nasceu com a proposta de aplicar tecnologia de forma estratégica para ajudar empresas e profissionais a organizarem processos, modernizarem rotinas de trabalho e tornarem suas operações mais eficientes através de ferramentas digitais.</p>
          <p className="mb-4 leading-relaxed">Mais do que apenas criar sistemas, a LaborWaze busca desenvolver soluções bem estruturadas, pensadas para resolver problemas reais e gerar impacto positivo para quem utiliza essas tecnologias.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Uma iniciativa que vai além do desenvolvimento</h4>
          <p className="mb-2.5 leading-relaxed">Embora o desenvolvimento de software seja o núcleo da iniciativa, a LaborWaze também se posiciona como um espaço de experimentação tecnológica e compartilhamento de conhecimento. A ideia é documentar projetos, explorar novas ideias e mostrar como sistemas são construídos na prática.</p>
          <p className="mb-4 leading-relaxed">Por isso, o projeto também mantém presença em plataformas de conteúdo onde são publicados vídeos, demonstrações de projetos, bastidores do desenvolvimento e conteúdos relacionados à área de programação e tecnologia.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Presença nas redes</h4>
          <p className="mb-4 leading-relaxed">Os conteúdos produzidos pela LaborWaze são publicados em diferentes plataformas digitais, permitindo acompanhar o desenvolvimento dos projetos.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://www.youtube.com/@LaborWaze" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#ff0000] hover:-translate-y-1 transition-transform">
              <FaYoutube size={18} /> YouTube
            </a>
            <a href="https://www.instagram.com/laborwaze/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#e1306c] hover:-translate-y-1 transition-transform">
              <FaInstagram size={18} /> Instagram
            </a>
            <a href="https://www.tiktok.com/@laborwazecorp" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-black hover:-translate-y-1 transition-transform">
              <FaTiktok size={18} /> TikTok
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 mt-6">Contato</h4>
          <p className="mb-4 leading-relaxed">Para dúvidas, propostas ou qualquer tipo de contato, é possível entrar em contato pelo e-mail abaixo:</p>
          <div className="flex flex-wrap gap-3 my-4">
            <a href="mailto:laborwaze@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#ea4335] hover:-translate-y-1 transition-transform">
              <Mail size={18} /> Gmail
            </a>
          </div>
        </ProjectCard>

        {/* --- 2. PAINEL DE CHAMADAS --- */}
        <ProjectCard
          title="Painel de Chamadas"
          summary="Sistema full-stack desenvolvido para otimizar o fluxo de atendimento em hospitais."
          imageSrc="/images/projects/painel-project.png"
          iconSrc="/images/icons/painel-chamadas-icon.png"
          techs="nextjs typescript tailwindcss nestjs postgresql git github"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>
          
          <div className="block">
            {/* O Tailwind traduziu perfeitamente o seu float:right do CSS original! */}
            <div className="w-full lg:w-[420px] lg:float-right lg:ml-6 mb-4 rounded-xl overflow-hidden shadow-lg aspect-video border border-[var(--borda)]">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/C7DnWuI7jQk?si=QTCqyZGk8PGquJ_d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <p className="mb-2.5 leading-relaxed">O <strong>Painel de Chamadas</strong> é um sistema desenvolvido para organizar e modernizar o fluxo de atendimento em hospitais, clínicas e unidades de saúde. A proposta do projeto é tornar o processo de chamadas de pacientes mais claro, eficiente e transparente tanto para os profissionais quanto para as pessoas que aguardam atendimento.</p>
            <p className="mb-2.5 leading-relaxed">Através da interface do sistema, o profissional pode registrar e realizar chamadas de forma simples, enviando as informações diretamente para um painel digital de exibição em tempo real.</p>
            <p className="mb-4 leading-relaxed">Para demonstrar o funcionamento do sistema na prática, foi produzido um vídeo explicativo mostrando o fluxo completo de utilização da plataforma. Esse vídeo está disponível no canal da LaborWaze e apresenta o funcionamento do painel e da dinâmica de chamadas.</p>
            <div className="clear-both"></div>
          </div>

          <p className="mb-2.5 leading-relaxed">O sistema foi projetado para ser simples e eficiente para o profissional responsável pelo atendimento. Após realizar um cadastro inicial com seu nome, área de atuação e sala de atendimento, o usuário pode iniciar as chamadas diretamente pela interface do sistema.</p>
          <p className="mb-4 leading-relaxed">Ao inserir o nome do paciente e confirmar a chamada, as informações são enviadas imediatamente ao painel de exibição. O sistema também possui controle de múltiplas chamadas, permitindo realizar segunda e terceira tentativas com diferenciação visual no painel.</p>

          {/* Botão de Download PDF */}
          <div className="flex flex-col sm:flex-row items-center gap-5 my-8 p-5 rounded-xl bg-[var(--fundo-card)] border border-[var(--borda)]">
            <div className="text-4xl text-red-500 shrink-0">
              <FaFilePdf />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold mb-1 text-[var(--texto)]">Download oficial do sistema</p>
              <p className="text-sm mb-3 text-[var(--texto-mutado)]">A documentação completa descreve o funcionamento do sistema, estrutura das chamadas, painel de exibição e detalhes técnicos do projeto.</p>
              <a href="/docs/documentacao-painel-chamadas.pdf" download className="inline-block px-4 py-2 rounded-lg bg-[#1e66ff] text-white text-sm font-semibold hover:-translate-y-1 transition-transform">
                Baixar Documentação (PDF)
              </a>
            </div>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Fluxo e organização do atendimento</h4>
          <p className="mb-2.5 leading-relaxed">Todas as chamadas realizadas ficam registradas em um histórico completo, permitindo acompanhar o fluxo de atendimento ao longo do dia. Essas informações ajudam a entender a dinâmica do atendimento e permitem consultar registros anteriores quando necessário.</p>
          <p className="mb-6 leading-relaxed">O sistema também conta com mecanismos de controle para evitar múltiplos cliques acidentais e excesso de chamadas consecutivas, garantindo um ambiente mais organizado tanto no painel quanto na experiência dos pacientes que aguardam atendimento.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <p className="mb-4 leading-relaxed">O Painel de Chamadas foi desenvolvido utilizando uma arquitetura full-stack moderna, voltada para desempenho, organização de código e facilidade de manutenção.</p>

          {/* Grid de Tecnologias */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Next.js</li><li>TypeScript</li><li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Backend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>NestJS</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Banco de Dados</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Ferramentas</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Git</li><li>GitHub</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

      </div>
    </article>
  );
}