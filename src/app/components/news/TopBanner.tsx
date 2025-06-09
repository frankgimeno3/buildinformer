"use client";
import React, { FC } from 'react';
import Image from 'next/image';

interface TopbannerProps {}

const Topbanner: FC<TopbannerProps> = ({ }) => {
  return (
    <div className="w-full py-2 bg-white">
      <div className="relative h-60 w-full bg-white flex items-center justify-center overflow-hidden cursor-pointer">
        <Image
          alt="banner"
          src="/longbanner.webp"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Topbanner;
