import type { Metadata } from "next";
import { Search, Wallet, Truck, CircleCheck } from "lucide-react";
import { Intro, WhatsAppButton } from "@/components/ui";
import { FeesSection, FAQSection } from "@/components/sections";
export const metadata: Metadata = {
  title: "Les frais Bibi",
  description:
    "Recherche gratuite, frais de service à la confirmation, produit payé à réception. Comprends le prix total avant de commander.",
};
export default function PricingPage() {
  return (
    <>
      <Intro
        label="Les frais Bibi"
        title="Le montant est clair avant que tu confirmes."
      >
        <p>
          Tu décris ta recherche et compares les offres gratuitement. Bibi
          annonce ses frais de service dans le récapitulatif de commande.
        </p>
      </Intro>
      <FeesSection />
      <section className="section container">
        <div className="payment-facts">
          <article>
            <Search />
            <h3>Recherche et comparaison gratuites</h3>
            <p>
              Parle de ton besoin et examine les propositions. Si tu choisis de
              confirmer une offre, le montant des frais de service Bibi est
              présenté avant le paiement.
            </p>
          </article>
          <article>
            <Wallet />
            <h3>Les frais de service à la confirmation</h3>
            <p>
              Le montant dépend de la commande. Dans l’exemple présenté, un
              article à 25 000 F entraîne 1 000 F de frais Bibi. Le
              récapitulatif de ta propre commande donne le montant à régler.
            </p>
          </article>
          <article>
            <Truck />
            <h3>Le produit payé à la réception</h3>
            <p>
              Le commerçant confirme les frais et le créneau de livraison. Tu
              règles le prix du produit et la livraison à réception, suivant les
              modalités convenues.
            </p>
          </article>
          <article>
            <CircleCheck />
            <h3>Un problème avec la livraison ?</h3>
            <p>
              Si le vendeur annule ou ne livre pas le produit convenu, contacte
              Bibi avec ta référence. Les frais Bibi sont remboursables après
              vérification de la situation.
            </p>
          </article>
        </div>
      </section>
      <FAQSection />
    </>
  );
}
