import React from 'react';
import MenuMobile from '@/components/Menu/MenuMobile';
import Menu from '@/components/Menu/Menu';

type Props = {
    children: React.ReactNode;
    /** Kept for backwards compatibility — the menu is always shown now. */
    withMenu?: boolean;
};

const CustomLayout = ({ children }: Props) => {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-cream text-stone-900 dark:bg-[#050505] dark:text-white">
            {/* Soft radial glow at the top — keeps depth without heavy neon */}
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,_rgba(120,90,40,0.07),_transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,_rgba(255,255,255,0.08),_transparent_60%)]" />
            {/* Subtle grid overlay */}
            <div className='pointer-events-none fixed inset-0 z-0 bg-[url("/grid.svg")] opacity-[0.04] dark:opacity-[0.06]' />

            <div className="relative z-10 flex min-h-screen flex-col">
                <header className="sticky top-0 z-20 backdrop-blur-sm">
                    <div className="md:hidden">
                        <MenuMobile />
                    </div>
                    <div className="hidden md:block">
                        <Menu />
                    </div>
                </header>

                <main className="mx-auto w-full max-w-5xl flex-1 px-6 md:px-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default CustomLayout;
