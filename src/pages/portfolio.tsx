import React from 'react'

type Props = {
    projects: Project[]
}

type Project = {
    name: string
    description: string
    url: string
    imageUrl: string
}

export default function Portfolio({ }: Props) {
    return (
        <div>My Portfolio</div>
    )
}