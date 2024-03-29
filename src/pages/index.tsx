'use client'
import { neonBlanc } from '@/components/neonStyles';
import Button from '@/components/Buttons/Button';
import Hero from '@/components/Hero';
import { palette } from '@/utils/palette';
import CustomLayout from '@/components/CustomLayout';
import { Clients } from '@/components/Clients';
import { clients } from '@/apiData/clients';
import VideoHero from '@/components/video/VideoHero';
import Head from 'next/head';

export default function Home() {

  return (
    <CustomLayout withMenu>
      <Head>
        <title>Matthys.dev</title>
      </Head>
      <div className="flex flex-col items-center p-0 md:p-12 ">
        <div className='mt-24'>
          <Hero />
        </div>
        <div className='flex mt-0 mb-2'>
          <Button link={'/about'} text={'About me'} color={'bg-sky-200'} neonColor={palette.sky200} className='font-semibold' />
          <Button link={'https://airtable.com/appOrrPF35ppPjTKx/shrZLcDgGq0Kb6soN?backgroundColor=purple'} text={'Contact-me'} color={'bg-purple-300'} isExternal neonColor={palette.purple300} className={'font-semibold'} />
        </div>
      </div>
      <div className='mt-12 mb-36 text-xl font-bold text-center md:text-4xl '>
        I work with them
        <Clients clients={clients} />
      </div>
      {/* <VideoHero /> */}
    </CustomLayout>
  )
}
