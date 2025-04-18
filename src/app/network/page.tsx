"use client"
import React, { FC, useState } from 'react';
import UnloggedNav from '../components/UnloggedNav';
import Topbanner from '../components/news/TopBanner';
import NetworkLeftMenu from './networkComponents/NetworkLeftMenu';
import NetworkContents from './networkComponents/NetworkContents';

interface NetflixProps {
  
}

const Netflix: FC<NetflixProps> = ({ }) => {
    const [section] = useState("network")
    const [menuOpen, setMenuOpen] = useState(false)
    const handleCloseMenu = ()=>{
        setMenuOpen(false)
    }

    return (
      <div className="" >
        <div className="fixed top-0 left-0 w-full z-50">
        <UnloggedNav section={section} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
      <Topbanner/>
        <div className="flex flex-row min-h-screen" onClick={()=>{handleCloseMenu()}}>
        <NetworkLeftMenu/>
        <NetworkContents/>
        </div>
      </div>
    );
};

export default Netflix;