import { PainPoint, Benefit, Testimonial, FAQItem, ActivityPreview } from "./types";

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "dor-1",
    title: "Falta de tempo sob pressão",
    description: "Você perde horas valiosas pesquisando na internet, planejando e formatando atividades para criar algo temático e chamativo."
  },
  {
    id: "dor-2",
    title: "Dificuldade na adaptação do tema",
    description: "Tentar conectar perfeitamente regras gramaticais rigorosas da Língua Inglesa aos elementos culturais da Festa Junina é um quebra-cabeça."
  },
  {
    id: "dor-3",
    title: "Materiais prontos infantis demais",
    description: "A maioria das atividades gratuitas de São João na internet é voltada para a educação infantil e não atrai ou desafia alunos do Ensino Médio."
  },
  {
    id: "dor-4",
    title: "Pouca profundidade pedagógica",
    description: "Os materiais prontos que existem por aí carecem de gramática robusta, focando apenas em palavras soltas em vez de competências de leitura e escrita."
  },
  {
    id: "dor-5",
    title: "Design ultrapassado e sem vida",
    description: "Levar folhas em preto e branco mal diagramadas e distorcidas desmotiva os alunos e diminui o valor percebido das suas aulas de inglês."
  },
  {
    id: "dor-6",
    title: "Pronto para usar, sem complicação",
    description: "Falta um PDF de alta qualidade e diagramação impecável que você possa apenas baixar, mandar para a impressora e aplicar hoje mesmo."
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "sol-1",
    title: "50 Atividades 100% Prontas",
    description: "Basta escolher a atividade correspondente ao tema da sua aula, imprimir e focar no acompanhamento dos seus alunos."
  },
  {
    id: "sol-2",
    title: "Estética Junina Profissional",
    description: "Uma direção de design belíssima, colorida e estruturada que engaja visualmente sem distrair o estudante."
  },
  {
    id: "sol-3",
    title: "Foco Total no Ensino Médio",
    description: "Textos maduros, vocabulário adequado para adolescentes de 14 a 17 anos e nível gramatical alinhado com a BNCC."
  },
  {
    id: "sol-4",
    title: "Variedade Curricular",
    description: "Trabalhe leitura instrumental, regras gramaticais estruturadas, preposições, produção de texto e expansão de vocabulário temático."
  },
  {
    id: "sol-5",
    title: "Perfeito para Várias Etapas",
    description: "Excelente para fixação após explicações teóricas, revisão de final de bimestre, avaliações criativas ou aulas de substituição rápida."
  },
  {
    id: "sol-6",
    title: "Economia Imediata de Tempo",
    description: "Recupere seus fins de semana. Deixe o trabalho duro de criação e formatação conosco e ganhe mais de 15 horas livres de preparação."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dep-1",
    author: "Mariana S.",
    role: "Professora de Inglês",
    text: "Eu sempre ficava sem tempo para preparar algo diferente no São João. Esse tipo de material ajuda muito porque já vem organizado e pronto para aplicar.",
    rating: 5
  },
  {
    id: "dep-2",
    author: "Patrícia L.",
    role: "Professora do Ensino Médio",
    text: "Gostei porque não é só atividade bonitinha. Tem conteúdo mesmo, com gramática, leitura e escrita. Dá para usar como revisão tranquilamente.",
    rating: 5
  },
  {
    id: "dep-3",
    author: "Renata A.",
    role: "Professora de Inglês",
    text: "Os alunos se envolvem mais quando a atividade conversa com a época do ano. O tema São João deixou a aula mais leve e diferente.",
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "O material é físico ou digital?",
    answer: "É um produto 100% digital em formato PDF de alta resolução. Você receberá o link para download por e-mail imediatamente após a confirmação da compra pelo gateway de pagamento."
  },
  {
    id: "faq-2",
    question: "Serve para qual série?",
    answer: "O material foi projetado e calibrado especificamente para turmas do Ensino Médio (1º, 2º e 3º anos), mas também pode ser perfeitamente adaptado para turmas do 9º ano ou turmas avançadas de Ensino Fundamental II."
  },
  {
    id: "faq-3",
    question: "Preciso editar alguma coisa?",
    answer: "Não. As atividades já estão minuciosamente diagramadas, revisadas e prontas para impressão padrão A4. É só abrir o PDF e imprimir as páginas desejadas."
  },
  {
    id: "faq-4",
    question: "As atividades são coloridas?",
    answer: "Sim. O material possui cores vivas e harmoniosas com temática de Festa Junina. Caso necessite, ele também pode ser impresso em escala de cinza/preto e branco mantendo total legibilidade e beleza."
  },
  {
    id: "faq-5",
    question: "Quais conteúdos aparecem no kit?",
    answer: "Trabalha de maneira robusta: Simple Past, Past Continuous, Future with Will, Going To, Modal Verbs, Articles, Comparatives, Superlatives, Prepositions, Passive Voice, Reading Comprehension (Leitura Instrumental), Writing Practice (Prática de Escrita) e Mixed Grammar Review."
  },
  {
    id: "faq-6",
    question: "Como recebo o material?",
    answer: "Logo após o pagamento aprovado, o sistema envia automaticamente as instruções de acesso e link para baixar o arquivo PDF no seu e-mail cadastrado."
  },
  {
    id: "faq-7",
    question: "Posso usar com meus alunos?",
    answer: "Sim! O material foi desenvolvido especificamente para licenciamento de uso pedagógico individual do professor com seus respectivos alunos em sala de aula."
  }
];

