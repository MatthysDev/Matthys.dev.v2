# Refacto single-page + montée en gamme DA — matthys.dev

**Date:** 2026-06-11
**Objectif:** Simplifier le site en une page unique pro, garder l'ADN visuel (dark, dégradé radial, grille, touche de glow) mais monter le tout en gamme.

## Décisions validées

- **Structure:** single page tout-en-un (`/`). Plus de routes `/about`, `/contact`, `/posters`, `/video`.
- **About** fusionné dans la page principale (section photos).
- **Contact** = section `#contact` avec email + LinkedIn uniquement (suppression de l'Airtable).
- **DA:** monochrome premium (noir profond, accent blanc/gris clair), glow blanc **subtil et dosé** sur 2-3 éléments clés.
- **Pages conservées mais non affichées:** `plan.tsx`, `portfolio.tsx` (+ deps `projects`, `Card`, `ProjectCard`, `ImageGridContainer`). Aucun lien vers elles.

## Contenu contact

- Email: `ducrocq.matthys@gmail.com` (mailto)
- LinkedIn: `https://www.linkedin.com/in/matthys-ducrocq`

## Fichiers supprimés

`pages/about.tsx`, `pages/contact.tsx`, `pages/posters.tsx`, `pages/video.tsx`,
`components/PosterGridHero.tsx`, `components/VideosCards.tsx`, `components/video/VideoHero.tsx`,
`apiData/posterApi.ts`, `apiData/videoApi.ts`

## Fichiers modifiés

- `pages/index.tsx` — page unique : Hero + Gallery (ex-About) + Clients + Contact, avec reveals au scroll.
- `pages/_app.tsx` — police pro via `next/font` (Inter), appliquée globalement.
- `styles/globals.css` — fond noir profond raffiné, smooth scroll, font smoothing, couleur de sélection.
- `components/Menu/Menu.tsx` + `MenuMobile.tsx` — monochrome, brand + lien Contact (`#contact`) seulement.
- `components/CustomLayout.tsx` — fond/grille raffinés, conteneur cohérent.
- `components/Hero.tsx` — avatar ring + glow subtil, `TypeAnimation` sur le rôle, copy nettoyée (emojis retirés).
- `components/neonStyles.ts` — glow blanc subtil conservé en accent.

## Nouveaux fichiers

- `components/Contact.tsx` — section CTA (email + LinkedIn, boutons pill + icônes SVG).
- `components/Gallery.tsx` — grille photos responsive, hover zoom + légende.
- `components/Reveal.tsx` — wrapper framer-motion fade/slide au scroll.

## DA — principes pro

1. Typo: Inter via `next/font`, hiérarchie nette, rythme vertical cohérent.
2. Glow dosé: halo blanc subtil sur avatar + titres clés ; bordures fines blanches sur boutons.
3. Espacement: conteneur `max-w`, sections espacées régulièrement.
4. Micro-animations: reveal au scroll, smooth-scroll vers `#contact`.
5. Photos: `rounded-xl`, bordure subtile, hover zoom léger, légende.
6. SEO: meta title/description + OG.
