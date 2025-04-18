import React, { FC } from 'react';

interface MainArticleProps {

}

const MainArticle: FC<MainArticleProps> = ({ }) => {
    return (
        <div className='flex flex-row p-5'>
            <div className='flex-3'>
                <div className='bg-cyan-900 h-64 '>
                </div>
            </div>
            <div className='flex flex-2 flex-col'>
                <p>Titular del main article</p>
                <p>Esto debería ser el subtítulo del main article, con contenido relacionado y ampliando lo que dice</p>
            </div>
        </div>
    );
};

export default MainArticle;