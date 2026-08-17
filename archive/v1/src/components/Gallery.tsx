import React from 'react'
import Image from 'next/image'

type Photo = {
    img: string
    description: string
}

const photos: Photo[] = [
    { img: '/me/appjs-podcast-2026.jpg', description: 'Podcast — App.js Conf 2026 special' },
    { img: '/me/appjs-expo-team-2026.jpg', description: 'With the Expo team — App.js Conf 2026' },
    { img: '/me/sf-carlos-diaz-2026.jpg', description: 'With Carlos Diaz — San Francisco, May 2026' },
    { img: '/me/sf-indie-2026.jpg', description: 'Indie hacker crew, with Marc Lou — San Francisco, May 2026' },
    { img: '/me/appjs-french-team-2026.jpg', description: 'With the French team — App.js Conf 2026' },
    { img: '/me/lille-indie-2025.jpg', description: 'Lille indie hackers meetup — October 2025' },
    { img: '/me/appjs-karting-2025.jpg', description: 'Karting with Vadim (notJust.dev) & Bart Widlarz — App.js Conf 2025' },
    { img: '/me/nyc-indie-2024.jpg', description: 'Indie hackers meetup — New York, May 2024' },
    { img: '/me/me-catalin.jpg', description: 'With Catalin Miron — App.js Conf 2023' },
]

export default function Gallery() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
                <figure
                    key={photo.img}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-900/10 bg-stone-900/5 dark:border-white/10 dark:bg-white/5"
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
