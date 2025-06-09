import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import Image from 'next/image';

interface ArticleMiniatureProps { }

const ArticleMiniature: FC<ArticleMiniatureProps> = ({ }) => {
    const router = useRouter();
    const handleRedirection = (params: string) => {
        router.push(params);
    };

    return (
        <div className='p-5'>
            <div
                className='flex flex-col w-96 hover:shadow-xl transition-shadow duration-[1500ms] cursor-pointer'
                onClick={() => {
                    handleRedirection('/content');
                }}
            >

                <div className='relative w-96 h-80'>
                    <Image
                        alt='articleImage'
                        src='https://www.vidrioperfil.com/media/images/25-5/ITEC_CONSTRUMAT.jpg'
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="384px"
                    />
                </div>
                <p className='max-w-80 px-5 pt-5 text-gray-600'>
                    Título del artículo publicado, sin necesidad de subtítulo
                </p>

                <p className='text-cyan-700 font-bold p-5'>Categoría</p>
            </div>
        </div>
    );
};

export default ArticleMiniature;
