import type { Metadata } from "next";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { Intro, WhatsAppButton } from "@/components/ui";
import { FAQSection } from "@/components/sections";
import { merchantMessage } from "@/lib/site";
export const metadata: Metadata = {
  title: "Questions & aide",
  description:
    "Réponses sur la recherche, les commandes, la livraison et le référencement des commerçants Bibi.",
};
export default function HelpPage() {
  return (
    <>
      <Intro
        label="Besoin d’un coup de main ?"
        title="On reprend la conversation."
      >
        <p>
          Pour une commande, garde ta référence et précise ce qui s’est passé.
          Pour une nouvelle recherche, envoie simplement ton besoin à Bibi.
        </p>
      </Intro>
      <section className="section container">
        <div className="support-options">
          <article className="support-card">
            <MessageCircle />
            <div>
              <h3>J’ai une question sur ma commande</h3>
              <p>Retrouve le suivi ou signale un problème avec ton article.</p>
              <WhatsAppButton message="Salut Bibi ! J’ai besoin d’aide pour ma commande. Ma référence : ">
                Contacter Bibi
              </WhatsAppButton>
            </div>
          </article>
          <article className="support-card">
            <ShoppingBag />
            <div>
              <h3>Je suis commerçant</h3>
              <p>Présente ta boutique ou demande de l’aide pour une offre.</p>
              <WhatsAppButton message={merchantMessage}>
                Parler de ma boutique
              </WhatsAppButton>
            </div>
          </article>
        </div>
      </section>
      <FAQSection all />
      <section id="donnees" className="container">
        <div className="data-note">
          <h3>Tes données et tes demandes</h3>
          <p>
            Les formulaires de ce site préparent un message qui s’ouvre dans
            WhatsApp. Tu choisis de l’envoyer dans cette application. Bibi
            utilise les informations de ta recherche et de ta commande pour
            solliciter les commerçants et organiser leur suivi.
          </p>
          <p>
            Pour demander une correction ou la suppression de tes informations
            chez Bibi, contacte l’équipe depuis ta conversation WhatsApp et
            précise ta demande.
          </p>
        </div>
      </section>
    </>
  );
}
