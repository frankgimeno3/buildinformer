import React, { FC } from 'react';
import Image from 'next/image';

interface HalfSideParagrafProps {
  textside: 'none' | 'left' | 'right';
  articleContentText: React.ReactNode[];   
}

const HalfSideParagraf: FC<HalfSideParagrafProps> = ({ textside, articleContentText }) => {
  const textBlock = (
    <div className="flex flex-col gap-3 flex-1/2">
      {articleContentText.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>  
      ))}
    </div>
  );

  const imageBlock = (
    <div className="relative w-[530px] h-[300px] flex-1/2">
      <Image
        src="https://picsum.photos/530/300/"
        alt="main image"
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  return (
    <div className="flex flex-row gap-6 w-full">
      {textside === 'left' ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  );
};

export default HalfSideParagraf;
