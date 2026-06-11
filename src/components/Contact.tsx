import React from 'react'

const EMAIL = 'ducrocq.matthys@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/matthys-ducrocq'

function MailIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

function LinkedInIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
        </svg>
    )
}

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 py-28 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s work together</h2>
            <p className="mx-auto mt-4 max-w-md text-base text-stone-600 dark:text-white/60 md:text-lg">
                Have a project in mind or just want to say hi? Reach out by email or on LinkedIn.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-stone-700 dark:bg-white dark:text-black dark:shadow-glow-sm dark:hover:bg-white/90"
                >
                    <MailIcon />
                    Email me
                </a>
                <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-900/20 px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900/60 hover:text-stone-900 dark:border-white/20 dark:text-white/80 dark:hover:border-white/60 dark:hover:text-white"
                >
                    <LinkedInIcon />
                    LinkedIn
                </a>
            </div>

            <p className="mt-8 text-sm text-stone-500 dark:text-white/40">{EMAIL}</p>
        </section>
    )
}
