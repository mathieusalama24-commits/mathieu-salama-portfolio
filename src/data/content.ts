export const profile = {
  name: "Mathieu Salama",
  tagline: "Création de sites web pour commerçants locaux",
  phone: "06 63 38 88 32",
  phoneHref: "tel:+33663388832",
  email: "mathieusalama@hotmail.com",
  siren: "106 657 364",
  photo: "/images/mathieu-salama.jpg",
} as const;

export type Project = {
  slug: string;
  name: string;
  sector: string;
  city: string;
  pitch: string;
  url: string;
  image: string;
  stack: string[];
};

/*
  Les 7 sites réellement déployés, avec leur URL Netlify en production.
  Ordre : du plus récent au plus ancien (The Exclusive Dog en premier).
*/
export const projects: Project[] = [
  {
    slug: "the-exclusive-dog",
    name: "The Exclusive Dog",
    sector: "Toilettage canin & félin à domicile",
    city: "Val-d'Oise",
    pitch: "Positionnement corrigé après audit : toilettage à domicile sur 15 communes, pas un salon fixe.",
    url: "https://the-exclusive-dog-valdoise.netlify.app",
    image: "/screenshots/the-exclusive-dog.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion", "Three.js"],
  },
  {
    slug: "beautybooh",
    name: "BeautyBooh",
    sector: "Manucure & prothésie ongulaire",
    city: "Argenteuil",
    pitch: "Galerie de prestations réelles et réservation Planity mise en avant en CTA principal.",
    url: "https://beautybooh.netlify.app",
    image: "/screenshots/beautybooh.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    slug: "l-equilibre",
    name: "L'Équilibre",
    sector: "Institut de beauté",
    city: "Cormeilles-en-Parisis",
    pitch: "Refonte complète d'un institut porté par une praticienne Reiki et esthéticienne.",
    url: "https://l-equilibre-cormeilles.netlify.app",
    image: "/screenshots/l-equilibre.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    slug: "depannage-sda",
    name: "Dépannage S.D.A",
    sector: "Dépannage & remorquage automobile",
    city: "Argenteuil",
    pitch: "Site pilote de la stack Phase 2 — prestations alignées sur l'activité réelle, avis Google intégrés.",
    url: "https://depannage-sda-argenteuil.netlify.app",
    image: "/screenshots/depannage-sda.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    slug: "paradis-des-fleurs",
    name: "Paradis Des Fleurs",
    sector: "Fleuriste",
    city: "Cormeilles-en-Parisis",
    pitch: "Bouquet de roses en 3D interactif, modélisé avec l'artisane et intégré au site.",
    url: "https://paradis-des-fleurs.netlify.app",
    image: "/screenshots/paradis-des-fleurs.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion", "Three.js"],
  },
  {
    slug: "au-chien-chic",
    name: "Au Chien Chic",
    sector: "Toilettage canin",
    city: "Argenteuil",
    pitch: "Salon tenu par un toiletteur certifié depuis 2010 — galerie et réassurance mises en avant.",
    url: "https://au-chien-chic.netlify.app",
    image: "/screenshots/au-chien-chic.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    slug: "helec",
    name: "HELEC",
    sector: "Électricien",
    city: "Argenteuil",
    pitch: "Premier site de la série — artisan électricien sans présence en ligne avant la refonte.",
    url: "https://helec-argenteuil.netlify.app",
    image: "/screenshots/helec.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
];

export const stackBadges = [
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Framer Motion",
  "shadcn/ui",
  "Vite",
  "Netlify",
] as const;

export type PricingTier = {
  name: string;
  price: number;
  subtitle: string;
  description: string;
  features: string[];
  highlighted: boolean;
};

