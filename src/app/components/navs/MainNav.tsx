'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { Menu } from 'lucide-react';
import { useUI } from '../context/UIContext';
import SearchButtonComponent from '../SearchButtonComponent';
import NewsMenu from './NewsMenu';
import LoggedMenu from './LoggedMenu';

const MainNav: FC = () => {
  const router = useRouter();
  const { isMenuOpen, isNewsOpen, setIsNewsOpen, isLoggedOpen, setIsLoggedOpen, section} = useUI(); 
  
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleCloseMenus = () => {
    if(isNewsOpen==true || isLoggedOpen==true){
    setIsNewsOpen(false);
    setIsLoggedOpen(false);}
  };
 

  return (
    <>
      <nav
        ref={navRef}
        className="flex justify-between items-center w-full px-5 py-6 sm:px-24 bg-zinc-800 text-white relative z-50"
        onClick={handleCloseMenus}
      >
        <div className="flex flex-col cursor-pointer" onClick={() => handleNavigate('/')}>
          <div className="flex items-center text-xl md:text-5xl">
            <p className="px-1 pl-2 font-bold bg-white text-zinc-800 rounded-sm">BUILD</p>
            <p className="ml-1">informer</p>
          </div>
          <p className="text-xl">Global construction industry news</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex border border-gray-100 rounded bg-white">
            <input
              className="pl-2 py-2 w-96 text-sm text-gray-600 placeholder-gray-400"
              placeholder="Search for content here"
            />
            <SearchButtonComponent />
          </div>

          {/* <button className="sm:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={30} />
          </button> */}

          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex absolute sm:static top-7 left-0 w-full sm:w-auto flex-col sm:flex-row bg-gray-950 sm:bg-transparent items-center text-lg gap-6 pl-24`}
          >
            <div
              onClick={() => setIsNewsOpen(!isNewsOpen)}
              className={`pt-6 pb-5 cursor-pointer text-center ${isNewsOpen ? 'text-white font-bold' : 'opacity-50 hover:opacity-100'}`}
            >
              <p>News</p>
            </div>

            <div
              onClick={() => handleNavigate('/events')}
              className={`pt-6 pb-5 cursor-pointer text-center ${section === 'events' ? 'text-white font-bold' : 'opacity-50 hover:opacity-100'}`}
            >
              <p>Events</p>
            </div>

            <div
              onClick={() => handleNavigate('/directory')}
              className={`pt-6 pb-5 cursor-pointer text-center ${section === 'directory' ? 'text-white font-bold' : 'opacity-50 hover:opacity-100'}`}
            >
              <p>Directory</p>
            </div>

            <div
              onClick={() => handleNavigate('/access')}
              className={`mt-6 mb-5 px-5 py-1 rounded text-md text-zinc-800 bg-white cursor-pointer ${section === 'access' ? 'opacity-100 font-bold' : 'opacity-80 hover:opacity-100'}`}
            >
              <p>Access</p>
            </div>

            <button
              onClick={() => setIsLoggedOpen(!isLoggedOpen)}
              className="mt-6 mb-5 flex flex-col justify-between items-center w-10 h-8 p-2 bg-white rounded cursor-pointer"
            >
              <span className="block w-full h-0.5 bg-gray-600"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
            </button>
          </div>
        </div>
      </nav>

      <NewsMenu
        isOpen={isNewsOpen}
        onNavigate={(path) => {
          handleNavigate(path);
          setIsNewsOpen(false);
        }}
        onClose={() => setIsNewsOpen(false)}
      />

      <LoggedMenu
        isOpen={isLoggedOpen}
        onNavigate={(path) => {
          handleNavigate(path);
          setIsLoggedOpen(false);
        }}
      />
    </>
  );
};

export default MainNav;
