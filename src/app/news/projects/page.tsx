"use client"
import MainFeed from '@/app/components/news/mainfeed/MainFeed';
import React, { FC } from 'react';

interface ProjectsProps {

}

const Projects: FC<ProjectsProps> = ({ }) => {  
  return (
    <div className='min-h-screen text-gray-500 p-12'>
      <p className='text-5xl font-bold'>ARCHITECTURAL PROJECTS NEWS</p>
      <p>News about the construction industry focusing on the architectural projects, buildings, infrastructure and urban planning</p>
      <MainFeed />
      

    </div>
  );
};

export default Projects;