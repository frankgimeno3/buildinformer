'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useUI } from '../context/UIContext';
import SearchButtonComponent from '../SearchButtonComponent';

interface MainNavProps {}

const MainNav: FC<MainNavProps> = () => {
  const router = useRouter();
  const { isMenuOpen, setIsMenuOpen, section } = useUI();
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
    setIsMenuOpen(false);
    setIsNewsDropdownOpen(false);
  };

useEffect(() => {
  const handleClickInsideNav = (event: MouseEvent) => {
    if (
      isNewsDropdownOpen &&
      navRef.current &&
      navRef.current.contains(event.target as Node)
    ) {
      setIsNewsDropdownOpen(false);
    }
  };

  if (isNewsDropdownOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  document.addEventListener('mousedown', handleClickInsideNav);

  return () => {
    document.body.style.overflow = '';
    document.removeEventListener('mousedown', handleClickInsideNav);
  };
}, [isNewsDropdownOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="flex flex-row w-full text-white px-5 py-6 justify-between items-center bg-zinc-800 px-24 z-50 relative"
      >
        <div className="flex flex-col">
          <div
            className="flex flex-row text-xl md:text-5xl cursor-pointer items-center"
            onClick={() => handleRedirection('/')}
            style={{ transitionDuration: '3000ms' }}
          >
            <p className="px-1 pl-2 font-bold bg-white text-zinc-800 rounded-sm">BUILD</p>
            <p className="text-white ml-1">informer</p>
          </div>
          <p className="text-xl text-white">Global construction industry news</p>
        </div>

        <div className="flex flex-row rounded border border-gray-100 justify-between bg-white">
          <input
            className="placeholder-gray-400 text-gray-600 pl-2 py-2 text-sm w-96"
            placeholder="Search for content here"
          />
          <SearchButtonComponent />
        </div>

        <button
          className="block sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={30} />
        </button>

        <div
          className={`${isMenuOpen ? 'flex' : 'hidden'
            } gap-6 flex-col sm:flex sm:flex-row sm:static absolute top-7 left-0 w-full sm:w-auto bg-gray-950 sm:bg-transparent 
            text-lg max-w-full items-center`}
        >
          <div
            className={`pt-6 pb-5 text-center cursor-pointer ${isNewsDropdownOpen ? 'text-white font-bold' : 'opacity-50 hover:opacity-100'}`}
            onClick={() => setIsNewsDropdownOpen(!isNewsDropdownOpen)}
            style={{ transitionDuration: '1200ms' }}
          >
            <p>News</p>
          </div>

          <div
            className={`pt-6 pb-5 text-center cursor-pointer ${section === 'events' ? 'text-white' : 'opacity-50 hover:opacity-100'}`}
            onClick={() => handleRedirection('/events')}
            style={{ transitionDuration: '1200ms' }}
          >
            <p>Events</p>
          </div>

          <div
            className={`pt-6 pb-5 text-center cursor-pointer ${section === 'directory' ? 'text-white' : 'opacity-50 hover:opacity-100'}`}
            onClick={() => handleRedirection('/directory')}
            style={{ transitionDuration: '1200ms' }}
          >
            <p>Directory</p>
          </div>

          <div
            className={`mt-6 bg-white mb-5 py-1 px-5 text-center cursor-pointer rounded text-md text-zinc-800 ${section === 'access' ? 'opacity-100 font-bold' : 'opacity-80 hover:opacity-100'}`}
            onClick={() => handleRedirection('/access')}
            style={{ transitionDuration: '1200ms' }}
          >
            <p>Access</p>
          </div>
        </div>
      </nav>

      {isNewsDropdownOpen && (
        <div className="absolute top-[96px] left-0 w-full h-[calc(100vh-96px)] bg-zinc-800 text-white z-40 flex flex-col items-center justify-start px-10 pt-10">
          <div
            className="text-xl mb-4 cursor-pointer hover:underline"
            onClick={() => handleRedirection('/projects')}
          >
            Architectural projects news
          </div>
          <div
            className="text-xl mb-4 cursor-pointer hover:underline"
            onClick={() => handleRedirection('/builders')}
          >
            Builders news
          </div>
          <div
            className="text-xl mb-4 cursor-pointer hover:underline"
            onClick={() => handleRedirection('/contech')}
          >
            Contech news
          </div>
          <div
            className="text-xl mb-4 cursor-pointer hover:underline"
            onClick={() => handleRedirection('/markets')}
          >
            Construction markets news
          </div>
        </div>
      )}
    </>
  );
};

export default MainNav;
