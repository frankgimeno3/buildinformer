import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import MainNav from "./components/navs/MainNav";
import FooterSection from "./components/navs/FooterSection";
import { UIProvider } from "./components/context/UIContext";
import Topbanner from "./components/news/TopBanner";
import RightCol from "./components/news/RightCol";

// Configuración de la fuente Oswald
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['200', '300', '400', '500', '600', '700']
});

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
    <html lang="en" className={`${oswald.className}`}>
      <body>
        <UIProvider>
          <main className="max-w-screen bg-gray-100">
            <MainNav />
            <div className="flex flex-col px-24">
              <Topbanner />
              <div className="flex flex-row min-h-screen ">
    <div className='flex flex-col min-h-screen flex-3 bg-white mt-12'>
                  {children}
                </div>
                <div className='min-h-screen border flex-1 hidden md:block p-5 border-l-gray-50 pt-12 ' >
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