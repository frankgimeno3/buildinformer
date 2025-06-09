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
    <footer className="flex flex-col w-full text-white py-6 sm:py-1 bg-cyan-900 px-24">
      <div
        className="flex flex-row  text-xl md:text-4xl  cursor-pointer items-center py-12"
        onClick={() => handleRedirection('/')}
        style={{ transitionDuration: '3000ms' }}
      >
        <p className='px-3 font-bold bg-white text-cyan-900 rounded-sm'>BUILD</p>
        <p className='text-white ml-1'>informer</p>
      </div>
      <div className='flex flex-row justify-left gap-36 pb-12'>
        <div className='flex flex-col gap-1 text-gray-400 text-lg'>
          <p className='font-bold text-xl text-white'>RESOURCES</p>
          <p>About us</p>
          <p>Join us</p>
          <p>Advertise</p>         
          <p>Contact us</p>
        </div>
        <div className='flex flex-col gap-1 text-gray-400 text-lg'>
          <p className='font-bold text-xl text-white'>SOCIAL</p>
          <p>LinkedIn</p>
          <p>X</p>
          <p>Youtube</p>
        </div>
        <div className='flex flex-col gap-1 text-gray-400 text-lg'>
          <p className='font-bold text-xl text-white'>LEGAL</p>
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;