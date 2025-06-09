import React, { FC } from 'react';
import CompanyMiniature from './CompanyMiniature';
import RightCol from '@/app/components/news/RightCol';
import SearchButtonComponent from '@/app/components/SearchButtonComponent';

interface CompaniesDirectoryProps {
  setDirectorySection: React.Dispatch<React.SetStateAction<string>>;
}

const CompaniesDirectory: FC<CompaniesDirectoryProps> = ({ setDirectorySection }) => {
  return (
    <div className='flex flex-col min-h-screen flex-5 bg-white '>
      <div className='flex flex-col bg-gray-700  w-full p-5 pl-12'>
        <div className='flex flex-row items-center justify-between '>
          <p className='pt-2 pb-3 text-5xl '>Companies Directory</p>
          <button className='bg-white hover:bg-gray-100 text-gray-500 px-3 py-2 rounded shadow cursor-pointer'>
            Products Directory
          </button>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row rounded border border-gray-100 justify-between my-2 bg-white'>
            <input className='placeholder-gray-400 text-gray-600 pl-2 py-2 text-gray-400 text-sm w-96'
              placeholder='Search by company name' />
            <SearchButtonComponent/>
          </div>
          <div>
            <p className='text-gray-500 pl-12'>Search companies by other criteria</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row '>
        <div className='pl-12 w-full flex flex-col pr-5 pt-5'>
            <CompanyMiniature />
            <CompanyMiniature />
            <CompanyMiniature />
            <CompanyMiniature />
            <CompanyMiniature />
            <CompanyMiniature />
        </div>
        <div className='w-full max-w-md'>
          <RightCol />
        </div>
      </div>
    </div>

  );
};

export default CompaniesDirectory;