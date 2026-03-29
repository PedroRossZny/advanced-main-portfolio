import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    /* O 'main' agora assume o papel do seu CSS original:
       - grid-cols-1 para celular (empilhado)
       - grid-cols-[320px_1fr] para desktop (sidebar fixa)
    */
    <main className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 w-[98%] max-w-[1500px] mx-auto mt-2.5 md:h-[calc(100vh-90px)] p-4 md:p-0">
      
      {/* Coluna da Esquerda: Sua Ficha de Perfil */}
      <ProfileCard />

      {/* Coluna da Direita: Onde o conteúdo (Tecnologias, Projetos, etc) vai rolar */}
      <section id="detalhes" className="md:overflow-y-auto pr-0 md:pr-4 pb-10 scroll-smooth">
        
        {/* Seção Sobre / Introdução (Opcional, baseada no que tínhamos no teste) */}
        <article className="bg-[var(--fundo-card)] border border-[var(--borda)] p-6 mb-6 rounded-xl transition-colors duration-400">
          <h2 className="text-[var(--destaque)] text-xl font-poppins font-semibold mb-6 border-b-2 border-[var(--borda)] pb-2.5">
            Sobre o Projeto
          </h2>
          <p className="text-[var(--texto)] leading-relaxed">
            Bem-vindo à nova versão do meu portfólio. Esta aplicação foi migrada para 
            <strong> Next.js 15</strong> para garantir a melhor performance e SEO, 
            mantendo toda a interatividade da versão original.
          </p>
        </article>

        {/* Espaços reservados para as seções que vamos migrar a seguir */}
        <div id="tecnologias" className="min-h-[400px]">
           {/* Próximo passo: Componente de Tecnologias aqui */}
        </div>

        <div id="projetos" className="min-h-[400px]">
           {/* Depois: Componente de Projetos aqui */}
        </div>
        
      </section>
    </main>
  );
}