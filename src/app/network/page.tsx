"use client"
import React, { FC, useState } from 'react';
import UnloggedNav from '../components/navs/MainNav';
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
      <div className="flex flex-col" >
      <Topbanner/>
        <div className="flex flex-row min-h-screen" onClick={()=>{handleCloseMenu()}}>
        <NetworkLeftMenu/>
        <NetworkContents/>
        </div>
      </div>
    );
};

export default Netflix;