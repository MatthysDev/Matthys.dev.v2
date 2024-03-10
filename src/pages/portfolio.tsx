import CustomLayout from '@/components/CustomLayout'
import Head from 'next/head'
import React from 'react'
import { projects } from '@/apiData/projects'
import Card from '@/components/Cards/Card'

export default function Portfolio() {
    return (
        <CustomLayout>
            <Head>
                <title>Matthys.dev | Portfolio</title> {/* Setting the title metadata */}
            </Head>
            <ul>
                {projects.map((project, index) => (
                    <Card>
                        <li key={index}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <a href={project.websiteUrl}>
                                {project.img}
                            </a>
                        </li>
                    </Card>
                ))}
            </ul>
        </CustomLayout>
    )
}