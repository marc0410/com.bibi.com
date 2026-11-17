import type { Metadata } from "next";
import { ShoppingBag, MessageCircle, Network, Wallet } from "lucide-react";
import { asset, merchantMessage } from "@/lib/site";
import { WhatsAppButton, SectionHeading } from "@/components/ui";
import { ConversationDemo } from "@/components/conversation";
import { MerchantForm } from "@/components/merchant-form";
import { FAQSection } from "@/components/sections";
export const metadata: Metadata = {
  title: "Bibi pour les commerçants",
  description:
    "Reçois des demandes d’achat sur WhatsApp. Inscription gratuite, 0 % de commission et livraison avec ton livreur.",
};
export default function MerchantsPage() {
  return (
    <>
      <section className="merchant-hero">
        <div className="container merchant-hero-grid">
          <div>
            <span className="eyebrow">Bibi pour les commerçants</span>
            <h1>
              Tu as le bon article.
              <br />
              Bibi t’apporte
              <br />
              la bonne demande.
            </h1>
            <p>
              Présente tes produits, réponds sur WhatsApp et développe ta
              clientèle. Tu fixes tes prix et gardes 100 % du prix de tes
              articles.
            </p>
            <WhatsAppButton message={merchantMessage}>
              Rejoindre Bibi
            </WhatsAppButton>
            <p className="subtle-note">
              Inscription gratuite · 0 % de commission
            </p>
          </div>
          <div className="merchant-inbox">
            <div className="merchant-inbox-header">
              <span>
                <ShoppingBag size={20} />
              </span>
              Une recherche pour ta boutique
            </div>
            <div className="request-preview">
              <span>EXEMPLE DE DEMANDE</span>
              <h3>Des Campus grises, en 43.</h3>
              <img
                src={asset("campus-pair.webp")}
                alt="Paire de Campus grises recherchée"
              />
              <div className="request-specs">
                <span>Budget 30 000 F</span>
                <span>Cocody Angré</span>
                <span>Livraison à confirmer</span>
              </div>
              <a href="#demo-commercant" className="button button-primary">
                Voir la conversation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="Une autre façon de trouver des clients"
          title="Ton commerce, avec tes habitudes."
        />
        <div className="feature-grid">
          <article>
            <Wallet />
            <h3>Tu conserves ton prix</h3>
            <p>
              Bibi facture son service au client. L’inscription, le
              référencement et l’apport de demandes sont gratuits pour ta
              boutique.
            </p>
          </article>
          <article>
            <MessageCircle />
            <h3>Tu réponds sur WhatsApp</h3>
            <p>
              Une photo, la taille disponible, ton tarif et les conditions de
              livraison permettent à Bibi de présenter ton offre.
            </p>
          </article>
          <article>
            <Network />
            <h3>Ton réseau peut aider</h3>
            <p>
              Un article manque ? Tu peux orienter la demande vers un commerçant
              qui a la bonne référence.
            </p>
          </article>
        </div>
      </section>
      <section className="demo-section" id="demo-commercant">
        <div className="container">
          <ConversationDemo initialMode="commercant" />
        </div>
      </section>
      <section className="section container" id="reseau">
        <SectionHeading
          label="Entre commerçants"
          title="Une demande que tu ne peux pas servir ?"
        />
        <div className="flow-banner">
          <h3>Recommande une boutique de ton réseau.</h3>
          <p>
            Bibi peut reprendre la recherche avec elle. Son accord, ses
            coordonnées et son offre sont vérifiés avant de la présenter au
            client. Ton propre catalogue peut aussi recevoir les demandes
            apportées par d’autres commerçants.
          </p>
        </div>
      </section>
      <section className="onboarding-section" id="rejoindre">
        <div className="container onboarding-layout">
          <div>
            <span className="eyebrow">Présente-nous ta boutique</span>
            <h2>
              Quelques détails.
              <br />
              Et on en parle sur WhatsApp.
            </h2>
            <p>
              Prépare le nom de ta boutique, ta commune et quelques photos de
              tes articles. Bibi t’indiquera les informations nécessaires pour
              compléter ton référencement.
            </p>
          </div>
          <MerchantForm />
        </div>
      </section>
      <FAQSection all />
    </>
  );
}
