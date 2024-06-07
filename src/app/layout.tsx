import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from './AppWrappers';

import {cn} from "../lib/utils/utils"

import  {Header} from "../components/header";
import SideNavbar  from "../components/SideNavbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Vaika Store",
  description: "Shop Car by DevyForU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen w-full bg-white text-black flex"
      ,inter.className,
        {
          "debug-screens": process.env.NODE_ENV === "development"
         }
         )}
         >
         <App>{children}</App>
      </body>
    </html>
  );
}
