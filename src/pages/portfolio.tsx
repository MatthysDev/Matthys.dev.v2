import CustomLayout from '@/components/CustomLayout'
import Head from 'next/head'
import React from 'react'
import { projects } from '@/apiData/projects'
import Card from '@/components/Cards/Card'

export default function Portfolio() {
    const year = new Date().getFullYear() - 2019
    return (
        <CustomLayout>
            <Head>
                <title>Matthys.dev | Portfolio</title> {/* Setting the title metadata */}
            </Head>
            <div className='grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-12 md:mt-0'>
                <p>During the last {year} years, I have worked on a variety of projects. Here are some of them:</p>
                {projects.map((project, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Card withNeon>
                        <div className='flex flex-col gap-4 p-4 xl:pl-4 xl:py-6'>
                            <div className='flex gap-2 text-xl xl:text-2xl font-bold'>
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