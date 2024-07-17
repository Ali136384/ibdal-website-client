"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);

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
    <div className=" mx-10 flex flex-row justify-between items-center z-[100] bg-transparent">
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
  );
};

export default Header;