export const ACTIVITY_PREVIEWS: ActivityPreview[] = [
  {
    id: "act-1",
    title: "1. The History of St. John's Bonfires",
    topic: "Reading Comprehension & Passive Voice",
    difficulty: "Intermediário",
    iconType: "reading",
    previewText: "In Brazil, Saint John's bonfires are built in every neighborhood. This secular tradition was inherited from European colonists. Discover how passive structures (e.g. 'Bonfires are kindled shortly before sunset') describe customs. Read the historical passage and identify key passives..."
  },
  {
    id: "act-2",
    title: "2. Comparing June Festivals Worldwide",
    topic: "Comparatives & Superlatives",
    difficulty: "Avançado",
    iconType: "grammar",
    previewText: "Is Festa Junina in Caruaru older than in Campina Grande? Which one is the biggest in the country? Fill in the chart comparing Brazilian June festivals with Midsummer in Sweden or European San Juan celebrations, applying correct comparative adjectives..."
  },
  {
    id: "act-3",
    title: "3. Traditional Junina Recipes & Steps",
    topic: "Modal Verbs (Can, Must, Should, May)",
    difficulty: "Básico",
    iconType: "grammar",
    previewText: "To bake a perfect 'pamonha' or corn cake, what must you do? Fill in the kitchen safety checklist and instructions using correct modal verbs for suggestions, rules, and possibilities: 'You must wash the corn thoroughly, and you should use sweet milk...'"
  },
  {
    id: "act-4",
    title: "4. A Magical Night under the Stars",
    topic: "Simple Past vs. Past Continuous",
    difficulty: "Intermediário",
    iconType: "culture",
    previewText: "Last June, while everyone was dancing 'quadrilha', a sudden warm rain started falling. Complete the sentences with correct past verb formulations: 'While the band was playing (play), teachers were organizing (organize) the tables...'"
  },
  {
    id: "act-5",
    title: "5. Planning your school 'Quadrilha'",
    topic: "Future with Will & Going To",
    difficulty: "Avançado",
    iconType: "writing",
    previewText: "Imagine your class is responsible for organizing the school's June Festival next year. Write an English action plan explaining: 'We are going to buy colored flags on Monday, and the students will perform at 8 PM.' Write a 120-word paragraph..."
  }
];
