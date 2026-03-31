"use client";

import ProjectCard from "./ProjectCard";
import { Wrench, Mail } from "lucide-react";
import { FaYoutube, FaInstagram, FaTiktok, FaFilePdf, FaGithub , FaStar} from "react-icons/fa6";

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

        {/* --- 3. SPACEX --- */}
        <ProjectCard
          title="SpaceX Launch Explorer"
          summary="App mobile em React Native que exibe lançamentos da SpaceX e permite salvar favoritos."
          imageSrc="/images/projects/spacex-project.png"
          iconSrc="/images/icons/space-icon.png"
          techs="reactnative expo javascript styledcomponents git github axios ecossistemareactnative"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>
          <p className="mb-2.5 leading-relaxed">O <strong>SpaceX App</strong> é um aplicativo mobile desenvolvido para explorar dados públicos de lançamentos espaciais utilizando a API oficial da SpaceX. O objetivo do projeto foi construir uma aplicação completa em React Native, permitindo que o usuário navegue pelos lançamentos, visualize informações detalhadas das missões e organize seus lançamentos favoritos.</p>
          <p className="mb-2.5 leading-relaxed">O aplicativo consome dados da API v4 da SpaceX e apresenta uma lista de lançamentos ordenados do mais recente para o mais antigo. Cada item da lista permite acessar uma tela de detalhes contendo informações sobre a missão, o foguete utilizado e o local de lançamento.</p>
          <p className="mb-2.5 leading-relaxed">Além da visualização das missões, o sistema permite que cada usuário crie uma conta simples dentro do aplicativo e salve lançamentos como favoritos. Esses dados são armazenados localmente no dispositivo, garantindo uma experiência personalizada para cada usuário.</p>
          <p className="mb-4 leading-relaxed">Todo o código do projeto está disponível publicamente para consulta no repositório do GitHub.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/SpaceX-app" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Funcionalidades principais</h4>
          <p className="mb-2.5 leading-relaxed">O aplicativo foi desenvolvido com foco em navegação simples e experiência fluida para o usuário. Entre as principais funcionalidades implementadas estão:</p>
          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li>Listagem completa de lançamentos da SpaceX</li>
            <li>Busca por nome da missão</li>
            <li>Visualização de detalhes do lançamento</li>
            <li>Informações do foguete e da base de lançamento</li>
            <li>Sistema de cadastro e login de usuários</li>
            <li>Favoritos personalizados por usuário</li>
            <li>Tema escuro para melhor experiência visual</li>
          </ul>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Arquitetura do aplicativo</h4>
          <p className="mb-2.5 leading-relaxed">A estrutura do projeto foi organizada seguindo boas práticas de separação de responsabilidades, com diretórios específicos para telas, navegação, serviços de API, componentes reutilizáveis e estilos. Essa organização facilita a manutenção do código e permite a expansão do aplicativo com novas funcionalidades no futuro.</p>
          <p className="mb-6 leading-relaxed">As requisições para a API da SpaceX são realizadas através de um serviço dedicado, responsável por buscar os lançamentos e também carregar informações adicionais como dados do foguete e da plataforma de lançamento.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Gerenciamento de dados</h4>
          <p className="mb-2.5 leading-relaxed">Os dados dos lançamentos são obtidos diretamente da API pública da SpaceX. Informações adicionais como dados do foguete e do local de lançamento são carregadas de forma paralela para enriquecer a tela de detalhes da missão.</p>
          <p className="mb-6 leading-relaxed">As informações de autenticação e favoritos são armazenadas localmente utilizando AsyncStorage, permitindo que cada usuário mantenha sua lista de missões favoritas mesmo após fechar o aplicativo.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>React Native</li><li>Expo</li><li>JavaScript</li><li>Styled Components</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Ferramentas</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Git</li><li>GitHub</li><li>Expo Router</li><li>React Native Reanimated</li><li>Axios</li><li>AsyncStorage</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 4. SOS AMBIENTE --- */}
        <ProjectCard
          title="S.O.S Ambiente - Eco Actions & CO₂ Tracker"
          summary="App mobile em React Native para registrar hábitos sustentáveis e calcular emissões de CO₂."
          imageSrc="/images/projects/sos-ambiente-project.png"
          iconSrc="/images/icons/ambiente-icon.png"
          techs="reactnative expo javascript git github ecossistemareactnative"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>
          <p className="mb-2.5 leading-relaxed">O <strong>S.O.S Ambiente</strong> é um aplicativo mobile desenvolvido com React Native e Expo com o objetivo de incentivar hábitos sustentáveis no dia a dia. A proposta do projeto é permitir que os usuários registrem ações ecológicas realizadas diariamente e acompanhem seu impacto ambiental ao longo do tempo.</p>
          <p className="mb-2.5 leading-relaxed">A aplicação oferece uma interface simples e acessível onde o usuário pode registrar atividades sustentáveis como reciclagem, economia de energia ou redução do uso de plástico. Todas as ações ficam registradas em um histórico que pode ser consultado posteriormente, permitindo acompanhar a evolução das práticas ambientais adotadas.</p>
          <p className="mb-4 leading-relaxed">O código completo do projeto está disponível publicamente no GitHub, permitindo visualizar toda a estrutura da aplicação, organização das telas e implementação das funcionalidades.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/SOS-Ambiente" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Registro de ações sustentáveis</h4>
          <p className="mb-2.5 leading-relaxed">O aplicativo permite registrar diferentes tipos de ações ecológicas realizadas no cotidiano. Entre elas estão atividades como reciclagem de materiais, economia de energia elétrica, uso consciente de recursos naturais e redução do consumo de plástico.</p>
          <p className="mb-6 leading-relaxed">Cada atividade registrada é adicionada ao histórico do usuário permitindo acompanhar todas as ações realizadas ao longo do tempo. Caso necessário, o usuário também pode remover registros específicos para manter o histórico organizado.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Controle de emissões de carbono</h4>
          <p className="mb-2.5 leading-relaxed">Além do registro de ações sustentáveis, o aplicativo também possui um sistema simples de acompanhamento de emissões de carbono. O usuário pode registrar atividades relacionadas ao transporte ou ao uso de eletrônicos e visualizar estimativas de emissão de CO₂ associadas a essas ações.</p>
          <p className="mb-6 leading-relaxed">A aplicação também disponibiliza um pequeno cálculo de impacto ambiental, onde o usuário pode inserir informações como distância percorrida de carro ou tempo de uso de dispositivos eletrônicos, permitindo gerar uma estimativa aproximada da emissão de carbono.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Interface e navegação</h4>
          <p className="mb-2.5 leading-relaxed">A interface foi desenvolvida com foco em simplicidade e facilidade de uso em dispositivos móveis. O aplicativo possui uma splash screen inicial, navegação entre telas organizada e elementos visuais que reforçam a temática ambiental do projeto.</p>
          <p className="mb-6 leading-relaxed">A navegação entre as telas é realizada de forma fluida, permitindo acessar rapidamente o registro de ações, o histórico de atividades e as funcionalidades de cálculo ambiental.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>React Native</li><li>Expo</li><li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Ferramentas</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Git</li><li>GitHub</li><li>React Navigation</li><li>Context API</li><li>React Native Animated</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 5. SMOKE COFFEE --- */}
        <ProjectCard
          title="Smoke Coffee - Mobile Coffee Shop App"
          summary="App mobile de cafeteria em React Native com login, cardápio, carrinho e pagamento simulado."
          imageSrc="/images/projects/smoke-coffee-project.png"
          iconSrc="/images/icons/cafe-icon.png"
          techs="reactnative expo javascript git github ecossistemareactnative"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>
          <p className="mb-2.5 leading-relaxed">O <strong>Smoke Coffee</strong> é um aplicativo mobile de cafeteria desenvolvido com React Native e Expo. O projeto simula uma experiência completa de pedidos digitais, permitindo que o usuário explore um cardápio com imagens e preços, adicione produtos ao carrinho e finalize pedidos diretamente pelo aplicativo.</p>
          <p className="mb-2.5 leading-relaxed">O sistema inclui autenticação de usuários com cadastro e login, além de um perfil editável onde o usuário pode atualizar seus dados pessoais. As informações são armazenadas localmente no dispositivo utilizando AsyncStorage, permitindo manter sessões e dados mesmo após o aplicativo ser fechado.</p>
          <p className="mb-2.5 leading-relaxed">Durante o processo de compra, o usuário pode selecionar produtos visualizar o total do pedido e realizar um checkout simulado com opções de pagamento via Pix ou cartão. Após a confirmação do pagamento, o sistema gera um número de pedido e envia uma notificação indicando que o pedido está pronto para retirada.</p>
          <p className="mb-4 leading-relaxed">O código completo do projeto está disponível publicamente no GitHub, permitindo visualizar a estrutura da aplicação, a organização das telas e a implementação das funcionalidades.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/SmokeCoffee" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Funcionalidades principais</h4>
          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li>Cadastro e login de usuários</li>
            <li>Cardápio com produtos, imagens e preços</li>
            <li>Adição e remoção de itens no carrinho</li>
            <li>Cálculo automático do total do pedido</li>
            <li>Checkout com opções de pagamento via Pix ou cartão</li>
            <li>Geração de número de pedido após pagamento</li>
            <li>Perfil do usuário com edição de informações</li>
            <li>Notificações push simulando a finalização do pedido</li>
          </ul>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Arquitetura do aplicativo</h4>
          <p className="mb-2.5 leading-relaxed">A navegação do aplicativo foi estruturada utilizando React Navigation com Stack Navigator, organizando o fluxo entre as telas de splash, autenticação cardápio, pagamento e perfil do usuário.</p>
          <p className="mb-6 leading-relaxed">A aplicação também utiliza dados mockados para representar os produtos disponíveis no cardápio, permitindo simular uma experiência completa de compra sem depender de um backend ou API externa.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>React Native</li><li>Expo</li><li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Ferramentas</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Git</li><li>GitHub</li><li>React Navigation</li><li>AsyncStorage</li><li>Expo Notifications</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 6. AVALIA AQUI --- */}
        <ProjectCard
          title="Avalia Aqui — Plataforma Full-Stack de Avaliações"
          summary="Plataforma web full-stack para avaliar estabelecimentos com notas, comentários e ranking."
          imageSrc="/images/projects/avalia-aqui-project.png"
          iconSrc="/images/icons/avaliacao-icon.png"
          techs="html5 css3 javascript nodejs express sqlite sequelize git github"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>
          
          <div className="block">
            <div className="w-full lg:w-[420px] lg:float-right lg:ml-6 mb-4 rounded-xl overflow-hidden shadow-lg aspect-video border border-[var(--borda)]">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/7NlSEaWKleI?si=xTorCE68Dj8ct8Ns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <p className="mb-2.5 leading-relaxed">O <strong>Avalia Aqui</strong> é uma plataforma web desenvolvida para permitir que usuários avaliem e comentem sobre diferentes estabelecimentos. O projeto nasceu com o objetivo de criar um sistema completo de reviews, combinando um design responsivo e original com uma arquitetura de dados robusta.</p>
            <p className="mb-2.5 leading-relaxed">Através de uma interface limpa e focada na experiência do usuário (Mobile First), a plataforma oferece um sistema de votação por estrelas, um ranking dinâmico ordenado por notas e uma seção de comentários encadeados, onde os usuários podem interagir curtindo e respondendo opiniões de terceiros.</p>
            <p className="mb-4 leading-relaxed">No vídeo ao lado, é possível conferir uma demonstração prática da plataforma em funcionamento, navegando pelas telas de votação, ranking e comentários.</p>
            <div className="clear-both"></div>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Arquitetura e Versões</h4>
          <p className="mb-2.5 leading-relaxed">Um dos grandes destaques deste projeto é a sua construção estrutural. A interface (Frontend) foi inteiramente desenvolvida utilizando <strong>HTML, CSS e JavaScript puro (Vanilla JS)</strong>, sem o uso de frameworks, garantindo total controle sobre o DOM, estilos, criação do carrossel e animações interativas.</p>
          <p className="mb-2.5 leading-relaxed">O projeto foi dividido em duas abordagens técnicas distintas para demonstrar versatilidade:</p>
          
          <ul className="list-disc ml-6 mb-6 space-y-2 text-[var(--texto)] leading-relaxed">
            <li><strong>Versão Frontend-Only:</strong> Uma versão focada apenas na interface, onde a persistência de dados (votos, curtidas e comentários) é simulada e gerenciada localmente utilizando o <code>localStorage</code> do navegador.</li>
            <li><strong>Versão Full-Stack:</strong> A evolução da plataforma, integrada a uma API RESTful construída com <strong>Node.js e Express</strong>. O gerenciamento do banco de dados relacional é feito através do ORM <strong>Sequelize</strong> utilizando <strong>SQLite</strong> (para desenvolvimento e demonstração), garantindo operações seguras e persistentes de CRUD.</li>
          </ul>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5 border-t border-[var(--borda)] pt-4">Identidade e Segurança</h4>
          <p className="mb-4 leading-relaxed">Para garantir a integridade das avaliações sem forçar a criação de contas complexas, o sistema implementa uma estratégia de identificação anônima. Um identificador único (UUID) é gerado e salvo no navegador do usuário, assegurando que cada pessoa possa avaliar um estabelecimento apenas uma vez, mas permitindo que editem seus próprios votos e comentários posteriormente.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://avalia-aqui.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#723AD3] hover:-translate-y-1 transition-transform">
              <FaStar size={18} /> Avalia Aqui Demo
            </a>
            <a href="https://github.com/PedroRossZny/Site-Avaliacoes-Frontend" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório Frontend
            </a>
            <a href="https://github.com/PedroRossZny/Site-Avaliacoes-Complete" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório Full-Stack
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>HTML5</li><li>CSS3</li><li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Backend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Node.js</li><li>Express.js</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Banco de Dados</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>SQLite</li><li>Sequelize</li>
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

        {/* --- 7. PORTFÓLIO --- */}
        <ProjectCard
          title="Projeto Portfólio"
          summary="Portfólio Pessoal desenvolvido com HTML, CSS & JavaScript focado em responsividade."
          imageSrc="/images/projects/portfolio-project.png"
          iconSrc="/images/icons/portfolio-project-icon.png"
          techs="html5 css3 javascript git github"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>

          <p className="mb-2.5 leading-relaxed">Este projeto representa o marco final do curso de HTML5 e CSS3, servindo como uma vitrine para consolidar os fundamentos do desenvolvimento web front-end. Ele foi concebido para ser um portfólio funcional, atuando como um {'"'}hub{'"'} que organiza e apresenta diversos outros projetos de estudo desenvolvidos ao longo da formação.</p>
          <p className="mb-2.5 leading-relaxed">O foco principal foi a criação de uma interface intuitiva e totalmente responsiva, garantindo que o currículo e os projetos anexos sejam visualizados com clareza em qualquer dispositivo, desde telas mobile pequenas até monitores desktop.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Destaques Técnicos</h4>

          <p className="mb-2.5 leading-relaxed">A construção deste site permitiu a aplicação prática de conceitos essenciais para a qualidade de software no front-end:</p>

          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li><strong>Semântica e SEO:</strong> Utilização rigorosa de tags HTML5 semânticas para melhorar a acessibilidade e o ranqueamento em motores de busca.</li>
            <li><strong>Design Responsivo:</strong> Implementação de layouts adaptáveis utilizando Flexbox e Media Queries, assegurando a integridade visual em múltiplas resoluções.</li>
            <li><strong>Gerenciamento de Temas:</strong> Desenvolvimento de uma lógica em JavaScript para alternância entre modo claro e escuro (Dark/Light Mode), com persistência de dados no <code>localStorage</code> do navegador.</li>
            <li><strong>Interatividade e Estilo:</strong> Aplicação de variáveis CSS para facilitar a manutenção de cores, além do uso de animações de transição e scroll suave para uma navegação mais fluida.</li>
          </ul>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/portfolio-project" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>HTML5</li><li>CSS3</li><li>JavaScript</li>
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


        {/* --- 8. TELA DE LOGIN --- */}
        <ProjectCard
          title="Tela de Login"
          summary="Interface de login responsiva com HTML5 e CSS3, seguindo abordagem Mobile First."
          imageSrc="/images/projects/login-project.png"
          iconSrc="/images/icons/login-icon.png"
          techs="html5 css3 git github recursosui"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Login Project</strong> é uma interface de autenticação moderna, desenvolvida com o objetivo de aplicar as melhores práticas de design responsivo e experiência do usuário (UX). O projeto foca em uma estética limpa, utilizando uma paleta de cores equilibrada entre tons de verde e lilás, combinada com elementos visuais que garantem uma navegação intuitiva.</p>
          <p className="mb-2.5 leading-relaxed">A interface foi construída seguindo a estratégia <strong>Mobile-First</strong>, onde a estrutura é pensada inicialmente para dispositivos móveis e se expande de forma fluida para tablets e desktops, reorganizando seus elementos para aproveitar melhor o espaço disponível em telas maiores.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Destaques Técnicos e Responsividade</h4>

          <p className="mb-2.5 leading-relaxed">O grande diferencial técnico deste projeto está na manipulação avançada de layouts através de CSS puro:</p>

          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li><strong>Arquitetura Mobile-First:</strong> O design começa em uma coluna única para celulares e evolui para um layout em duas colunas (Side-by-Side) em resoluções maiores, utilizando Media Queries estratégicas para alternar a posição da imagem e do formulário.</li>
            <li><strong>Visual Moderno com CSS3:</strong> Uso de gradientes lineares (Linear Gradients) complexos no background, bordas arredondadas e sombras (Box Shadows) que conferem profundidade e um aspecto profissional à interface.</li>
            <li><strong>Interatividade e Transições:</strong> Implementação de efeitos de <code>transition</code> para suavizar as mudanças de estado da aplicação e pseudo-classes como <code>:focus-within</code>, que melhoram o feedback visual quando o usuário interage com os campos de entrada.</li>
            <li><strong>Validação de Formulários:</strong> Utilização de atributos nativos do HTML5 (<code>required</code>, <code>minlength</code>, <code>maxlength</code>) para garantir a integridade dos dados antes do envio, além do uso de tipos específicos de input (email e password) para acionar o teclado correto em dispositivos móveis.</li>
          </ul>

          <p className="mb-2.5 leading-relaxed">Para a iconografia, foi integrada a biblioteca <strong>Material Icons</strong> do Google, garantindo que os campos de login e senha tenham identificadores visuais universais e acessíveis.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/login-project" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>
          
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>HTML5</li><li>CSS3</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Ferramentas</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Git</li><li>GitHub</li><li>Material Icons</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 9. REDES SOCIAIS --- */}
        <ProjectCard
          title="Redes Sociais"
          summary="Interface web interativa que simula um smartphone com navegação entre perfis sociais."
          imageSrc="/images/projects/social-project.png"
          iconSrc="/images/icons/social-icon.png"
          techs="html5 css3 git github"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Projeto Redes Sociais</strong> é um experimento visual interativo que recria a experiência de uso de um smartphone diretamente no navegador. O objetivo foi criar uma moldura realista (Mockup) de um iPhone onde o usuário pode navegar entre diferentes perfis sociais de forma fluida.</p>
          <p className="mb-2.5 leading-relaxed">Através de um menu lateral externo, o visitante interage com o dispositivo, fazendo com que o conteúdo dentro da {'"'}tela{'"'} do celular mude dinamicamente, simulando a abertura de aplicativos e páginas reais.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Destaques Técnicos e Composição</h4>

          <p className="mb-2.5 leading-relaxed">A execução deste projeto exigiu um controle preciso de design e arquitetura front-end:</p>

          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li><strong>Navegação via Iframes:</strong> Implementação inteligente de <code>iframes</code> utilizando o atributo <code>name</code> para carregar múltiplas páginas internas (Home, Instagram, GitHub e YouTube) sem a necessidade de recarregar a página principal.</li>
            <li><strong>Posicionamento Absoluto e Camadas:</strong> Uso estratégico de <code>position: absolute</code> e <code>transform: translate</code> para centralizar o dispositivo na tela e alinhar o conteúdo interno exatamente nos limites da moldura do aparelho.</li>
            <li><strong>Estilização de Interface (UI):</strong> Criação de botões flutuantes com efeitos de <code>hover</code>, <code>box-shadow</code> e <code>transform</code>, proporcionando uma sensação de profundidade e feedback imediato ao usuário.</li>
            <li><strong>Refinamento de UX:</strong> Personalização da barra de rolagem via <code>::-webkit-scrollbar</code> para manter a estética minimalista dentro do simulador, ocultando elementos desnecessários e focando no conteúdo visual.</li>
          </ul>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/social-project" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>HTML5</li><li>CSS3</li>
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

        {/* --- 10. CORDEL MODERNO --- */}
        <ProjectCard
          title="Cordel Moderno"
          summary="Página web imersiva que utiliza Parallax para criar profundidade visual durante a rolagem."
          imageSrc="/images/projects/cordel-project.png"
          iconSrc="/images/icons/cordel-icon.png"
          techs="html5 css3 git github recursosui"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Cordel Moderno</strong> é uma página web interativa desenvolvida com o objetivo de unir a literatura tradicional à tecnologia moderna através do design de interface. O projeto foca em proporcionar uma experiência de leitura imersiva, utilizando a rolagem da página (scroll) como elemento ativo da narrativa.</p>
          <p className="mb-2.5 leading-relaxed">A página foi construída para demonstrar como a combinação harmoniosa entre tipografia, espaçamento e efeitos visuais pode gerar um forte impacto estético e reter a atenção do usuário, mantendo o código limpo e sem a necessidade de scripts externos.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Destaques Técnicos e Experiência Visual</h4>

          <p className="mb-2.5 leading-relaxed">A execução técnica deste projeto destaca o domínio de recursos avançados e modernos do CSS3:</p>

          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li><strong>Efeito Parallax Nativo:</strong> Criação de uma ilusão de profundidade (3D) durante a rolagem da página utilizando puramente a propriedade <code>background-attachment: fixed</code> combinada com o sombreamento interno de seções.</li>
            <li><strong>Tipografia Fluida e Responsiva:</strong> Uso estratégico de Viewport Units (<code>vw</code> e <code>vh</code>) e medidas relativas (<code>em</code>). Isso garante que o tamanho das fontes e os espaçamentos escalem proporcionalmente e de forma fluida em qualquer dispositivo, do mobile ao monitor ultrawide.</li>
            <li><strong>Integração de Web Fonts:</strong> Consumo da API do Google Fonts via <code>@import</code> para carregar tipografias específicas que conversam com o tema da poesia (como fontes cursivas e de destaque).</li>
            <li><strong>Arquitetura CSS:</strong> Implementação de Variáveis CSS (Custom Properties no <code>:root</code>) para gerenciar o sistema de tipografia de ponta a ponta, facilitando futuras manutenções e escalabilidade do layout.</li>
          </ul>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/project-cordel" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>HTML5</li><li>CSS3</li>
              </ul>
            </div>
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Ferramentas</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Git</li><li>GitHub</li><li>Google Fonts</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 11. HISTÓRIA DO ANDROID --- */}
        <ProjectCard
          title="Projeto História do Android"
          summary="Artigo web responsivo sobre o mascote Android e versões do sistema, criado com HTML5 e CSS3."
          imageSrc="/images/projects/android-project.png"
          iconSrc="/images/icons/android-icon.png"
          techs="html5 css3 git github"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>História do Android</strong> é um artigo digital totalmente responsivo que explora as origens do mascote do sistema operacional. Mais do que uma simples página de texto, o projeto foi concebido para ser um laboratório prático de boas práticas de desenvolvimento web moderno.</p>
          <p className="mb-2.5 leading-relaxed">O foco principal esteve na aplicação rigorosa de HTML5 semântico para melhorar a acessibilidade e o SEO, combinado com técnicas de CSS3 para criar um layout fluido, tipografia customizada e mídias que se adaptam perfeitamente a qualquer tamanho de tela.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Destaques Técnicos e Boas Práticas</h4>

          <p className="mb-2.5 leading-relaxed">A construção desta interface evidencia o domínio sobre recursos nativos essenciais do Front-end:</p>

          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li><strong>Semântica e Acessibilidade:</strong> Estruturação da página utilizando tags de conteúdo (<code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;nav&gt;</code>) e tags de detalhamento (como <code>&lt;abbr&gt;</code> para siglas), tornando o site amigável para leitores de tela e motores de busca.</li>
            <li><strong>Imagens Responsivas (Art Direction):</strong> Implementação da tag <code>&lt;picture&gt;</code> com <code>&lt;source&gt;</code> para carregar imagens diferentes dependendo da resolução do dispositivo (media queries direto no HTML), otimizando o consumo de dados móveis.</li>
            <li><strong>Vídeos Embutidos Fluidos:</strong> Aplicação de uma técnica avançada de CSS (utilizando <code>padding-bottom</code> relativo e <code>position: absolute</code>) para garantir que o <code>iframe</code> do YouTube mantenha a proporção de 16:9 em qualquer resolução, sem quebrar o layout.</li>
            <li><strong>CSS Avançado:</strong> Uso de pseudo-elementos (<code>::after</code>) para inserir ícones dinamicamente em links externos, customização de marcadores de lista com caracteres Unicode e organização do código através de Variáveis CSS (<code>:root</code>).</li>
          </ul>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/project-android" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Frontend</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>HTML5</li><li>CSS3</li>
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

        {/* --- 12. ESTUDOS JAVASCRIPT --- */}
        <ProjectCard
          title="Estudos de JavaScript"
          summary="Estudos estruturados em JavaScript moderno, dos fundamentos a conceitos avançados aplicados."
          imageSrc="/images/projects/javascript-course-project.png"
          iconSrc="/images/icons/javascript-icon.png"
          techs="javascript"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre os Estudos</h4>

          <p className="mb-2.5 leading-relaxed">Este repositório reúne uma série de exercícios e projetos práticos desenvolvidos para consolidar os fundamentos do <strong>JavaScript (Vanilla)</strong>. O foco foi ir além da teoria, aplicando conceitos de lógica, algoritmos e interatividade diretamente no navegador.</p>
          <p className="mb-2.5 leading-relaxed">A coleção está organizada em duas etapas, cobrindo desde a sintaxe inicial e comandos básicos até a manipulação dinâmica de elementos da página, permitindo uma compreensão profunda de como a linguagem se comunica com o HTML e o CSS</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Destaques Técnicos e Aprendizados</h4>

          <p className="mb-2.5 leading-relaxed">Os módulos abrangem competências essenciais para a construção de interfaces interativas:</p>

          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li><strong>Manipulação de DOM:</strong> Uso intensivo de <code>getElementById</code>, <code>querySelector</code> e criação dinâmica de elementos para transformar páginas estáticas em experiências interativas.</li>
            <li><strong>Lógica e Algoritmos:</strong> Prática com estruturas condicionais, laços de repetição e funções, fundamentais para a resolução de problemas complexos no backend e frontend.</li>
            <li><strong>Tratamento de Eventos:</strong> Implementação de <code>EventListeners</code> para capturar interações do usuário (cliques, digitação, movimentação do mouse) e executar ações em tempo real.</li>
            <li><strong>Estilização Dinâmica:</strong> Alteração de propriedades CSS via JavaScript para criar feedbacks visuais e transições de estado na interface.</li>
          </ul>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/javascript-course" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório Parte 1
            </a>
            <a href="https://github.com/PedroRossZny/javascript-course-2" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório Parte 2
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 13. ESTUDOS PYTHON --- */}
        <ProjectCard
          title="Estudos de Python"
          summary="Estudos estruturados em Python com mais de 100 exercícios, da lógica básica à modularização e tratamento de exceções"
          imageSrc="/images/projects/python-course-project.png"
          iconSrc="/images/icons/python-icon.png"
          techs="python"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre os Estudos</h4>

          <p className="mb-2.5 leading-relaxed">Este repositório é um compilado de estudos práticos em <strong>Python 3</strong>, focado no desenvolvimento de lógica algorítmica e resolução de problemas. A coleção abrange desde a manipulação básica de dados e tipos até a criação de sistemas modulares e jogos interativos via terminal.</p>
          <p className="mb-2.5 leading-relaxed">Um dos destaques é o <strong>Jogo de Adivinhação Algorítmica</strong>, onde apliquei conceitos de geração de números pseudo-aleatórios e estruturas de controle de fluxo para criar uma interação entre o usuário e a máquina.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Destaques Técnicos e Fundamentos</h4>

          <p className="mb-2.5 leading-relaxed">Os códigos demonstram uma base sólida em conceitos fundamentais para qualquer desenvolvedor:</p>

          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li><strong>Algoritmos e Lógica:</strong> Implementação de estruturas condicionais complexas e laços de repetição (<code>for</code>, <code>while</code>) para processamento de dados e controle de jogos.</li>
            <li><strong>Modularização e Reutilização:</strong> Organização de funções em módulos externos (como o uso de <code>uteis.py</code>), demonstrando conhecimento em arquitetura de código limpo e organizado.</li>
            <li><strong>Bibliotecas Nativas:</strong> Utilização de módulos built-in do Python, como o <code>random</code> para lógica de jogos e <code>time</code> para controle de fluxo e animações no terminal.</li>
            <li><strong>UX via Terminal:</strong> Uso de códigos <strong>ANSI</strong> para estilização de cores e formatação de texto (CLI), proporcionando uma interface de usuário mais intuitiva e atraente mesmo em ambiente de console.</li>
          </ul>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/python-studies" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório de Estudos
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Python</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 14. ESTUDOS HTML5/CSS3 --- */}
        <ProjectCard
          title="Estudos de HTML5 & CSS3"
          summary="Formação prática em HTML5 e CSS3, da semântica e acessibilidade a layouts modernos responsivos."
          imageSrc="/images/projects/html5-css3-course-project.png"
          iconSrc="/images/icons/html-css-icon.png"
          techs="html5 css3"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre os Estudos</h4>

          <p className="mb-2.5 leading-relaxed">Este repositório é um hub de aprendizado contínuo que documenta a transição de um desenvolvedor iniciante para um profissional capaz de construir interfaces ricas. Ele contém uma vasta coleção de desafios práticos, cada um focado em resolver um problema específico de design ou estrutura web.</p>
          <p className="mb-2.5 leading-relaxed">Através de dezenas de exercícios, explorei desde a semântica pura até as camadas mais complexas de estilização, garantindo que cada página criada fosse não apenas visualmente atraente, mas também tecnicamente robusta e acessível.</p>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Destaques Técnicos e Competências</h4>

          <p className="mb-2.5 leading-relaxed">A progressão neste repositório cobre o ecossistema completo do desenvolvimento Front-end essencial:</p>

          <ul className="list-disc ml-6 mb-6 space-y-1 text-[var(--texto)] leading-relaxed">
            <li><strong>Arquitetura Semântica:</strong> Aplicação rigorosa de tags HTML5 para estruturar conteúdos de forma lógica, otimizando a página para motores de busca (SEO) e tecnologias assistivas..</li>
            <li><strong>Sistemas de Layout Modernos:</strong> Implementação de designs responsivos utilizando <strong>Flexbox</strong> e <strong>CSS Grid</strong>, garantindo que as interfaces se adaptem com inteligência a qualquer tamanho de visor.</li>
            <li><strong>Tratamento de Mídia e Assets:</strong> Domínio sobre a incorporação de vídeos, áudios e sistemas de imagens flexíveis, além da gestão de ícones e fontes customizadas.</li>
            <li><strong>Formulários e Tabelas Complexas:</strong> Construção de estruturas de dados organizadas e campos de entrada de dados validados, com foco total na experiência do usuário (UX).</li>
            <li><strong>Estética e Interatividade:</strong> Uso de degradês (Gradients), sombreamentos dinâmicos, pseudo-classes e animações CSS para criar interfaces que respondem às ações do usuário.</li>
          </ul>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/html-css" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório de Estudos
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 15. SORTEADOR NÚMERICO --- */}
        <ProjectCard
          title="Sorteador Numérico"
          summary="Script em Python demonstrando funções, manipulação de listas e laços de repetição."
          imageSrc="/images/projects/sorteador-project.png"
          iconSrc="/images/icons/sorteio-numeros-icon.png"
          techs="python"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o Projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Sorteador Numérico</strong> é um script focado no conceito de modularização e manipulação de arrays. Ele demonstra a criação de funções isoladas com responsabilidades únicas: uma para gerar e armazenar valores pseudo-aleatórios e outra para iterar sobre a lista, filtrando e somando apenas os números pares.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/Functions" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Python</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 16. GESTÃO DE DESEMPENHO DE JOGADORES --- */}
        <ProjectCard
          title="Gestão de Desempenho de Jogadores"
          summary="Sistema em Python para registrar jogadores e acompanhar partidas e gols via console"
          imageSrc="/images/projects/gestao-jogadores-project.png"
          iconSrc="/images/icons/jogador-icon.png"
          techs="python"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o Projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Gestão de Jogadores</strong> é uma aplicação de terminal construída para lidar com estruturas de dados compostas. O script utiliza listas e dicionários combinados para registrar dinamicamente o perfil de atletas, contabilizando as partidas jogadas e o desempenho em gols.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/Use-of-Football-Players" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Python</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 17. PAR OU ÍMPAR --- */}
        <ProjectCard
          title="Game: Par ou Ímpar"
          summary="Jogo de Par ou Ímpar em Python via terminal, com pontuação acumulada contra o computador."
          imageSrc="/images/projects/par-impar-project.png"
          iconSrc="/images/icons/par-impar-icon.png"
          techs="python"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o Projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Game: Par ou Ímpar</strong> simula o clássico jogo através de um loop contínuo (<code>while True</code>) que só é interrompido quando o jogador perde. O algoritmo desafia a máquina, utilizando operações aritméticas de módulo (<code>%</code>) para definir o resultado das rodadas em tempo real.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/Even-or-Odd" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Python</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 18. SISTEMA ATM --- */}
        <ProjectCard
          title="Sistema de ATM"
          summary="Algoritmo em Python que calcula a menor quantidade de cédulas para um saque em dinheiro."
          imageSrc="/images/projects/atm-project.png"
          iconSrc="/images/icons/atm-icon.png"
          techs="python"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o Projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Sistema de ATM</strong> é uma resolução clássica de problemas de matemática discreta. O algoritmo calcula de forma gulosa (Greedy Algorithm) a menor quantidade de notas necessárias para compor um valor de saque, priorizando sempre as cédulas de maior valor disponíveis.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/ATM-Simulator" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Python</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 19. CÁLCULO DE MULTAS --- */}
        <ProjectCard
          title="Monitoramento e Cálculo de Multas"
          summary="Aplicação em Python que simula um radar de trânsito e calcula multas por excesso de velocidade."
          imageSrc="/images/projects/multa-project.png"
          iconSrc="/images/icons/multa-icon.png"
          techs="python"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o Projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Cálculo de Multas</strong> é uma aplicação de estrutura condicional direta que simula a lógica de um radar de trânsito. O sistema avalia a velocidade registrada e, em caso de infração, gera automaticamente o valor financeiro da multa baseando-se em uma fórmula de acréscimo proporcional.</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/Speeding-Fine-Calculation-Python" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Python</li>
              </ul>
            </div>
          </div>
        </ProjectCard>

        {/* --- 20. JOGO ADIVINHAÇÃO --- */}
        <ProjectCard
          title="Jogo de Adivinhação Algorítmica"
          summary="Jogo em Python onde o usuário tenta adivinhar um número entre 0 e 5 escolhido pela máquina."
          imageSrc="/images/projects/adivinha-project.png"
          iconSrc="/images/icons/adivinha-icon.png"
          techs="python"
        >
          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-2.5">Sobre o Projeto</h4>

          <p className="mb-2.5 leading-relaxed">O <strong>Jogo de Adivinhação</strong> é uma interação via console que utiliza a biblioteca nativa para geração de números aleatórios. O script oculta o número escolhido pela máquina e valida o palpite do usuário, entregando feedback imediato (Win/Loss condition).</p>

          <div className="flex flex-wrap gap-3 my-4">
            <a href="https://github.com/PedroRossZny/Guessing-Game-Python" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#24292e] hover:-translate-y-1 transition-transform">
              <FaGithub size={18} /> Repositório no GitHub
            </a>
          </div>

          <h4 className="text-[var(--destaque)] text-lg font-poppins font-semibold mb-4 border-t border-[var(--borda)] pt-4">Tecnologias utilizadas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[var(--fundo-card)] p-3 rounded-lg border border-[var(--borda)]">
              <h5 className="font-semibold text-sm mb-2 text-[var(--texto)]">Linguagem</h5>
              <ul className="text-sm text-[var(--texto-mutado)] space-y-1 list-none p-0 m-0">
                <li>Python</li>
              </ul>
            </div>
          </div>
        </ProjectCard>
      </div>
    </article>
  );
}