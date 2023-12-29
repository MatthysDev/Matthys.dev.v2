import React from 'react'
import Image from 'next/image'
import CustomLayout from '@/components/CustomLayout'
import { neonBlanc } from '@/components/neonStyles'

type Props = {}

export default function about({ }: Props) {
    return (
        <CustomLayout>
            <div className='text-2xl text-white'>
                Some pictures of me at different places around the world
            </div>
            <div className='flex gap-4 w-full'>
                <Image src={'/me/me-catalin.jpg'} alt={'Me and Catalin Miron at App.js 2023'} width={400} height={400} className='rounded-lg shadow-[0px_0px_20px_2px_#fff] my-12' />
                <Image src={'/me/amsterdam.jpg'} alt={'Me and David Leuliette at React Summit 2022'} width={400} height={400} className='rounded-lg shadow-[0px_0px_20px_2px_#fff] my-12' />
            </div>
        </CustomLayout>
    )
}