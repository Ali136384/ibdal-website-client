import React from "react";

function Hero() {
  return (
    <div className="flex  overflow-hidden ">
      <img
        className=" absolute -bottom-[1%] -right-14 overflow-hidden"
        src="/bgFrameHome.png"
        alt=""
      />
      <div className="w-1/2 h-[60vh] flex flex-row mt-16 left-side-home ">
        <div className=" w-full h-full flex flex-col justify-center items-center">
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
            <button className="w-[180px] h-[53px] bg-[#FEA501] rounded-xl text-white">
              Contact Us <span className="text-white">icon</span>
            </button>
            <button className="w-[155px] h-[53px] border-black border-2 rounded-xl">
              Contact Us <span>icon</span>
            </button>
          </div>
        </div>
        <div className="z-50 absolute right-0   right-sizde-home">
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
