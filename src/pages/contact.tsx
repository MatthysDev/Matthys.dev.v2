import CustomLayout from '@/components/CustomLayout';
import React, { useState } from 'react';

type Props = {};

const SkeletonLoader: React.FC = () => (
    <div className="flex flex-col items-center animate-pulse h-[1200px] opacity-50 w-3/4 mx-auto my-12 rounded-lg bg-gray-300">
        <div className="bg-gray-500 h-4 w-32 mb-4 mt-24 rounded-full "></div>
        <p className="text-gray-500 font-bold text-3xl">Loading...</p>
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
            {isLoading && <SkeletonLoader />}

            <iframe
                className={`my-12 mx-auto ${isLoading ? 'hidden' : ''}`}
                src="https://airtable.com/embed/appOrrPF35ppPjTKx/shrZLcDgGq0Kb6soN?backgroundColor=purple"
                frameBorder="0"
                onMouseWheel=""
                width="70%"
                height="1200"
                onLoad={handleLoad}
            ></iframe>
        </CustomLayout>
    );
}
