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
  ThumbsUp
} from 'lucide-react';

import { PAIN_POINTS, BENEFITS, TESTIMONIALS, FAQ_ITEMS, ACTIVITY_PREVIEWS } from './data';
import { Bandeirinhas, Fogueira, BalaoJunino, Milho, ChapeuPalha, Sanfona } from './components/JuninaDecorations';
import { mockupBase64 as mockupNew } from './mockup_data';
import { motion, AnimatePresence } from 'motion/react';

const carouselRow1 = [
  "https://i.ibb.co/27rQLrjP/Chat-GPT-Image-19-de-jun-de-2026-21-07-12-1.png",
  "https://i.ibb.co/77B7Dkm/Chat-GPT-Image-19-de-jun-de-2026-21-07-12-2.png",
  "https://i.ibb.co/kVVcnVZp/Chat-GPT-Image-19-de-jun-de-2026-21-07-13-3.png",
  "https://i.ibb.co/YBjGqPT7/Chat-GPT-Image-19-de-jun-de-2026-21-07-13-4.png",
  "https://i.ibb.co/svt4m3pF/Chat-GPT-Image-19-de-jun-de-2026-21-07-13-5.png",
  "https://i.ibb.co/27tyyXYC/Chat-GPT-Image-19-de-jun-de-2026-21-07-14-6.png"
];

const carouselRow2 = [
  "https://i.ibb.co/XfR0nb2x/Chat-GPT-Image-19-de-jun-de-2026-21-07-15-7.png",
  "https://i.ibb.co/3y4MmgCM/Chat-GPT-Image-19-de-jun-de-2026-21-07-15-8.png",
  "https://i.ibb.co/fdgChK8p/Chat-GPT-Image-19-de-jun-de-2026-21-07-15-9.png",
  "https://i.ibb.co/5hKW3Qk0/Chat-GPT-Image-19-de-jun-de-2026-21-07-16-10.png",
  "https://i.ibb.co/XxRTLmtn/Chat-GPT-Image-19-de-jun-de-2026-21-07-07-10.png",
  "https://i.ibb.co/23SQPcxN/Chat-GPT-Image-19-de-jun-de-2026-21-07-06-7.png"
];

const carouselPromoRow = [
  "https://i.ibb.co/67PYQWm0/Chat-GPT-Image-19-de-jun-de-2026-21-07-04-1.png",
  "https://i.ibb.co/X1ZsLvX/Chat-GPT-Image-19-de-jun-de-2026-21-07-04-2.png",
  "https://i.ibb.co/sJ6XvQjR/Chat-GPT-Image-19-de-jun-de-2026-21-07-04-3.png",
  "https://i.ibb.co/bjNbrKsw/Chat-GPT-Image-19-de-jun-de-2026-21-07-05-4.png",
  "https://i.ibb.co/HL446NFh/Chat-GPT-Image-19-de-jun-de-2026-21-07-05-5.png",
  "https://i.ibb.co/WWQGRX5k/Chat-GPT-Image-19-de-jun-de-2026-21-07-06-6.png",
  "https://i.ibb.co/6cJKH8CM/Chat-GPT-Image-19-de-jun-de-2026-21-07-06-8.png",
  "https://i.ibb.co/kgGdX9kd/Chat-GPT-Image-19-de-jun-de-2026-21-07-07-9.png"
];

