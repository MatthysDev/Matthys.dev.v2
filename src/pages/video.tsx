import CustomLayout from '@/components/CustomLayout';
import React from 'react';
import Image from 'next/image';
import InspirationalVideos from '@/components/InspirationalVideos';
import { inspirationalVideos } from '@/apiData/videoApi';
import Head from 'next/head';

const images = [
    { src: '/air2s.jpg', alt: 'Air 2s' },
    { src: '/iphone.jpg', alt: 'iPhone' },
    { src: '/om5.jpg', alt: 'OM5' },
    { src: '/gopro.jpg', alt: 'Go Pro Hero 12' },
];

export default function Video() {
    return (
        <CustomLayout withMenu>
            <Head>
                <title>Matthys.dev | Vidéo</title> {/* Setting the title metadata */}
            </Head>
            <div className='flex gap-12 mt-24 mb-32 2xl:my-32 '>
                <div className='w-full md:w-1/2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {images.map((image, index) => (
                            <div key={index} className='relative rounded-lg overflow-hidden aspect-square'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    objectFit='cover'
                                    className='rounded-lg'
                                    layout='responsive'
                                    width={1} // Set width and height to maintain aspect ratio
                                    height={1}
                                    loading='lazy'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <p className='text-white text-2xl font-bold 2xl:text-4xl mb-0 2xl:mb-4 '>Welcome to My Video Section</p>
                    <p className='text-white text-md 2xl:text-2xl'>Hey there! I‘m passionate about creating videos, and I‘m excited to share my journey with you.</p>
                    <p className='text-white text-lg 2xl:text-2xl'>I recently got a new camera and I‘m in the process of learning how to use it. The world of filmmaking and video editing is both thrilling and challenging, and I can‘t wait to explore it further.</p>
                    <p className='text-white text-lg 2xl:text-2xl'>While I may not be an expert just yet, I believe that the joy is in the journey. I‘ll be documenting my progress and sharing the highs and lows of my filmmaking experience, hoping it inspires fellow enthusiasts and beginners alike.</p>
                    <p className='text-white text-lg 2xl:text-2xl'>So be ready to embark on this filmmaking adventure together.</p>
                </div>
            </div>
            <div>
                <div className='text-3xl text-white pt-2 mb-12 font-bold'>Some of my inspirations</div>
                <InspirationalVideos videos={inspirationalVideos} />
                <div className='text-2xl text-white pt-2 mb-4 font-bold'>What I learned from these videos</div>
                <div className='text-white text-lg mb-12'>
                    - If you are doing something like a lot of people, you are doing it wrong. You need to do it differently. You need to do it in a way that is unique to you.
                </div>
            </div>
        </CustomLayout>
    );
}

