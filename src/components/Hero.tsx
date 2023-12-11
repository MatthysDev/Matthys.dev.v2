import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { neonPurple } from './neonStyles'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <div className='flex flex-col md:flex-row mb-12 gap-4'>
            <div className='relative w-40 h-40  m-auto my-12 md:m-auto'>
                <Image src={'/me.png'} alt={'Matthys Ducrocq'} fill className='rounded-full shadow-[0px_0px_20px_2px_#fff]' />
            </div>
            <div className='w-full md:w-3/5 m-auto flex flex-col gap-2 text-xl '>
                <div>Hello, I‘m Matthys, a React Native developer who finds joy in crafting aesthetically pleasing applications using <span style={neonPurple} className='text-purple-300'>Tailwind.</span></div>
                <div>Beyond the world of code, I immerse myself in creative pursuits, capturing beautiful moments through photography and video, and exploring <span style={neonPurple} className='text-purple-300 '>new perspectives</span> with my drone. 📷</div>
                <div className='flex-col md:flex'>
                    Welcome to my space where code meets creativity. 🚀
                </div>
            </div>
        </div>
    )
}