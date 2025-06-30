"use client"
import React, { FC, useState } from 'react';
import Current from './eventsComponents/Current';
import Past from './eventsComponents/Past';

interface EventsProps {}

const Events: FC<EventsProps> = ({ }) => {
  const [selectedEvents, setSelectedEvents] = useState("future");

  const handleChangeSelectedEvent = (event: string) => {
    setSelectedEvents(event);
  };

  return (
    <div className='flex flex-col text-gray-500 p-12'>
      <p className='text-4xl py-5'>Events list</p>

      <p className='py-5'>
        Is there an industry event that we don't know about?
        <span className='font-bold px-2'>Contact us!</span>
      </p>

      <div className='flex flex-row py-3 gap-3 text-lg  '>
        <button
          className={`px-2 py-1 rounded shadow cursor-pointer ${
            selectedEvents === "future" ? "bg-gray-300" : "bg-white"
          } hover:bg-gray-200 text-gray-600`}
          onClick={() => handleChangeSelectedEvent("future")}
        >
          Future events
        </button>

        <button
          className={`px-2 py-1 rounded shadow cursor-pointer ${
            selectedEvents === "past" ? "bg-gray-300" : "bg-white"
          } hover:bg-gray-200 text-gray-600`}
          onClick={() => handleChangeSelectedEvent("past")}
        >
          Past events
        </button>        
      </div>
        {selectedEvents === "past" ? <Past/>: <Current/>}
    </div>
  );
};

export default Events;
