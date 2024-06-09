'use client';


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/app/components/Header/index';
import { Background } from '@/app/components/Background/index';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>

    </html>
  );
}
