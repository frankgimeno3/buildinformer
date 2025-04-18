import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface NetworkLeftMenuProps {

}

const NetworkLeftMenu: FC<NetworkLeftMenuProps> = ({ }) => {
  const router = useRouter()
  const handleRedirection = (redirectionUrl: string) => {
    router.push(`/${redirectionUrl}`)
  }
  return (
    <div className='min-h-sceen bg-gray-200 flex-1 hidden md:block  text-cyan-900'>
      <div className="flex flex-row  text-lg py-2 px-5 items-center bg-cyan-900 text-white">
        <p className='px-2 font-bold bg-white text-cyan-900 rounded-sm'>BUILD</p>
        <p className=' ml-1'>informer</p>
        <p className='pl-2 font-semibold '>Network</p>
        </div>

        <div className='p-5 pl-8'>
        <div onClick={() => { handleRedirection("network") }}
          className=' text-cyan-900 font-bold mb-1 py-1 pl-3 text-sm '>
          <p>Industry forums</p>
        </div>
        <div onClick={() => { handleRedirection("network/agenda") }}
          className=' text-gray-500 hover:text-cyan-800 mb-1 py-1 pl-3 text-sm '>
          <p>Industry agenda</p>
        </div>
        <div onClick={() => { handleRedirection("network/professionals") }}
          className=' text-gray-500 hover:text-cyan-800 mb-1 py-1 pl-3 text-sm '>
          <p>Professional profiles</p>
        </div>
        <div onClick={() => { handleRedirection("directory/companies") }}
          className=' text-gray-500 hover:text-cyan-800 mb-1 py-1 pl-3 text-sm '>
          <p >Company profiles</p>
        </div>
      </div>
      
    </div>

  );
};

export default NetworkLeftMenu;