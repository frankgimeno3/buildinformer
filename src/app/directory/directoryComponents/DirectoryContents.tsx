import React, { FC } from 'react';

interface DirectoryContentsProps {
  
}

const DirectoryContents: FC<DirectoryContentsProps> = ({ }) => {
  return (
    <div className='flex flex-col min-h-screen flex-5 bg-white '>
        <div className='bg-gray-700  w-full '>
        <p className='pt-2 pb-3 pl-5 font-bold'>Companies Directory</p>
        </div>
        DirectoryContents
        </div>
  );
};

export default DirectoryContents;