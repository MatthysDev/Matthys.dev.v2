import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function ImageGridContainer({ children }: Props) {
    return (
        <div className='imageNeon relative w-36 h-48 shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300'>
            {children}
        </div>

    )
}