const testimonialImages = [
  "https://i.ibb.co/M5fzzPkQ/depoimento-Luane.webp",
  "https://i.ibb.co/MyhM1zzQ/depoimento-Luh.webp",
  "https://i.ibb.co/v6k9yz7v/depoimento-Pri.webp",
  "https://i.ibb.co/TMCZb9XP/depoimento-Rosangela.webp",
  "https://i.ibb.co/BVXWp8zx/depoimento-Screenshot-2.webp"
];

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

  // Live sales notifications state and cycle
  const [activeNotification, setActiveNotification] = useState<{
    name: string;
    city: string;
    plan: string;
    time: string;
  } | null>(null);

  useEffect(() => {
    const buyers = [
      { name: "Profª Adriana Silva", city: "Campinas - SP", plan: "Kit Completo + Bônus", time: "acabou de comprar" },
      { name: "Juliana Medeiros", city: "São Paulo - SP", plan: "Kit Completo + Bônus", time: "há 45 seg" },
      { name: "Sandra Mara", city: "Porto Alegre - RS", plan: "Kit Completo + Bônus", time: "acabou de comprar" },
      { name: "Profª Luana Torres", city: "Salvador - BA", plan: "Kit Completo + Bônus", time: "há 1 min" },
      { name: "Juliana Farias", city: "Belo Horizonte - MG", plan: "Kit Essencial", time: "há 2 min" },
      { name: "Profª Renata Gomes", city: "Rio de Janeiro - RJ", plan: "Kit Completo + Bônus", time: "há 3 min" },
      { name: "Beatriz Lemos", city: "Goiânia - GO", plan: "Kit Completo + Bônus", time: "acabou de comprar" },
      { name: "Patrícia Vieira", city: "Recife - PE", plan: "Kit Completo + Bônus", time: "há 50 seg" },
      { name: "Profª Silvana Castro", city: "Fortaleza - CE", plan: "Kit Completo + Bônus", time: "há 2 min" },
      { name: "Marcela Oliveira", city: "Florianópolis - SC", plan: "Kit Essencial", time: "há 4 min" },
      { name: "Daniela Soares", city: "Natal - RN", plan: "Kit Completo + Bônus", time: "acabou de comprar" },
      { name: "Profª Letícia Barbosa", city: "Brasília - DF", plan: "Kit Completo + Bônus", time: "há 1 min" },
      { name: "Profª Cláudia Ramos", city: "Curitiba - PR", plan: "Kit Completo + Bônus", time: "acabou de comprar" }
    ];

    let timer: any;
    let cycleTimeout: any;

    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * buyers.length);
      setActiveNotification(buyers[randomIndex]);

      // Show for 5.5 seconds, then hide
      timer = setTimeout(() => {
        setActiveNotification(null);
        // Interval to space them: random gap of 11 to 18 seconds
        const nextGap = Math.random() * 7000 + 11000;
        cycleTimeout = setTimeout(showRandomNotification, nextGap);
      }, 5500);
    };

    // First appearance after 3 seconds
    const initialTimeout = setTimeout(showRandomNotification, 3000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(timer);
      clearTimeout(cycleTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-800 font-sans antialiased relative selection:bg-accent-amber selection:text-primary overflow-x-hidden">
      
      {/* Floating Sales Notifications at the top right */}
      <div className="fixed top-2 md:top-4 right-2 md:right-4 z-50 pointer-events-none w-full max-w-[280px]">
        <AnimatePresence mode="wait">
          {activeNotification && (
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white/95 backdrop-blur-sm shadow-xl border border-emerald-500/10 rounded-xl p-3 flex shadow-emerald-950/5 items-start gap-2.5 pointer-events-auto relative overflow-hidden"
            >
              {/* Subtle green active dot pulse indicator */}
              <div className="mt-1 shrink-0 relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0 pr-2">
                <p className="text-[11px] font-bold text-slate-800 truncate leading-tight">
                  {activeNotification.name}
                </p>
                <p className="text-[10px] text-slate-500 leading-normal">
                  de {activeNotification.city}
                </p>
                <p className="text-[11px] text-slate-700 font-medium leading-normal mt-0.5">
                  adquiriu o <span className="text-emerald-600 font-bold">{activeNotification.plan}</span>
                </p>
                <p className="text-[9px] text-slate-400 mt-1 font-mono">
                  {activeNotification.time}
                </p>
              </div>

              {/* Simple subtle dismiss button */}
              <button 
                onClick={() => setActiveNotification(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-0.5"
                title="Fechar"
              >
                <span className="text-xs font-bold font-sans">✕</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
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
        </div>

        {/* New Promotional Mockup (With borders and a floating motion animation) - Rendered wider than standard parent */}
        <div className="my-8 max-w-6xl lg:max-w-7xl mx-auto px-4 flex justify-center bg-transparent relative z-10 w-full overflow-hidden">
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="p-2 md:p-4 border border-slate-300/40 bg-white/30 backdrop-blur-xs rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.07)] max-w-full w-full transform hover:scale-[1.015] transition-transform duration-300"
          >
            <img 
              src={mockupNew} 
              alt="Atividades de São João" 
              className="w-full h-auto bg-transparent object-contain select-none rounded-2xl"
            />
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
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
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-white rounded-t-3xl" />
      </section>

      {/* ---------------- CAROUSEL PREVIEW SECTION ---------------- */}
      <section className="py-16 bg-white relative overflow-hidden" id="marquee-preview-section">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10 relative z-10">
          <span className="text-xs font-mono font-bold uppercase text-accent-gold bg-amber-50 border border-amber-200/65 px-3.5 py-1.5 rounded-full tracking-wider">
            Preview Real das Atividades 🌽
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary leading-tight mt-4 mb-3">
            Dê uma espiadinha no kit por dentro!
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-normal">
            Páginas reais das atividades inclusas no PDF. Passe o mouse ou toque para pausar o carrossel.
          </p>
        </div>

        {/* Large Highlight Preview Image */}
        <div className="max-w-md md:max-w-lg mx-auto px-4 mb-14 relative z-10 hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-200/60 p-2 md:p-3">
            <img 
              src="https://i.ibb.co/3y4MmgCM/Chat-GPT-Image-19-de-jun-de-2026-21-07-15-8.png" 
              alt="Atividade em destaque" 
              className="w-full h-auto rounded-2xl select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Carousel rows container */}
        <div className="flex flex-col gap-6 md:gap-8 overflow-hidden select-none">
          {/* Row 1 (Marquee left) */}
          <div className="w-full relative">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee-left gap-4 md:gap-6 py-2">
              {[...carouselRow1, ...carouselRow1].map((imgUrl, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="w-[160px] md:w-[240px] aspect-[1/1.41] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200/50 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                >
                  <img 
                    src={imgUrl} 
                    alt={`Preview Atividade ${idx % 6 + 1}`} 
                    className="w-full h-full object-cover select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Marquee right) */}
          <div className="w-full relative">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee-right gap-4 md:gap-6 py-2">
              {[...carouselRow2, ...carouselRow2].map((imgUrl, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="w-[160px] md:w-[240px] aspect-[1/1.41] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200/50 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                >
                  <img 
                    src={imgUrl} 
                    alt={`Preview Atividade ${idx % 6 + 7}`} 
                    className="w-full h-full object-cover select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
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
                  className="bg-neutral-50/50 p-6 rounded-2xl border border-slate-100 hover:bg-neutral-50 hover:border-slate-300 hover:shadow-xs transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="bg-white w-12 h-12 rounded-xl shadow-xs flex items-center justify-center border border-slate-100 mb-4 transform -rotate-1 hover:rotate-3 transition-transform mx-auto">
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



        </div>
      </section>

      {/* ---------------- SEÇÃO CAROSSEL ADICIONAL (ACIMA DA OFERTA) ---------------- */}
      <section className="py-16 bg-neutral-50 relative overflow-hidden" id="carrossel-extra-section">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10 relative z-10">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 bg-amber-100/80 border border-amber-200/60 px-3.5 py-1.5 rounded-full tracking-wider">
            Material 100% Pronto para Imprimir 🖍️
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary leading-tight mt-4 mb-3">
            Atividades lúdicas de alto engajamento pedagógico
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Mais algumas amostras exclusivas das folhas de atividades que você vai receber imediatamente após a compra.
          </p>
        </div>

        {/* Horizontal Infinite Single-Row Carousel (No borders/frames/molduras around the images as requested) */}
        <div className="w-full relative overflow-hidden select-none">
          {/* Subtle side fade-outs for high visual finish */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-left gap-4 md:gap-5 py-2">
            {[...carouselPromoRow, ...carouselPromoRow].map((imgUrl, idx) => (
              <div 
                key={`promo-${idx}`} 
                className="w-[150px] md:w-[220px] aspect-[1/1.41] flex-shrink-0 overflow-hidden hover:scale-[1.03] transition-transform duration-300"
              >
                <img 
                  src={imgUrl} 
                  alt={`Atividade Junina PDF ${idx % 8 + 1}`} 
                  className="w-full h-full object-cover select-none pointer-events-none rounded-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SEÇÃO DE BÔNUS EXCLUSIVOS ---------------- */}
      <section className="py-20 bg-white relative overflow-hidden" id="bonus-section">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
          <Sanfona size={100} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none">
          <ChapeuPalha size={100} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase text-amber-700 bg-amber-100/80 border border-amber-200/60 px-3.5 py-1.5 rounded-full tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> BÔNUS EXCLUSIVOS E GRATUITOS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary leading-tight mt-4 mb-4">
              Garanta seu Kit hoje e leve 2 Bônus Especiais!
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-normal">
              Preparamos dois super complementos pedagógicos para enriquecer ainda mais suas aulas de inglês e motivar os seus estudantes.
            </p>
          </div>

          {/* Bonus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Bonus 1: Copa do Mundo */}
            <div className="bg-neutral-50 rounded-3xl border border-slate-200/60 p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-600 bg-amber-100/60 rounded px-2.5 py-1 inline-block mb-4">
                  BÔNUS #1 • SUPER KIT EXTRA
                </span>
                <h3 className="text-xl md:text-2xl font-display font-black text-slate-900 mb-2 leading-snug">
                  Atividades de Inglês - Copa do Mundo
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Um material temático incrível com **mais de 50 atividades exclusivas de inglês** baseadas na Copa do Mundo. Ideal para trabalhar vocabulário esportivo, leitura, cultura e engajamento coletivo!
                </p>

                {/* Bullet benefits */}
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mais de 50 páginas de atividades temáticas esportivas prontas para a aula.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Exercícios de vocabulário, leitura, gramática contextuais e divertidos.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Formato em PDF de alta qualidade para download e impressão ilimitada.</span>
                  </div>
                </div>
              </div>

              {/* Bonus Image Showcase */}
              <div className="mt-4 bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/40 p-2 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://i.ibb.co/4RP4sFdH/Chat-GPT-Image-19-de-jun-de-2026-21-23-08.png" 
                  alt="Bonus 1 - Copa do Mundo" 
                  className="w-full h-auto rounded-xl object-contain select-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bonus 2: Certificados */}
            <div className="bg-neutral-50 rounded-3xl border border-slate-200/60 p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-600 bg-emerald-100/60 rounded px-2.5 py-1 inline-block mb-4">
                  BÔNUS #2 • ESTÍMULO EXCLUSIVO
                </span>
                <h3 className="text-xl md:text-2xl font-display font-black text-slate-900 mb-2 leading-snug">
                  Certificados Oficiais de Participação
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Recompense o esforço e a brilhante participação dos seus estudantes com **lindos certificados impressos** personalizados tanto para as Atividades de São João quanto para as Atividades da Copa do Mundo!
                </p>

                {/* Bullet benefits */}
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Certificados temáticos coloridos e elegantes prontos para uso.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Prontos para preenchimento com nome do aluno, professor e data.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Aumente a autoestima dos alunos e o orgulho das famílias.</span>
                  </div>
                </div>
              </div>

              {/* Bonus Image Showcase */}
              <div className="mt-4 bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/40 p-2 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://i.ibb.co/xKpPMVn9/Chat-GPT-Image-19-de-jun-de-2026-21-27-00.png" 
                  alt="Bonus 2 - Certificados Oficiais" 
                  className="w-full h-auto rounded-xl object-contain select-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Underneath CTA notice */}
          <div className="mt-12 text-center">
            <p className="text-base font-semibold text-slate-800">
              🎁 Ambos os bônus estão <span className="text-emerald-600 underline decoration-2 decoration-accent-gold decoration-solid">100% inclusos sem custo extra exclusivamente no Plano Premium (R$ 27,90)</span>!
            </p>
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
                    { text: "PDF completo com 50 Atividades de inglês", included: true },
                    { text: "Temática festiva e ilustrada de São João", included: true },
                    { text: "Conteúdos gramaticais e leitura (BNCC)", included: true },
                    { text: "Pronto para imprimir no formato padrão A4", included: true },
                    { text: "Acesso Vitalício ao material do Kit", included: true },
                    { text: "Envio rápido no E-mail e WhatsApp", included: true },
                    { text: "Licença padrão para uso individual", included: true },
                    { text: "Bônus Copa do Mundo (+50 atividades)", included: false },
                    { text: "Certificados Oficiais inclusos", included: false }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      {feat.included ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <span className="w-4 h-4 text-red-550 shrink-0 mt-0.5 font-bold flex items-center justify-center text-[10px]">✕</span>
                      )}
                      <span className={`leading-tight ${feat.included ? "text-slate-650" : "text-slate-400 line-through"}`}>{feat.text}</span>
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
                  Para professores que desejam material completo com acesso vitalício imediato no E-mail e WhatsApp, além de todos os bônus.
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
                    "Acesso Vitalício direto e permanente",
                    "Envio imediato no E-mail e WhatsApp",
                    "🔥 BÔNUS EXTRA: Copa do Mundo (+50 atividades)",
                    "🔥 BÔNUS EXTRA: Certificados Oficiais Inclusos",
                    "BÔNUS: Vocabulário Junino & Flashcards",
                    "BÔNUS: Guia de Aplicação da Festividade",
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

          {/* Depoimentos Cards Grid - Replaced with image stack as requested */}
          <div className="max-w-2xl mx-auto flex flex-col gap-8 md:gap-12">
            {testimonialImages.map((imgUrl, idx) => (
              <img 
                key={idx}
                src={imgUrl} 
                alt={`Depoimento Reais ${idx + 1}`} 
                className="w-full h-auto select-none rounded shadow-sm opacity-95 hover:opacity-100 transition-opacity duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            ))}
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
              {/* Shield/guarantee seal with mixed blend for transparent background effect */}
              <div className="hover:scale-105 active:scale-100 transition-transform duration-300 cursor-pointer w-36 h-36 md:w-44 md:h-44 flex items-center justify-center relative">
                <img 
                  src="https://i.ibb.co/wVjVLvc/download.jpg" 
                  alt="Garantia de 7 dias" 
                  className="w-full h-full object-contain select-none mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Column Core Texts */}
            <div className="text-center md:text-left">
              
              {/* Title */}
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-primary leading-tight mb-4">
                Garantia Incondicional de 7 Dias!
              </h2>

              {/* Text */}
              <p className="text-sm md:text-base text-slate-650 leading-relaxed mb-6">
                O seu risco é absolutamente **zero**. Se por qualquer motivo você achar que o material com as 50 atividades juninas de inglês não é ideal para as suas turmas, basta solicitar o reembolso em até 7 dias. Devolveremos 100% do seu investimento de forma simples e rápida!
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
