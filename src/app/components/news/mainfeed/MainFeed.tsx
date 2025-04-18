import React, { FC } from 'react';
import MainArticle from './mainfeedcomponents/mainArticle';
import ArticleMiniature from './mainfeedcomponents/ArticleMiniature';

interface MainFeedProps {

}

const MainFeed: FC<MainFeedProps> = ({ }) => {
  return (
    <div className='flex flex-col min-h-screen flex-3 bg-white'>
      <div className='flex flex-row px-5 pt-5 justify-between'>
        <p className='text-gray-600'>News</p>
        <div className='flex flex-col pr-6 '>
          <div className='flex flex-row rounded border border-gray-100 justify-between my-2'>
            <input className='bg-transparent w-full pl-2 text-gray-400 text-xs' placeholder='Search for content here' />
            <button className='bg-white rounded shadow text-xs px-2 m-1 py-1 hover:text-gray-500 hover:bg-gray-100'>
              Search</button>
          </div>
          <div className='flex flex-row  text-xs'>
            <button className='bg-gray-100 text-gray-500 hover:bg-gray-300 p-2 ml-2'>Architecture and projects</button>
            <button className='bg-gray-100 text-gray-500 hover:bg-gray-300 p-2 ml-2'>Interiors and design</button>
            <button className='bg-gray-100 text-gray-500 hover:bg-gray-300 p-2 ml-2'>Construction and operations</button>
          </div>
        </div>
      </div>
      {/* <MainArticle/> */}
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <ArticleMiniature />
          <ArticleMiniature />
          <ArticleMiniature />
        </div>
        <div className='flex flex-row'>
          <ArticleMiniature />
          <ArticleMiniature />
          <ArticleMiniature />
        </div>
        <div className='flex flex-row'>
          <ArticleMiniature />
          <ArticleMiniature />
          <ArticleMiniature />
        </div>
        <div className='flex flex-row'>
          <ArticleMiniature />
          <ArticleMiniature />
          <ArticleMiniature />
        </div>
      </div>
    </div>
  );
};

export default MainFeed;