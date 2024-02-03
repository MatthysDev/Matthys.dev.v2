import CustomLayout from '@/components/CustomLayout'
import Head from 'next/head'
import React from 'react'

type Props = {
    projectApi: Project[]
}

type Project = {
    name: string
    description: string
    url: string
    imageUrl: string
}

export default function Portfolio({ projectApi }: Props) {
    return (
        <CustomLayout>
            <Head>
                <title>Matthys.dev | Vidéo</title> {/* Setting the title metadata */}
            </Head>
            <h1>Portfolio</h1>
            <ul>
                {/* {projectApi.map((project, index) => (
                    <li key={index}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a href={project.url}>
                            <img src={project.imageUrl} alt={project.name} />
                        </a>
                    </li>
                ))} */}
            </ul>
        </CustomLayout>
    )
}