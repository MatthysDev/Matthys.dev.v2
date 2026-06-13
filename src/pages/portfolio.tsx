import React, { useState } from 'react'
import CustomLayout from '@/components/CustomLayout'
import Seo from '@/components/Seo'
import Reveal from '@/components/Reveal'
import { SectionKicker } from '@/components/Blueprint'
import ProjectCard from '@/components/Cards/ProjectCard'
import { projects } from '@/apiData/projects'

export default function Portfolio() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    return (
        <CustomLayout>
            <Seo title="Portfolio" path="/portfolio" />

            <Reveal>
                <section className="pb-28 pt-20 md:pt-28">
                    <SectionKicker index="06" label="portfolio" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                        Portfolio
                    </h1>
                    <p className="mt-4 max-w-2xl text-stone-600 dark:text-white/60">
                        Six-plus years of React Native, around 11 clients shipped, and a handful of
                        products I keep building, from Ekklo to Leaf and simgrid.
                    </p>

                    <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.name}
                                selectedId={selectedId}
                                setSelectedId={setSelectedId}
                                item={{
                                    id: projects.length - index,
                                    title: project.name,
                                    subtitle: project.description,
                                }}
                                websiteUrl={project.websiteUrl}
                                image={project.img}
                                name={project.name}
                                description={project.description}
                                longDescription={project.longDescription}
                            />
                        ))}
                    </div>
                </section>
            </Reveal>
        </CustomLayout>
    )
}
