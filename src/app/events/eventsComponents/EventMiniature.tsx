import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface EventMiniatureProps {}

const EventMiniature: FC<EventMiniatureProps> = ({ }) => {

    const router = useRouter()

  const handleRedirection = (params:string)=>{
    router.push(params)
  }
  
  return (
    <div className='flex flex-row overflow-hidden p-5 py-8 shadow' >
      <div className='flex flex-col cursor-pointer text-center rounded-xl shadow border border-gray-100'
      onClick={()=>{handleRedirection("/events/event")}}>
        <p className='p-2 bg-gray-200'>Month</p>
        <p className='text-2xl p-2 px-8'>24</p>
        <p className='p-2 bg-gray-200'>Year</p>
      </div>
      <div className='pl-12 '>
        <p className='font-bold text-2xl hover:text-cyan-800 cursor-pointer'
        onClick={()=>{handleRedirection("/events/event")}}>Event name</p>
        <p>Location</p>
        <p>Dates</p>
        <p>Link</p>
        <p>Description</p>
      </div>
    </div>
  );
};

export default EventMiniature;
