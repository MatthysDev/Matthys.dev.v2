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
            <div className='grid grid-cols-3'>
                {projects.map((project, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Card withNeon>
                        <div className='flex flex-col gap-4 p-8'>
                            <div className='flex gap-2 text-2xl font-bold'>
                                <a href={project.websiteUrl}>
                                    {project.img}
                                </a>
                                <h2>{project.name}</h2>
                            </div>
                            <p>{project.description}</p>
                        </div>

                    </Card>
                ))}
            </div>
        </CustomLayout>
    )
}