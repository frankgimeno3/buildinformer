'use client';

import React, { FC } from 'react';

interface NewsMenuProps {
    isOpen: boolean;
    onNavigate: (path: string) => void;
    onClose: () => void; 
}

const NewsMenu: FC<NewsMenuProps> = ({ isOpen, onNavigate, onClose }) => {
    if (!isOpen) return null;

    const handleNavigation = (path: string) => {
        onNavigate(path);
        onClose();  
    };

    return (
        <div className="absolute top-[96px] left-0 w-full h-[calc(100vh-96px)] bg-zinc-800 text-white z-40 flex flex-col justify-start px-10 pt-10 font-['Oswald']">
            <div className='flex flex-col mx-auto'>
                <p className="text-xl md:text-5xl pt-12 pb-8">Go check our latest news</p>
                <p
                    className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 text-zinc-800 rounded-sm text-xl"
                    onClick={() => handleNavigation('/')}>
                    GLOBAL CONSTRUCTION INDUSTRY NEWS
                </p>

                <p className="text-xl md:text-5xl pt-12 pb-8">Or filter our news by topic</p>
                <div className='flex flex-col text-left text-3xl'>
                    <p
                        className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 text-zinc-800 rounded-sm text-xl"
                        onClick={() => handleNavigation('/news/projects')}>
                        ARCHITECTURAL PROJECTS NEWS
                    </p>
                    <p
                        className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 text-zinc-800 rounded-sm text-xl"
                        onClick={() => handleNavigation('/news/builders')}>
                        BUILDERS NEWS
                    </p>
                    <p
                        className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 text-zinc-800 rounded-sm text-xl"
                        onClick={() => handleNavigation('/news/tech')}>
                        ARCHITECTURAL TECHNOLOGY NEWS
                    </p>
                    <p
                        className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 text-zinc-800 rounded-sm text-xl"
                        onClick={() => handleNavigation('/news/markets')}>
                        ECONOMY AND MARKETS NEWS
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsMenu;
