'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useUI } from '../context/UIContext';
import SearchButtonComponent from '../SearchButtonComponent';
import NewsMenu from './NewsMenu';
import LoggedMenu from './LoggedMenu'; // Nuevo componente

const MainNav: FC = () => {
  const router = useRouter();
  const { isMenuOpen, setIsMenuOpen, section } = useUI();
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isLoggedOpen, setIsLoggedOpen] = useState(false); // NUEVO
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
    setIsNewsOpen(false);
    setIsLoggedOpen(false);
  };

  useEffect(() => {
    const closeMenus = (e: MouseEvent) => {
      if (
        (isNewsOpen || isLoggedOpen) &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsNewsOpen(false);
        setIsLoggedOpen(false);
      }
    };
    document.addEventListener('mousedown', closeMenus);
    return () => document.removeEventListener('mousedown', closeMenus);
  }, [isNewsOpen, isLoggedOpen]);

  const navItems = [
    { label: 'News', active: isNewsOpen, onClick: () => setIsNewsOpen(!isNewsOpen) },
    { label: 'Events', active: section === 'events', path: '/events' },
    { label: 'Directory', active: section === 'directory', path: '/directory' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="flex justify-between items-center w-full px-5 py-6 sm:px-24 bg-zinc-800 text-white relative z-50"
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

          <button className="sm:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={30} />
          </button>

          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex absolute sm:static top-7 left-0 w-full sm:w-auto flex-col sm:flex-row bg-gray-950 sm:bg-transparent items-center text-lg gap-6 pl-24`}
          >
            {navItems.map(({ label, active, path, onClick }) => (
              <div
                key={label}
                onClick={onClick || (() => handleNavigate(path!))}
                className={`pt-6 pb-5 cursor-pointer text-center ${active ? 'text-white font-bold' : 'opacity-50 hover:opacity-100'}`}
              >
                <p>{label}</p>
              </div>
            ))}

            <div
              onClick={() => handleNavigate('/access')}
              className={`mt-6 mb-5 px-5 py-1 rounded text-md text-zinc-800 bg-white cursor-pointer ${section === 'access' ? 'opacity-100 font-bold' : 'opacity-80 hover:opacity-100'}`}
            >
              <p>Access</p>
            </div>

            {/* Botón Hamburguesa blanco para LoggedMenu */}
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

      <NewsMenu isOpen={isNewsOpen} onNavigate={handleNavigate} />
      <LoggedMenu isOpen={isLoggedOpen} onNavigate={handleNavigate} />
    </>
  );
};

export default MainNav;
