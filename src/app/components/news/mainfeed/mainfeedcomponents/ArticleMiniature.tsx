import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

interface ArticleMiniatureProps {
    format:string;
}

const ArticleMiniature: FC<ArticleMiniatureProps> = ({format}) => {
    const router = useRouter();
    const [formatSize1, setFormatSize1] = useState("w-96 h-80")
    const [formatSize2, setFormatSize2] = useState("w-96 h-80")
    const handleRedirection = (params: string) => {
        router.push(params);
    };

    useEffect(()=>{
        if(format=="big"){
            setFormatSize1(`w-96 bg-gray-50/80`)
            setFormatSize2(`w-96 h-80`)
        }
        else{
            setFormatSize1(`w-96 bg-white`)
            setFormatSize2(`w-96 h-45`)
        }
    }, [format]
    )

    return (
        <div className='p-5'>
            <div
                className={`flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-[1500ms] ${formatSize1}`}
                onClick={() => {
                    handleRedirection('/content');
                }}
            >
                <div className='flex flex-row justify-end px-2 pt-2 pb-1 '>
                <p className='text-right text-gray-400 text-xs'>March 20th 2025</p>
                </div>
                <div className={`relative ${formatSize2}`}>
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
