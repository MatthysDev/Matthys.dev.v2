import { neonBlanc, neonPurple } from '@/components/neonStyles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

type Props = {}

export default function Menu({ }: Props) {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <div className='md:hidden pt-4 flex justify-between text-white cursor-pointer' onClick={toggleMobileMenu}>
                <a
                    className={`text-xl font-bold text-white my-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                    style={router.pathname === '/about' ? neonPurple : neonBlanc}
                >
                    Matthys.dev
                </a>
                <button
                    className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                </button>
            </div>
            {isMobileMenuOpen ? (
                <div className='flex flex-col m-auto p-8'>
                    <Link href='/about' passHref legacyBehavior>
                        <a
                            className={`text-xl font-bold text-white relative mb-4 ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                            style={router.pathname === '/about' ? neonPurple : neonBlanc}
                        >
                            About
                        </a>
                    </Link>
                    {/* Add other mobile menu items here */}
                </div>
            ) : (
                <div className='hidden md:visible md:flex m-auto p-8 justify-around'>
                    <Link href='/about' passHref legacyBehavior>
                        <a
                            className={`text-xl font-bold text-white relative m-auto ${router.pathname === '/' ? 'text-purple-300' : ''}`}
                            style={router.pathname === '/about' ? neonPurple : neonBlanc}
                        >
                            About
                        </a>
                    </Link>
                    {/* Add other menu items here */}
                </div>
            )}
        </>
    )
}