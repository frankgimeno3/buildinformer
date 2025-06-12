"use client"
import React, { FC, useState } from 'react';

interface EventsProps {
  
}

const Events: FC<EventsProps> = ({ }) => {
    const [selectedEvents, setSelectedEvents] = useState("future")

    const handleChangeSelectedEvent = (event:string)=>{
        setSelectedEvents(event)
    }
  return (
    <div className='flex flex-col text-gray-500 p-12'>
        <p>
        Events list
        </p>

        <p>Is there an industry event that we don't know about? <span className='font-bold px-2'>Contact us!</span></p>
        <div className='flex flex-row p-3 gap-3'>
            <button className='px-2 py-1 rounded shadow bg-white bg-gray-300 hover:bg-gray-200 text-gray-600'
            onClick={()=>{handleChangeSelectedEvent("future")}}>
            Future events
            </button>
                        <button className='px-2 py-1 rounded shadow bg-white bg-gray-300 hover:bg-gray-200 text-gray-600'
                        onClick={()=>{handleChangeSelectedEvent("past")}}>
            Past events
            </button>
        </div>
    </div>
  );
};

export default Events;