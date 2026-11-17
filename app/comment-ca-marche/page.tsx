import type { Metadata } from "next";
import { ConversationDemo } from "@/components/conversation";
import { Intro, WhatsAppButton } from "@/components/ui";
import {
  HowItWorks,
  NetworkSection,
  FeesSection,
  FAQSection,
} from "@/components/sections";
export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Découvre le parcours Bibi, de ta recherche sur WhatsApp à la livraison par le commerçant.",
};
export default function HowPage() {
  return (
    <>
      <Intro
        label="De l’envie à la réception"
        title="Tu demandes. Bibi cherche avec les boutiques."
      >
        <p>
          Une paire bien précise, un vêtement à ta taille, un cadeau dans ton
          budget. Bibi t’aide à trouver une offre et à préparer ta commande.
        </p>
        <WhatsAppButton />
      </Intro>
      <HowItWorks />
      <section className="demo-section">
        <div className="container">
          <ConversationDemo />
        </div>
      </section>
      <div id="recherche">
        <NetworkSection />
      </div>
      <FeesSection />
      <FAQSection />
    </>
  );
}
