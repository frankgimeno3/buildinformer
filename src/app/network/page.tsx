"use client"
import React, { FC, useState } from 'react';
import UnloggedNav from '../components/UnloggedNav';

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
        <div className="flex flex-col min-h-screen" onClick={()=>{handleCloseMenu()}}>
         <p>Network</p>
        </div>
      </div>
    );
};

export default Netflix;