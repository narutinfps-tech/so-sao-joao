export interface PainPoint {
  id: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  avatarUrl?: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ActivityPreview {
  id: string;
  title: string;
  topic: string;
  difficulty: "Básico" | "Intermediário" | "Avançado";
  previewText: string;
  iconType: "grammar" | "reading" | "culture" | "writing";
}
