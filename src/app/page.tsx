"use client"

import MainFeed from "./components/news/mainfeed/MainFeed";
import RightCol from "./components/news/RightCol";
import Topbanner from "./components/news/TopBanner";

export default function Home() { 
  const handleCloseMenu = ()=>{

    
}

return (
  <div className="flex flex-col" >
      <Topbanner/>
      <div className="flex flex-row min-h-screen" onClick={()=>{handleCloseMenu()}}>
        <MainFeed />
        <RightCol />
      </div>
    </div>
  );
}
