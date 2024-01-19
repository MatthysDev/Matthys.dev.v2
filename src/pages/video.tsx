import CustomLayout from '@/components/CustomLayout';
import React from 'react';
import Image from 'next/image';
import InspirationalVideos from '@/components/InspirationalVideos';
import { inspirationalVideos } from '@/apiData/videoApi';

const images = [
    { src: '/air2s.jpg', alt: 'Air 2s' },
    { src: '/iphone.jpg', alt: 'iPhone' },
    { src: '/om5.jpg', alt: 'OM5' },
    { src: '/gopro.jpg', alt: 'Go Pro Hero 12' },
];

export default function Video() {
    return (
        <CustomLayout withMenu>
            <div className='flex gap-12'>
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
                <div className='w-1/2 flex flex-col gap-4'>
                    <p className='text-white text-2xl font-bold'>Welcome to My Video Section</p>
                    <p className='text-white text-lg'>Hey there! I‘m passionate about creating videos, and I‘m excited to share my journey with you.</p>
                    <p className='text-white text-lg'>I recently got a new camera and I‘m in the process of learning how to use it. The world of filmmaking and video editing is both thrilling and challenging, and I can‘t wait to explore it further.</p>
                    <p className='text-white text-lg'>On this channel, you‘ll find a mix of behind-the-scenes looks at my video-making process, tips and tricks I discover along the way, and, of course, the final results of my creative endeavors.</p>
                    <p className='text-white text-lg'>While I may not be an expert just yet, I believe that the joy is in the journey. I‘ll be documenting my progress and sharing the highs and lows of my filmmaking experience, hoping it inspires fellow enthusiasts and beginners alike.</p>
                    <p className='text-white text-lg'>So be ready to embark on this filmmaking adventure together. I can‘t wait to connect with you and build a community where we can learn and grow together!</p>
                </div>
            </div>
            <div>
                <div className='text-3xl text-white mt-24 mb-12 font-bold'>Some of my inspirations</div>
                <InspirationalVideos videos={inspirationalVideos} />
            </div>
        </CustomLayout>
    );
}

