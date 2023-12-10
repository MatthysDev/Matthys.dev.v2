// PosterGridHero.tsx
import React, { useState } from 'react';
import ImageGridContainer from '@/components/ImageGridContainer';

type Props = {
    url1: string;
    alt1: string;
    url2: string;
    alt2: string;
    url3: string;
    alt3: string;
    url4: string;
    alt4: string;
    url5: string;
    alt5: string;
    url6: string;
    alt6: string;
    url7: string;
    alt7: string;
    url8: string;
    alt8: string;
};

export default function PosterGridHero({
    url1,
    alt1,
    url2,
    alt2,
    url3,
    alt3,
    url4,
    alt4,
    url5,
    alt5,
    url6,
    alt6,
    url7,
    alt7,
    url8,
    alt8,
}: Props) {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const posterData = [
        { id: 1, title: 'Title 1', subtitle: 'Subtitle 1', url: url1, alt: alt1 },
        { id: 2, title: 'Title 2', subtitle: 'Subtitle 2', url: url2, alt: alt2 },
        { id: 3, title: 'Title 3', subtitle: 'Subtitle 3', url: url3, alt: alt3 },
        { id: 4, title: 'Title 4', subtitle: 'Subtitle 4', url: url4, alt: alt4 },
        { id: 5, title: 'Title 5', subtitle: 'Subtitle 5', url: url5, alt: alt5 },
        { id: 6, title: 'Title 6', subtitle: 'Subtitle 6', url: url6, alt: alt6 },
        { id: 7, title: 'Title 7', subtitle: 'Subtitle 7', url: url7, alt: alt7 },
        { id: 8, title: 'Title 8', subtitle: 'Subtitle 8', url: url8, alt: alt8 },
    ];

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
