import CustomLayout from '@/components/CustomLayout';
import React from 'react';
import Image from 'next/image';

const images = [
    { src: '/air2s.jpg', alt: 'Air 2s' },
    { src: '/iphone.jpg', alt: 'iPhone' },
    { src: '/om5.jpg', alt: 'OM5' },
    { src: '/gopro.jpg', alt: 'Go Pro Hero 12' },
];

export default function Video() {
    return (
        <CustomLayout withMenu>
            <div className='flex'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-1/2'>
                    {images.map((image, index) => (
                        <div key={index} className='relative rounded-lg overflow-hidden w-auto h-64'>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                objectFit='cover'
                                className='rounded-lg'
                                fill
                                loading='lazy'
                            />
                        </div>
                    ))}
                </div>
                <div className='w-1/2'>
                    <p>This is my video section</p>
                </div>
            </div>
        </CustomLayout>
    );
}

