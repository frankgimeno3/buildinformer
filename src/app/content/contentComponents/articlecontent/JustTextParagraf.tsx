import React, { FC } from 'react';

interface JustTextParagrafProps {
  articleContentText: React.ReactNode[];  
}

const JustTextParagraf: FC<JustTextParagrafProps> = ({ articleContentText }) => {
  return (
    <div className="text-justify flex flex-col gap-6">
      {articleContentText.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>   
      ))}
    </div>
  );
};

export default JustTextParagraf;
