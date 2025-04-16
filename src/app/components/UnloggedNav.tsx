'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
 
interface UnloggedNavProps {
  section: string;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UnloggedNav: FC<UnloggedNavProps> = ({ section, menuOpen, setMenuOpen}) => {
  const router = useRouter();

  const handleRedirection = (redirection: string) => {
    router.push(redirection);
    setMenuOpen(false);
  };

  return (
    <nav className="flex flex-row w-full text-white px-5 py-6 sm:py-1 justify-between items-center  bg-cyan-900">
      <div
        className="flex flex-row  text-xl md:text-4xl  cursor-pointer items-center"
        onClick={() => handleRedirection('/')}
        style={{ transitionDuration: '3000ms' }}
      >
         <p className='px-3 font-bold bg-white text-cyan-900 rounded-sm'>BUILD</p>
         <p className='text-white ml-1'>informer</p>
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
          onClick={() => handleRedirection('/')}
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