/*
  Structure et tarifs inspirés de la présentation d'une agence de référence
  (ikuzo.fr), sur demande explicite — point de départ, à ajuster.
  Deux offres seulement (pas de palier "Application Web").

  Hébergement pris en charge sur les deux offres ; le nom de domaine reste
  toujours à la charge du client (règle appliquée sur tous les sites livrés :
  le client achète et possède son propre nom de domaine).
*/
export const pricingTiers: PricingTier[] = [
  {
    name: "Site Essentiel",
    price: 229,
    subtitle: "Paiement unique · Hébergement & maintenance 1 an inclus",
    description:
      "Le site vitrine professionnel pour les TPE et indépendants qui souhaitent une présence en ligne performante sans contrainte d'abonnement.",
    features: [
      "Site vitrine 5 pages sur mesure",
      "Design responsive haut de gamme",
      "Hébergement 1 an inclus (hors nom de domaine)",
      "Modifications incluses pendant 1 an",
      "SEO local optimisé",
      "Support technique sous 24 h",
    ],
    highlighted: false,
  },
  {
    name: "Site Premium",
    price: 399,
    subtitle: "Paiement unique · Livraison 1 à 2 semaines · Propriété du code",
    description:
      "Le site premium sur mesure pour les entreprises exigeantes. Livré clé en main avec un niveau de finition supérieur.",
    features: [
      "Site jusqu'à 10 pages sur mesure",
      "Design premium avec animations",
      "Hébergement 1 an inclus (hors nom de domaine)",
      "Modifications incluses pendant 1 an",
      "SEO technique & on-page avancé",
      "Connexion CRM / analytics",
      "Formation utilisateur + support 3 mois",
      "Code source remis à la livraison",
    ],
    highlighted: true,
  },
];

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Pourquoi 229 € plutôt qu'un tarif d'agence classique ?",
    answer:
      "Je travaille seul, sans les frais de structure d'une agence, avec une méthode éprouvée sur des dizaines de sites déjà livrés à des commerçants locaux. Même niveau d'exigence, sans la marge d'intermédiaires.",
  },
  {
    question: "Quelle est la différence entre le Site Essentiel et le Site Premium ?",
    answer:
      "L'Essentiel couvre les 5 pages qui font l'essentiel d'une présence en ligne solide. Le Premium va jusqu'à 10 pages, avec des animations soignées, un SEO technique plus poussé, une connexion CRM/analytics et le code source remis à la livraison.",
  },
  {
    question: "Quels sont les délais de mise en ligne ?",
    answer:
      "Comptez 1 à 2 semaines entre le premier échange et la mise en ligne, une fois les contenus réels réunis (photos, avis, tarifs, horaires).",
  },
  {
    question: "Comment gérez-vous les projets sans logo, contenus ni visuels ?",
    answer:
      "Je pars de ce qui existe déjà — fiche Google, réseaux sociaux, avis clients — pour reconstruire un contenu fidèle à l'activité réelle. S'il manque des photos, on peut en générer certaines ou les récupérer ensemble. Jamais de contenu inventé.",
  },
  {
    question: "Le site sera-t-il correctement référencé sur Google ?",
    answer:
      "Chaque site intègre des données structurées (Schema.org), une fiche entreprise complète et un contenu qui reprend vos vrais mots-clés locaux. Aucune agence ne peut garantir une position, mais la base technique est saine dès le premier jour.",
  },
  {
    question: "Quelles sont les modalités de paiement ?",
    answer:
      "Paiement unique, en une fois, à la validation de la maquette — par virement.",
  },
  {
    question: "Avec quels types d'entreprises travaillez-vous ?",
    answer:
      "Des commerçants et artisans locaux : instituts de beauté, toiletteurs, électriciens, fleuristes, dépannage automobile... principalement à Argenteuil, Cormeilles-en-Parisis et dans le Val-d'Oise.",
  },
  {
    question: "Où êtes-vous basé et peut-on vous rencontrer ?",
    answer:
      "Basé dans le Val-d'Oise. On peut échanger par téléphone, en visio, ou en personne selon ce qui vous arrange.",
  },
];

export type Guarantee = { icon: string; title: string; description: string };

/* Conditions reprises telles quelles d'une agence de référence, sur demande
   explicite — à faire valider avant publication : ce sont des engagements
   commerciaux réels (remboursement, pénalité de retard), pas juste du texte
   marketing. */
export const guarantees: Guarantee[] = [
  {
    icon: "shield-check",
    title: "Satisfait ou remboursé 14 jours",
    description:
      "Si la maquette ne répond pas à vos attentes, aucun paiement n'est dû.",
  },
  {
    icon: "clock",
    title: "Livraison garantie en 1 à 2 semaines",
    description:
      "En cas de retard de mon fait, 10 % du montant sont remboursés automatiquement.",
  },
  {
    icon: "refresh-cw",
    title: "Révisions illimitées",
    description:
      "Les itérations se poursuivent jusqu'à validation complète de chaque détail.",
  },
  {
    icon: "lock",
    title: "Hébergement & SSL inclus",
    description:
      "Site sécurisé, sauvegardé et conforme RGPD. Aucune gestion technique à votre charge — hors nom de domaine, toujours à votre nom.",
  },
  {
    icon: "sparkles",
    title: "Design entièrement sur mesure",
    description:
      "Aucun template. Chaque composant est conçu pour votre activité et votre zone de chalandise.",
  },
  {
    icon: "heart-handshake",
    title: "Interlocuteur unique",
    description:
      "Un échange direct avec moi, du premier contact à la mise en ligne — sans intermédiaire commercial.",
  },
];
