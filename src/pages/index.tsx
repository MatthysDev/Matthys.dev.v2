'use client'
import { neonBlanc } from '@/components/neonStyles';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { palette } from '@/utils/palette';
import CustomLayout from '@/components/CustomLayout';

export default function Home() {

  return (
    <CustomLayout withMenu>
      <div className="flex flex-col items-center p-12 text-white">
        <Hero />
        <div className='flex mt-24'>
          <Button link={'/posters'} text={'About me'} color={'bg-sky-200'} neonColor={palette.sky200} />
          <Button link={'https://airtable.com/appOrrPF35ppPjTKx/shrZLcDgGq0Kb6soN?backgroundColor=purple'} text={'Contact-me'} color={'bg-purple-300'} isExternal neonColor={palette.purple300} />
        </div>
      </div>
    </CustomLayout>
  )
}
