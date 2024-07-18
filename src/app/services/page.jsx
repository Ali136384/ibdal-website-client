"use client";
import OurServices from "@/components/OurServices";
import React, { useState } from "react";

function page() {
  const [isopen, setIsOpen] = useState(true);
  return (
    <>
      <div className="service-container w-full h-screen">
        <img
          className="-z-10 absolute -top-[450px] -left-[250px]"
          src="/Oval.png"
          alt=""
        />
        <div className="content flex gap-6 ">
          <div className="left-serv w-[50%] p-36">
            <div className="for-lab flex flex-col gap-4">
              <p className="text-4xl font-bold">
                تغيير زيوت سيارات بجودة ومهنية
              </p>
              <p className="text-4xl font-bold">
                عالية، مع توفير مجموعة متنوعة من{" "}
              </p>
              <p className="text-4xl font-bold">الزيوت الفائقة الجودة</p>
            </div>
            <div className="show-mobile-serv hidden  flex-col gap-4">
              <p className="text-4xl font-bold">
                تغيير زيوت سيارات بجودة ومهنية عالية، مع توفير مجموعة متنوعة من{" "}
                الزيوت الفائقة الجودة
              </p>
            </div>
            <div className="buttons-container flex gap-5 mt-20">
              <div className="bg-primary h-[53px] gap-2 w-[180px] flex justify-center items-center rounded-xl">
                <p className="text-white font-bold text-xl">جميع المنتجات</p>
                <span>icon</span>
              </div>
              <div className="bg-white border-[1px] gap-2 border-black h-[53px] w-[180px] flex justify-center items-center rounded-xl">
                <p> تواصل معنا</p>
                <span>icon</span>
              </div>
            </div>
          </div>
          <div className="right-serv w-[50%] flex gap-10 mt-10">
            <div>
              <img src="/Bitmap.png" alt="" />
              <img
                className="mt-6 rounded-tl-2xl rounded-tr-xl rounded-bl-[80px] rounded-br-[30px]"
                src="/oilServ.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="mt-6 rounded-tl-2xl rounded-tr-xl rounded-bl-[80px] rounded-br-[30px]"
                src="/oilServ2.png"
                alt=""
              />
              <img className="mt-3" src="/Bitmap.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <OurServices />
      <div
        style={{
          backgroundImage: "url('/bg3.png')",
          backgroundRepeat: "no-repeat",
        }}
        className="service-goodness-container mt-[150px] ml-[200px] min-h-[500px] rounded-tl-[45px] rounded-bl-[145px] bg-cover flex mb-20"
      >
        <div className="left-service flex justify-center items-center w-[50%] h-[300px] flex-col pt-20">
          <p className=" font-bold text-5xl ">جودة خدماتنا </p>
          <p className=" font-bold text-5xl mt-5">وخبرة متميزة</p>
          <p className="w-[55%] serv-text text-end pt-10 font-bold opacity-80">
            نقدم أفضل أنواع الزيوت لمحركات سياراتك، مع التركيز على الجودة
            والأداء العالي. تعتمد خدماتنا على خبرة عميقة في صيانة المركبات لضمان
            سلامة وأداء محسن لمحرك سيارتك
          </p>
        </div>
        <div className="right relative flex gap-8">
          <div className="images-top">
            <img
              className="Bitmap mt-3 absolute -top-10"
              src="/Bitmap.png"
              alt=""
            />
            <img
              className="mb-5 mt-24 rounded-3xl oil-double"
              src="/oilDouble.png"
              alt=""
            />
          </div>
          <div className="bottom-images">
            <img
              className="oilTek rounded-tr-[90px] rounded-tl-[20px] absolute -top-10 rounded-b-3xl"
              src="/oilTek.png"
              alt=""
            />
            <img
              className="absolute stemp -bottom-20"
              src="/stamp2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="FAQ bg-[#F4F6FA] mt-[200px] mx-[210px] rounded-xl min-h-[500px] relative">
        <div className="header">
          <div className="faq-herader flex items-center pt-20 flex-col ">
            <p className="text-center -16 px-4 rounded-full font-bold text-white bg-primary w-fit">
              FAQ
            </p>
            <p className="font-bold mt-10 text-4xl">اسئله العملاء</p>
          </div>
        </div>
        <div className="content mt-20 mx-28 pb-10">
          <div className="qusetion-card pb-5 border-b-2 ">
            <div className="q-content flex justify-between ">
              <span onClick={() => setIsOpen((prev) => !prev)}>icon</span>
              <p>ما هي أنواع الزيوت التي توفرها شركتكم؟</p>
            </div>
            {isopen ? (
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                soluta possimus qui quas odit repellendus deserunt. Rem vel
                aliquid ad non inventore, odio perspiciatis vero, dolor
                doloribus et quam! Repudiandae.
              </p>
            ) : null}
          </div>{" "}
          <div className="qusetion-card pb-5 border-b-2 ">
            <div className="q-content flex justify-between mt-6">
              <span onClick={() => setIsOpen((prev) => !prev)}>icon</span>
              <p>ما هي أنواع الزيوت التي توفرها شركتكم؟</p>
            </div>
            {isopen ? (
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                soluta possimus qui quas odit repellendus deserunt. Rem vel
                aliquid ad non inventore, odio perspiciatis vero, dolor
                doloribus et quam! Repudiandae.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
