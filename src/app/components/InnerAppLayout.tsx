'use client';

import { useUI } from "./context/UIContext";
import MainNav from "./navs/MainNav";
import FooterSection from "./navs/FooterSection";
import Topbanner from "./news/TopBanner";
import RightCol from "./news/RightCol";

export default function InnerAppLayout({ children }: { children: React.ReactNode }) {
  const { setIsNewsOpen, setIsLoggedOpen } = useUI();

  const handleCloseMenus = () => {
    setIsNewsOpen(false);
    setIsLoggedOpen(false);
  };

  return (
    <div className="max-w-screen bg-gray-100">
      <MainNav />
      <div className="flex flex-col px-24" onClick={handleCloseMenus} >
        <Topbanner />
        <div className="flex flex-row min-h-screen">
          <div
            // onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro del contenido principal
            className="flex flex-col min-h-screen flex-3 bg-white mt-12"
          >
            {children}
          </div>
          <div
            // onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic en la columna derecha
            className="min-h-screen border flex-1 hidden md:block p-5 border-l-gray-50 pt-12"
          >
            <RightCol />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
