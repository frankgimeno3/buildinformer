"use client"
 
import Article from "./contentComponents/Article";
import ArticleRightBox from "./contentComponents/ArticleRightBox";
import RelatedContents from "./contentComponents/RelatedContents";


export default function Home() {
  

return (
    <div className='flex flex-col min-h-screen bg-white mt-12 '>
        <div className="flex flex-row w-full">
        <Article />
        <ArticleRightBox />
        </div>
        <RelatedContents/>
      </div>
   );
}
