import CustomLayout from '@/components/CustomLayout'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function plan({ }: Props) {
    return (
        <CustomLayout>
            <Head>
                <title>Matthys.dev | My plan</title> {/* Setting the title metadata */}
            </Head>
            <div>2024 Plan</div>
            <div>Make a lot of tiktok videos</div>
            <div>Make a lot of followers</div>
            <div>Do 1 push per day</div>
            <div>Make money !</div>
        </CustomLayout>
    )
}