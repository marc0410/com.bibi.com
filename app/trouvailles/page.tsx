import type { Metadata } from "next";
import { Catalogue } from "@/components/catalogue";
import { Intro } from "@/components/ui";
import { NetworkSection } from "@/components/sections";
export const metadata: Metadata = {
  title: "Les trouvailles",
  description:
    "Baskets, mode, accessoires, tech et idées cadeaux. Choisis une inspiration et lance ta recherche avec Bibi sur WhatsApp.",
};
export default function FindsPage() {
  return (
    <>
      <Intro
        label="Le point de départ de ta recherche"
        title="Tes envies. Ton style. Ton budget."
      >
        <p>
          Pioche une idée ou décris exactement ce que tu veux à Bibi. Chaque
          recherche est l’occasion de découvrir ce que les commerçants peuvent
          te proposer.
        </p>
      </Intro>
      <section className="section container">
        <Catalogue />
      </section>
      <NetworkSection />
    </>
  );
}
