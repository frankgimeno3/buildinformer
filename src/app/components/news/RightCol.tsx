'use client'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import Image from 'next/image';

interface RightColProps {}

const RightCol: FC<RightColProps> = () => {
  const router = useRouter();

  const handleRedirection = (param: string) => {
    router.push(param);
  };

  return (
    <div className='min-h-screen border flex-1 hidden md:block p-5 border-l-gray-50 pt-12'>
       <div
        className='border border-black rounded shadow bg-white text-gray-400 mb-5  p-7 cursor-pointer hover:bg-gray-50 border border-gray-100'
        onClick={() => handleRedirection('/contact/advertise')}
      >
        <p className='font-bold text-2xl text-gray-500'>Read only the information that interests you</p>
        <p className='py-3 pl-36 text-right max-w-xs'>Filter by topic or location to see only what you want to read .</p>
        <p className=' text-left max-w-xs pr-36'>Sign up to create customized filters, and receive alerts when something that interests you is published .</p>
      </div>
      <div
        className='bg-white text-gray-400 mb-2  pl-5 py-1 cursor-pointer hover:bg-gray-50 border border-gray-100'
        onClick={() => handleRedirection('/contact/newsletter')}
      >
        <p>Subscribe to our newsletter!</p>
      </div>
      <div
        className='bg-white text-gray-400 mb-5  pl-5 py-1 cursor-pointer hover:bg-gray-50 border border-gray-100'
        onClick={() => handleRedirection('/contact/advertise')}
      >
        <p>Do you want to advertise?</p>
      </div>

       <div className='relative h-120 mb-5 cursor-pointer hover:opacity-90'>
        <Image
          src='https://www.vidrioperfil.com/media/images/25-5/PUJOL_en_glasstech_polonia.jpg'
          alt='advert image'
          fill
          className='object-cover ContentBanner'
        />
      </div>

       <div className='relative h-120 mb-5 cursor-pointer hover:opacity-90'>
        <Image
          src='https://www.vidrioperfil.com/media/images/25-5/ITEC_CONSTRUMAT.jpg'
          alt='advert image'
          fill
          className='object-cover ContentBanner'
        />
      </div>

       <div className='relative h-120 mb-5 cursor-pointer hover:opacity-90'>
        <Image
          src='https://www.vidrioperfil.com/media/images/25-5/PUJOL_en_glasstech_polonia.jpg'
          alt='advert image'
          fill
          className='object-cover ContentBanner'
        />
      </div>
    </div>
  );
};

export default RightCol;
