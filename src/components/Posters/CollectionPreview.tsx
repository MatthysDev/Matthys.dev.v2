import { AnimatePresence, motion } from 'framer-motion';
import React, { memo } from 'react';
import Image from 'next/image';

type CollectionItem = {
    collectionName: string;
    collection: {
        id: number;
        title: string;
        subtitle: string;
        url: string;
        alt: string;
    }[];
};

type Props = {
    selectedId: number | null;
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
    collection: CollectionItem[];
};

// eslint-disable-next-line react/display-name
const CollectionPreview: React.FC<Props> = memo(({ selectedId, setSelectedId, collection }: Props) => {
    const [selectedItem, setSelectedItem] = React.useState<{ id: number; url: string; alt: string } | null>(null);

    const handleClick = (item: { id: number; url: string; alt: string }) => {
        if (selectedItem && selectedItem.id === item.id) {
            // If the same item is clicked again, close the modal
            setSelectedId(null);
            setSelectedItem(null);
        } else {
            setSelectedId(item.id);
            setSelectedItem(item);
        }
    };

    return (
        <>
            {collection.map((collectionItem) => (
                <div key={collectionItem.collectionName}>
                    <div className='text-2xl font-bold my-8'>{collectionItem.collectionName}</div>
                    <div className='flex gap-12'>
                        {collectionItem.collection.map((item) => (
                            <motion.div
                                key={item.id}
                                layoutId={String(item.id)}
                                onClick={() => handleClick(item)}
                                className={`imageNeon relative w-36 h-48 shadow-[0px_0px_20px_2px_#fff] rounded-lg ease-in transition-all duration-300 ${selectedId === item.id ? 'border-4 border-purple-500' : ''
                                    }`}
                            >
                                <Image src={item.url} alt={item.alt} fill objectFit='cover' className='rounded-lg' />
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedItem && (
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:absolute shadow-[0px_0px_20px_2px_#fff] h-[300px] md:h-[300px] w-[300px] md:w-[300px] p-4 flex flex-col gap-4 bg-gradient-to-tr from-gray-800 to-slate-950 rounded-lg z-10 mx-auto md:mx-0 '
                            >
                                <Image src={selectedItem.url} alt={selectedItem.alt} fill objectFit='cover' className='rounded-lg z-10 w-full h-2/3' />
                                <motion.div className='flex justify-end fill-white z-20 text-right'>
                                    <div className='border-2 py-2 px-3 rounded-md cursor-pointer' onClick={() => handleClick(selectedItem)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512">
                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </motion.div>


                        )}
                    </AnimatePresence>
                </div>
            ))}
        </>
    );
});

export default CollectionPreview;
