import type { Metadata } from "next";
import "./globals.css";
import MainNav from "./components/navs/MainNav";
import FooterSection from "./components/navs/FooterSection";
import { UIProvider } from "./components/context/UIContext";


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
          <main className="min-h-screen max-w-screen bg-gray-100">
            <MainNav />
            {children}
            <FooterSection />
          </main>
        </UIProvider>
      </body>
    </html>
  );
}
