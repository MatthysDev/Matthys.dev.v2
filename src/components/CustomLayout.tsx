import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function CustomLayout({ children }: Props) {
    return (
        <>
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-[url("/grid.svg")] opacity-30 z-0'></div>
            <div className='w-full m-auto h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
                <div className='w-2/3 m-auto'>{children}</div>
            </div>
        </>
    )
}