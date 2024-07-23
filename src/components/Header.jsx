"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeItem, setActiveItem] = useState(1);

  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    // Get active item from sessionStorage on component mount
    const active = sessionStorage.getItem("active");
    if (active) {
      setActiveItem(parseInt(active));
    }
  }, []);

  const headerItems = [
    {
      text: "الصفحة الرئيسية",
      id: 1,
      to: "/",
    },
    {
      text: "خدماتنا",
      id: 2,
      to: "/services",
    },
    {
      text: "منتجاتنا",
      id: 3,
      to: "/products",
    },
    {
      text: "فروعنا",
      id: 4,
      to: "/branchs",
    },
    {
      text: "من نحن",
      id: 5,
      to: "/us",
    },
    {
      text: "تواصل معنا",
      id: 6,
      to: "/contact",
    },
  ];

  const handleItemClick = (itemId) => {
    sessionStorage.setItem("active", itemId.toString());
    setActiveItem(itemId);
  };

  return (
    <div className="relative">
      <div className="header-lap mx-10 flex flex-row justify-between items-center z-[100] bg-transparent">
        <div>
          <img className="h-[94px] w-[154px] z-10" src="/logo.png" alt="logo" />
        </div>
        <div className="flex flex-row-reverse gap-4 z-50">
          {headerItems.map((item) => (
            <Link href={`${item.to}`} key={item.id}>
              <p
                className={`font-bold text-xl ${
                  activeItem === item.id ? "text-[#FEA501]" : "text-black"
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="header-mobile relative hidden py-4 px-6  w-full bg-red-50 items-center justify-between ">
        <img className="h-[46px] w-[60px] z-10" src="/logo.png" alt="logo" />
        <div
          onClick={() => setBurgerOpen(!burgerOpen)}
          className="burger cursor-pointer"
        >
          burger
        </div>
      </div>
      <div
        className={`burger-content hidden absolute bg-red-600 w-full duration-500 flex-col ${
          burgerOpen ? "h-[100vh] overflow-y-auto" : "h-[0px] overflow-hidden"
        } z-50`}
      >
        <p>1</p>
      </div>
    </div>
  );
};

export default Header;
