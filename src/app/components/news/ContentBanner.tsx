"use client"
import React, { FC } from 'react';
import Image from 'next/image';

interface ContentBannerProps {
  
}

const ContentBanner: FC<ContentBannerProps> = ({ }) => {
  return (
    <div className="w-full py-2 bg-white">
      <div className="relative h-60 w-full mb-5 bg-white flex items-center justify-center overflow-hidden ">
        <Image
          alt="banner"
          src="/longbanner.webp"
          fill
          className="object-contain cursor-pointer"
        />
      </div>
    </div>
  ); 
};

export default ContentBanner;