import React from 'react';
import MenuMobile from '@/components/Menu/MenuMobile';
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer';

type Props = {
    children: React.ReactNode;
    /** Kept for backwards compatibility — the menu is always shown now. */
    withMenu?: boolean;
};

const CustomLayout = ({ children }: Props) => {
    return (
        <div className="relative min-h-screen bg-cream text-stone-900 dark:bg-[#050505] dark:text-white">
            {/* Blueprint graph-paper background */}
            <div className="blueprint-grid pointer-events-none fixed inset-0 z-0" />
            {/* Soft radial glow at the top — keeps depth without heavy neon */}
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,_rgba(120,90,40,0.07),_transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,_rgba(96,165,250,0.07),_transparent_60%)]" />

            <div className="relative z-10 flex min-h-screen flex-col">
                <header className="sticky top-0 z-20 border-b border-stone-900/5 bg-cream/70 backdrop-blur-md dark:border-white/5 dark:bg-[#050505]/70">
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

                <Footer />
            </div>
        </div>
    );
};

export default CustomLayout;
