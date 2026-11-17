export const site = {
  name: "Bibi",
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2250101851744",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://askbibi.shop",
  domain: "askbibi.shop",
};
export const asset = (file: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/${file}`;

export function whatsapp(message: string) {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}
export const customerMessage = "Salut Bibi ! Voici ce que je cherche : ";
export const merchantMessage =
  "Salut Bibi ! Je souhaite rejoindre le réseau de commerçants. Ma boutique : ";
export const money = (amount: number) =>
  new Intl.NumberFormat("fr-CI").format(amount) + " F";

export type Category =
  "Tout" | "Chaussures" | "Mode" | "Accessoires" | "Tech" | "Beauté";
export const categories: Category[] = [
  "Tout",
  "Chaussures",
  "Mode",
  "Accessoires",
  "Tech",
  "Beauté",
];
export const products = [
  {
    id: "campus",
    name: "La paire qui va avec tout",
    detail: "Baskets en daim gris",
    category: "Chaussures",
    image: "campus-pair.webp",
    budget: 30000,
    fit: "contain",
  },
  {
    id: "hoodie",
    name: "Un peu plus de confort",
    detail: "Hoodie et pièces streetwear",
    category: "Mode",
    image: "hoodie.webp",
    budget: 15000,
    fit: "cover",
  },
  {
    id: "audio",
    name: "Ta musique, partout",
    detail: "Casque audio sans fil",
    category: "Tech",
    image: "headphones.webp",
    budget: 25000,
    fit: "cover",
  },
  {
    id: "sneaker",
    name: "Une autre couleur ?",
    detail: "Baskets et sneakers",
    category: "Chaussures",
    image: "sneaker.webp",
    budget: 30000,
    fit: "cover",
  },
  {
    id: "bag",
    name: "L’essentiel à portée de main",
    detail: "Sacs et petits accessoires",
    category: "Accessoires",
    image: "bag.webp",
    budget: 20000,
    fit: "cover",
  },
  {
    id: "perfume",
    name: "Une idée de cadeau",
    detail: "Parfums selon ton budget",
    category: "Beauté",
    image: "perfume.webp",
    budget: 30000,
    fit: "cover",
  },
] as const;

export const faqs = [
  {
    q: "Comment lancer ma première recherche ?",
    a: "Écris à Bibi sur WhatsApp. Indique le type d’article, ton budget et ta commune. Pour des chaussures ou un vêtement, ajoute la taille, la couleur et le modèle que tu préfères.",
  },
  {
    q: "La recherche est-elle gratuite ?",
    a: "Oui, tu peux décrire ta recherche et comparer les offres gratuitement. Les frais de service Bibi sont annoncés dans le récapitulatif, avant que tu décides de confirmer.",
  },
  {
    q: "Qu’est-ce que je paie avant la livraison ?",
    a: "Tu règles les frais de service Bibi à la confirmation. Le prix du produit et les frais de livraison sont réglés à la réception, selon les modalités confirmées avec le commerçant.",
  },
  {
    q: "Qui livre ma commande ?",
    a: "Le commerçant organise la livraison avec son livreur. Le tarif, la commune et le créneau sont à confirmer avant le paiement des frais de service.",
  },
  {
    q: "Et si le produit est indisponible ou non livré ?",
    a: "Contacte Bibi avec ta référence de commande. Si le vendeur annule ou ne livre pas l’article convenu, les frais Bibi sont remboursables après vérification de la situation. Le délai dépend du moyen de paiement utilisé.",
  },
  {
    q: "Comment rejoindre Bibi avec ma boutique ?",
    a: "Présente ta boutique sur WhatsApp avec ta commune, tes catégories et quelques photos de tes articles. L’inscription et le référencement sont gratuits. Bibi prend 0 % de commission sur tes ventes.",
  },
];
