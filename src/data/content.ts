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

/* Structure et tarifs repris de la présentation d'une agence de référence
   (ikuzo.fr), sur demande explicite — point de départ, à ajuster.
   Deux offres seulement (pas de palier "Application Web"). */
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
      "Hébergement + nom de domaine 1 an",
      "Modifications incluses pendant 1 an",
      "SEO local optimisé",
      "Support technique sous 24 h",
    ],
    highlighted: false,
  },
  {
    name: "Site Premium",
    price: 399,
    subtitle: "Paiement unique · Livraison 2/3 semaines · Propriété du code",
    description:
      "Le site premium sur mesure pour les entreprises exigeantes. Livré clé en main avec un niveau de finition supérieur.",
    features: [
      "Site jusqu'à 10 pages sur mesure",
      "Design premium avec animations",
      "SEO technique & on-page avancé",
      "Connexion CRM / analytics",
      "Formation utilisateur + support 3 mois",
      "Code source remis à la livraison",
    ],
    highlighted: true,
  },
];
