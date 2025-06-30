"use client"
import MainFeed from '@/app/components/news/mainfeed/MainFeed';
import React, { FC } from 'react';

interface MarketsProps {

}

const Markets: FC<MarketsProps> = ({ }) => {
  return (
    <div className='min-h-screen text-gray-500 p-12'>
      <p className='text-5xl font-bold'>ECONOMY AND MARKETS NEWS</p>
      <p>Economic news about the construction industry focusing on the markets, pricing, materials and regulations</p>
      <MainFeed />

    </div>
  );
};

export default Markets;