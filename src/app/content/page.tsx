"use client"
import { useState } from "react";
import UnloggedNav from "../components/navs/MainNav";
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
  <div className="flex flex-col" >

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
