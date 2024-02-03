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
        </CustomLayout>
    )
}