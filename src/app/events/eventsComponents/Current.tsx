import React, { FC } from 'react';
import EventMiniature from './EventMiniature';
 
interface CurrentProps {
  
}

const Current: FC<CurrentProps> = ({ }) => {

  return (
    <div className='flex flex-col gap-5'>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
      <EventMiniature/>
    </div>  );
};

export default Current;