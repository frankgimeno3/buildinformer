"use client"
import React, { FC, useState } from 'react';
import UnloggedNav from '../components/navs/MainNav';
import Topbanner from '../components/news/TopBanner';
import DirectoryLeftMenu from './directoryComponents/DirectoryLeftMenu';
import DirectoryContents from './directoryComponents/DirectoryContents';

interface DirectoryProps {
  
}

const Directory: FC<DirectoryProps> = ({ }) => {
    const [section] = useState("directory")
    const [menuOpen, setMenuOpen] = useState(false)
    const handleCloseMenu = ()=>{
        setMenuOpen(false)
    }

    return (
      <div className="flex flex-col" >
      <Topbanner/>
      <div className="flex flex-row min-h-screen" onClick={()=>{handleCloseMenu()}}>
        <DirectoryLeftMenu/>
        <DirectoryContents/>
        </div>
      </div>
    );
 
};

export default Directory;