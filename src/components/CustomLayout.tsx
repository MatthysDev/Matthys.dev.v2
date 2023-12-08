import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { neonBlanc, neonPurple } from '@/components/neonStyles';
import Menu from '@/components/Menu';

type Props = {
    children: React.ReactNode;
    withMenu?: boolean;
};

const CustomLayout = ({ children, withMenu }: Props) => {
    const router = useRouter();

    const activeStyle = {
        // Add your additional styles for the active link here
        borderBottom: '2px solid red', // Example: a red underline
    };

    return (
        <>
            <div className='fixed top-0 left-0 bottom-0 right-0 bg-[url("/grid.svg")] opacity-30 z-0'></div>
            <div className='w-full m-auto min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
                <div className='w-5/6 md:w-2/3 m-auto relative'>
                    <Menu />
                    {/* {withMenu && (
                        <div className='flex m-auto p-8 justify-around '>
                            <Link href='/about' legacyBehavior passHref>
                                <a
                                    className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                                    style={router.pathname === '/about' ? neonPurple : neonBlanc}
                                >
                                    About
                                </a>
                            </Link>
                            <Link href='/posters' legacyBehavior passHref>
                                <a
                                    className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                                    style={router.pathname === '/posters' ? neonPurple : neonBlanc}
                                >
                                    Posters
                                </a>
                            </Link>
                            <Link href='/' legacyBehavior passHref>
                                <a
                                    className={`text-3xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                                    style={router.pathname === '/' ? neonPurple : neonBlanc}
                                >
                                    Matthys.Dev
                                </a>
                            </Link>
                            <Link href='/video' legacyBehavior passHref>
                                <a
                                    className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                                    style={router.pathname === '/video' ? neonPurple : neonBlanc}
                                >
                                    Video
                                </a>
                            </Link>
                            <Link href='/contact' legacyBehavior passHref>
                                <a
                                    className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                                    style={router.pathname === '/contact' ? neonPurple : neonBlanc}
                                >
                                    Contact
                                </a>
                            </Link>
                        </div>
                    )} */}
                    {children}
                </div>
            </div >
        </>
    );
};

export default CustomLayout;
