"use client"
import MainFeed from '@/app/components/news/mainfeed/MainFeed';
import React, { FC } from 'react';

interface ProjectsProps {

}

const Projects: FC<ProjectsProps> = ({ }) => {  
  return (
    <div className='min-h-screen text-gray-500 p-12'>
      <div className='flex flex-col py-5 pb-12 px-6'>

      <p className='text-5xl font-bold'>ARCHITECTURAL PROJECTS NEWS</p>
      </div>
      <MainFeed />
      

    </div>
  );
};

export default Projects;