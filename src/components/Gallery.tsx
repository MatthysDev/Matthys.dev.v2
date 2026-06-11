import React from 'react'
import Image from 'next/image'

type Photo = {
    img: string
    description: string
}

const photos: Photo[] = [
    { img: '/me/me-catalin.jpg', description: 'With Catalin Miron — App.js Conf 2023' },
    { img: '/me/amsterdam.jpg', description: 'With David Leuliette — React Summit 2022' },
    { img: '/me/lisboa.jpg', description: 'With the Lille indie hackers — Lisboa 2022' },
]

export default function Gallery() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
                <figure
                    key={photo.img}
                    className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5"
                >
                    <Image
                        src={photo.img}
                        alt={photo.description}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white/90">
                        {photo.description}
                    </figcaption>
                </figure>
            ))}
        </div>
    )
}
