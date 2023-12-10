import ImageGridContainer from '@/components/ImageGridContainer'
import React from 'react'
import Image from 'next/image'

type Props = {
    url1: string
    alt1: string
    url2: string
    alt2: string
    url3: string
    alt3: string
    url4: string
    alt4: string
    url5: string
    alt5: string
    url6: string
    alt6: string
    url7: string
    alt7: string
    url8: string
    alt8: string
}

export default function PosterGridHero({ url1, alt1, url2, url3, url4, url5, url6, url7, url8, alt2, alt3, alt4, alt5, alt6, alt7, alt8 }: Props) {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto mt-12 mb-24 md:my-0'>
            <div className='flex flex-col gap-8'>
                <ImageGridContainer>
                    <Image src={url1} alt={alt1} fill object-fit='cover' className='rounded-lg' />
                </ImageGridContainer>
                <ImageGridContainer>
                    <Image src={url2} alt={alt2} fill object-fit='cover' className='rounded-lg' />
                </ImageGridContainer>
                <ImageGridContainer>
                    <Image src={url3} alt={alt3} fill object-fit='cover' className='rounded-lg' />
                </ImageGridContainer>
            </div>
            <div className='flex-col justify-center gap-8 hidden md:flex'>
                <ImageGridContainer>
                    <Image src={url4} alt={alt4} fill object-fit='cover' className='rounded-lg' />
                </ImageGridContainer>
                <ImageGridContainer>
                    <Image src={url5} alt={alt5} fill object-fit='cover' className='rounded-lg' />
                </ImageGridContainer>
            </div>
            <div className='flex flex-col gap-8'>
                <ImageGridContainer>
                    <Image src={url6} alt={alt6} fill object-fit='cover' className='rounded-lg' />
                </ImageGridContainer>
                <ImageGridContainer>
                    <Image src={url7} alt={alt7} fill object-fit='cover' className='rounded-lg' />
                </ImageGridContainer>
                <ImageGridContainer>
                    <Image src={url8} alt={alt8} fill object-fit='cover' className='rounded-lg' />
                </ImageGridContainer>
            </div>
        </div>
    )
}