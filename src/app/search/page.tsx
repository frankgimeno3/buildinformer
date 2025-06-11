import React, { FC } from 'react';

interface SearchProps {

}

const Search: FC<SearchProps> = ({ }) => {
    return (
        <div>
            <p className='text-3xl'>Search results for: <span className='text-xl text-gray-400'>Contenido buscado</span></p>
            <div className='flex flex-row'>
                <p>Is this not what you were looking for?</p>
                <p>Filter by other cryteria</p>
                <p>Sort by date</p>
                <p>Filter by region</p>
                <p>Filter by topic</p>
            </div>
            <p>Aquí deberían aparecer los resultados de búsqueda</p>
            <p>Aquí unos buttons </p>
        </div>
    );
};

export default Search;