import React, { FC } from 'react';
import Image from 'next/image';
import ArticleContent from './articlecontent/ArticleContent';

interface ArticleProps {

}

const Article: FC<ArticleProps> = ({ }) => {
  return (
    <div className='flex flex-col p-12 text-gray-600 w-full'>
      <div className='flex flex-col bg-gray-100 p-5 w-full'>


        <p className='text-left text-cyan-900 text-lg'>CATEGORY</p>
        <p className='flex text-3xl font-bold pt-12 pr-12'>Article title</p>
        <p className='py-2 pr-12 '>
          Main subtitle of the main news, which should be self explanatoire and contain enough text to fill several lines and cover a substantial area of the div
        </p>
        <div className='flex flex-row justify-between items-center py-3 '>
          <p className='text-left text-gray-400 text-xs'>March 20th 2025</p>
          <div className='flex flex-row gap-3'>
            <button className='bg-blue-500/20 shadow rounded-full p-2 px-3 text-xs cursor-pointer'>F</button>
            <button className='bg-gray-300 font-bold shadow rounded-full p-2 px-3 text-xs cursor-pointer'>X</button>
            <button className='bg-cyan-700/20 shadow rounded-full p-2 px-3 text-xs cursor-pointer'>T</button>
            <button className='bg-green-400/20 shadow rounded-full p-2 px-3 text-xs cursor-pointer'>W</button>
          </div>
        </div>
      </div>

      <div className="relative h-150 overflow-hidden cursor-pointer">
        <Image
          src='https://picsum.photos/530/300/'
          alt='main image'
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <ArticleContent />
      <div>
        <p>Final credits</p>
        <p>Categories again</p>
        <p>Company name</p>
        <p>Some contact</p>
      </div>
    </div>
  );
};

export default Article;