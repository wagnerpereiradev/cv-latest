import { Mail, Phone, Github, Linkedin, User, Briefcase, Code, GraduationCap, MapPin, Calendar, Award, Sparkles } from 'lucide-react';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-medium mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2.5 mb-6">
      {Icon && <Icon className="w-5 h-5 text-zinc-400 dark:text-zinc-500 shrink-0" strokeWidth={1.5} />}
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black text-zinc-900 dark:text-zinc-50">
      <main className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-24">
        {/* Hero */}
        <header className="mb-20">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHw3YTLnGgifw/profile-displayphoto-shrink_400_400/B4DZan4AWfHwAg-/0/1746573199997?e=1771459200&v=beta&t=ry4IA69uXYtqRKSln4wCVe_X4ZNzEiKfmvvicbz-E-U"
              alt="Wagner Pereira"
              className="w-28 h-28 rounded-full object-cover shrink-0 ring-2 ring-zinc-200/80 dark:ring-zinc-700/50"
            />
            <div className="flex flex-col gap-5 min-w-0">
              <div>
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
                  Wagner Pereira
                </h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 tracking-tight">
                  Desenvolvedor de Software · IA · Web Services · Produtos Digitais
                </p>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                São Paulo – SP, Brasil · Ipiranga
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                <a href="tel:+5511940546526" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  (11) 94054-6526
                </a>
                <a href="mailto:wagnerpereiradev@gmail.com" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  wagnerpereiradev@gmail.com
                </a>
                <a href="https://github.com/wagnerpereiradev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Github className="w-4 h-4" strokeWidth={1.5} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/owrp/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Resumo Profissional */}
        <section className="py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <SectionLabel>Perfil</SectionLabel>
          <SectionTitle icon={User}>Resumo Profissional</SectionTitle>
          <div className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 space-y-4">
            <p>
              Sou desenvolvedor de Software com foco em Inteligência Artificial aplicada, Web Services e produtos digitais. Atuo no desenvolvimento de soluções tecnológicas orientadas a problemas reais de negócio e tenho experiência na integração de APIs avançadas de IA, automação de processos, arquiteturas web modernas e análise de dados para geração de insights acionáveis.
            </p>
            <p>
              Fiz transição de carreira com bagagem em marketing e gestão: minha experiência estratégica me permite construir produtos com visão de negócio (<strong className="text-zinc-700 dark:text-zinc-300">Business-oriented Developer</strong>), alinhando técnica e impacto no negócio. Tenho experiência prática no desenvolvimento de agentes de IA, aplicações web full stack, integração com ERPs, pipelines de dados e produtos orientados a escala. Atuo de forma híbrida entre engenharia, produto e negócio, com forte visão de MVP, iteração rápida e entrega de valor.
            </p>
          </div>
        </section>

        {/* Hard Skills */}
        <section className="py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <SectionLabel>Competências</SectionLabel>
          <SectionTitle icon={Code}>Hard Skills</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {[
              'Inteligência Artificial aplicada (OpenAI, Anthropic, DeepSeek)',
              'RAG e bancos de vetores (Supabase/pgvector, Oracle AI Vector Search)',
              'Desenvolvimento de Agentes de IA e Assistentes Conversacionais',
              'APIs REST & Integrações Web Services',
              'Cloud Computing (AWS Lambda, API Gateway, S3, Google Cloud)',
              'Frontend moderno (Next.js, React, Vue, TailwindCSS)',
              'Backend (PHP, MySQL, Node.js, Python, Java – integração e automação)',
              'Arquitetura de MVPs e Produtos Digitais',
              'UI/UX aplicado a produto',
              'Automação de processos',
              'Gestão de projetos de tecnologia',
              'Docker',
            ].map((skill) => (
              <span key={skill} className="inline-flex px-3.5 py-1.5 rounded-full text-[13px] bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <SectionLabel>Comportamento</SectionLabel>
          <SectionTitle icon={User}>Soft Skills</SectionTitle>
          <ul className="text-[15px] text-zinc-600 dark:text-zinc-400 space-y-3">
            {[
              'Comunicação técnica clara com times técnicos e não técnicos',
              'Pensamento crítico e resolução de problemas complexos',
              'Autonomia e responsabilidade por entregas end-to-end',
              'Adaptabilidade em ambientes de alta incerteza',
              'Organização, priorização e gestão do tempo',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-zinc-300 dark:text-zinc-600 mt-1.5">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Principais Tecnologias */}
        <section className="py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <SectionLabel>Stack</SectionLabel>
          <SectionTitle icon={Code}>Tecnologias e Ferramentas</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[15px]">
            {[
              {
                title: 'IA & APIs',
                text: 'OpenAI API · OpenAI API Responses · OpenAI Whisper · Anthropic API · DeepSeek API · RAG e bancos de vetores (Supabase/pgvector, Oracle AI Vector Search)',
                logos: [
                  { name: 'OpenAI', url: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
                  { name: 'Supabase', url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp' },
                  { name: 'Anthropic', url: 'https://www.primarymarkets.com/wp-content/uploads/2024/03/Anthropic-Circle-Logo.png' },
                ],
              },
              {
                title: 'Frontend',
                text: 'HTML5 · CSS3 · JavaScript · React.js · Next.js · Vue · TailwindCSS',
                logos: [
                  { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                  { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                  { name: 'Vue', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
                  { name: 'Tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                ],
              },
              {
                title: 'Backend & Dados',
                text: 'PHP · MySQL · Node.js · Python · Java · REST APIs · OAuth 2.0',
                logos: [
                  { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                  { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                ],
              },
              {
                title: 'Cloud & Dev',
                text: 'AWS (Lambda, API Gateway, S3 Storage) · Google Cloud · Docker',
                logos: [
                  { name: 'AWS', url: 'https://s3.us-west-2.amazonaws.com/content.podia.com/8jo3atdj7sj3s641ee9r03cv152u' },
                  { name: 'Google Cloud', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                ],
              },
              {
                title: 'Produto & Design',
                text: 'Figma · Adobe XD · Illustrator · Photoshop · Cinema 4D · UI/UX',
                logos: [
                  { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                  { name: 'Adobe XD', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/960px-Adobe_XD_CC_icon.svg.png' },
                  { name: 'Illustrator', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/500px-Adobe_Illustrator_CC_icon.svg.png' },
                  { name: 'Photoshop', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/3840px-Adobe_Photoshop_CC_icon.svg.png' },
                  { name: 'Cinema 4D', url: 'https://upload.wikimedia.org/wikipedia/fr/d/d8/C4D_Logo.png' },
                ],
              },
              {
                title: 'Marketing & Dados',
                text: 'Google Ads · Meta Ads · Google Analytics · Google Business API',
                logos: [
                  { name: 'Google', url: 'https://cdn.simpleicons.org/google/4285F4' },
                  { name: 'Meta', url: 'https://cdn.simpleicons.org/meta/0668E1' },
                  { name: 'Google Analytics', url: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
                ],
              },
            ].map(({ title, text, logos }) => (
              <div key={title}>
                <h3 className="font-medium text-zinc-800 dark:text-zinc-300 mb-2 text-[13px] uppercase tracking-wider">{title}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {logos.map((logo) => (
                    <img key={logo.name} src={logo.url} alt={logo.name} title={logo.name} className="w-6 h-6 object-contain opacity-85 dark:opacity-75 shrink-0" />
                  ))}
                </div>
                <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos com IA */}
        <section className="py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <SectionLabel>Portfólio</SectionLabel>
          <SectionTitle icon={Sparkles}>Projetos com IA</SectionTitle>
          <div className="space-y-10">
            {[
              {
                logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGjNxjbpXME2Q/company-logo_200_200/company-logo_200_200/0/1704312088422/sifat_sistemas_oficial_logo?e=2147483647&v=beta&t=ypYSe3c3aKvkU2HCcOtLdgjQI_8VQCi7Yibfd2O-_fY',
                alt: 'SIFAT Sistemas',
                title: 'Agente Sifat Chatbot | SIFAT Sistemas',
                desc: 'Idealização e desenvolvimento do MVP de um assistente de IA integrado ao ERP, que interage de forma natural com o usuário usando API Responses da OpenAI.',
                features: ['Consumo de endpoints do ERP para análises autônomas e inteligentes', 'Interação conversacional natural com streaming de respostas', 'Integração profunda com fluxos do sistema', 'Modelo GPT-5.1 (OpenAI)', 'Projeto iniciado do zero com arquitetura moderna'],
                tech: 'Next.js · TailwindCSS · Docker · OpenAI API · MySQL',
              },
              {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRbNGiPrDtbF1_ra_MDUEQmuECZxeU1zNog&s',
                alt: 'B4 Capital',
                title: 'Agente do Clima | B4 – Primeira Bolsa de Ação Climática',
                desc: 'Desenvolvimento e evolução de um agente de IA para diagnóstico de pegada de carbono, atendendo pessoas físicas e jurídicas.',
                features: ['Uso avançado da API de Assistentes da OpenAI', 'Execução de funções e file search em streaming', 'Geração de relatórios com gráficos interativos', 'Gerenciamento de threads e histórico do usuário', 'Download de relatórios estruturados', 'Refatoração de PHP (API Assistants) para Next.js + Supabase + Google Cloud (API Responses OpenAI) devido à descontinuação da API Assistants em 2026'],
                tech: 'PHP · MySQL · OpenAI API → Next.js · Supabase · Google Cloud · OpenAI API Responses',
              },
              {
                logo: 'https://contablack.com/wp-content/uploads/b_branco.png',
                alt: 'Conta Black',
                title: 'Agente Conta Black | Conta Black (Banco)',
                desc: 'Desenvolvimento de agente de IA voltado a educação financeira e projeções econômicas.',
                features: ['Esclarecimento de dúvidas financeiras', 'Projeções dinâmicas', 'Visualização de dados em gráficos interativos'],
                tech: 'PHP · MySQL · OpenAI API',
                imgClass: 'bg-zinc-800',
              },
              {
                logo: 'https://lajeai.vercel.app/assets/img/laje-ai-icon.svg',
                alt: 'LajeAI',
                title: 'LajeAI | Agente Especialista em Lajes',
                desc: 'Desenvolvimento de um agente especialista para cálculo estrutural e orçamentos de lajes.',
                features: ['Cálculos complexos via chamadas de funções', 'Geração de orçamentos dinâmicos', 'Persistência e consulta de orçamentos', 'Busca de fornecedores por localização e palavras-chave'],
                tech: 'Next.js · MySQL (Knex) · OpenAI APIs',
              },
            ].map((p) => (
              <article key={p.title} className="group">
                <div className="flex gap-4">
                  <img src={p.logo} alt={p.alt} className={`w-11 h-11 rounded-xl object-cover shrink-0 ${(p as { imgClass?: string }).imgClass ?? ''}`} />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight mb-2">{p.title}</h3>
                    <p className="text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">{p.desc}</p>
                    <ul className="list-none space-y-1.5 mb-3">
                      {p.features.map((f) => (
                        <li key={f} className="text-sm text-zinc-500 dark:text-zinc-500 flex gap-2">
                          <span className="text-zinc-300 dark:text-zinc-600 shrink-0">·</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[13px] text-zinc-400 dark:text-zinc-500">{p.tech}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <SectionLabel>Carreira</SectionLabel>
          <SectionTitle icon={Briefcase}>Experiência Profissional</SectionTitle>
          <div className="space-y-10">
            {[
              { logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGjNxjbpXME2Q/company-logo_200_200/company-logo_200_200/0/1704312088422/sifat_sistemas_oficial_logo?e=2147483647&v=beta&t=ypYSe3c3aKvkU2HCcOtLdgjQI_8VQCi7Yibfd2O-_fY', company: 'SIFAT Sistemas', role: 'Desenvolvedor Front-end | IA & Produto', period: 'Jul/2025 – Atual', bullets: ['Idealização e desenvolvimento do MVP de um assistente de IA integrado ao ERP', 'Atuação desde a concepção da ideia até entrega funcional', 'Integração de IA aos fluxos internos do sistema', 'Participação em atividades de backend e DevOps no projeto', 'Criação e melhoria de fluxos de UI/UX', 'Otimização de interfaces e experiência do usuário'], note: 'Projeto com forte viés de produto, autonomia técnica e impacto direto no sistema principal da empresa.' },
              { logo: 'https://raichu-uploads.s3.amazonaws.com/logo_b4-capital-plataforma-exchange-s-a_JeQigQ.png', company: 'B4 Capital Exchange', role: 'Desenvolvedor de Produtos de IA', period: 'Nov/2024 – Jan/2026', bullets: ['Desenvolvimento de produtos baseados em Inteligência Artificial', 'Integração de Web Services e APIs avançadas', 'Criação de agentes de IA orientados a diagnóstico, relatórios e automação', 'Atuação em arquitetura de soluções e evolução de produtos digitais'] },
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1VoF-98_7i267e795Ro9dXsESQcKHfsfaA&s', company: 'PRODETECH GROUP', role: 'Chief Marketing Officer (CMO) – Tecnologia & Produto', period: 'Set/2023 – Mai/2024', bullets: ['Gestão de projetos de tecnologia e marketing', 'Desenvolvimento de sistemas web e automações', 'Integração de APIs e Web Services', 'Otimização de KPIs e análise de dados', 'Metodologias ágeis (Scrum e Kanban)', 'Automações com Python · LGPD, Analytics, Ads e React.js'] },
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1VoF-98_7i267e795Ro9dXsESQcKHfsfaA&s', company: 'PRODETECH GROUP', role: 'Analista de Marketing', period: 'Nov/2022 – Set/2023', bullets: ['Análise de dados e relatórios', 'Desenvolvimento e manutenção de páginas web', 'Gestão de conteúdo digital'] },
              { logo: 'https://marketblue.com.br/wp-content/uploads/2024/05/logo-mktblue.jpg', company: 'MarketBlue', role: 'Designer Gráfico / Arte Finalista', period: 'Nov/2021 – Fev/2022', bullets: [] },
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPsMjl7OIrhZ0-PfmzP_-SecMmUp1jR25jA&s', company: 'Lumicopy', role: 'Gestor de Mídias Sociais | E-commerce | Designer', period: 'Fev/2020 – Nov/2021', bullets: [] },
            ].map((job) => (
              <article key={`${job.company}-${job.period}`} className="flex gap-4">
                <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">{job.company}</h3>
                      <p className="text-[15px] text-zinc-500 dark:text-zinc-500">{job.role}</p>
                    </div>
                    <span className="text-[13px] text-zinc-400 dark:text-zinc-500 flex items-center gap-1 shrink-0">
                      <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {job.period}
                    </span>
                  </div>
                  {job.bullets.length > 0 && (
                    <ul className="space-y-1.5 mt-2">
                      {job.bullets.map((b) => (
                        <li key={b} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                          <span className="text-zinc-300 dark:text-zinc-600 shrink-0">·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {'note' in job && job.note && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2 italic">{job.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GitHub Contributions */}
        <section className="py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <SectionLabel>Atividade</SectionLabel>
          <SectionTitle icon={Github}>Contribuições GitHub</SectionTitle>
          <div className="w-full overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60">
            <img
              src="https://github.com/wagnerpereiradev/wagnerpereiradev/raw/main/profile-3d-contrib/profile-night-green.svg"
              alt="GitHub Contributions"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Formação Acadêmica e Cursos */}
        <section className="py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <SectionLabel>Educação</SectionLabel>
          <SectionTitle icon={GraduationCap}>Formação Acadêmica e Cursos</SectionTitle>
          <div className="space-y-8">
            {[
              {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxwNgcvkCreI-2eDl6Ezt_95qBFHJQhRCSQ&s',
                title: 'Desenvolvimento Web Java',
                institution: 'Instituto PROA (Senac Lapa Tito)',
                period: 'Fev/2022 a Jul/2022',
                hours: '300 horas',
                skills: ['Prototipação de interfaces com Figma', 'Desenvolvimento de interfaces com HTML e CSS', 'Lógica de programação em Javascript', 'Framework React.js', 'API REST', 'Programação Orientada a Objetos com Java', 'Modelagem de banco de dados, SQL e NoSQL', 'Gestão e projeto profissional', 'Oratória, comunicação e comportamento'],
              },
              {
                logo: 'https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2021/05/31162141/Saga-Logo-para-Capa.jpg?fit=1280%2C720&ssl=1',
                title: 'Artes Visuais (AR e 3D)',
                institution: 'SAGA Paraíso',
                period: 'Fev/2022 · Trancado',
                hours: '390 horas',
                skills: ['Tecnologias imersivas AR', 'Modelagem 3D com Zbrush', 'Cenários 3D para jogos com Unreal Engine 4', 'Pintura digital com Photoshop', 'Ilustração vetorial com Illustrator', 'Edição de vídeos com Premiere Pro e After Effects'],
              },
              {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHborq4AoveBA2Exd7vqo4v89cZEwUSkfyQ&s',
                title: 'Minicamp Dev & Data',
                institution: 'Faculdade XP Educação – IGTI',
                period: 'Jul/2022 a Ago/2022',
                hours: '32 horas',
                skills: ['Fundamentos de desenvolvimento de sistemas', 'HTML, CSS, DOM', 'Persistência de dados com LocalStorage', 'Implantação de apps com Netlify Drop', 'Algoritmos e estruturas de repetição', 'Visual Studio Code', 'Variáveis, operadores, funções e estruturas de decisão'],
              },
              {
                logo: 'https://images.seeklogo.com/logo-png/43/1/centro-paula-souza-logo-png_seeklogo-439596.png',
                title: 'Excel Aplicado à Área Administrativa',
                institution: 'ETEC Centro Paula Souza (Novotec Expresso)',
                period: 'Nov/2021 a Dez/2021',
                hours: '40 horas',
                skills: ['Análise e captação de dados', 'Extração de informações', 'Logística e gestão financeira', 'Fórmulas do Excel (PROCV e lógicas)'],
              },
            ].map((edu) => (
              <div key={edu.title} className="flex gap-4">
                <img src={edu.logo} alt="" className="w-11 h-11 rounded-xl object-cover shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">{edu.title}</h3>
                    <span className="text-[13px] text-zinc-400 dark:text-zinc-500 flex items-center gap-1 shrink-0">
                      <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-1">{edu.institution} · {edu.hours}</p>
                  <p className="text-[13px] text-zinc-500 dark:text-zinc-500 mb-2">Habilidades desenvolvidas</p>
                  <ul className="space-y-1">
                    {edu.skills.map((s) => (
                      <li key={s} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                        <span className="text-zinc-300 dark:text-zinc-600 shrink-0">·</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eventos & Certificações */}
        <section className="py-14">
          <SectionLabel>Eventos & Programas</SectionLabel>
          <SectionTitle icon={Award}>Eventos, Hackathons e Capacitação</SectionTitle>
          <div className="space-y-6">
            {[
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVer_wMBRrUuTJfkLE_pq1nZRrlaHrWVkNUA&s', title: 'Imersão DiscoverAI – 16h', org: 'Oracle Brasil', desc: 'Imersão em Inteligência Artificial realizada no escritório Oracle do Morumbi em São Paulo, com visita ao datacenter mostruário. Abordou temas como LLMs e GenAI, RAG e Vector Search, Oracle APEX e Banco de Dados, com apresentação prática final dos conhecimentos adquiridos.' },
              { logo: 'https://1000logos.net/wp-content/uploads/2020/05/Emblem-Google-Cloud.jpg', title: 'GenAI e Workshop de Chatbots', org: 'Google Cloud', desc: 'Evento técnico com foco em Inteligência Artificial Generativa, desenvolvimento de chatbots, aplicações práticas de IA em nuvem e integração de modelos de linguagem em soluções reais.' },
              { logo: 'https://1000logos.net/wp-content/uploads/2020/05/Emblem-Google-Cloud.jpg', title: 'DevOps e GenAI', org: 'Google Cloud', desc: 'Capacitação técnica abordando práticas modernas de DevOps integradas a soluções de Inteligência Artificial Generativa, automação de pipelines e arquitetura em nuvem.' },
              { logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_200_200/company-logo_200_200/0/1719839010650/globant_logo?e=2147483647&v=beta&t=RIDw8vIPTT21rNVDzZuUuMXaZiSCvhv7AUbYUrX8AnM', title: 'Tech Night – Games e GenAI', org: 'Globant', desc: 'Evento técnico explorando aplicações de Inteligência Artificial Generativa no desenvolvimento de jogos, experiências interativas e produtos digitais.' },
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqeFLRcNwmj9CKVTc5h8fg185E2-IHnIfRA&s', title: 'PREPARADÃO – Relações Corporativas e GenAI', org: 'Santander', desc: 'Programa de desenvolvimento com foco em relações corporativas, inovação, tecnologia e aplicações de Inteligência Artificial Generativa no contexto empresarial.' },
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2Vo2PthiZmE68Z2gKWY3Ruy_94i_wXkH-w&s', title: 'Hackathon – Segurança e Mobilidade no Bairro da Liberdade', org: 'ADE SAMPA', desc: 'Maratona de inovação com foco na criação de soluções tecnológicas para desafios urbanos envolvendo segurança, mobilidade e qualidade de vida.' },
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQr2iuadE_A23C2R2NztevY0bHqc-ZbIJyGw&s', title: 'Hackathon Grite', org: 'Visite São Paulo', desc: 'Hackathon voltado à inovação nas Centrais de Informações Turísticas (CITs), com desenvolvimento de soluções digitais para melhoria da experiência do turista e modernização dos serviços de informação da cidade.' },
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6D1imTtkixNJVAjQxXFfDeB9wbUdmncfgg&s', title: 'Turma Itaú Atacado', org: 'Itaú BBA', desc: 'Programa de formação e aproximação com o mercado financeiro de atacado, com foco em negócios, mercado de capitais, estratégia corporativa e relacionamento com grandes empresas.' },
              { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6D1imTtkixNJVAjQxXFfDeB9wbUdmncfgg&s', title: 'Conferência Juntos – Equidade e Inclusão no Mundo Corporativo', org: 'Itaú', desc: 'Evento nacional focado em diversidade, equidade e inclusão no ambiente corporativo, com palestras, painéis e networking entre profissionais e líderes do mercado.' },
              { logo: 'https://designconceitual.com.br/wp-content/uploads/2023/12/Ita%C3%BA-novo-logotipo-2023-1000x600.jpg', title: 'Marketing e Storytelling', org: 'Itaú CEIC', desc: 'Capacitação voltada a comunicação estratégica, construção de narrativas de impacto e storytelling aplicado a marketing, marcas e posicionamento corporativo.' },
              { logo: 'https://logodownload.org/wp-content/uploads/2014/08/heineken-logo-1.png', title: 'WeLab', org: 'Heineken', desc: 'Programa de desenvolvimento pessoal e profissional com foco em autoconhecimento, habilidades profissionais, pensamento crítico e preparação para o mercado de trabalho por meio de trilhas práticas e colaborativas.' },
            ].map((e) => (
              <div key={e.title} className="flex gap-4">
                <img src={e.logo} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-50">{e.title}</h3>
                  <p className="text-[13px] text-zinc-500 dark:text-zinc-500 mb-1">{e.org}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 pb-8 mt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 text-center">
          <div className="flex flex-col items-center gap-6">
            <span className="inline-flex items-center justify-center w-16 h-16">
              <img
                src="https://www.shutterstock.com/image-vector/fibonacci-icon-silhouette-illustration-graphic-600nw-2026518806.jpg"
                alt="Proporção áurea"
                className="w-full h-full object-contain invert-0 dark:invert opacity-90 rounded-2xl"
              />
            </span>
            <p className="text-[15px] text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              Esta página foi desenvolvida com Next.js, React e Tailwind CSS — sem templates prontos.
              Código limpo, responsivo e acessível. Se você está recrutando e valoriza quem entrega produto de ponta a ponta, vamos conversar.
            </p>
            <p className="text-[13px] text-zinc-400 dark:text-zinc-500">
              Developed by Wagner Pereira
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
