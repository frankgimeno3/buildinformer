import React, { FC } from 'react';
import { useRouter } from 'next/navigation';


interface CompanyMiniatureProps {

}

const CompanyMiniature: FC<CompanyMiniatureProps> = ({ }) => {
    const router = useRouter();
    const handleRedirection = (params: string) => {
        router.push(params);
    }
    return (
        <div className='flex flex-row my-2 p-5 text-gray-500 max-w-7xl'>
            <div className='w-36 h-36 bg-cyan-900 cursor-pointer'></div>
            <div className='flex flex-col pl-5 justify-between'>
                <div className='flex flex-col'>
                <p className='text-xl font-bold cursor-pointer hover:text-cyan-900' onClick={() => handleRedirection('/directory/company')}>Company name</p>
                <p>Company description with some brief content and description, to have a main idea of what they do,
                    or differenciating them from others</p>
                </div>
                <div className='flex flex-row gap-2 text-white'>
                    <button className='px-2 py-1 rounded bg-gray-700'>Etiqueta 1</button>
                    <button className='px-2 py-1 rounded bg-gray-700'>Etiqueta 2</button>
                    <button className='px-2 py-1 rounded bg-gray-700'>Etiqueta 3</button>
                </div>
            </div>
        </div>
    );
};

export default CompanyMiniature;