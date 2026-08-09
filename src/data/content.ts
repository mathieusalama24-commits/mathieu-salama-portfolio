export const profile = {
  name: "Mathieu Salama",
  tagline: "Création de sites web pour commerçants locaux",
  phone: "06 63 38 88 32",
  phoneHref: "tel:+33663388832",
  email: "mathieusalama@hotmail.com",
  city: "Argenteuil, Val-d'Oise",
  reach: "Toute la France (et à l'étranger), à distance",
  siren: "106 657 364",
  photo: "/images/mathieu-salama.jpg",
} as const;

export type Project = {
  slug: string;
  name: string;
  sector: string;
  city: string;
  year: number;
  pitch: string;
  detail: string;
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
    year: 2026,
    pitch: "Positionnement corrigé après audit : toilettage à domicile sur 15 communes, pas un salon fixe.",
    detail:
      "L'audit a révélé que l'adresse connue de la cliente était fermée depuis plus d'un an et que son vrai métier — toilettage à domicile, chien et chat, sur 15 communes du Val-d'Oise — n'apparaissait nulle part en ligne. Les avis Google réels ont été retranscrits sans en inventer aucun, et le site a été construit autour de ce positionnement corrigé plutôt que de l'ancien salon.",
    url: "https://the-exclusive-dog-valdoise.netlify.app",
    image: "/screenshots/the-exclusive-dog.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion", "Three.js"],
  },
  {
    slug: "beautybooh",
    name: "BeautyBooh",
    sector: "Manucure & prothésie ongulaire",
    city: "Argenteuil",
    year: 2026,
    pitch: "Galerie de prestations réelles et réservation Planity mise en avant en CTA principal.",
    detail:
      "Le vrai cœur de métier — manucure et prothésie ongulaire russe, pas des soins du visage — a été confirmé directement sur la fiche Planity de la cliente avant d'écrire la moindre section. Une vingtaine de photos réelles de prestations ont été intégrées, et la réservation Planity mise en CTA principal puisque c'est le canal que la cliente utilise réellement.",
    url: "https://beautybooh.netlify.app",
    image: "/screenshots/beautybooh.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    slug: "l-equilibre",
    name: "L'Équilibre",
    sector: "Institut de beauté",
    city: "Cormeilles-en-Parisis",
    year: 2026,
    pitch: "Refonte complète d'un institut porté par une praticienne Reiki et esthéticienne.",
    detail:
      "Refonte complète d'un institut de beauté porté par une praticienne à la fois esthéticienne et praticienne Reiki — deux pratiques mises en avant côte à côte plutôt que l'une masquant l'autre, pour refléter fidèlement l'offre réelle du cabinet.",
    url: "https://l-equilibre-cormeilles.netlify.app",
    image: "/screenshots/l-equilibre.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    slug: "depannage-sda",
    name: "Dépannage S.D.A",
    sector: "Dépannage & remorquage automobile",
    city: "Argenteuil",
    year: 2026,
    pitch: "Site pilote de la stack Phase 2 — prestations alignées sur l'activité réelle, avis Google intégrés.",
    detail:
      "Premier site construit avec la stack actuelle (Vite + React + Tailwind v4 + shadcn/ui), qui sert depuis de base à tous les suivants. Les prestations affichées ont été recoupées avec le vrai site du client plutôt que supposées, et les avis Google réels (4,5/5) intégrés après vérification directe sur la fiche.",
    url: "https://depannage-sda-argenteuil.netlify.app",
    image: "/screenshots/depannage-sda.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    slug: "paradis-des-fleurs",
    name: "Paradis Des Fleurs",
    sector: "Fleuriste",
    city: "Cormeilles-en-Parisis",
    year: 2026,
    pitch: "Bouquet de roses en 3D interactif, modélisé avec l'artisane et intégré au site.",
    detail:
      "Un bouquet de roses rouges modélisé en 3D avec la fleuriste elle-même, exporté en GLB et intégré au site en Three.js — rotation à la souris ou au doigt. Le seul des sites livrés où l'accent 3D a été jugé assez pertinent et assez abouti pour être conservé en pièce centrale.",
    url: "https://paradis-des-fleurs.netlify.app",
    image: "/screenshots/paradis-des-fleurs.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion", "Three.js"],
  },
  {
    slug: "au-chien-chic",
    name: "Au Chien Chic",
    sector: "Toilettage canin",
    city: "Argenteuil",
    year: 2026,
    pitch: "Salon tenu par un toiletteur certifié depuis 2010 — galerie et réassurance mises en avant.",
    detail:
      "Salon de toilettage tenu par un professionnel certifié depuis 2010. Le site met en avant la galerie de réalisations et les éléments de réassurance (certification, ancienneté) qui justifient le choix de ce salon plutôt qu'un autre dans la même rue.",
    url: "https://au-chien-chic.netlify.app",
    image: "/screenshots/au-chien-chic.jpg",
    stack: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    slug: "helec",
    name: "HELEC",
    sector: "Électricien",
    city: "Argenteuil",
    year: 2026,
    pitch: "Premier site de la série — artisan électricien sans présence en ligne avant la refonte.",
    detail:
      "Le tout premier site du pipeline. Cet artisan électricien n'avait aucune présence en ligne avant la refonte — pas de site, pas de fiche visible — ce qui a posé les bases de la méthode réutilisée depuis : partir de zéro sur des données vérifiées plutôt que d'un template.",
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
  Structure visuelle (2 paliers, carte du milieu mise en avant) inspirée
  d'une agence de référence — mais le contenu ci-dessous décrit le vrai
  processus utilisé sur les 7 sites déjà livrés, pas une copie générique.
  Pas d'offre récurrente pour l'instant (décision du 2026-08-09 : rester en
  one-shot le temps de construire une réputation, avant de proposer une
  maintenance annuelle facturée comme une agence installée).

  Hébergement + nom de domaine (1ʳᵉ année) pris en charge sur les deux offres
  (décision du 2026-08-09) — le domaine reste enregistré au nom du client,
  Mathieu couvre juste le coût de la première année.
*/
export const pricingTiers: PricingTier[] = [
  {
    name: "Site Essentiel",
    price: 399,
    subtitle: "Paiement unique · Hébergement + domaine inclus 12 mois",
    description:
      "Un audit de votre présence en ligne existante avant la première ligne de code, puis une page unique construite sur vos vraies données — vos photos, vos avis, vos horaires. Jamais un template rempli au générateur de texte.",
    features: [
      "Audit de votre fiche Google et de vos avis avant la maquette",
      "Site vitrine 1 page sur mesure, vos vraies photos et avis",
      "Design et palette propres à votre activité, pas un template recyclé",
      "Formulaire de contact fonctionnel",
      "Hébergement + nom de domaine inclus pendant 12 mois",
      "Modifications incluses pendant 1 an",
      "Support technique sous 24 h",
    ],
    highlighted: false,
  },
  {
    name: "Site Premium",
    price: 599,
    subtitle:
      "Paiement unique · Hébergement + domaine inclus 12 mois · Livraison 1 à 2 semaines",
    description:
      "Tout l'Essentiel, avec plusieurs pages pour détailler vos services et rassurer vos prospects, et la partie technique poussée plus loin : données structurées pour le référencement local et headers de sécurité au niveau A+ (audité sur securityheaders.com) dès la mise en ligne.",
    features: [
      "Tout ce qui est inclus dans l'offre Essentiel",
      "Site de 5 à 10 pages sur mesure",
      "Animations soignées, pensées pour votre activité",
      "Hébergement + nom de domaine inclus pendant 12 mois",
      "Données structurées (Schema.org) pour le référencement local",
      "Headers de sécurité A+ audités (securityheaders.com)",
      "Formation utilisateur + support 3 mois",
      "Code source remis à la livraison",
    ],
    highlighted: true,
  },
];

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Pourquoi 399 € plutôt qu'un tarif d'agence classique ?",
    answer:
      "Je travaille seul, sans les frais de structure d'une agence, avec une méthode éprouvée sur des dizaines de sites déjà livrés à des commerçants locaux. Même niveau d'exigence, sans la marge d'intermédiaires.",
  },
  {
    question: "Quelle est la différence entre le Site Essentiel et le Site Premium ?",
    answer:
      "L'Essentiel, c'est une page unique qui présente l'essentiel de votre activité. Le Premium va de 5 à 10 pages pour détailler vos services et rassurer vos prospects, avec des animations soignées, des données structurées pour le référencement local, des headers de sécurité A+ audités, et le code source remis à la livraison.",
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
      "Site sécurisé, sauvegardé et conforme RGPD. Hébergement et nom de domaine inclus 12 mois, aucune gestion technique à votre charge — le domaine reste toujours enregistré à votre nom.",
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
