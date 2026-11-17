import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/site";
import type { ReactNode } from "react";

export function WhatsAppButton({
  children = "Écrire à Bibi",
  message = "Salut Bibi ! Voici ce que je cherche : ",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  message?: string;
  variant?: "primary" | "light" | "yellow";
  className?: string;
}) {
  return (
    <a
      href={whatsapp(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`button button-${variant} ${className}`}
    >
      <MessageCircle size={19} aria-hidden="true" />
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
export function SectionHeading({
  label,
  title,
  children,
  link,
  href,
}: {
  label?: string;
  title: string;
  children?: ReactNode;
  link?: string;
  href?: string;
}) {
  return (
    <div className="section-heading flex justify-between gap-6">
      <div>
        {label && <span className="eyebrow">{label}</span>}
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {link}
          <ArrowUpRight size={17} />
        </Link>
      )}
    </div>
  );
}
export function Intro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="page-intro container">
      <span className="eyebrow">{label}</span>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </section>
  );
}
