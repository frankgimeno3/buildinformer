"use client"
import React, { FC, useState } from 'react';
import UnloggedNav from '../components/UnloggedNav';

interface InformerProps {
  
}

const Informer: FC<InformerProps> = ({ }) => {
    const [section] = useState("informer")
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
         <p>Informer</p>
        </div>
      </div>
    );
};

export default Informer;