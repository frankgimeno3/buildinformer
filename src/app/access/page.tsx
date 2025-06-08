"use client"
import React, { FC, useState } from 'react';
import UnloggedNav from '../components/navs/MainNav';

interface AccessProps {
  
}

const Access: FC<AccessProps> = ({ }) => {
    const [section] = useState("Access")
    const [menuOpen, setMenuOpen] = useState(false)
    const handleCloseMenu = ()=>{
        setMenuOpen(false)
    }

    return (
  
        <div className="flex flex-col min-h-screen bg-white text-gray-500 pt-96" onClick={()=>{handleCloseMenu()}}>
         <p>Access</p>
         <p>Log in</p>
         <p>Sign Up</p>
         <p>Who are we?</p>
        </div>
     );
};

export default Access;