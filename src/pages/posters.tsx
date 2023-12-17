import { neonBlanc, neonPurple } from '@/components/neonStyles'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { randomNeonColor } from '@/utils/randomNeonColor'
import ImageGridContainer from '@/components/ImageGridContainer'
import PosterGridHero from '@/components/PosterGridHero'
import CustomLayout from '@/components/CustomLayout'

type Props = {}

export default function posters({ }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        randomNeonColor('imageNeon');
    }, []);
    return (
        <CustomLayout withMenu>
            <main className="relative flex flex-col items-center p-0 md:p-12 text-white md:my-8">
                <div className='w-screen my-auto'>
                    <div className='flex flex-col md:flex-row w-5/6 md:w-3/4 m-auto '>
                        <div className='w-5/6 md:w-2/5 text-left mx-0 md:mx-24'>
                            <h1 className="text-4xl font-bold text-white m-auto my-12">
                                <div style={neonBlanc}>Human animals collection</div>
                            </h1>
                            <div className='text-xl'>
                                Explore the humor of AI with my <span style={neonPurple} className='text-purple-300'>funny animal</span> poster collection.
                            </div>
                            <div className='text-xl my-4'>
                                Creative, fun, and sure to <span style={neonPurple} className='text-purple-300'>bring a smile</span> to any space!
                            </div>
                        </div>
                        <PosterGridHero url1={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt1={'requin'} url2={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/bad-monkey.png'} alt2={'bad-monkey'} url3={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/fish.png'} alt3={'fish'} url4={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/fox.png'} alt4={'fox'} url5={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/good-monkey.png'} alt5={'good-monkey'} url6={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/skeleton.png'} alt6={'skeleton'} url7={'/posters/snake.png'} alt7={'snake'} url8={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/frog.png'} alt8={'frog'} />
                    </div>
                </div>
            </main>
        </CustomLayout >
    )
}