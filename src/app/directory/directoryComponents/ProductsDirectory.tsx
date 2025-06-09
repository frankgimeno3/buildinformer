import React, { FC } from 'react';

interface ProductsDirectoryProps {
  setDirectorySection: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsDirectory: FC<ProductsDirectoryProps> = ({setDirectorySection }) => {
  return (
    <div className='flex flex-col min-h-screen flex-5 bg-white '>
        <div className='bg-gray-700  w-full '>
        <p className='pt-2 pb-3 pl-5 font-bold'>Products Directory</p>
        </div>
        ProductsDirectory
        </div>
  );
};

export default ProductsDirectory;