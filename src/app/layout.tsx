import type { Metadata } from "next";
import "./globals.css";
import MainNav from "./components/navs/MainNav";
import FooterSection from "./components/navs/FooterSection";
import { UIProvider } from "./components/context/UIContext";
import Topbanner from "./components/news/TopBanner";
import RightCol from "./components/news/RightCol";


export const metadata: Metadata = {
  title: "BUILDinformer",
  description: "Your architecture, construction and interiorism informer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <UIProvider>
          <main className="  max-w-screen bg-gray-100">
            <MainNav />
            <div className="flex flex-col px-24" >
              <Topbanner />
              <div className="flex flex-row min-h-screen"  >
                <div>
                  {children}
                </div>
                <div className="w-full">
                  <RightCol />
                </div>
              </div>
            </div>
            <FooterSection />
          </main>
        </UIProvider>
      </body>
    </html>
  );
}
