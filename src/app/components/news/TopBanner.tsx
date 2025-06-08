import React, { FC } from 'react';

interface TopbannerProps {
  
}

const Topbanner: FC<TopbannerProps> = ({ }) => {
  return (
    <div className='flex flex-row w-full border border-gray-100 h-auto bg-gray-100 mt-18 p-5 
    cursor-pointer hover:bg-opacity-90'>
        <div className='bg-white w-full h-36 p-4'>
            <p>Banner</p>
        </div>
    </div>
  ); 
};

export default Topbanner;