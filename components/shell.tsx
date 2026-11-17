"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, MapPin, Menu, MessageCircle, X } from "lucide-react";
import {
  asset,
  whatsapp,
  customerMessage,
  merchantMessage,
  site,
} from "@/lib/site";
import { WhatsAppButton } from "./ui";

const navigation = [
  ["/comment-ca-marche/", "Comment ça marche"],
  ["/trouvailles/", "Les trouvailles"],
  ["/commercants/", "Pour les commerçants"],
] as const;
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="announcement">
        Ton shopping, une conversation WhatsApp. <span>À Abidjan.</span>
        <Link href="/comment-ca-marche/">
          Découvrir Bibi <ArrowUpRight size={12} />
        </Link>
      </div>
      <div className="container nav-bar">
        <Link
          href="/"
          aria-label="Bibi, accueil"
          onClick={() => setOpen(false)}
        >
          <img
            className="brand-logo"
            src={asset("logo.webp")}
            alt="Bibi"
            width="87"
            height="38"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map(([url, label]) => (
            <Link
              key={url}
              href={url}
              aria-current={
                pathname === url || pathname === url.slice(0, -1)
                  ? "page"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <WhatsAppButton className="nav-cta" />
          <button
            className="icon-button menu-button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Navigation mobile"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {[
            ...navigation,
            ["/tarifs/", "Les frais Bibi"],
            ["/aide/", "Questions & aide"],
          ].map(([url, label]) => (
            <Link key={url} href={url} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow">Une envie précise ?</span>
            <h2>
              Ça commence par
              <br />« Salut Bibi ».
            </h2>
          </div>
          <WhatsAppButton variant="yellow">Lancer ma recherche</WhatsAppButton>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/">
              <img
                src={asset("logo.webp")}
                alt="Bibi"
                width="110"
                height="48"
              />
            </Link>
            <p>
              Ton assistant shopping IA qui cherche auprès des commerçants
              d’Abidjan.
            </p>
            <span className="footer-place">
              <MapPin size={15} /> Abidjan, Côte d’Ivoire
            </span>
          </div>
          <div>
            <h3>Acheter avec Bibi</h3>
            <Link href="/trouvailles/">Explorer les trouvailles</Link>
            <Link href="/comment-ca-marche/">Comment ça marche</Link>
            <Link href="/#conversations">Voir les conversations</Link>
            <Link href="/tarifs/">Frais de service</Link>
          </div>
          <div>
            <h3>Pour ta boutique</h3>
            <Link href="/commercants/">Devenir commerçant partenaire</Link>
            <a
              href={whatsapp(merchantMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Présenter mon catalogue
            </a>
            <Link href="/commercants/#reseau">Recommander un vendeur</Link>
          </div>
          <div>
            <h3>On en parle ?</h3>
            <Link href="/aide/">Questions fréquentes</Link>
            <a
              href={whatsapp(
                "Salut Bibi ! J’ai besoin d’aide pour ma commande. Référence : ",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Suivre une commande
            </a>
            <a
              className="footer-phone"
              href={whatsapp(customerMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> +225 01 01 85 17 44
            </a>
            <span className="footer-domain">{site.domain}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bibi</span>
          <span>
            Les photos et conversations du site illustrent le parcours d’achat.
          </span>
          <Link href="/aide/#donnees">Tes données et tes demandes</Link>
        </div>
      </div>
    </footer>
  );
}
