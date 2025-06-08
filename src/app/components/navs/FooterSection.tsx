"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface FooterSectionProps {
  
}

const FooterSection: FC<FooterSectionProps> = ({ }) => {
      const router = useRouter();
    
      const handleRedirection = (redirection: string) => {
        router.push(redirection);
       };
      
  return (
    <div className='flex flex-row'>
        <div
        className="flex flex-row  text-xl md:text-4xl  cursor-pointer items-center"
        onClick={() => handleRedirection('/')}
        style={{ transitionDuration: '3000ms' }}
      >
         <p className='px-3 font-bold bg-white text-cyan-900 rounded-sm'>BUILD</p>
         <p className='text-white ml-1'>informer</p>
      </div>
    </div>
  );
};

export default FooterSection;