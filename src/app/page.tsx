"use client"

import { useRouter } from "next/navigation";
import MainFeed from "./components/news/mainfeed/MainFeed";
import RightCol from "./components/news/RightCol";
import Topbanner from "./components/news/TopBanner";
import SearchButtonComponent from "./components/SearchButtonComponent";

export default function Home() {
  const router = useRouter()
  const handleRedirection = (params: string) => {
    router.push(params)
  }

  return (

        <MainFeed />

   );
}
