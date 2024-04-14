import CustomLayout from '@/components/CustomLayout';
import React from 'react';
import Image from 'next/image';
import { inspirationalVideos } from '@/apiData/videoApi';
import Head from 'next/head';
import VideosCards from '@/components/VideosCards';

const images = [
    { src: '/video/air2s.jpg', alt: 'Air 2s' },
    { src: '/video/iphone.jpg', alt: 'iPhone' },
    { src: '/video/om5.jpg', alt: 'OM5' },
    { src: '/video/gopro.jpg', alt: 'Go Pro Hero 12' },
];

export default function Video() {
    return (
        <CustomLayout withMenu>
            <Head>
                <title>Matthys.dev | Vidéo</title>
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
                                    width={1}
                                    height={1}
                                    loading='lazy'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <p className='text-2xl font-bold 2xl:text-4xl mb-0 2xl:mb-4 '>Welcome to My Video Section</p>
                    <p className='text-md 2xl:text-2xl'>Hey there! I‘m passionate about creating videos, and I‘m excited to share my journey with you.</p>
                    <p className='text-lg 2xl:text-2xl'>I recently got a new camera and I‘m in the process of learning how to use it. The world of filmmaking and video editing is both thrilling and challenging, and I can‘t wait to explore it further.</p>
                    <p className='text-lg 2xl:text-2xl'>While I may not be an expert just yet, I believe that the joy is in the journey. I‘ll be documenting my progress and sharing the highs and lows of my filmmaking experience, hoping it inspires fellow enthusiasts and beginners alike.</p>
                    <p className='text-lg 2xl:text-2xl'>So be ready to embark on this filmmaking adventure together.</p>
                </div>
            </div>
            <div>
                <div className='text-3xl pt-2 mb-12 font-bold'>Some of my inspirations</div>
                <VideosCards videos={inspirationalVideos} />
                <div className='text-2xl pt-2 mb-4 font-bold'>What I learned from these videos</div>
                <div className='text-lg mb-12'>
                    - If you are doing something like a lot of people, you are doing it wrong. You need to do it differently. You need to do it in a way that is unique to you.
                </div>
                <div className='text-lg mb-12'>
                    - The best way to learn is to do. You can watch all the videos you want, but you won‘t learn anything until you actually do it.
                </div>
                {/* <a href='https://www.tiktok.com/@mqtthys' target='_blank' rel='noreferrer'>
                    <div className='text-2xl pt-2 mb-4 font-bold'>Check out the Tiktok that i made</div>
                </a> */}
                <a href='https://www.youtube.com/channel/UCir1GGVm053c97jLfCMdLRg' target='_blank' rel='noreferrer'>
                    <div className='text-2xl pt-2 mb-4 font-bold'>Check out my youtube channel</div>
                </a>
            </div>
        </CustomLayout>
    );
}

