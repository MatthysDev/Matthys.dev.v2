import React from 'react'
import Image from 'next/image'
import Button from '@/components/Buttons/Button'
import { neonPurple } from '@/components/neonStyles'
import { palette } from '@/utils/palette'

type Props = {}

export default function VideoHero({ }: Props) {
    return (
        <div className='my-24 flex flex-col md:flex-row gap-12'>
            <Image src='/video/gopro.jpg' alt="Go Pro Hero 12" width={250} height={250} className='rounded-3xl' />
            <div className='font-semibold flex flex-col'>
                <div className='text-4xl'>Go Pro Hero 12</div>
                <div className='text-xl opacity-50'>The best action camera</div>
                <div className='mt-4 text-lg'>I buy this camera to upgrade my skills in filming and editing. I use it for my personal projects.</div>
                <div className='mt-4 text-lg'>My goal in 2024 is to reach 2000 subscribers on my YouTube channel.</div>
                <Button link={'https://www.youtube.com/channel/UCir1GGVm053c97jLfCMdLRg?sub_confirmation=1'} text={'Subscribe to my Youtube channel'} color={'bg-purple-300'} isExternal neonColor={palette.purple300} className='-ml-5 mt-2' />
            </div>
        </div>
    )
}