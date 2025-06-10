'use client';

import React, { FC } from 'react';

interface NewsMenuProps {
    isOpen: boolean;
    onNavigate: (path: string) => void;
}

const NewsMenu: FC<NewsMenuProps> = ({ isOpen, onNavigate }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute top-[96px] left-0 w-full h-[calc(100vh-96px)] bg-zinc-800 text-white z-40 flex flex-col justify-start px-10 pt-10 font-['Oswald']">
            <div className='flex flex-col mx-auto'>
                <p className="text-xl md:text-5xl pt-12 pb-8">Go check our latest news</p>
                <p
                    className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 
                    text-zinc-800 rounded-sm text-xl"
                    onClick={() => onNavigate('/')}>
                    GLOBAL CONSTRUCTION INDUSTRY NEWS 
                </p>

<p className="text-xl md:text-5xl pt-12 pb-8">Or filter our news by topic</p>
                <div className='flex flex-col text-left text-3xl'>
                <p
                    className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 
                    text-zinc-800 rounded-sm text-xl"
                    onClick={() => onNavigate('/projects')}>
                    ARCHITECTURAL PROJECTS NEWS
                </p>

                <p
                    className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 
                    text-zinc-800 rounded-sm text-xl"
                    onClick={() => onNavigate('/builders')}>
                    BUILDERS NEWS
                </p>
                 
                             <p
                    className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 
                    text-zinc-800 rounded-sm text-xl"
                    onClick={() => onNavigate('/contech')}>
                    CONTECH NEWS
                </p>
                            <p
                    className="text-center mb-4 cursor-pointer px-1 pl-2 font-bold bg-white hover:bg-gray-300 
                    text-zinc-800 rounded-sm text-xl"
                    onClick={() => onNavigate('/markets')}>
                    ECONOMY AND MARKETS NEWS
                </p>
                    
                </div>
            </div>
        </div>
    );
};

export default NewsMenu;