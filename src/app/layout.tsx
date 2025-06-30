import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { UIProvider } from "./components/context/UIContext";
import InnerAppLayout from "./components/InnerAppLayout";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {

 
  return (
    <html lang="en" className={`${oswald.className}`}>
      <body>
        <UIProvider>
        <InnerAppLayout>{children}</InnerAppLayout>
        </UIProvider>
      </body>
    </html>
  );
}
