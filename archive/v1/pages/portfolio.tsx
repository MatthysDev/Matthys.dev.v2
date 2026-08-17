import React, { useState } from 'react'
import CustomLayout from '@/components/CustomLayout'
import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import { SectionKicker } from '@/components/Blueprint'
import ProjectCard from '@/components/Cards/ProjectCard'
import { projects, projectSections } from '@/apiData/projects'

export default function Portfolio() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    return (
        <CustomLayout>
            <Seo
                title="Portfolio"
                path="/portfolio"
                description="Six-plus years of React Native — products I own (Ekklo, Leaf, simgrid), client work across 10+ companies, and open-source experiments."
            />

            <Reveal>
                <section className="pt-20 md:pt-28">
                    <SectionKicker index="05" label="portfolio" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                        Portfolio
                    </h1>
                    <p className="mt-4 max-w-2xl text-stone-600 dark:text-white/60">
                        I&apos;m Head of Mobile at Ekklo. Over six-plus years of React Native I&apos;ve
                        shipped apps for 10+ companies, taught and trained developers, and kept a few
                        products of my own. Tap any card for the details.
                    </p>
                </section>
            </Reveal>

            {projectSections.map((section) => {
                const items = projects.filter((p) => p.category === section.key)
                if (items.length === 0) return null
                return (
                    <Reveal key={section.key} className="mt-20 md:mt-28">
                        <SectionKicker index={section.index} label={section.label} />
                        <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                            {section.title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-stone-600 dark:text-white/60">
                            {section.intro}
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {items.map((project) => {
                                const id = projects.indexOf(project) + 1
                                return (
                                    <ProjectCard
                                        key={project.name}
                                        project={project}
                                        id={id}
                                        selectedId={selectedId}
                                        setSelectedId={setSelectedId}
                                    />
                                )
                            })}
                        </div>
                    </Reveal>
                )
            })}

            <div className="pb-28" />
        </CustomLayout>
    )
}
