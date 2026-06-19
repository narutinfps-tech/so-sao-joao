import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FileText, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  Award, 
  HelpCircle, 
  Star, 
  Printer, 
  Download, 
  Play, 
  Pause, 
  Check, 
  Copy, 
  Settings, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  FileCheck, 
  Laptop, 
  FileQuestion,
  CreditCard,
  Mail,
  Flame,
  ThumbsUp,
  FileCode
} from 'lucide-react';

import { PAIN_POINTS, BENEFITS, TESTIMONIALS, FAQ_ITEMS, ACTIVITY_PREVIEWS } from './data';
import { Bandeirinhas, Fogueira, BalaoJunino, Milho, ChapeuPalha, Sanfona } from './components/JuninaDecorations';
// @ts-expect-error - image asset module
import mockupNew from './mockup_new.png';

export default function App() {
  // Configurable values
  const checkoutLinkClassic = 'https://pay.wiapy.com/nWDYy9b7lO';
  const checkoutLinkPremium = 'https://pay.wiapy.com/xMLNKHSO_5O';
  const priceClassic = '19,90';
  const pricePremium = '27,90';

  // Layout states
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [videoTab, setVideoTab] = useState<'video' | 'pdf'>('pdf');
  const [pdfPage, setPdfPage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // Auto scroll down to a specific section safely
  const scrollToOffer = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Video simulated play effect
  useEffect(() => {
    let interval: any;
    if (isVideoPlaying) {
      interval = setInterval(() => {
        setPdfPage((prev) => (prev + 1) % ACTIVITY_PREVIEWS.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-800 font-sans antialiased relative selection:bg-accent-amber selection:text-primary overflow-x-hidden">
      
      {/* BANDEIRINHAS TOP DECORATION */}
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="bg-gradient-to-b from-[#FFFDF6] via-[#FFF3E3] to-[#FFF9EE] text-slate-800 relative pb-24 pt-12 overflow-hidden bg-dot-pattern">
        
        {/* Decorative flags banner at the very top of the page */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Bandeirinhas />
        </div>
        
        {/* Festive corner decoration */}
        <div className="absolute -top-4 -right-12 opacity-35 md:opacity-75 transform scale-75 md:scale-100 pointer-events-none">
          <ChapeuPalha size={80} />
        </div>
        <div className="absolute top-24 -left-12 opacity-30 md:opacity-70 transform rotate-12 scale-75 md:scale-100 pointer-events-none">
          <Sanfona size={80} />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          {/* Animated small label */}
          <div className="inline-flex items-center gap-2 bg-accent-red/10 border border-accent-red/25 px-4 py-1.5 rounded-full text-accent-red text-xs font-semibold tracking-wider uppercase mb-6 animate-flag-float">
            <Flame className="w-4 h-4 text-accent-red animate-pulse" />
            <span>EXCLUSIVO PARA PROFESSORES DE INGLÊS DO ENSINO MÉDIO</span>
          </div>

          {/* Headline Grande */}
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.12] mb-6">
            50 Atividades de Inglês com Tema <span className="text-accent-red">São João</span> para Aplicar no Ensino Médio
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-slate-700 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Receba um PDF pronto para imprimir, com atividades coloridas, conteudistas e temáticas para deixar suas aulas de inglês mais criativas no período junino.
          </p>

          {/* New Promotional Mockup (Background removed) */}
          <div className="my-8 flex justify-center bg-transparent relative z-10 w-full overflow-hidden">
            <img 
              src={mockupNew} 
              alt="Atividades de São João" 
              className="w-full max-w-full md:max-w-3xl h-auto bg-transparent object-contain select-none transform hover:scale-[1.01] transition-transform duration-300 filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
            />
          </div>

          {/* Core Huge CTA Button */}
          <div className="mt-8">
            <button
              onClick={() => scrollToOffer('oferta-section')}
              className="inline-flex items-center justify-center gap-3 bg-accent-amber hover:bg-accent-gold text-primary text-base md:text-xl font-display font-extrabold px-10 py-5 rounded-full shadow-[0_10px_25px_rgba(255,201,60,0.4)] transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 border-b-4 border-amber-600 cursor-pointer w-full sm:w-auto uppercase"
              id="hero-cta"
            >
              <span>Quero ver as opções do kit</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[3]" />
            </button>

            {/* Small reassurance tag line below the main CTA */}
            <div className="flex items-center justify-center gap-3 text-xs text-slate-600 mt-4 font-mono font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-accent-gold" /> PDF Digital
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-accent-gold" /> Acesso Imediato
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Printer className="w-3.5 h-3.5 text-accent-gold" /> Pronto para Imprimir
              </span>
            </div>
          </div>

        </div>

        {/* Section bottom spacer layout */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-neutral-50 rounded-t-3xl" />
      </section>

      {/* ---------------- 2. DORES SECTION ---------------- */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden" id="dores-section">
        
        {/* Isolated aesthetic elements */}
        <div className="absolute top-10 right-4 opacity-15 pointer-events-none">
          <Milho size={40} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase text-accent-red tracking-widest bg-red-100/80 px-3 py-1 rounded">
              A Rotina do Professor
            </span>
            
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-primary leading-tight mt-4 mb-4">
              Você também perde tempo tentando criar atividades diferentes para datas comemorativas?
            </h2>
            
            {/* Context/Short text */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Quando chega o período de São João, muitos professores querem levar algo temático para a sala, mas acabam perdendo horas procurando ideias, montando frases, revisando conteúdo e tentando deixar tudo bonito para imprimir.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAIN_POINTS.map((dor, index) => {
              // Custom visuals to match specific card indexes
              return (
                <div 
                  key={dor.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="bg-red-50 text-accent-red p-2.5 rounded-xl shrink-0">
                    <span className="font-mono text-sm font-extrabold">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base mb-1.5">
                      {dor.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {dor.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive banner note */}
          <div className="mt-12 bg-amber-50 rounded-2xl border border-accent-amber/40 p-6 max-w-3xl mx-auto text-center">
            <p className="text-slate-700 text-sm md:text-base font-medium">
              💡 <span className="font-extrabold text-primary">Não precisa ser assim!</span> Suas próximas semanas temáticas podem ser leves, produtivas e com alunos focados no conteúdo pedagógico real do Ensino Médio.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------- 3. SOLUÇÕES SECTION ---------------- */}
      <section className="py-24 bg-white relative overflow-hidden" id="solucoes-section">
        
        {/* Background graphic elements */}
        <div className="absolute bottom-10 left-4 opacity-15 pointer-events-none">
          <BalaoJunino size={44} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-white" />
              <span>Praticidade Pedagógica</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-primary mt-4 mb-4">
              O Kit São João em Inglês resolve isso para você
            </h2>

            {/* Description Text */}
            <p className="text-base md:text-lg text-slate-600">
              Com esse material, você recebe atividades prontas, coloridas e organizadas para trabalhar conteúdos reais de inglês usando o tema de São João de forma criativa e prática.
            </p>
          </div>

          {/* Benefits cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((sol, index) => {
              // Custom icons to bring organic design variety (Identical spacing everywhere is avoided!)
              const icons = [
                <Printer className="w-6 h-6 text-brand-green" />,
                <Sparkles className="w-6 h-6 text-accent-gold" />,
                <Award className="w-6 h-6 text-brand-orange" />,
                <BookOpen className="w-6 h-6 text-accent-red" />,
                <CheckCircle className="w-6 h-6 text-brand-green" />,
                <Clock className="w-6 h-6 text-accent-gold" />
              ];

              return (
                <div 
                  key={sol.id} 
                  className="bg-neutral-50/50 p-6 rounded-2xl border border-slate-100 hover:bg-neutral-50 hover:border-slate-300 hover:shadow-xs transition-all duration-300"
                >
                  <div className="bg-white w-12 h-12 rounded-xl shadow-xs flex items-center justify-center border border-slate-100 mb-4 transform -rotate-1 hover:rotate-3 transition-transform">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="font-display font-extrabold text-slate-900 text-base mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Curricular themes block - very helpful for English educators */}
          <div className="mt-16 p-8 bg-primary rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 opacity-20 pointer-events-none">
              <Fogueira size={120} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-lg md:text-xl font-display font-bold text-accent-amber mb-4 flex items-center gap-2">
                <FileCode className="w-5 h-5 text-accent-amber" />
                Matriz Curricular de Atividades Cobertas no PDF:
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Simple Past", "Past Continuous", "Future with Will", "Going To", 
                  "Modal Verbs", "Articles", "Comparatives", "Superlatives", 
                  "Prepositions", "Passive Voice", "Mixed Grammar Review", 
                  "Reading Comprehension", "Vocabulary", "Writing Practice"
                ].map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-primary-light border border-white/10 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 hover:border-accent-amber/40 hover:text-white transition-colors"
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-xs text-slate-300 mt-4 leading-relaxed italic">
                * Conteúdos desenvolvidos com base nos parâmetros do Ministério da Educação e competências avaliadas no ENEM/Ensino Médio!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 4. CARD DE OFERTA ---------------- */}
      <section className="py-20 bg-neutral-100 relative overflow-hidden" id="oferta-section">
        
        {/* Floating flags decorative frame */}
        <div className="absolute top-0 inset-x-0 opacity-40"><Bandeirinhas /></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-12">
            <span className="text-emerald-700 bg-emerald-100 font-mono text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-xs">
              ⚡ OFERTA DE SÃO JOÃO - SELECIONE SUA LICENÇA
            </span>
            <h3 className="font-display font-extrabold text-2xl md:text-4xl text-primary mt-4 mb-2">
              Escolha a melhor opção para suas aulas
            </h3>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              Selecione o plano ideal de acordo com a sua necessidade pedagógica. Ambas as opções contam com 50 atividades prontas!
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            
            {/* PLAN 1: KIT ESSENCIAL - R$ 19,90 */}
            <div className="bg-gradient-to-b from-slate-50 to-white text-slate-800 rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5" id="card-licenca-essencial">
              
              {/* Top accent bar */}
              <div className="h-2 bg-primary w-full" />

              <div className="p-8 md:p-10 flex-grow flex flex-col items-center text-center">
                
                {/* Badge */}
                <span className="bg-slate-100 text-slate-700 text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                  Acesso Individual • PDF Digital
                </span>

                {/* Plan Title */}
                <h4 className="font-display font-extrabold text-2xl md:text-3xl text-primary mb-2">
                  Kit Essencial
                </h4>

                {/* Plan Description */}
                <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6 leading-relaxed">
                  Ideal para professores autônomos que buscam material de alta qualidade e praticidade em suas próprias turmas.
                </p>

                {/* Pricing Block (Beautified & Centered) */}
                <div className="w-full border-y border-slate-100 py-5 my-5 flex flex-col items-center justify-center bg-slate-50/50 rounded-2xl">
                  <span className="text-slate-400 text-xs line-through mb-0.5">De R$ 29,90</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Por apenas:</span>
                  <div className="text-4xl md:text-5xl font-display font-black text-primary tracking-tight mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-lg font-bold text-slate-500">R$</span>
                    <span className="text-accent-red font-black">{priceClassic}</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold mt-1.5 flex items-center gap-1">
                    ✓ Sem taxas adicionais • Pagamento único
                  </span>
                </div>

                {/* Feature List (Centered block, left-aligned items for readability) */}
                <div className="w-full max-w-[290px] mx-auto text-left space-y-3.5 my-4">
                  {[
                    "PDF completo com 50 Atividades de inglês",
                    "Temática festiva e ilustrada de São João",
                    "Conteúdos gramaticais e leitura (BNCC)",
                    "Pronto para imprimir no formato padrão A4",
                    "Gabaritos de todas as questões inclusos",
                    "Licença padrão para uso individual"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-650">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA & Reassurance */}
              <div className="p-8 pt-0 z-10 text-center bg-slate-50/30 border-t border-slate-50/50">
                <a
                  href={checkoutLinkClassic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-[#15305B]/95 text-white font-display font-extrabold text-sm md:text-base py-4 px-6 rounded-2xl shadow-md transition-all duration-200 border-b-4 border-slate-900 text-center uppercase tracking-wide cursor-pointer"
                  id="btn-checkout-essencial"
                >
                  <span>Garantir Plano Essencial</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </a>

                <p className="text-[10px] text-slate-400 mt-3 font-mono">
                  ✓ Pagamento 100% Seguro • Link Oficial Hotmart
                </p>
              </div>

            </div>

            {/* PLAN 2: KIT COMPLETO + BÔNUS - R$ 27,90 */}
            <div className="bg-primary text-white rounded-3xl shadow-2xl border-2 border-accent-amber overflow-hidden flex flex-col justify-between relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 hover:border-accent-gold" id="card-licenca-premium">
              
              {/* Outstanding Highlight badge */}
              <div className="bg-accent-amber text-primary text-[10px] font-mono font-black tracking-widest py-1.5 px-6 rounded-b-xl shadow-md uppercase absolute top-0 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap z-20">
                🔥 Plano Recomendado • Melhor Custo-Benefício
              </div>

              {/* Glowing highlight corner effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl pointer-events-none" />

              <div className="p-8 md:p-10 pt-12 flex-grow flex flex-col items-center text-center bg-dot-pattern">
                
                {/* Badge spacing wrapper */}
                <div className="mb-4 mt-2">
                  <span className="bg-accent-amber/10 text-accent-amber border border-accent-amber/20 text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                    Kit Completo + Recursos de Bônus
                  </span>
                </div>

                {/* Plan Title */}
                <h4 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-2 tracking-tight">
                  Premium completo
                </h4>

                {/* Plan Description */}
                <p className="text-xs text-slate-300 max-w-xs mx-auto mb-6 leading-relaxed">
                  Para professores que desejam material completo, respostas comentadas detalhadas e bônus lúdicos inéditos.
                </p>

                {/* Pricing Block (Beautified & Centered with gold/amber premium colors) */}
                <div className="w-full border-y border-white/10 py-5 my-5 flex flex-col items-center justify-center bg-primary-light/40 rounded-2xl">
                  <span className="text-slate-400 text-xs line-through mb-0.5">De R$ 39,90</span>
                  <span className="text-slate-300 text-[10px] font-bold uppercase tracking-wider">Por apenas:</span>
                  <div className="text-4xl md:text-5xl font-display font-black text-accent-amber tracking-tight mt-1 flex items-baseline justify-center gap-1.5">
                    <span className="text-lg font-bold text-accent-gold">R$</span>
                    <span className="font-black">{pricePremium}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold mt-1.5 flex items-center gap-1">
                    ✓ Acesso permanente • Sem mensalidade
                  </span>
                </div>

                {/* Feature List (Centered block, left-aligned for readability) */}
                <div className="w-full max-w-[290px] mx-auto text-left space-y-3.5 my-4">
                  {[
                    "PDF completo com 50 Atividades de inglês",
                    "Temática festiva e ilustrada de São João",
                    "Conteúdos gramaticais e leitura (BNCC)",
                    "Pronto para imprimir no formato padrão A4",
                    "Gabaritos + Chaves de Respostas Comentadas",
                    "BÔNUS: Vocabulário Junino & Flashcards",
                    "BÔNUS: Guia de Aplicação da Festividade",
                    "Compartilhamento livre na mesma escola (até 3 prof.)",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                      <span className={`leading-tight ${idx >= 4 ? "font-bold text-accent-amber" : ""}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA & Reassurance */}
              <div className="p-8 pt-0 z-10 text-center bg-primary-light/20 border-t border-white/5">
                <a
                  href={checkoutLinkPremium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-accent-red hover:bg-[#e74c4c] text-white font-display font-extrabold text-sm md:text-base py-4 px-6 rounded-2xl shadow-[0_8px_25px_rgba(217,56,58,0.35)] transition-all duration-200 border-b-4 border-[#ae2a2b] text-center uppercase tracking-wide cursor-pointer"
                  id="btn-checkout-premium"
                >
                  <span>Garantir Plano Premium</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                </a>

                <p className="text-[10px] text-slate-300 mt-3 font-mono">
                  ✓ Envio Imediato por E-mail • Compra 100% Protegida
                </p>
              </div>

            </div>

          </div>

          {/* Secure SSL badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 opacity-60">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Gateway de Compra Protegido:</span>
            <div className="bg-white border border-slate-200 px-3 py-1 rounded text-slate-600 font-mono text-[10px] font-bold flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-slate-400" /> Cartão de Crédito
            </div>
            <div className="bg-white border border-slate-200 px-3 py-1 rounded text-slate-600 font-mono text-[10px] font-bold">
              ⚡ Pix imediato
            </div>
            <div className="bg-white border border-slate-200 px-3 py-1 rounded text-slate-600 font-mono text-[10px] font-bold">
              ✓ Boleto Bancário
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 5. DEPOIMENTOS SECTION ---------------- */}
      <section className="py-24 bg-white relative overflow-hidden" id="depoimentos-section">
        
        {/* Bonfire vector decorations behind */}
        <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
          <Fogueira size={48} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs bg-amber-100 text-amber-800 font-mono font-bold uppercase tracking-widest px-3 py-1 rounded">
              Depoimentos REAIS
            </span>
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-primary leading-tight mt-4 mb-4">
              Professoras que usam materiais prontos sabem o quanto isso facilita a rotina
            </h2>
            <p className="text-slate-650 text-sm md:text-base">
              Veja a opinião de colegas sobre a aplicação de atividades focadas em datas comemorativas no Ensino Médio.
            </p>
          </div>

          {/* Depoimentos Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((dep, dIdx) => {
              // Create dynamic pastel background variations for the rating stars
              const stars = Array(dep.rating).fill(0);
              const avatarInitials = dep.author.split(' ')[0][0] + (dep.author.split(' ').length > 1 ? dep.author.split(' ')[1][0] : '');
              
              const gradList = [
                'from-[#D9383A] to-[#E76F51]', // warm red orange
                'from-[#15305B] to-[#2A9D8F]', // cold blue green
                'from-[#E76F51] to-[#FFC93C]'  // orange yellow
              ];

              return (
                <div 
                  key={dep.id}
                  className="bg-neutral-50/75 p-6 rounded-2xl border border-slate-200/50 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative"
                >
                  {/* Decorative quotes graphic */}
                  <span className="absolute top-4 right-6 text-slate-200 font-serif text-6xl leading-[0] select-none pointer-events-none">
                    “
                  </span>

                  <div>
                    {/* Stars rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {stars.map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                      ))}
                    </div>

                    {/* Testimonial Core Text */}
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed italic mb-6">
                      {dep.text}
                    </p>
                  </div>

                  {/* Testimonial Author Meta */}
                  <div className="flex items-center gap-3 border-t border-slate-200/60 pt-4 mt-auto">
                    {/* Initial circle avatar */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${gradList[dIdx % gradList.length]} flex items-center justify-center text-white font-bold text-xs uppercase font-mono shadow-inner`}>
                      {avatarInitials}
                    </div>
                    <div>
                      {/* Name - Mariana S. — Professora de Inglês */}
                      <p className="font-display font-extrabold text-slate-800 text-xs tracking-wide">
                        {dep.author}
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono tracking-wider font-semibold uppercase">
                        {dep.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Proof metrics */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-slate-200 pt-12 text-center">
            <div>
              <div className="text-3xl font-display font-extrabold text-primary">98.4%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Aprovação de Conteúdo</div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div>
              <div className="text-3xl font-display font-extrabold text-primary">15h+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Tempo economizado/mês</div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div>
              <div className="text-3xl font-display font-extrabold text-primary">A4 Pronto</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Padrão facilitado de impressão</div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 6. GARANTIA SECTION ---------------- */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden" id="garantia-section">
        
        {/* Subtle corn background icon */}
        <div className="absolute bottom-6 right-10 opacity-15 pointer-events-none">
          <Milho size={44} />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/80 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
            
            {/* Watermark brand decorative bg */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full blur-2xl pointer-events-none" />

            {/* Left Column Graphic Certificate */}
            <div className="relative shrink-0 flex items-center justify-center text-center">
              {/* Premium vector guarantee layout */}
              <div className="bg-primary hover:scale-105 active:scale-100 transition-transform duration-350 cursor-pointer text-white w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center border-4 border-accent-gold shadow-lg relative p-3">
                <Award className="w-10 h-10 text-accent-gold mb-1" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-300">COMPROMISSO</span>
                <span className="text-sm font-display font-black text-accent-amber">QUALIDADE</span>
                <span className="text-[8px] font-mono text-slate-400">PEDAGÓGICA</span>
                
                {/* Visual mini-flags wrapped around circular elements */}
                <span className="absolute -top-1 -left-1 text-xs">🎉</span>
                <span className="absolute -bottom-1 -right-1 text-xs">🌽</span>
              </div>
            </div>

            {/* Right Column Core Texts */}
            <div className="text-center md:text-left">
              
              {/* Title */}
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary leading-tight mb-4">
                Você sabe exatamente o que está recebendo
              </h2>

              {/* Text */}
              <p className="text-sm md:text-base text-slate-650 leading-relaxed mb-6">
                Ao comprar, você recebe um produto digital em PDF com 50 atividades de inglês temáticas de São João, prontas para baixar, imprimir e aplicar em sala de aula.
              </p>

              {/* Security item row */}
              <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-3 bg-neutral-100 border border-slate-200/60 p-3 rounded-xl">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 font-mono">
                  <Check className="w-4 h-4 text-brand-green" /> Material digital
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 font-mono">
                  <Check className="w-4 h-4 text-brand-orange" /> Entrega imediata
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 font-mono">
                  <Check className="w-4 h-4 text-brand-green" /> Uso pedagógico
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 7. FAQ SECTION ---------------- */}
      <section className="py-24 bg-white relative overflow-hidden" id="faq-section">
        
        {/* Absolute visual anchors */}
        <div className="absolute top-1/4 -right-12 opacity-15 transform rotate-3 scale-75 pointer-events-none">
          <Sanfona size={72} />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary font-mono text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              DÚVIDAS SOLUCIONADAS
            </span>
            
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-primary mt-4">
              Dúvidas frequentes
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Ficou com alguma pergunta sobre o Kit? Confira as respostas rápidas abaixo.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              
              return (
                <div 
                  key={faq.id}
                  className="bg-neutral-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 px-6 font-display font-bold text-left text-slate-900 hover:text-primary transition-colors flex justify-between items-center gap-4 text-sm md:text-base cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={`p-1 bg-white rounded-full border border-slate-200 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-red' : 'text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <div 
                    className={`transition-all duration-350 ease-in-out border-slate-200 ${
                      isOpen 
                        ? 'max-h-50 border-t bg-white opacity-100 p-6 text-xs md:text-sm text-slate-600 leading-relaxed' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Support Anchor card */}
          <div className="mt-12 text-center bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <p className="text-slate-600 text-xs md:text-sm">
              ✉ Ainda tem dúvidas? Nosso suporte pedagógico responde no e-mail: <span className="font-mono text-slate-800 font-bold bg-white px-2 py-0.5 rounded cursor-pointer hover:bg-slate-100 border border-slate-200">suporte.pedagogico@exemplo.com.br</span>
            </p>
          </div>

        </div>
      </section>

      {/* ---------------- 8. CTA FINAL SECTION ---------------- */}
      <section className="bg-primary text-white py-24 relative overflow-hidden bg-dot-pattern text-center">
        
        {/* Glowing bonfire centerpiece beneath design line */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
          <Fogueira size={300} />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          
          <div className="inline-block animate-flag-float mb-6">
            <BalaoJunino size={52} />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-display font-extrabold tracking-tight leading-tight max-w-2xl mx-auto mb-6">
            Leve o clima de São João para suas aulas de inglês sem perder horas preparando atividades
          </h2>

          {/* Text */}
          <p className="text-sm md:text-lg text-slate-200 max-w-xl mx-auto mb-10 leading-relaxed">
            Tenha acesso a um material pronto, bonito e conteudista para aplicar com seus alunos no período junino.
          </p>

          {/* Large pulsing Button */}
          <div>
            <button
              onClick={() => scrollToOffer('oferta-section')}
              className="inline-flex items-center justify-center gap-3 bg-accent-amber hover:bg-accent-gold text-primary font-display font-extrabold text-base md:text-lg px-8 py-4 rounded-xl shadow-[0_10px_20px_rgba(255,201,60,0.3)] hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer uppercase border-b-4 border-amber-600 w-full sm:w-auto"
              id="cta-final-button"
            >
              <span>Quero ver as opções com desconto</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Guaranteed safety microtext */}
            <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-accent-amber" /> 50 Atividades em PDF
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Lock className="w-3.5 h-3.5 text-accent-amber" /> Link seguro & Protegido
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <ThumbsUp className="w-3.5 h-3.5 text-accent-amber" /> Garantia de recebimento
              </span>
            </div>
          </div>

        </div>

        {/* Floating flags divider */}
        <div className="absolute bottom-0 inset-x-0 opacity-40">
          <Bandeirinhas />
        </div>
      </section>

      {/* ---------------- 9. RODAPÉ (FOOTER) ---------------- */}
      <footer className="bg-[#051020] text-slate-450 text-xs py-12 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
            {/* Left Brand Identity */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
                <span className="h-5 w-5 rounded bg-accent-amber text-primary flex items-center justify-center font-bold text-xs" style={{ transform: 'rotate(-3deg)' }}>
                  UK
                </span>
                <span className="font-display font-extrabold text-white text-sm tracking-widest uppercase">
                  Kit São João em Inglês
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Produto digital em PDF • Ensino Médio & Fundamental II
              </p>
            </div>

            {/* Center contact and copyright */}
            <div className="flex items-center gap-2 bg-slate-900/40 border border-white/5 py-1 px-4 rounded text-[11px] text-slate-400">
              <Mail className="w-3.5 h-3.5 text-accent-gold" />
              <span>Dúvidas? Entre em contato: suporte@saojoaoingles.com.br</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            {/* Notice requested */}
            <p className="max-w-xl text-center md:text-left leading-relaxed">
              Aviso: Após a compra, o acesso ao material será enviado conforme as instruções da plataforma de pagamento. Os logotipos de marcas de pagamento e selos de segurança exibidos são para fins ilustrativos do checkout integrado.
            </p>

            {/* Small links fictícios requested */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-300 whitespace-nowrap">
              <a href="#" className="hover:text-accent-amber transition-colors underline decoration-slate-600">Termos de Uso</a>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-accent-amber transition-colors underline decoration-slate-600">Suporte</a>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-accent-amber transition-colors underline decoration-slate-600">Política de Privacidade</a>
            </div>
          </div>

          {/* Final agency trademark */}
          <div className="mt-8 text-center text-[10px] text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Kit São João em Inglês. Desenvolvido com carinho para professores criativos. Todos os direitos reservados.
          </div>

        </div>
      </footer>

    </div>
  );
}
