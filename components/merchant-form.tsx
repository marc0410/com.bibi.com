"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { whatsapp } from "@/lib/site";
export function MerchantForm() {
  const [name, setName] = useState("");
  const [commune, setCommune] = useState("");
  const [category, setCategory] = useState("Chaussures");
  const [delivery, setDelivery] = useState("Oui, avec mon livreur");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Salut Bibi ! Je souhaite présenter ma boutique.\nBoutique : ${name.trim()}\nCommune : ${commune.trim()}\nArticles : ${category}\nLivraison : ${delivery}\nComment rejoindre le réseau ?`;
    window.open(whatsapp(message), "_blank", "noopener,noreferrer");
  }
  return (
    <form className="onboarding-form" onSubmit={submit}>
      <label>
        Nom de ta boutique
        <input
          required
          maxLength={100}
          autoComplete="organization"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex. Ma Boutique"
        />
      </label>
      <label>
        Ta commune
        <input
          required
          maxLength={80}
          value={commune}
          onChange={(event) => setCommune(event.target.value)}
          placeholder="Ex. Cocody"
        />
      </label>
      <label>
        Tes articles
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Chaussures</option>
          <option>Mode et vêtements</option>
          <option>Sacs et accessoires</option>
          <option>Tech et électronique</option>
          <option>Beauté et parfums</option>
          <option>Autre catégorie</option>
        </select>
      </label>
      <label>
        Tu proposes la livraison ?
        <select
          value={delivery}
          onChange={(event) => setDelivery(event.target.value)}
        >
          <option>Oui, avec mon livreur</option>
          <option>Oui, avec un partenaire</option>
          <option>À organiser</option>
        </select>
      </label>
      <button className="button button-primary" type="submit">
        Présenter ma boutique sur WhatsApp <ArrowUpRight size={17} />
      </button>
      <p className="form-note">
        Ces informations préparent ton message WhatsApp. Tu peux le modifier
        avant de l’envoyer.
      </p>
    </form>
  );
}
