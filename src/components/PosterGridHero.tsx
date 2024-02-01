// PosterGridHero.tsx
import React, { useState } from 'react';
import ImageGridContainer from '@/components/ImageGridContainer';

type Props = {
    posterData: {
        id: number;
        title: string;
        subtitle: string;
        url: string;
        alt: string;
    }[];
};

export default function PosterGridHero({ posterData }: Props) {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto mt-12 mb-24 md:my-0'>
            <div className='flex flex-col gap-8'>
                <ImageGridContainer
                    key={posterData[0].id}
                    url={posterData[0].url}
                    alt={posterData[0].alt}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    item={posterData[0]}
                />
                <ImageGridContainer
                    key={posterData[1].id}
                    url={posterData[1].url}
                    alt={posterData[1].alt}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    item={posterData[1]}
                />
                <ImageGridContainer
                    key={posterData[2].id}
                    url={posterData[2].url}
                    alt={posterData[2].alt}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    item={posterData[2]}
                />
            </div>
            <div className='flex-col justify-center gap-8 hidden md:flex'>
                <ImageGridContainer
                    key={posterData[3].id}
                    url={posterData[3].url}
                    alt={posterData[3].alt}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    item={posterData[3]}
                />
                <ImageGridContainer
                    key={posterData[4].id}
                    url={posterData[4].url}
                    alt={posterData[4].alt}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    item={posterData[4]}
                />
            </div>
            <div className='flex flex-col gap-8'>
                <ImageGridContainer
                    key={posterData[5].id}
                    url={posterData[5].url}
                    alt={posterData[5].alt}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    item={posterData[5]}
                />
                <ImageGridContainer
                    key={posterData[6].id}
                    url={posterData[6].url}
                    alt={posterData[6].alt}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    item={posterData[6]}
                />
                <ImageGridContainer
                    key={posterData[7].id}
                    url={posterData[7].url}
                    alt={posterData[7].alt}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    item={posterData[7]}
                />
            </div>
        </div>
    );
}
