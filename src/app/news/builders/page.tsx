"use client"
import MainFeed from '@/app/components/news/mainfeed/MainFeed';
import React, { FC } from 'react';

interface BuildersProps {

}

const Builders: FC<BuildersProps> = ({ }) => {
  return (
    <div className='min-h-screen text-gray-500 p-12 '>
      <div className='flex flex-col py-5 pb-12 px-6'>
      <p className='text-5xl font-bold'>BUILDERS NEWS</p>
      <p>News about the construction industry focusing on the builders and contractors</p>
      </div>
      <MainFeed />

    </div>
  );
};

export default Builders;