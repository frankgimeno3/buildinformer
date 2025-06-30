"use client"
import MainFeed from '@/app/components/news/mainfeed/MainFeed';
import React, { FC } from 'react';

interface TechProps {

}

const Tech: FC<TechProps> = ({ }) => {
  return (
    <div className='min-h-screen text-gray-500 p-12'>
      <p className='text-5xl font-bold'>ARCHITECTURAL TECHNOLOGY NEWS</p>
      <p>News about the construction industry focusing on the technology, software, hardware and tools</p>
      <MainFeed />

    </div>
  );
};

export default Tech;