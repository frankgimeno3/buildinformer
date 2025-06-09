"use client"
import React, { FC, useState } from 'react';
import Topbanner from '../components/news/TopBanner';
import ProductsDirectory from './directoryComponents/ProductsDirectory';
import CompaniesDirectory from './directoryComponents/CompaniesDirectory';

interface DirectoryProps {

}

const Directory: FC<DirectoryProps> = ({ }) => {
  const [directorySection, setDirectorySection] = useState("companies")


  return (
    <div className='min-h-screen flex flex-col'>
      {directorySection == "companies" && <CompaniesDirectory setDirectorySection={setDirectorySection} />}
      {directorySection == "products" && <ProductsDirectory setDirectorySection={setDirectorySection} />}
    </div>
  );

};

export default Directory;