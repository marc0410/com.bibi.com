import {
  Hero,
  HowItWorks,
  NetworkSection,
  FeesSection,
  MerchantSection,
  FAQSection,
} from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { Catalogue } from "@/components/catalogue";
import { ConversationDemo } from "@/components/conversation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section container" id="trouvailles">
        <SectionHeading
          label="De quoi as-tu envie ?"
          title="Une idée en tête ? On commence ici."
          href="/trouvailles/"
          link="Toutes les inspirations"
        >
          Des envies pour lancer la conversation. Bibi cherche les offres
          adaptées à ton budget.
        </SectionHeading>
        <Catalogue compact />
      </section>
      <section className="demo-section" id="conversations">
        <div className="container">
          <ConversationDemo />
        </div>
      </section>
      <HowItWorks />
      <NetworkSection />
      <FeesSection />
      <MerchantSection />
      <FAQSection />
    </>
  );
}
