import React, { FC } from 'react';
import Image from 'next/image';

interface HeroProps { }

const Hero: FC<HeroProps> = () => {
  return (
    <div className='flex flex-row h-[600px] text-gray-500'>
      <div className='flex flex-col flex-2/3 px-6 pb-6 border-r border-b border-gray-200'>
        <div className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer">
          <Image
            src='https://picsum.photos/530/300/'
            alt='main image'
            fill
            style={{ objectFit: 'cover' }}  
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className='bg-gray-100 px-3'>
          <p className='text-3xl font-bold mt-2 px-3 '>New company hires 300 hundred employees in this place for that reason, cientific says</p>
          <p className='py-2 px-3 '>
            Main subtitle of the main news, which should be self explanatoire and contain enough text to fill several lines and cover a substantial area of the div
            <span className='pl-5 font-bold text-gray-500 cursor-pointer hover:text-cyan-900'>Read more </span></p>
        </div>
      </div>

      <div className='flex flex-col flex-1/3 text-2xl'>
        <p className='p-5 bg-zinc-700 text-white font-bold'>Latest news</p>

        <div className='p-5 hover:bg-gray-100 text-lg border-b border-gray-100 cursor-pointer h-1/4 transition-colors duration-[1200ms]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <p className='text-cyan-800 font-bold text-xs'>Categoría</p>
        </div>

        <div className='p-5 hover:bg-gray-100 text-lg border-b border-gray-100 cursor-pointer h-1/4 transition-colors duration-[1200ms]'>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
          <p className='text-cyan-800 font-bold text-xs'>Categoría</p>
        </div>

        <div className='p-5 hover:bg-gray-100 text-lg border-b border-gray-100 cursor-pointer h-1/4 transition-colors duration-[1200ms]'>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          <p className='text-cyan-800 font-bold text-xs'>Categoría</p>
        </div>

        <div className='p-5 hover:bg-gray-100 text-lg border-b border-gray-100 cursor-pointer h-1/4 transition-colors duration-[1200ms]'>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
          <p className='text-cyan-800 font-bold text-xs'>Categoría</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
