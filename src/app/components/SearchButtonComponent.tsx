import React, { FC } from 'react';

interface SearchButtonComponentProps {

}

const SearchButtonComponent: FC<SearchButtonComponentProps> = ({ }) => {
    return (
        <button className=' rounded   text-sm px-2 pr-3 bg-zinc-800 hover:bg-zinc-700 cursor-pointer transition-colors duration-[1200ms]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-200">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>
        </button>
    );
};

export default SearchButtonComponent;