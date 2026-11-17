import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/shell";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = localFont({
  src: [
    { path: "../public/fonts/body.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/bold.ttf", weight: "600 900", style: "normal" },
  ],
  variable: "--font-dm",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bibi — Ton assistant shopping sur WhatsApp à Abidjan",
    template: "%s · Bibi",
  },
  description:
    "Dis à Bibi ce que tu cherches, ton budget et ta commune. Découvre les offres des commerçants, compare et prépare ta commande sur WhatsApp.",
  openGraph: {
    title: "Tu cherches ? Demande à Bibi.",
    description: "Ton shopping à Abidjan commence par une conversation.",
    locale: "fr_CI",
    type: "website",
    images: [{ url: "/images/campus-pair.webp", width: 800, height: 800 }],
  },
};
export const viewport: Viewport = { themeColor: "#fcf8f0" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={dmSans.variable}>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
