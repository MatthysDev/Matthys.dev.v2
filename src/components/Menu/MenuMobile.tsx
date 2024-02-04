import { neonBlanc, neonPurple } from '@/components/neonStyles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function MenuMobile({ }: Props) {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
    const menuVariants = {
        open: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0, // Change this to 0 for the top right
            transition: {
                ease: 'easeInOut',
                duration: 0.6, // Adjust the duration as needed
            },
        },
        closed: {
            opacity: 0,
            scale: 0,
            y: -300,
            x: 300, // Change this to 300 for the top right
            transition: {
                ease: 'easeInOut',
                duration: 0.6, // Adjust the duration as needed
            },
        },
    };


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <div className='mx-4 md:hidden pt-4 flex justify-between  cursor-pointer '>
                <Link href='/' passHref legacyBehavior>
                    <a
                        className={` text-xl ml-1 mt-4 font-bold  my-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                        style={router.pathname === '/' ? neonPurple : neonBlanc}
                    >
                        Matthys.dev
                    </a>
                </Link>
                <button
                    className="bg-gradient-to-tr from-gray-800 to-slate-950 fixed top-6 right-6 z-30 flex flex-col h-12 w-12 border border-white rounded justify-center items-center group"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        toggleMobileMenu();
                    }}
                >
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "rotate-45 translate-y-3 group-hover:opacity-100"
                            : " group-hover:opacity-100"
                            }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : " group-hover:opacity-100"
                            }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "-rotate-45 -translate-y-3  group-hover:opacity-100"
                            : " group-hover:opacity-100"
                            }`}
                    />
                </button>
            </div>
            <motion.div
                initial="closed"
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                variants={menuVariants}
                className={`fixed top-0 left-0 w-full  z-20`}
            >
                <div className='mx-4 p-4 flex flex-col gap-4 mt-4 bg-gradient-to-tr from-gray-800 to-slate-950 rounded-lg shadow-[0px_0px_7px_1px_#fff] z-20 position'>
                    <Link href='/about' passHref legacyBehavior>
                        <a
                            className={`text-xl font-bold  relative ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                            style={router.pathname === '/about' ? neonPurple : neonBlanc}
                        >
                            About
                        </a>
                    </Link>
                    <Link href='/posters' legacyBehavior passHref>
                        <a
                            className={`text-xl font-bold  relative ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                            style={router.pathname === '/posters' ? neonPurple : neonBlanc}
                        >
                            Posters
                        </a>
                    </Link>
                    <Link href='/video' legacyBehavior passHref>
                        <a
                            className={`text-xl font-bold  relative ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                            style={router.pathname === '/video' ? neonPurple : neonBlanc}
                        >
                            Video
                        </a>
                    </Link>
                    <Link href='/contact' legacyBehavior passHref>
                        <a
                            className={`text-xl font-bold  relative ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                            style={router.pathname === '/contact' ? neonPurple : neonBlanc}
                        >
                            Contact
                        </a>
                    </Link>
                </div>
            </motion.div>

        </>
    )
}