import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container page-intro">
      <span className="eyebrow">Page introuvable</span>
      <h1>Reprenons ta recherche.</h1>
      <p>Cette page n’existe pas ou son adresse a changé.</p>
      <Link href="/" className="button button-primary">
        Revenir à l’accueil
      </Link>
    </section>
  );
}
