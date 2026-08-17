export type Shot = { src: string; alt: string }

export type Project = {
  slug: 'ekklo' | 'compagnie'
  name: string
  /** small caps line above the title */
  kicker: string
  /** one sentence, bold, under the title */
  lede: string
  /** body paragraphs; `b` marks the phrase to bold */
  body: { text: string; bold?: string }[]
  facts: { label: string; value: string }[]
  logo: string
  shots: [Shot, Shot]
  /** CSS var used for the kicker dot */
  accent: string
  /** what the home page tag says next to the phone */
  homeTag: string
  meta: { title: string; description: string }
}

export const EKKLO: Project = {
  slug: 'ekklo',
  name: 'Ekklo',
  kicker: 'Coaching & nutrition',
  lede: 'A coaching app a coach can put their own brand on.',
  body: [
    {
      text:
        'Members follow the programs their coach builds. Sessions run with a real timer — straight sets, Tabata, EMOM — one exercise at a time, with the demo video, the load and the reps on screen while you train. Around the training sit nutrition (recipes, meal plans, shopping lists), habits, weight and body measurements, and a streak that only lights up once the day has actually been validated.',
    },
    {
      text:
        'Coaches close the loop from the other side: feedback on completed sessions, check-in questionnaires and assessments, and Apple Health / Health Connect sync so steps, calories and sleep land without anyone typing them in.',
    },
    {
      text:
        'The interesting part is that it is white-label. The same codebase ships as Ekklo and as a dozen coach-branded apps, each with its own bundle id, icon, splash and palette — built, versioned and submitted to both stores from a single pipeline.',
      bold: 'white-label',
    },
  ],
  facts: [
    { label: 'Platforms', value: 'iOS & Android, one codebase. Apple Watch companion in progress.' },
    { label: 'Scale', value: 'The main app plus a dozen white-label builds, released from one pipeline.' },
  ],
  logo: '/logos/ekklo.png',
  shots: [
    { src: '/shots/ekklo-home.png', alt: 'Ekklo — home screen with the streak and the day’s focus' },
    { src: '/shots/ekklo-seance.png', alt: 'Ekklo — a session in progress: sets, reps, rest and the demo video' },
  ],
  accent: '--lime-deep',
  homeTag: '12-day streak',
  meta: {
    title: 'Ekklo — matthys.dev',
    description:
      'A white-label coaching and nutrition app: timed sessions, demo videos, meal plans, habits and a server-validated streak. One React Native codebase, a dozen coach-branded builds.',
  },
}

export const COMPAGNIE: Project = {
  slug: 'compagnie',
  name: 'Compagnie',
  kicker: 'Company OS',
  lede: 'One place for a company’s conversations, decisions and work.',
  body: [
    {
      text:
        'Inbox, channels and DMs, an issue tracker with sprints and projects, and a decision log — one product where most teams stitch together four. Everything a person owes an answer to arrives in the same inbox, whether it is a mention, an assigned ticket or a vote on a decision.',
    },
    {
      text:
        'Under it sits a Go API with an OpenAPI contract that generates exactly one SDK. Four clients consume it — web, desktop, CLI and mobile — so a capability cannot exist on one surface and quietly not on another.',
    },
    {
      text:
        'Mobile is deliberately a companion, not a mirror. Inbox, channels and tickets earn their place on a phone; whiteboards, bulk imports and settings matrices stay on the web. Sign-in is a six-digit email code, native Google, or GitHub — and the tokens live in the OS keychain, never in async storage.',
      bold: 'companion, not a mirror',
    },
  ],
  facts: [
    { label: 'Platforms', value: 'iOS & Android, plus web, desktop and a CLI on the same API.' },
    { label: 'My part', value: 'The mobile client — the third client on that shared capability surface.' },
  ],
  logo: '/logos/compagnie.png',
  shots: [
    { src: '/shots/compagnie-tickets.png', alt: 'Compagnie — the active issue board on mobile' },
    { src: '/shots/compagnie-login.png', alt: 'Compagnie — sign in with a work email, Google or GitHub' },
  ],
  accent: '--violet',
  homeTag: 'issue board',
  meta: {
    title: 'Compagnie — matthys.dev',
    description:
      'A company OS: inbox, channels, issue tracking and a decision log on one Go API with an OpenAPI contract. The mobile client is a companion, not a mirror of the web app.',
  },
}

export const PROJECTS = [EKKLO, COMPAGNIE] as const
