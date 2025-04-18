import React, { FC } from 'react';

interface ArticleMiniatureProps {

}

const ArticleMiniature: FC<ArticleMiniatureProps> = ({ }) => {
    return (
        <div className='p-5'>
            <div className='flex flex-col w-80 bg-gray-100 shadow border'>
                <div className='bg-cyan-900 h-56 w-80'>

                </div>
                <p className='max-w-80 p-5 text-gray-600'>Título del artículo publicado, sin necesidad de subtítulo</p>
            </div>
        </div>
    );
};

export default ArticleMiniature;