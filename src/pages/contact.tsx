import CustomLayout from '@/components/CustomLayout';
import Head from 'next/head';
import React, { useState } from 'react';

type Props = {};

const SkeletonLoader: React.FC = () => (
    <div className="flex flex-col items-center animate-pulse h-[1200px] opacity-50 w-3/4 mx-auto my-12 rounded-lg">
        <p className="text-white font-bold text-3xl animate-pulse">Loading...</p>
    </div>
);

export default function Contact({ }: Props) {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        // Set loading to false once the iframe has loaded
        setIsLoading(false);
    };

    return (
        <CustomLayout withMenu>
            <Head>
                <title>Matthys.dev | Contact</title> {/* Setting the title metadata */}
            </Head>
            {isLoading && <SkeletonLoader />}

            <iframe
                className={`my-12 mx-auto ${isLoading ? 'hidden' : ''}`}
                src="https://airtable.com/embed/appOrrPF35ppPjTKx/shrZLcDgGq0Kb6soN?backgroundColor=purple"
                frameBorder="0"
                width="70%"
                height="1200"
                onLoad={handleLoad}
            ></iframe>
        </CustomLayout>
    );
}
