"use client"

import Article from "./contentComponents/Article";
import RelatedContents from "./contentComponents/RelatedContents";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white mt-12 h-full">
      <div className="flex flex-xol w-full flex-grow h-full">
        <Article />
      </div>
      <RelatedContents />
    </div>
  );
}
