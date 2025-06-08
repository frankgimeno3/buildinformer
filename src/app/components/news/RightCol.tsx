import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface RightColProps {
  
}

const RightCol: FC<RightColProps> = ({ }) => {
  const router = useRouter()

  const handleRedirection = (param:string)=>{
    router.push(param)
  }

  return (
    <div className='min-h-sceen bg-gray-200 flex-1 hidden md:block p-5'>
      <div className='bg-white text-gray-400 mb-2 rounded pl-5 py-1 cursor-pointer hover:bg-gray-50'
      onClick={()=>{handleRedirection('/newsletter')}}>
      <p>Subscribe to our newsletter!</p>
      </div>
      <div className='bg-white text-gray-400 mb-5 rounded pl-5 py-1 cursor-pointer hover:bg-gray-50'
      onClick={()=>{handleRedirection('/advertise')}}>
      <p>Do you want to advertise?</p>
      </div>
        <div className='flex flex-col bg-cyan-900 h-56 py-auto  mb-5 cursor-pointer hover:bg-opacity-90'>
          <p className='text-gray-400 text-center my-auto '>Advert example</p>
        </div>
        <div className='flex flex-col bg-cyan-900 h-56 py-auto mb-5 cursor-pointer hover:bg-opacity-90 '>
          <p className='text-gray-400 text-center my-auto '>Advert example</p>
        </div>
        <div className='flex flex-col bg-cyan-900 h-56 py-auto mb-5 cursor-pointer hover:bg-opacity-90 '>
          <p className='text-gray-400 text-center my-auto '>Advert example</p>
        </div>
    </div>
  );
};

export default RightCol;