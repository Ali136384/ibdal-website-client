"use client";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.style.zoom = "90%";
  }, []);

  return (
    <html lang="en">
      <head>
        <title>ابو الزيت</title>
        <meta name="description" content="Generated by Ali haseni" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <div className="my-4 overflow-hidden ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
