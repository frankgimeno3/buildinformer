import React, { FC } from 'react';
import EventMiniature from './EventMiniature';

interface PastProps {
  
}

const Past: FC<PastProps> = ({ }) => {
  return (
    <div className='flex flex-col gap-5'>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
    </div>
  );
};

export default Past;