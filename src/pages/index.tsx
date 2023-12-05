'use client'
import { neonBlanc } from '@/components/neonStyles';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { palette } from '@/utils/palette';

export default function Home() {

  return (
    <div className="relative flex min-h-screen flex-col items-center p-12 text-white">
      <h1 className="text-4xl font-bold text-white relative">
        <div style={neonBlanc}>Matthys.dev</div>
      </h1>
      <Hero />
      <div className='flex mt-24'>
        <Button link={'/posters'} text={'About me'} color={'bg-sky-200'} neonColor={palette.sky200} />
        <Button link={'https://airtable.com/appOrrPF35ppPjTKx/shrZLcDgGq0Kb6soN?backgroundColor=purple'} text={'Contact-me'} color={'bg-purple-300'} isExternal neonColor={palette.purple300} />
      </div>
    </div>
  )
}
