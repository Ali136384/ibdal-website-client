"use client";
import React, { useEffect } from "react";
import axios from "axios";
function Hero() {
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://server-beta-two-82.vercel.app/gtabout"
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex overflow-hidden ">
      <img
        className="img-hero-first absolute -bottom-[1%] -right-14 overflow-hidden"
        src="/bgFrameHome.png"
        alt=""
      />
      <div className="content-container-hero w-1/2 h-[60vh] flex flex-row mt-16 left-side-home ">
        <div className="hero-text w-full h-full flex flex-col justify-center items-center">
          <p className="text-5xl font-bold">تحسين أداء محرك سيارتك بسهولة</p>
          <p className="text-5xl font-bold mt-8">
            مع{" "}
            <span
              style={{
                backgroundImage: "url('/vector.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
              className="text-primary py-4"
            >
              زيوتنا{" "}
            </span>
            فائقة الجودة
          </p>
          <p className="mt-10">
            "ابحث واختر وقم بتحسين أداء سيارتك بسهولة باستخدام زيوتنا الفائقة
            الجودة"
          </p>
          <div className="mt-10 flex gap-5">
            <button className="w-[180px] h-[53px] bg-[#FEA501] rounded-xl text-white flex justify-center items-center gap-2">
              Contact Us{" "}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2808 0.379883H5.72525C5.51029 0.379883 5.33635 0.553826 5.33635 0.768784C5.33635 0.983742 5.51029 1.15768 5.72525 1.15768H13.342L0.783619 13.7161C0.631697 13.868 0.631697 14.1141 0.783619 14.266C0.859562 14.3419 0.959093 14.3799 1.05859 14.3799C1.15808 14.3799 1.25758 14.3419 1.33356 14.266L13.8919 1.70758V9.32435C13.8919 9.53931 14.0658 9.71325 14.2808 9.71325C14.4958 9.71325 14.6697 9.53931 14.6697 9.32435V0.768784C14.6697 0.553826 14.4957 0.379883 14.2808 0.379883Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="w-[155px] h-[53px] border-black border-2 rounded-xl flex justify-center items-center gap-2">
              Contact Us{" "}
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2808 0.379883H5.72525C5.51029 0.379883 5.33635 0.553826 5.33635 0.768784C5.33635 0.983742 5.51029 1.15768 5.72525 1.15768H13.342L0.783619 13.7161C0.631697 13.868 0.631697 14.1141 0.783619 14.266C0.859562 14.3419 0.959093 14.3799 1.05859 14.3799C1.15808 14.3799 1.25758 14.3419 1.33356 14.266L13.8919 1.70758V9.32435C13.8919 9.53931 14.0658 9.71325 14.2808 9.71325C14.4958 9.71325 14.6697 9.53931 14.6697 9.32435V0.768784C14.6697 0.553826 14.4957 0.379883 14.2808 0.379883Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="images-container z-50 absolute right-0 right-sizde-home">
          <img
            className="absolute bottom-0 right-0"
            src="/oilLeftHome.png"
            alt=""
          />
          <img className="absolute " src="/oilLeftHome.png" alt="" />
          <img className="right-0 relative" src="/carHomePage.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
