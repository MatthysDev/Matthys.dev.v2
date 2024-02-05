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
            <div className='fixed top-0 left-0 bottom-0 right-0 bg-[url("/grid-dark.svg")] visible dark:hidden opacity-30 dark:z-0 '></div>
            <div className='fixed top-0 left-0 bottom-0 right-0 bg-[url("/grid.svg")] hidden dark:visible opacity-30 z-0'></div>
            <div className='w-full text-black dark:text-white m-auto min-h-screen flex flex-col bg-white dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black'>
                <div className='relative'>
                    <div className='md:hidden'><MenuMobile /></div>
                    <div className='hidden md:block'><Menu /></div>
                </div>
                <div className='w-5/6 md:w-2/3 m-auto relative h-full '>
                    {children}
                </div>
            </div>
        </>

    );
};

export default CustomLayout;
