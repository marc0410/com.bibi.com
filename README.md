# Bibi — Ton assistant shopping

Site responsive en français réalisé avec Next.js 16, App Router, TypeScript et Tailwind CSS 4. Le projet produit un export statique utilisable sur GitHub Pages, Vercel ou un hébergeur statique.

## Démarrer

Installer Node.js 22, puis lancer les commandes suivantes dans le dossier du projet.

```bash
npm ci
npm run dev
```

Ouvrir http://localhost:3000. Pour vérifier et construire la version de production, lancer les commandes suivantes.

```bash
npm run typecheck
npm run build
```

Le dossier `out` contient le site compilé. `node_modules`, `.next` et `out` sont recréés automatiquement.

## Pages et interactions

- `/` présente Bibi, les produits, les deux conversations, le fonctionnement, les frais et les commerçants.
- `/comment-ca-marche` explique le parcours et propose la démonstration interactive.
- `/trouvailles` propose six inspirations filtrables par catégorie et recherchables par texte.
- `/commercants` présente le référencement gratuit et un formulaire qui prépare une demande WhatsApp.
- `/tarifs` détaille la répartition des paiements à travers un exemple.
- `/aide` rassemble les questions fréquentes, le contact et une explication du formulaire.

Les conversations sont des démonstrations scénarisées avec photos, sélection de deux offres, récapitulatif, confirmation et livraison. La vue commerçant inclut la recommandation d’une autre boutique. Les prix, stocks et paiements affichés dans ces exemples sont illustratifs.

Les boutons et le formulaire ouvrent WhatsApp vers **+225 01 01 85 17 44**, avec un message prérempli. L’utilisateur envoie lui-même le message. L’agent IA, la messagerie WhatsApp Cloud API, le paiement et le suivi réel des commandes nécessitent leur propre backend. Ce projet constitue l’interface publique de présentation du service.

## Configuration

Copier `.env.example` vers `.env.local` pour modifier le numéro, l’URL canonique et, si nécessaire, le chemin de base. Ces valeurs publiques sont intégrées lors de la compilation.

- `NEXT_PUBLIC_WHATSAPP_NUMBER` contient le numéro international sans `+` ni espaces.
- `NEXT_PUBLIC_SITE_URL` contient l’adresse canonique du site, initialement `https://askbibi.shop`.
- `NEXT_PUBLIC_BASE_PATH` reste vide pour un domaine racine. Un déploiement dans un sous-dossier utilise par exemple `/bibi`.

Les contenus et produits se modifient dans `lib/site.ts`. Les sections se trouvent dans `components`. Les pages se trouvent dans `app`. Les couleurs, styles responsive et tokens Tailwind se trouvent dans `app/globals.css`. Les photos, le logo et les polices sont locaux dans `public`.

L’exemple de commande utilise un produit à 25 000 F, une livraison à 1 500 F et des frais Bibi à 1 000 F. Il peut être comparé à une seconde offre à 28 000 F. La grille générale des frais doit être renseignée dans les contenus lorsque la tarification commerciale définitive est validée.

## Déployer via GitHub

1. Créer un dépôt GitHub et y déposer le contenu de ce dossier, y compris `.github` et `.gitignore`.
2. Dans **Settings → Pages**, choisir **GitHub Actions** comme source.
3. Pousser la branche `main`, ou lancer le workflow **Déployer sur GitHub Pages** depuis l’onglet Actions.
4. Le workflow installe les dépendances, construit le site avec le bon chemin de base et publie `out`.

Le workflow prend en charge les adresses de dépôt de type `utilisateur.github.io/bibi`. Pour utiliser `askbibi.shop`, configurer le domaine personnalisé dans GitHub Pages puis les enregistrements DNS chez le fournisseur du domaine. Le projet ne modifie pas automatiquement le DNS.

Pour Vercel, importer le dépôt et utiliser le preset Next.js avec la commande `npm run build`. Les variables publiques peuvent être définies dans la configuration du projet.

## Direction produit

La refonte met les articles et la démonstration du service au premier plan. La mascotte sert d’avatar et de signature de marque. Les principes des sections existantes sont repris avec un espace commerçant, une page de frais, une démonstration complète et un pied de page étendu.

Les références suivantes ont été consultées le 17 novembre 2026.

- Retrofit — recherche adaptée au goût, à la taille et au budget. https://www.ycombinator.com/companies/retrofit
- Channel3 — recherche de produits et comparaison entre commerçants. https://channel3.ai/
- SellRaze — présentation du produit par ses photos et simplification des actions commerçant. https://www.sellraze.com/
- Apten — démonstration d’un parcours conversationnel jusqu’à la conversion. https://www.apten.ai/

Ces références orientent la présentation du service. Bibi reste un service indépendant.

## Visuels

Le logo et la mascotte proviennent des éléments Bibi fournis. Les photographies de Campus proviennent de la fiche produit Crepslocker et servent à illustrer les conversations. https://www.crepslocker.com/products/adidas-campus-00s-grey-white

Les photographies du sweat, du parfum et des baskets proviennent d’Unsplash, respectivement `photo-1556821840-3a63f95609a7`, `photo-1541643600914-78b084683601` et `photo-1549298916-b41d501d3772`. Les visuels du sac, du casque et de la chaussure rouge proviennent du site Bibi initial. Les images n’établissent aucune affiliation avec les marques représentées. Remplacer les images illustratives par les photos autorisées des commerçants pour constituer un catalogue réel.
