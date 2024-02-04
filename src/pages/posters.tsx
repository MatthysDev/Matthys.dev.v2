import { neonBlanc, neonPurple } from '@/components/neonStyles'
import React, { useEffect } from 'react'
import { randomNeonColor } from '@/utils/randomNeonColor'
import PosterGridHero from '@/components/PosterGridHero'
import CustomLayout from '@/components/CustomLayout'
import { posterData } from '@/apiData/posterApi'
import Head from 'next/head'

type Props = {}

export default function posters({ }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        randomNeonColor('imageNeon');
    }, []);
    return (
        <CustomLayout withMenu>
            <Head>
                <title>Matthys.dev | Posters</title> {/* Setting the title metadata */}
            </Head>
            <main className="relative flex flex-col items-center p-0 md:p-12 md:my-8">
                <div className='w-screen my-auto'>
                    <div className='flex flex-col md:flex-row w-5/6 md:w-3/4 m-auto '>
                        <div className='w-5/6 md:w-2/5 text-left mx-0 md:mx-24'>
                            <h1 className="text-4xl font-bold m-auto my-12">
                                <div style={neonBlanc}>Human animals collection</div>
                            </h1>
                            <div className='text-xl'>
                                Explore the humor of AI with my <span style={neonPurple} className='text-purple-300'>funny animal</span> poster collection.
                            </div>
                            <div className='text-xl my-4'>
                                Creative, fun, and sure to <span style={neonPurple} className='text-purple-300'>bring a smile</span> to any space!
                            </div>
                        </div>
                        <PosterGridHero posterData={posterData} />
                    </div>
                </div>
            </main>
        </CustomLayout >
    )
}