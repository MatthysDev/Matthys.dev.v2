// ImageGridContainer.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Card from '@/components/Cards/Card';
import Button from '@/components/Buttons/Button';

type ProjectCardProps = {
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  item: { id: number; title: string; subtitle: string };
  websiteUrl: string;
  image: string;
  name: string;
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ websiteUrl, image, name, description, selectedId, setSelectedId, item }) => {
  const isSelected = selectedId === item.id;

  return (
    <>
      <motion.div
        layoutId={item.id.toString()}
        onClick={() => setSelectedId(isSelected ? null : item.id)}
      >
        <Card withNeon style=' m-auto'>
          <div className='flex flex-col gap-4 p-4 xl:pl-4 xl:py-6'>
            <div className='flex gap-2 text-xl xl:text-2xl font-bold'>
              <a href={websiteUrl}>
                {image}
              </a>
              <h2>{name}</h2>
            </div>
            <p>{description}</p>
          </div>

        </Card>
      </motion.div>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            layoutId={item.id.toString()}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ layout: { duration: 0.1 }, opacity: { duration: 1 } }}
            animate={{ opacity: 1, transition: { delay: 0 } }}
            className="fixed inset-0 m-auto w-4/5 md:w-2/3 h-1/2 md:h-3/4 p-4 flex flex-col bg-slate-50 text-black rounded-lg shadow-[0px_0px_20px_2px_#fff] z-10 mx-auto"
          >
            <motion.div className='flex justify-end fill-black z-20 text-right'>
              <div className='border-2 border-black py-2 px-3 rounded-md cursor-pointer' onClick={() => setSelectedId(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </div>
            </motion.div>
            <div className='flex flex-col gap-4 p-4 xl:pl-4 xl:py-6'>
              <div className='flex gap-2 text-xl xl:text-2xl font-bold'>
                <a href={websiteUrl}>
                  {image}
                </a>
                <h2>{name}</h2>
              </div>
              <p>{description}</p>
              <Button link={websiteUrl} isExternal text={`Visit ${name}`} color='bg-slate-950' neonColor='#fff' className={'text-white -m-5'} strokeColor='#FFFFFF' />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
