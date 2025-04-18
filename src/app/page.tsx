"use client"
import { useState } from "react";
import UnloggedNav from "./components/UnloggedNav";
import MainFeed from "./components/news/mainfeed/MainFeed";
import RightCol from "./components/news/RightCol";
import Topbanner from "./components/news/TopBanner";

export default function Home() {
  const [section] = useState("news")
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
        <MainFeed />
        <RightCol />
      </div>
    </div>
  );
}
