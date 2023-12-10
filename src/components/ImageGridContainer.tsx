// ImageGridContainer.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Props = {
    url: string;
    alt: string;
    selectedId: number | null;
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
    item: { id: number; title: string; subtitle: string };
};

const ImageGridContainer: React.FC<Props> = ({ url, alt, selectedId, setSelectedId, item }) => {
    const isSelected = selectedId === item.id;

    return (
        <>
            <motion.div
                layoutId={item.id.toString()}
                onClick={() => setSelectedId(isSelected ? null : item.id)}
                className={`imageNeon relative w-36 h-48 shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300 ${isSelected ? 'border-4 border-purple-500' : ''
                    }`}
            >
                <Image src={url} alt={alt} fill objectFit='cover' className='rounded-lg' />


            </motion.div>

            <AnimatePresence>
                {isSelected && (
                    <motion.div
                        layoutId={item.id.toString()}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ layout: { duration: 0.1 }, opacity: { duration: 0.3 } }}
                        animate={{ opacity: 1, transition: { delay: 0.32 } }}
                        className='fixed md:absolute shadow-[0px_0px_20px_2px_#fff] top-1/4 md:top-0 left-0 right-0 w-4/5 md:w-1/2 md:h-full h-1/2 p-4 flex flex-col gap-4 bg-gradient-to-tr from-gray-800 to-slate-950 rounded-lg z-10 mx-auto md:mx-0 '
                    >
                        <Image src={url} alt={alt} fill objectFit='cover' className='rounded-lg z-10 w-full h-2/3' />
                        <motion.div className='flex justify-end fill-white z-20 text-right'>
                            <div className='border-2 py-2 px-3 rounded-md cursor-pointer' onClick={() => setSelectedId(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default ImageGridContainer;
