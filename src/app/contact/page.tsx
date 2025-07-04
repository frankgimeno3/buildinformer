"use client"
import React, { FC, useState } from 'react';
import UnloggedNav from '../components/navs/MainNav';
import Topbanner from '../components/news/TopBanner';

interface ContactProps {

}

const Contact: FC<ContactProps> = ({ }) => {


  const [section] = useState("contact")
  const [menuOpen, setMenuOpen] = useState(false)
  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className='min-h-screen'>
      <Topbanner />
      <div className="flex flex-col min-h-screen" onClick={() => { handleCloseMenu() }}>
        <p className='font-bold'>Contact</p>
        <p>Do you want to contact a company you saw here?</p>
        <p>Do you want to advertise?</p>
        <p>Do you want to work with us?</p>
        <p>Do you want to contact us for any other reason?</p>
      </div>
    </div>
  );
};

export default Contact;