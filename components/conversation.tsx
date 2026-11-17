"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ImageIcon,
  MessageCircle,
  MoreVertical,
  Paperclip,
  RotateCcw,
  Send,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { asset, money } from "@/lib/site";

type Mode = "client" | "commercant";
const stages = ["La demande", "Les offres", "La confirmation", "La livraison"];
function Bubble({
  children,
  sent = false,
  time = "09:41",
}: {
  children: React.ReactNode;
  sent?: boolean;
  time?: string;
}) {
  return (
    <div className={`chat-bubble ${sent ? "sent" : "received"}`}>
      {children}
      <span className="message-meta">
        {time}
        {sent && <CheckCheck size={13} aria-label="Lu" />}
      </span>
    </div>
  );
}
function ProductOffer({
  second,
  onSelect,
  selected,
}: {
  second?: boolean;
  onSelect: () => void;
  selected: boolean;
}) {
  return (
    <button
      className={`offer-card ${selected ? "chosen" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`Choisir l’offre à ${second ? "28 000" : "25 000"} FCFA`}
    >
      <img
        src={asset(second ? "campus-side.webp" : "campus-pair.webp")}
        alt="Adidas Campus 00s grises"
        width="220"
        height="145"
      />
      <span className="offer-body">
        <strong>{second ? "28 000" : "25 000"} F</strong>
        <span>Campus 00s · 43</span>
        <small>{second ? "Marcory" : "Cocody"} · Livraison à Angré</small>
        <span className="offer-select">
          {selected ? "Offre choisie" : "Choisir cette paire"}
          {selected ? <Check size={13} /> : <ChevronRight size={13} />}
        </span>
      </span>
    </button>
  );
}
export function MiniChat() {
  return (
    <div className="hero-chat">
      <div className="hero-chat-header">
        <img src={asset("mascot.webp")} alt="" />
        <span>
          <strong>Bibi</strong>
          <small>Ton assistant shopping</small>
        </span>
        <MoreVertical size={16} />
      </div>
      <div className="hero-chat-body">
        <Bubble sent>
          Je cherche cette paire en 43.
          <br />
          Budget 30 000 F, à Angré.
        </Bubble>
        <Bubble time="09:42">
          Je regarde auprès des boutiques.
          <br />
          Je te propose les offres qui correspondent.
        </Bubble>
        <div className="mini-result">
          <img
            src={asset("campus-pair.webp")}
            alt="Baskets grises proposées dans la démonstration"
          />
          <span>
            <strong>Campus grises · 43</strong>
            <b>25 000 F</b>
            <small>Exemple d’offre à Cocody</small>
          </span>
          <CircleCheck size={17} />
        </div>
      </div>
      <span className="hero-chat-caption">Exemple de recherche avec Bibi</span>
    </div>
  );
}
export function ConversationDemo({
  initialMode = "client",
}: {
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [stage, setStage] = useState(0);
  const [second, setSecond] = useState(false);
  const [referral, setReferral] = useState(false);
  const scrollArea = useRef<HTMLDivElement>(null);
  const amount = second ? 28000 : 25000;
  useEffect(() => {
    scrollArea.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [stage, mode, referral]);
  function changeMode(nextMode: Mode) {
    setMode(nextMode);
    setStage(0);
    setReferral(false);
  }
  const customerDescriptions = [
    "Le client précise sa taille, son budget et sa commune. Bibi pose la question qui manque pour commencer la recherche.",
    "Les commerçants répondent avec leurs photos et leurs prix. Le client compare les offres et choisit sa paire.",
    "Le récapitulatif distingue le produit, la livraison et le service Bibi. Les frais de service se règlent à la confirmation.",
    "La boutique organise la livraison. Bibi garde la référence de la commande pour accompagner le client.",
  ];
  const merchantDescriptions = [
    "Une demande correspond aux articles de la boutique. Le commerçant répond directement depuis WhatsApp.",
    "Le commerçant transmet une photo, sa taille disponible et son prix. Il confirme aussi les frais de livraison.",
    "Bibi confirme que le client a réglé ses frais de service. La boutique prépare alors le produit convenu.",
    "Le commerçant transmet le créneau de passage de son livreur. Bibi prévient le client dans sa conversation.",
  ];
  return (
    <div className="demo-layout">
      <div className="demo-explanation">
        <span className="eyebrow">Dans la conversation</span>
        <h2>
          Deux côtés.{" "}
          <br />
          Une même commande.
        </h2>
        <p>
          Du premier message à la livraison, découvre comment Bibi fait le lien.
        </p>
        <div
          className="segmented"
          role="group"
          aria-label="Vue de la conversation"
        >
          <button
            aria-pressed={mode === "client"}
            onClick={() => changeMode("client")}
          >
            <MessageCircle size={16} /> Côté client
          </button>
          <button
            aria-pressed={mode === "commercant"}
            onClick={() => changeMode("commercant")}
          >
            <ShoppingBag size={16} /> Côté commerçant
          </button>
        </div>
        <div className="demo-step-list">
          {stages.map((title, index) => (
            <button
              key={title}
              className={stage === index ? "active" : ""}
              onClick={() => {
                setStage(index);
                setReferral(false);
              }}
              aria-current={stage === index ? "step" : undefined}
            >
              <span>{index < stage ? <Check size={14} /> : index + 1}</span>
              <div>
                <strong>{title}</strong>
                {stage === index && (
                  <p>
                    {mode === "client"
                      ? customerDescriptions[index]
                      : merchantDescriptions[index]}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
        <button
          className="demo-reset"
          onClick={() => {
            setStage(0);
            setSecond(false);
            setReferral(false);
          }}
        >
          <RotateCcw size={14} /> Rejouer la conversation
        </button>
      </div>
      <div className="demo-device">
        <div className="chat-top">
          <div className="chat-identity">
            <img src={asset("mascot.webp")} alt="" />
            <div>
              <strong>Bibi</strong>
              <span>Assistant shopping IA</span>
            </div>
          </div>
          <span className="demo-badge">Démonstration</span>
          <MoreVertical size={20} />
        </div>
        <div className="chat-scroll" ref={scrollArea} aria-live="polite">
          <div className="date-pill">Aujourd’hui</div>
          {mode === "client" && (
            <>
              {stage === 0 && (
                <>
                  <Bubble sent>
                    Salut Bibi ! Je cherche des Adidas Campus grises, en 43, à
                    moins de 30 000 F.
                  </Bubble>
                  <Bubble time="09:42">
                    Salut ! Tu souhaites être livré dans quelle commune ?
                  </Bubble>
                  <Bubble sent time="09:42">
                    Cocody Angré.
                  </Bubble>
                  <Bubble time="09:43">
                    Parfait, je cherche les offres en 43 et je vérifie la
                    livraison à Angré.
                  </Bubble>
                  <button className="chat-action" onClick={() => setStage(1)}>
                    Voir les offres <ChevronRight size={16} />
                  </button>
                </>
              )}
              {stage === 1 && (
                <>
                  <Bubble time="09:45">
                    J’ai deux offres qui correspondent à ta recherche. Laquelle
                    préfères-tu ?
                  </Bubble>
                  <div className="offers-grid">
                    <ProductOffer
                      selected={!second}
                      onSelect={() => setSecond(false)}
                    />
                    <ProductOffer
                      second
                      selected={second}
                      onSelect={() => setSecond(true)}
                    />
                  </div>
                  <Bubble sent time="09:46">
                    Je prends la paire à {money(amount)}.
                  </Bubble>
                  <button className="chat-action" onClick={() => setStage(2)}>
                    Voir le récapitulatif <ChevronRight size={16} />
                  </button>
                </>
              )}
              {stage === 2 && (
                <>
                  <Bubble time="09:47">
                    Voilà ta commande, avec la livraison à Angré.
                  </Bubble>
                  <div className="chat-receipt">
                    <div className="receipt-product">
                      <img
                        src={asset(
                          second ? "campus-side.webp" : "campus-pair.webp",
                        )}
                        alt="Paire choisie"
                      />
                      <strong>
                        Adidas Campus grises<small>Pointure 43</small>
                      </strong>
                    </div>
                    <dl>
                      <div>
                        <dt>Le produit</dt>
                        <dd>{money(amount)}</dd>
                      </div>
                      <div>
                        <dt>Livraison à Angré</dt>
                        <dd>1 500 F</dd>
                      </div>
                      <div>
                        <dt>Service Bibi</dt>
                        <dd>1 000 F</dd>
                      </div>
                      <div className="receipt-total">
                        <dt>Total</dt>
                        <dd>{money(amount + 2500)}</dd>
                      </div>
                    </dl>
                    <div className="pay-now">
                      <span>
                        À régler maintenant<strong>1 000 F</strong>
                      </span>
                      <small>{money(amount + 1500)} à la livraison</small>
                    </div>
                  </div>
                  <Bubble time="09:47">
                    Tu règles les frais Bibi pour confirmer. Le produit et la
                    livraison se paient à réception.
                  </Bubble>
                  <button className="chat-action" onClick={() => setStage(3)}>
                    Voir la confirmation <ChevronRight size={16} />
                  </button>
                </>
              )}
              {stage === 3 && (
                <>
                  <Bubble sent time="09:48">
                    C’est payé !
                  </Bubble>
                  <Bubble time="09:48">
                    Paiement reçu. Ta commande <strong>#BIBI-00042</strong> est
                    confirmée. La boutique prépare ta paire.
                  </Bubble>
                  <div className="delivery-card">
                    <Truck size={22} />
                    <div>
                      <strong>Livraison prévue aujourd’hui</strong>
                      <span>Cocody Angré · vers 14 h</span>
                    </div>
                  </div>
                  <Bubble time="09:50">
                    Le livreur passera vers 14 h. Tu lui remettras{" "}
                    {money(amount + 1500)} à la réception.
                  </Bubble>
                  <Bubble sent time="09:51">
                    Parfait, merci Bibi !
                  </Bubble>
                  <span className="demo-end">
                    <CircleCheck size={15} /> Fin du parcours de démonstration
                  </span>
                </>
              )}
            </>
          )}
          {mode === "commercant" && (
            <>
              {stage === 0 && (
                <>
                  <Bubble>
                    Bonjour ! Un client cherche des Campus grises en 43. Budget
                    30 000 F, livraison à Cocody Angré. Tu as la paire ?
                  </Bubble>
                  {!referral ? (
                    <>
                      <div className="quick-replies">
                        <button onClick={() => setStage(1)}>
                          J’ai cet article
                        </button>
                        <button onClick={() => setReferral(true)}>
                          Je connais un vendeur
                        </button>
                      </div>
                      <span className="chat-hint">
                        Choisis une réponse pour continuer.
                      </span>
                    </>
                  ) : (
                    <>
                      <Bubble sent time="09:42">
                        Je n’ai plus le 43, mais je connais une boutique qui
                        l’a.
                      </Bubble>
                      <Bubble time="09:42">
                        Merci ! Partage-lui ma demande. S’il souhaite
                        participer, il peut m’envoyer sa photo, son prix et sa
                        commune.
                      </Bubble>
                      <button
                        className="chat-action"
                        onClick={() => {
                          setReferral(false);
                          setStage(1);
                        }}
                      >
                        Voir un exemple d’offre <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                </>
              )}
              {stage === 1 && (
                <>
                  <Bubble sent time="09:43">
                    Oui, je l’ai. Voici la photo.
                  </Bubble>
                  <div className="merchant-photo">
                    <img
                      src={asset(
                        second ? "campus-side.webp" : "campus-pair.webp",
                      )}
                      alt="Photo des Adidas Campus envoyée par le commerçant"
                    />
                    <strong>Campus grises · 43 · {money(amount)}</strong>
                    <small>
                      09:43 <CheckCheck size={12} />
                    </small>
                  </div>
                  <Bubble time="09:44">
                    Tu peux livrer à Angré aujourd’hui ? À quel tarif ?
                  </Bubble>
                  <Bubble sent time="09:44">
                    Oui, la livraison coûte 1 500 F.
                  </Bubble>
                  <button className="chat-action" onClick={() => setStage(2)}>
                    Voir la commande confirmée <ChevronRight size={16} />
                  </button>
                </>
              )}
              {stage === 2 && (
                <>
                  <Bubble time="09:48">
                    <span className="quoted-offer">
                      <img src={asset("campus-pair.webp")} alt="" />
                      <span>
                        Ton offre<strong>Campus grises · 43</strong>
                      </span>
                    </span>
                    Le client a choisi ta paire. Commande{" "}
                    <strong>#BIBI-00042</strong> confirmée.
                  </Bubble>
                  <Bubble time="09:48">
                    Les frais Bibi sont réglés. Tu peux préparer le colis. Tu
                    encaisseras <strong>{money(amount + 1500)}</strong> à la
                    livraison, dont 1 500 F pour le transport.
                  </Bubble>
                  <Bubble sent time="09:49">
                    Bien reçu, je prépare la paire !
                  </Bubble>
                  <button className="chat-action" onClick={() => setStage(3)}>
                    Suivre la livraison <ChevronRight size={16} />
                  </button>
                </>
              )}
              {stage === 3 && (
                <>
                  <Bubble sent time="09:49">
                    Mon livreur peut passer à Angré vers 14 h.
                  </Bubble>
                  <Bubble time="09:50">
                    Merci, je préviens le client. Pense à confirmer la remise du
                    colis pour terminer la commande.
                  </Bubble>
                  <Bubble sent time="14:12">
                    Le client a reçu sa paire et payé.
                  </Bubble>
                  <Bubble time="14:13">
                    Merci ! Livraison enregistrée pour{" "}
                    <strong>#BIBI-00042</strong>.
                  </Bubble>
                  <span className="demo-end">
                    <CircleCheck size={15} /> Fin du parcours de démonstration
                  </span>
                </>
              )}
            </>
          )}
        </div>
        <div className="chat-composer" aria-hidden="true">
          <Paperclip size={17} />
          <span>Une conversation avec Bibi</span>
          <ImageIcon size={17} />
          <Send size={17} />
        </div>
        <div className="demo-controls">
          <button
            disabled={stage === 0}
            onClick={() => setStage(stage - 1)}
            aria-label="Étape précédente"
          >
            <ChevronLeft size={18} />
          </button>
          <span>
            {stage + 1} / 4 · {stages[stage]}
          </span>
          <button
            disabled={stage === 3}
            onClick={() => setStage(stage + 1)}
            aria-label="Étape suivante"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <p className="demo-disclosure">
          Offres, disponibilités et paiements simulés pour illustrer le service.
        </p>
      </div>
    </div>
  );
}
