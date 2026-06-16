# PhoneShowcase — animation téléphone du Hero

**Date** : 2026-06-16
**Statut** : approuvé, prêt pour plan d'implémentation

## Objectif

Ajouter au Hero de la page d'accueil une maquette de téléphone animée, futuriste et
détaillée, affichant les applications de Matthys façon « home screen » iOS. Pièce
visuelle centrale qui montre concrètement « ce que je construis ».

## Contraintes & contexte

- Stack : Next.js 15, React 19, **framer-motion 11**, Tailwind 3.4 (déjà présents).
- Thème « blueprint » : fond quadrillé, accents `sky`/cyan, `dark:shadow-glow`,
  `border-sky-300/25`. Le composant doit rester cohérent avec ces tokens.
- Rendu **DOM + framer-motion** uniquement. Pas de Three.js / Canvas (trop lourd pour
  un Hero), pas de Lottie (moins flexible/cliquable). Le glassmorphism se fait en CSS.
- Le Hero utilise déjà `useReducedMotion` — on s'aligne dessus.

## Layout du Hero (restructuration)

Passage en 2 colonnes sur desktop (`md:`) :

- **Gauche** : intro existante (badge « Available for work », `h1`, `TypeAnimation`,
  paragraphe, boutons). La photo de profil passe en **petit inline** à côté du titre
  (au lieu du grand bloc 36/44 actuel).
- **Droite** : le `<PhoneShowcase>`, centerpiece visuel.
- **Mobile** : empilement vertical (intro puis téléphone légèrement réduit).

## Le téléphone (glassmorphism / HUD bleu)

- Châssis : rectangle arrondi, bezel fin, dynamic island, reflets en verre.
- Status bar HUD : heure factice (statique, ex. `9:41` — **pas** de `Date.now()` pour
  rester déterministe au rendu), barres signal/wifi en cyan, ligne de scan animée qui
  descend lentement en boucle.
- Fond d'écran : dégradé sombre + quadrillage blueprint en filigrane (continuité site).
- Accents cyan/sky alignés sur les tokens existants.

## Grille d'icônes

- **8 icônes** = 4 produits + 4 lab. Grille 2 colonnes × 4 rangées dans la zone écran.
  - Produits : Ekklo 🏋️ (logo `/clients/ekklo.png`), Leaf 🌿, simgrid ▦, matthys.dev `</>`.
  - Lab : DearValentine ❤️, One Advice 🤔, `expo-router-protected-routes` 🔐,
    `alfred-tailwind-colors` 🎨.
- **Dock en bas** : les 4 produits mis en avant.
- Tuile glass : `backdrop-blur`, fond translucide, `ring`, glow interne. Emoji centré
  (logo PNG pour Ekklo). Label court sous l'icône. Badge de statut : point vert `live`,
  pulsation `building`.

## Animations & interactivité (« vivant + cliquable »)

- **Intro** : apparition des icônes en cascade (stagger, scale + fade) au montage.
- **Parallaxe souris** : inclinaison légère du téléphone (`rotateX`/`rotateY` via
  `useMotionValue` + `useTransform`), icônes à profondeurs différentes → effet 3D.
- **Survol** : icône qui se soulève + glow cyan + label renforcé.
- **Clic** : ouvre le `websiteUrl` externe si présent, sinon ancre interne
  `/portfolio` du projet. Liens externes en `target="_blank"` + `rel`.
- **`useReducedMotion`** : grille statique, aucune anim, mais reste cliquable.

## Découpage / fichiers

- `src/components/PhoneShowcase/index.tsx` — orchestrateur (parallaxe, châssis, layout).
- `src/components/PhoneShowcase/AppIcon.tsx` — une tuile glass (props : `app`, `depth`,
  comportement de clic).
- `src/components/PhoneShowcase/data.ts` — sélection + ordre des apps, dérivés de
  `src/apiData/projects.ts` (pas de duplication des données).
- `src/components/Hero.tsx` — passage 2 colonnes + insertion du composant.

## Hors périmètre (YAGNI)

- Pas de pages multiples / pagination du home screen.
- Pas de screenshots réels d'apps (emoji + logo suffisent).
- Pas de son, pas de haptique simulée, pas de mode « boot » scénarisé.
