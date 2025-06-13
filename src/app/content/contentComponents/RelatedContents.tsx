import ArticleMiniature from '@/app/components/news/mainfeed/mainfeedcomponents/ArticleMiniature';
import React, { FC } from 'react';

interface RelatedContentsProps {
  
}

const RelatedContents: FC<RelatedContentsProps> = ({ }) => {
  return (
    <div className='flex flex-col w-full bg-gray-50 py-8 border-t border-gray-200'>
      <p className='px-5 text-2xl text-gray-600'>Related contents</p>
      <div className='flex flex-row  gap-3'>
        <ArticleMiniature format={"small"}/>
               <ArticleMiniature format={"small"}/>
                      <ArticleMiniature format={"small"}/>
                      </div>
    </div>
  );
};

export default RelatedContents;