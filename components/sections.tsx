import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  CircleCheck,
  MapPin,
  MessageCircle,
  Network,
  Search,
  ShoppingBag,
  Truck,
  Wallet,
} from "lucide-react";
import { asset, faqs, merchantMessage } from "@/lib/site";
import { WhatsAppButton, SectionHeading } from "./ui";
import { MiniChat } from "./conversation";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="location-label">
            <MapPin size={14} /> Le shopping à Abidjan, à ta façon
          </span>
          <h1>
            Tu as une envie.
            <br />
            <span>
              Bibi trouve
              <br className="desktop-break" /> les bonnes offres.
            </span>
          </h1>
          <p>
            Dis-lui ce que tu cherches, ton budget et ta commune. Bibi interroge
            les boutiques pour toi, directement sur WhatsApp.
          </p>
          <div className="hero-actions">
            <WhatsAppButton>Lancer ma recherche</WhatsAppButton>
            <a href="#conversations" className="hero-demo-link">
              Voir Bibi en action <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-promise">
            <CircleCheck size={16} />
            <span>Recherche gratuite. Tu choisis avant de confirmer.</span>
          </div>
        </div>
        <div className="hero-scene">
          <div className="scene-caption">
            <span>Ta prochaine trouvaille</span>
            <span>
              À un message de toi <ArrowUpRight size={14} />
            </span>
          </div>
          <div className="scene-main">
            <span className="scene-label">
              La bonne paire.
              <br />À ton budget.
            </span>
            <img
              className="hero-shoe"
              src={asset("campus-pair.webp")}
              alt="Une paire d’Adidas Campus grises, exemple de produit à rechercher avec Bibi"
              width="800"
              height="800"
            />
            <span className="scene-product-note">Campus 00s grises</span>
          </div>
          <div className="scene-side">
            <img
              src={asset("hoodie.webp")}
              alt="Hoodie, inspiration mode"
              width="350"
              height="420"
            />
            <span>Mode & accessoires</span>
          </div>
          <MiniChat />
        </div>
      </div>
      <div className="container hero-reassurance">
        <span>
          <MessageCircle /> Une seule conversation
        </span>
        <span>
          <Search /> Plusieurs boutiques consultées
        </span>
        <span>
          <Wallet /> Produit payé à la livraison
        </span>
        <span>
          <MapPin /> Des commerçants à Abidjan
        </span>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Parle de ce que tu veux",
      text: "Le modèle, la taille, le budget, ta commune. Bibi te pose les questions utiles.",
    },
    {
      icon: ShoppingBag,
      title: "Choisis parmi les offres",
      text: "Photos, prix et livraison. Tu compares les propositions qui répondent à ta recherche.",
    },
    {
      icon: Truck,
      title: "Confirme et reçois",
      text: "Tu règles les frais Bibi à la confirmation, puis le produit et la livraison à réception.",
    },
  ];
  return (
    <section className="section container" id="fonctionnement">
      <SectionHeading
        label="Simple, du début à la fin"
        title="Ton shopping en trois messages."
        href="/comment-ca-marche/"
        link="Le parcours en détail"
      />
      <div className="how-grid">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <article key={title}>
            <div className="step-top">
              <span className="step-index">0{i + 1}</span>
              <Icon size={27} strokeWidth={1.5} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function NetworkSection() {
  return (
    <section className="section network-section">
      <div className="container network-layout">
        <div className="network-visual">
          <div className="network-request">
            <Search size={18} />
            <span>« Des Campus grises en 43 ? »</span>
          </div>
          <div className="network-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="shops">
            <div>
              <ShoppingBag />
              <span>Boutique A</span>
              <small>43 épuisé</small>
            </div>
            <div className="shop-match">
              <ShoppingBag />
              <span>Boutique B</span>
              <small>
                <CheckMark /> Offre trouvée
              </small>
            </div>
            <div>
              <ShoppingBag />
              <span>Boutique C</span>
              <small>Un confrère à contacter</small>
            </div>
          </div>
          <div className="network-result">
            <img src={asset("campus-side.webp")} alt="Baskets proposées" />
            <div>
              <strong>La recherche continue entre boutiques.</strong>
              <span>Le commerçant confirme sa disponibilité.</span>
            </div>
            <Network size={21} />
          </div>
          <span className="visual-note">
            Exemple de recherche dans le réseau Bibi
          </span>
        </div>
        <div className="network-copy">
          <span className="eyebrow">Plus de pistes pour ta recherche</span>
          <h2>
            La bonne offre peut être
            <br />
            dans la boutique d’à côté.
          </h2>
          <p>
            Bibi consulte le catalogue, interroge les vendeurs pertinents, puis
            peut élargir la recherche grâce à leurs recommandations.
          </p>
          <ul>
            <li>
              <CircleCheck /> Une recherche guidée par ton besoin.
            </li>
            <li>
              <CircleCheck /> Un prix et une disponibilité à confirmer.
            </li>
            <li>
              <CircleCheck /> Des alternatives que tu restes libre de choisir.
            </li>
          </ul>
          <Link href="/comment-ca-marche/#recherche" className="text-link">
            Découvrir la recherche Bibi <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
function CheckMark() {
  return <CircleCheck size={12} />;
}
export function FeesSection() {
  return (
    <section className="section container fees-layout" id="frais">
      <div>
        <span className="eyebrow">Tu sais ce que tu paies</span>
        <h2>
          Tu compares gratuitement.
          <br />
          Tu confirmes quand ça te plaît.
        </h2>
        <p>
          Le prix de l’article, la livraison et les frais de service Bibi sont
          présentés avant ta confirmation. Tu règles le produit à la réception.
        </p>
        <Link href="/tarifs/" className="text-link">
          Comprendre les frais Bibi <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="pricing-receipt">
        <span className="receipt-caption">Exemple d’une commande à Angré</span>
        <div className="receipt-product">
          <img src={asset("campus-pair.webp")} alt="Campus grises" />
          <span>
            <strong>Adidas Campus grises</strong>
            <small>Pointure 43</small>
          </span>
        </div>
        <dl>
          <div>
            <dt>Produit</dt>
            <dd>25 000 F</dd>
          </div>
          <div>
            <dt>Livraison</dt>
            <dd>1 500 F</dd>
          </div>
          <div>
            <dt>Service Bibi</dt>
            <dd>1 000 F</dd>
          </div>
          <div className="receipt-total">
            <dt>Total</dt>
            <dd>27 500 F</dd>
          </div>
        </dl>
        <div className="fee-split">
          <span>
            <small>À la confirmation</small>
            <strong>1 000 F</strong>
            <em>Service Bibi</em>
          </span>
          <span>
            <small>À la livraison</small>
            <strong>26 500 F</strong>
            <em>Produit + livraison</em>
          </span>
        </div>
      </div>
    </section>
  );
}
export function MerchantSection() {
  return (
    <section className="container merchant-banner">
      <div className="merchant-banner-copy">
        <span className="eyebrow">Tu as une boutique ?</span>
        <h2>
          La prochaine demande{" "}
          <br />
          peut être pour toi.
        </h2>
        <p>
          Reçois des recherches qui correspondent à tes articles. Réponds sur
          WhatsApp, avec tes photos, tes prix et ton livreur.
        </p>
        <div className="merchant-actions">
          <WhatsAppButton message={merchantMessage} variant="light">
            Présenter ma boutique
          </WhatsAppButton>
          <Link className="text-link" href="/commercants/">
            Découvrir Bibi pour les pros <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="merchant-zero">
        <strong>
          0<span>%</span>
        </strong>
        <span>de commission sur tes ventes</span>
        <p>Inscription et référencement gratuits.</p>
        <img src={asset("mascot.webp")} alt="" loading="lazy" />
      </div>
    </section>
  );
}
export function FAQSection({ all = false }: { all?: boolean }) {
  return (
    <section className="section container faq-layout" id="faq">
      <div>
        <span className="eyebrow">On répond à tes questions</span>
        <h2>
          Avant ton premier{" "}
          <br />« Salut Bibi ».
        </h2>
        <p>
          Un doute sur une commande ? Retrouve Bibi dans ta conversation
          WhatsApp.
        </p>
        <Link className="text-link" href="/aide/">
          Toute l’aide Bibi <ArrowUpRight size={16} />
        </Link>
      </div>
      <div>
        {faqs.slice(0, all ? undefined : 4).map(({ q, a }) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
