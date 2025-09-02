export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

export interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  image?: string;
  tech?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}