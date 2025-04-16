"use client"
import { useState } from "react";
import UnloggedNav from "../components/UnloggedNav";
import Topbanner from "../components/news/TopBanner";
import Article from "./contentComponents/Article";
import ArticleRightBox from "./contentComponents/ArticleRightBox";
import RelatedContents from "./contentComponents/RelatedContents";


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
      <div className="flex flex-col min-h-screen" onClick={()=>{handleCloseMenu()}}>
        <div className="flex flex-row">
        <Article />
        <ArticleRightBox />
        </div>
        <RelatedContents/>
      </div>
    </div>
  );
}
