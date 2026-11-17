"use client";

import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import {
  products,
  categories,
  type Category,
  asset,
  whatsapp,
  money,
} from "@/lib/site";

export function Catalogue({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState<Category>("Tout");
  const [query, setQuery] = useState("");
  const source = compact ? products.slice(0, 3) : products;
  const visible = source.filter(
    (product) =>
      (category === "Tout" || product.category === category) &&
      `${product.name} ${product.detail} ${product.category}`
        .toLocaleLowerCase("fr")
        .includes(query.trim().toLocaleLowerCase("fr")),
  );
  return (
    <div>
      {!compact && (
        <div className="catalogue-tools">
          <div
            className="filters"
            role="group"
            aria-label="Catégories de produits"
          >
            {categories.map((label) => (
              <button
                key={label}
                aria-pressed={category === label}
                onClick={() => setCategory(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <label className="catalogue-search">
            <Search size={17} />
            <input
              aria-label="Chercher une inspiration"
              placeholder="Rechercher une idée"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
      )}
      <div className="product-grid">
        {visible.map((product) => (
          <a
            className="product-card"
            key={product.id}
            href={whatsapp(
              `Salut Bibi ! Je cherche : ${product.detail.toLowerCase()}. Mon budget est d’environ ${money(product.budget)}. Quelles offres peux-tu me proposer ?`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="product-image">
              <img
                src={asset(product.image)}
                alt={product.detail}
                loading="lazy"
                width="600"
                height="600"
                style={{ objectFit: product.fit }}
              />
              <span className="product-category">{product.category}</span>
              <span className="product-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>
            <div className="product-details">
              <div>
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
              </div>
              <span className="product-budget">
                <small>Mon budget</small>
                {money(product.budget)}
              </span>
            </div>
            <span className="product-link">
              Chercher avec Bibi <ArrowUpRight size={14} />
            </span>
          </a>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <Search size={24} />
          <h3>Ton idée sort du catalogue ?</h3>
          <p>Décris-la à Bibi, avec ton budget et ta commune.</p>
          <a
            href={whatsapp(
              `Salut Bibi ! Je cherche ${query || category.toLowerCase()}. Peux-tu m’aider ?`,
            )}
            className="button button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demander à Bibi <ArrowUpRight size={16} />
          </a>
        </div>
      )}
      <p className="catalogue-note">
        Photos d’inspiration et budgets indicatifs. Bibi fait confirmer le prix
        et la disponibilité auprès du vendeur.
      </p>
    </div>
  );
}
