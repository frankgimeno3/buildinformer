'use client';

import React, { FC, useState } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import Image from 'next/image';

interface UnloggedNavProps {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

const UnloggedNav: FC<UnloggedNavProps> = ({ section }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
    setMenuOpen(false);
  };

  return (
    <nav className="flex flex-row w-full text-white px-5 py-6 sm:py-1 justify-between items-center bg-gray-950 bg-opacity-80">
      <div
        className="flex flex-row  text-xl md:text-4xl  cursor-pointer items-center"
        onClick={() => handleRedirection('/')}
        style={{ transitionDuration: '3000ms' }}
      >
         <p className='px-3 font-bold bg-red-300 text-white'>BUILD</p>
         <p className='text-black'>informer</p>
      </div>

      <button
        className="block sm:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={30} />
      </button>

      <div
        className={`${menuOpen ? 'flex' : 'hidden'
          } flex-col sm:flex sm:flex-row sm:static absolute top-7 left-0 w-full sm:w-auto bg-gray-950 sm:bg-transparent text-md max-w-full`}
      >
        <div
          className={`pt-6 pb-5 px-3 text-center cursor-pointer ${section === 'news' ? 'text-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/news')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>News</p>
        </div>

        <div
          className={`pt-6 pb-5 px-3 text-center cursor-pointer ${section === 'directory' ? 'text-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/directory')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Directory</p>
        </div>
        <div
          className={`pt-6 pb-5 px-3 text-center cursor-pointer ${section === 'network' ? 'text-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/network')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Network</p>
        </div>
        <div
          className={`pt-6 pb-5 px-3 text-center cursor-pointer ${section === 'informer' ? 'text-white' : 'opacity-50 hover:opacity-100'}`}
          onClick={() => handleRedirection('/informer')}
          style={{ transitionDuration: '1200ms' }}
        >
          <p>Informer</p>
        </div>

       
      </div>
    </nav>
  );
};

export default UnloggedNav;
