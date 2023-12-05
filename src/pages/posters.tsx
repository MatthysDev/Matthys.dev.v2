import { neonBlanc } from '@/components/neonStyles'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { randomNeonColor } from '@/utils/randomNeonColor'

type Props = {}

export default function posters({ }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        randomNeonColor('imageNeon');
    }, []);
    return (
        <main className="relative flex min-h-screen flex-col items-center p-12 text-white">
            <h1 className="text-4xl font-bold text-white relative">
                <div style={neonBlanc}>Posters</div>
            </h1>
            <div className='w-screen my-auto'>
                <div className='flex w-3/4 m-auto '>
                    <h1 className="text-4xl font-bold text-white m-auto w-1/3">
                        <div style={neonBlanc}>Posters</div>
                    </h1>
                    <div className='grid grid-cols-3 gap-8'>
                        <div className='flex flex-col gap-8'>
                            <div className='imageNeon relative w-36 h-48 m-auto shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
                                <Image src={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt={'requin'} fill object-fit='cover' className='rounded-lg' />
                            </div>
                            <div className='imageNeon relative w-36 h-48 m-auto shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
                                <Image src={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt={'requin'} fill object-fit='cover' className='rounded-lg' />
                            </div>
                            <div className='imageNeon relative w-36 h-48 m-auto shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
                                <Image src={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt={'requin'} fill object-fit='cover' className='rounded-lg' />
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-8'>
                            <div className='imageNeon relative w-36 h-48 shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
                                <Image src={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt={'requin'} fill object-fit='cover' className='rounded-lg' />
                            </div>
                            <div className='imageNeon relative w-36 h-48 shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
                                <Image src={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt={'requin'} fill object-fit='cover' className='rounded-lg' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div className='imageNeon relative w-36 h-48 m-auto shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
                                <Image src={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt={'requin'} fill object-fit='cover' className='rounded-lg' />
                            </div>
                            <div className='imageNeon relative w-36 h-48 m-auto shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
                                <Image src={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt={'requin'} fill object-fit='cover' className='rounded-lg' />
                            </div>
                            <div className='imageNeon relative w-36 h-48 m-auto shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
                                <Image src={'https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png'} alt={'requin'} fill object-fit='cover' className='rounded-lg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}