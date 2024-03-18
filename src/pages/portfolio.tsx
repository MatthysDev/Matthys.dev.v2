import CustomLayout from '@/components/CustomLayout'
import Head from 'next/head'
import React, { useState } from 'react'
import { projects } from '@/apiData/projects'
import Card from '@/components/Cards/Card'
import ProjectCard from '@/components/Cards/ProjectCard'

export default function Portfolio() {
    const year = new Date().getFullYear() - 2019
    const [selectedId, setSelectedId] = useState<number | null>(null);
    return (
        <CustomLayout>
            <Head>
                <title>Matthys.dev | Portfolio</title> {/* Setting the title metadata */}
            </Head>
            <p>During the last {year} years, I have worked on a variety of projects. Here are some of them:</p>
            <div className='grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-12 md:mt-0 gap-4'>
                {projects.map((project, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <ProjectCard selectedId={selectedId} setSelectedId={setSelectedId} item={{
                        id: projects.length - index,
                        title: project.name,
                        subtitle: project.description
                    }} websiteUrl={project.websiteUrl} image={project.img} name={project.name} description={project.description} />
                ))}
            </div>
        </CustomLayout>
    )
}