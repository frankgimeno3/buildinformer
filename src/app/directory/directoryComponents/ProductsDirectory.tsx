import React, { FC } from 'react';
import ProductMiniature from './ProductMiniature';
import RightCol from '@/app/components/news/RightCol';
import SearchButtonComponent from '@/app/components/SearchButtonComponent';
import { useRouter } from 'next/navigation';

interface ProductsDirectoryProps {
  setDirectorySection: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsDirectory: FC<ProductsDirectoryProps> = ({ setDirectorySection }) => {
  const router = useRouter();
  const handleChangeDirectorySection = (section: string) => {
    setDirectorySection(section);
  }
  
  const handleAddProduct = () => {
    router.push("/directory/addProduct");
  }

  return (
    <div className='flex flex-col min-h-screen flex-5 bg-white '>
      <div className='flex flex-col bg-gray-700  w-full p-5 pl-12'>
        <div className='flex flex-row items-center justify-between '>
          <p className='pt-2 pb-3 text-5xl '>Products Directory</p>
          <div className='flex flex-col gap-2'>
          <button className='bg-white hover:bg-gray-100 text-gray-500 px-3 py-2 rounded shadow cursor-pointer w-56'
          onClick={() => handleChangeDirectorySection("companies")}>
            Companies Directory
          </button>
          <button className='bg-white hover:bg-gray-100 text-gray-500 px-3 py-2 rounded shadow cursor-pointer w-56'
          onClick={() => handleAddProduct()}>
            Do you want to add a product?
          </button>º
          </div>
          
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row rounded border border-gray-100 justify-between my-2 bg-white'>
            <input className='placeholder-gray-400 text-gray-600 pl-2 py-2 text-gray-400 text-sm w-96'
              placeholder='Search by Product name' />
            <SearchButtonComponent/>
          </div>
          <div>
            <p className='text-gray-500 pl-12'>Search Products by other criteria</p>
          </div>
        </div>
      </div>
         <div className='pl-12 w-full flex flex-col pr-5 pt-5'>
            <ProductMiniature />
            <ProductMiniature />
            <ProductMiniature />
            <ProductMiniature />
            <ProductMiniature />
            <ProductMiniature />
        </div>
        
     </div>

  );
};

export default ProductsDirectory;