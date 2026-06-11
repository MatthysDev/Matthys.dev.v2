# Blog MDX + amélioration de la home — Design

**Date** : 2026-06-11
**Statut** : validé en brainstorming, en attente de relecture finale

## Objectif

Ajouter un blog en anglais à matthys.dev pour documenter l'expérience de Matthys
en React Native / Expo pendant la construction d'Ekklo, et recentrer la home sur
ce positionnement (Expo expert, building Ekklo, contenu régulier).

## Décisions actées

- **Langue** : anglais (cohérence avec le site, portée communauté Expo/RN internationale).
- **Contenu** : fichiers MDX versionnés dans le repo (pas de CMS, pas de plateforme externe).
- **Approche technique** : rester sur le Pages Router actuel (Next.js 15). Pas de
  migration App Router dans ce chantier.

## 1. Blog

### Contenu

- `content/posts/*.mdx` — un fichier par article.
- Frontmatter : `title`, `description`, `date` (ISO), `tags` (string[]), `cover` (optionnel).

### Stack

| Dépendance | Rôle |
|---|---|
| `gray-matter` | parsing du frontmatter |
| `next-mdx-remote` | rendu MDX côté SSG (Pages Router) |
| `rehype-pretty-code` + `shiki` | coloration syntaxique des snippets — thème `github-dark` sur fond sombre dans les deux modes (blocs de code sombres sur crème en light, cohérent avec la DA) |
| `rehype-slug` + `rehype-autolink-headings` | ancres sur les titres |
| `@tailwindcss/typography` | styles de prose |
| `reading-time` | temps de lecture calculé au build |

### Unités

- `src/utils/posts.ts` — accès contenu : `getAllPosts()` (métadonnées triées par date
  desc), `getPostBySlug(slug)` (métadonnées + source MDX sérialisée). Seul module qui
  touche le filesystem.
- `src/pages/blog/index.tsx` — liste des articles (PostCard : titre, date, tags,
  description, temps de lecture). SSG.
- `src/pages/blog/[slug].tsx` — page article. SSG via `getStaticPaths` (fallback: false).
  Meta OG complètes par article (title, description, og:type article, date).
- `src/components/Blog/PostCard.tsx` — carte article, DA monochrome existante.
- `src/components/Blog/mdxComponents.tsx` — mapping des composants MDX : titres ancrés,
  blocs de code, images via `next/image`, composant `Callout` pour les tips.

### Distribution (au build)

- `rss.xml` et `sitemap.xml` générés par un script `postbuild` (`scripts/generate-feeds.mjs`)
  qui lit `content/posts/` — pages statiques + articles.

### Style

Même DA que le site : monochrome crème (light) / sombre (dark), `CustomLayout`,
composant `Reveal` pour les apparitions.

## 2. Home

Nouvel ordre des sections :
**Hero → Now: Building Ekklo → Latest writing → Gallery (Around the world) → Trusted by (+ chiffres) → Contact**

- **Hero retravaillé** : pitch recentré — *React Native / Expo developer, currently
  building Ekklo*. On garde la photo, le badge « Available for work » et la
  TypeAnimation (séquence mise à jour : Expo, Ekklo, contenu).
- **Section « Now: Building Ekklo »** : carte « What I'm building now » — description
  courte d'Ekklo, badges stack (Expo, React Native, TypeScript), lien vers le produit.
- **Section « Latest writing »** : les 3 derniers posts via `getAllPosts()` (limités
  côté `getStaticProps` de la home), lien « All posts → /blog ».
- **Preuve sociale** : sous « Trusted by », une ligne de chiffres sobres (années
  d'expérience, apps shipées, conférences/podcasts). Témoignages clients : hors scope,
  plus tard.
- **Menu** : ajout du lien « Blog ».

## 3. Premier article

Post d'introduction (en anglais) expliquant le but du blog :

- **Sujet** : pourquoi ce blog existe — documenter en public l'expérience de
  construction d'Ekklo avec Expo / React Native.
- **Contenu** : ce qu'on y trouvera (retours d'expérience concrets, choix de stack,
  ce qui marche/casse en restant à jour sur Expo), et la stack actuelle utilisée
  pour builder Ekklo.
- Rédigé comme un vrai premier post que Matthys pourra réécrire/compléter — pas de
  lorem ipsum.

## Erreurs et cas limites

- Slug inexistant → 404 native (`fallback: false`).
- Frontmatter invalide (date manquante, etc.) → erreur explicite au build, pas de
  publication silencieusement cassée.
- Zéro article → la section « Latest writing » de la home ne s'affiche pas.

## Vérification

- `next build` passe (SSG complet, RSS/sitemap générés).
- `tsc --noEmit` et `next lint` propres.
- Vérification visuelle light/dark sur `/`, `/blog`, `/blog/[slug]` via le dev server.

## Hors scope

- Migration App Router (chantier séparé, possible plus tard sans impact sur le contenu).
- CMS, commentaires, newsletter, analytics.
- Témoignages clients sur la home.
