import React from 'react';
import MenuMobile from '@/components/Menu/MenuMobile';
import Menu from '@/components/Menu/Menu';

type Props = {
    children: React.ReactNode;
    withMenu?: boolean;
};

const CustomLayout = ({ children, withMenu }: Props) => {
    return (
        <>
            <div className='fixed top-0 left-0 bottom-0 right-0 bg-[url("/grid.svg")] opacity-30 z-0'></div>
            <div className='w-full m-auto min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
                <div className='relative'>
                    {/* Corrected the class name for "md:hidden" */}
                    <div className='md:hidden'><MenuMobile /></div>
                    {/* Corrected the class name for "md:visible" */}
                    <div className='hidden md:block'><Menu /></div>
                </div>
                <div className='w-5/6 md:w-2/3 m-auto relative'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default CustomLayout;
