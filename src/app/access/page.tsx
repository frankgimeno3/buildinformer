"use client"
import React, { FC, useState } from 'react';
import UnloggedNav from '../components/UnloggedNav';

interface AccessProps {
  
}

const Access: FC<AccessProps> = ({ }) => {
    const [section] = useState("Access")
    const [menuOpen, setMenuOpen] = useState(false)
    const handleCloseMenu = ()=>{
        setMenuOpen(false)
    }

    return (
      <div className="" >
        <div className="fixed top-0 left-0 w-full z-50">
        <UnloggedNav section={section} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
        <div className="flex flex-col min-h-screen bg-white text-gray-500" onClick={()=>{handleCloseMenu()}}>
         <p>Access</p>
         <p>Log in</p>
         <p>Sign Up</p>
         <p>Who are we?</p>
        </div>
      </div>
    );
};

export default Access;