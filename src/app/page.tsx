export default function Home() {
  return (
    <div className="container mx-auto px-6 py-20">
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
          Pedro Henrique
        </h1>
        <p className="text-xl text-[var(--texto-mutado)] max-w-2xl">
          Desenvolvedor Full-Stack focado em arquitetura, escalabilidade e soluções reais.
        </p>
      </section>

      {/* Espaçadores apenas para testar o scroll e o menu fixo */}
      <div id="tecnologias" className="h-screen flex items-center justify-center border-t border-[var(--borda)] mt-20">
        <h2 className="text-3xl font-poppins">Seção de Tecnologias</h2>
      </div>
      
      <div id="projetos" className="h-screen flex items-center justify-center border-t border-[var(--borda)]">
        <h2 className="text-3xl font-poppins">Seção de Projetos</h2>
      </div>
    </div>
  );
}