import React, { FC } from 'react';

interface AddCompanyProps {
  
}

const AddCompany: FC<AddCompanyProps> = ({ }) => {
  return (
    <div className='flex flex-col min-h-screen flex-5 bg-white '>
      <div className='flex flex-col bg-gray-700  w-full p-5 pl-12'>
        <p className='pt-2 pb-3 text-5xl '>Add Company</p>
      </div>
    </div>
  );
};

export default AddCompany;