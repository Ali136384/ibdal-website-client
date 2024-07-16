import React from "react";

function WhyUs() {
  return (
    <div className="h-[800px]  w-full mt-20">
      <div className="header-whyus flex justify-center ">
        <p className="h-[42px] text-[#FEA501] w-[117px] bg-[#FFF3DE] rounded-[8px]  flex justify-center items-center">
          لماذا نحن
        </p>
      </div>
      <div className="flex gap-28">
        <div className="left-whuus w-[35%] ">
          <div className="relative">
            <img className="h-[800px]" src="/vector2.svg" alt="" />
            <img className="absolute top-[200px]" src="/audi1.png" alt="" />
            <img className="absolute top-[500px]" src="/can.png" alt="" />
          </div>
        </div>
        <div className="right-whuus w-[65%] pt-28 font-bold">
          <p className="text-4xl">
            نحن نعطي الأولوية للجودة والموثوقية ورضا العملاء.
          </p>
          <div className="content mt-16 flex flex-col gap-24">
            <div className="content-slice flex gap-10 items-center rounded-xl">
              <div className="flex justify-center items-center bg-[#FFF3DE] h-[64px] w-[64px]  rounded-xl">
                <p>icon</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold ">أفضل الأسعار مضمونة</p>
                <p>العثور على سعر أقل؟ سنرد لك أموالك بنسبة 100% من الفرق.</p>
              </div>
            </div>
            <div className="content-slice flex gap-10 items-center ">
              <div className="flex justify-center items-center bg-[#FFF3DE] h-[64px] w-[64px] rounded-xl">
                <p>icon</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold ">أفضل الأسعار مضمونة</p>
                <p className=" font-bold opacity-70 text-xl">
                  نحن نقدم مجموعة واسعة من زيوت السيارات وقطع الغيار عالية
                  الجودة.
                </p>
              </div>
            </div>
            <div className="content-slice flex gap-10 items-center ">
              <div className="flex justify-center items-center bg-[#FFF3DE] h-[64px] w-[64px]  rounded-xl">
                <p>icon</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold ">أفضل الأسعار مضمونة</p>
                <p className=" font-bold opacity-70 text-xl">
                  نحن نعطي الأولوية لرضاك عن كل عملية شراء وتفاعل
                </p>
              </div>
            </div>
            <div className="content-slice flex gap-10 items-center">
              <div className="flex justify-center items-center bg-[#FFF3DE] h-[64px] w-[64px]  rounded-xl">
                <p>icon</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold ">أفضل الأسعار مضمونة</p>
                <p className=" font-bold opacity-70 text-xl">
                  استكشف مجموعتنا الواسعة من زيوت السيارات المتميزة المصممة
                  لتحقيق الأداء الأمثل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
