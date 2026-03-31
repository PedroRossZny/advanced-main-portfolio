"use client";

export default function Footer() {
  // Pegando o ano atual automaticamente para o copyright
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center min-h-[25px] px-[15px] text-[0.75em] text-[var(--texto-mutado)] bg-transparent pb-2">
      <p className="m-0">
        <span>Desenvolvido por </span>
        <a 
          href="https://github.com/PedroRossZny" 
          target="_blank" 
          rel="nofollow"
          className="text-[var(--destaque)] no-underline ml-1 hover:underline transition-all"
        >
          Pedro Ross
        </a>
        {" "}&copy; {anoAtual}
      </p>
    </footer>
  );
}