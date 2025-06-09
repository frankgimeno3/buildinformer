import React, { FC } from 'react';
import ArticleMiniature from './mainfeedcomponents/ArticleMiniature';
import Hero from '../Hero';
import ContentBanner from '../ContentBanner';

interface MainFeedProps {

}

const MainFeed: FC<MainFeedProps> = ({ }) => {

  return (
    <div className='flex flex-col min-h-screen flex-3 bg-white mt-12'>
      <Hero />
      <ContentBanner />
      <p className='px-5 py-3 pt-8 text-3xl text-zinc-600 font-bold'>Newest articles about architectural projects</p>
      <div className='flex flex-row mx-auto'><ArticleMiniature /><ArticleMiniature /><ArticleMiniature /></div>
      <div className='flex flex-row mx-auto'><ArticleMiniature /><ArticleMiniature /><ArticleMiniature /></div>
      <div className='text-center py-8'>
        <button className='bg-zinc-800 px-5 py-2 rounded hover:bg-zinc-900 hover:shadow cursor-pointer'>
          Read more articles about architectural projects
        </button> 
      </div>
      <ContentBanner />
      <p className='px-5 py-3 pt-8 text-3xl text-zinc-600 font-bold'>Newest articles about builders</p>
      <div className='flex flex-row mx-auto'><ArticleMiniature /><ArticleMiniature /><ArticleMiniature /></div>
      <div className='flex flex-row mx-auto'><ArticleMiniature /><ArticleMiniature /><ArticleMiniature /></div>
      <div className='text-center py-8'>
        <button className='bg-zinc-800 px-5 py-2 rounded hover:bg-zinc-900 hover:shadow cursor-pointer'>
          Read more articles about builders
        </button>
      </div>
            <ContentBanner />
      <p className='px-5 py-3 pt-8 text-3xl text-zinc-600 font-bold'>Newest articles about contech</p>
      <div className='flex flex-row mx-auto'><ArticleMiniature /><ArticleMiniature /><ArticleMiniature /></div>
      <div className='flex flex-row mx-auto'><ArticleMiniature /><ArticleMiniature /><ArticleMiniature /></div>
      <div className='text-center py-8'>
        <button className='bg-zinc-800 px-5 py-2 rounded hover:bg-zinc-900 hover:shadow cursor-pointer'>
          Read more articles about contech
        </button>
      </div>
      <ContentBanner />
      <p className='px-5 py-3 pt-8 text-3xl text-zinc-600 font-bold'>Newest articles about markets</p>
      <div className='flex flex-row mx-auto'><ArticleMiniature /><ArticleMiniature /><ArticleMiniature /></div>
      <div className='flex flex-row mx-auto'><ArticleMiniature /><ArticleMiniature /><ArticleMiniature /></div>
      <div className='text-center py-8'>
        <button className='bg-zinc-800 px-5 py-2 rounded hover:bg-zinc-900 hover:shadow cursor-pointer'>
          Read more articles about markets
        </button>
      </div>

    </div>
  );
};

export default MainFeed;