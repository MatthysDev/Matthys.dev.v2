'use client'

import CustomLayout from '@/components/CustomLayout';
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { neonBlue, neonPurple, neonBlanc } from '@/components/neonStyles';
import Button from '@/components/Button';

export default function Home() {

  return (
    <CustomLayout>
      <div className='absolute top-0 left-0 bottom-0 right-0 bg-[url("/grid.svg")] opacity-30 z-0'></div>
      <main className="relative flex min-h-screen flex-col items-center p-12 text-white">
        <h1 className="text-4xl font-bold text-white relative">
          <div style={neonBlanc}>Matthys.dev</div>
        </h1>
        <div className='flex gap-4 mt-48 mb-12'>
          <div className='relative w-40 h-40 m-auto'>
            <Image src={'/me.png'} alt={'Matthys Ducrocq'} fill className='rounded-full shadow-[0px_0px_20px_2px_#fff]' />
          </div>
          <div className='w-2/3 m-auto flex flex-col gap-2 text-xl'>
            <div>Hello, I‘m Matthys, a React Native developer who finds joy in crafting aesthetically pleasing applications using <span style={neonPurple} className='text-purple-300'>Tailwind.</span></div>
            <div>Beyond the world of code, I immerse myself in creative pursuits, capturing beautiful moments through photography and video, and exploring <span style={neonPurple} className='text-purple-300 '>new perspectives</span> with my drone. 📷</div>
            <div className='flex'>
              Welcome to my space
              <TypeAnimation
                sequence={[
                  ', where code meets creativity. 🚀',
                  1000,
                  '',
                  ', where code meets creativity. 🚀',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        <Button link={'https://airtable.com/appOrrPF35ppPjTKx/shrZLcDgGq0Kb6soN?backgroundColor=purple'} />
      </main>
    </CustomLayout >
  )
}
