import React from 'react';
import Image from 'next/image';
import CustomLayout from '@/components/CustomLayout';
import { Clients } from '@/components/Clients';
import { clients } from '@/apiData/clients';
import Head from 'next/head';

type ImageData = {
    img: string;
    description: string;
};

const images: ImageData[] = [
    { img: '/me/me-catalin.jpg', description: 'Me and Catalin Miron at App.js 2023' },
    { img: '/me/amsterdam.jpg', description: 'Me and David Leuliette at React Summit 2022' },
    { img: '/me/lisboa.jpg', description: 'Me and the indie hackers from Lille at Lisboa 2022' },
];

export default function About() {
    return (
        <CustomLayout>
            <Head>
                <title>Matthys.dev | About me</title> {/* Setting the title metadata */}
            </Head>
            <div className='mt-32 text-2xl font-bold'>
                Some pictures of me at different places around the world.
            </div>
            <div className='flex gap-12 w-full'>
                {images.map((imageData, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='flex flex-col'>
                        <div key={index} className='rounded-lg shadow-[0px_0px_20px_2px_#fff] mt-12 mb-8'>
                            <Image
                                src={imageData.img}
                                alt={imageData.description}
                                width={400}
                                height={400}
                                className='rounded-lg'
                            />
                        </div>
                        <p className='mr-4 font-semibold'>{imageData.description}</p>
                    </div>
                ))}
            </div>
            <div className='text-3xl font-bold m-auto text-center mt-32'>
                I worked with these companies
            </div>
            <Clients clients={clients} />
        </CustomLayout>
    );
}
