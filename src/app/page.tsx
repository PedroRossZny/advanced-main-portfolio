import ProfileCard from "@/components/ProfileCard";
import TechSection from "@/components/TechSection";

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
        
        {/* Renderiza a seção de tecnologias aqui */}
        <TechSection />

        {/* Espaço para os Projetos que virão a seguir */}
        <div id="projetos" className="min-h-[400px]">
           {/* Próximo passo: Componente de Projetos aqui */}
        </div>
        
      </section>
    </main>
  );
}