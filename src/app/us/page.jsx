import CustomersSaied from "@/components/CustomersSaied";
import React from "react";

function page() {
  return (
    <>
      <img className="show-mobile-image hidden" src="/us.png" alt="" />
      <div className="us-container absolute top-0 h-full w-full -z-10">
        <div className="us-content-container py-[200px] px-[100px]">
          <p className="text-4xl font-bold">
            الشركة الرائدة في عالم الزيوت السيارات
          </p>
          <p className="text-4xl font-bold mt-5">
            لتحقيق الأداء الفائق والثقة الدائمة
          </p>

          <div className="us-buttons flex gap-5 mt-20">
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
      </div>
      <div className="us-content-container-section-2 mt-[105vh] mx-[100px]">
        <div className="how-us-title-div flex justify-center bg-primary w-fit ml-[50%] transform translate-x-[-50%] px-3 py-1 rounded-full">
          <p className="text-white">من نحن</p>
        </div>
        <div className="content-us mt-20 flex justify-center gap-10">
          <div className="left-us w-[45%] relative h-[500px]">
            <img
              className="pattern absolute z-0 mt-[160px]"
              src="/pattern.png"
              alt=""
            />
            <img className="z-10 absolute left-28 oil" src="/oil.png" alt="" />
            <div className="quality bg-white h-[106px] w-[200px] z-[100] absolute bottom-11 left-9 shadow-xl rounded-2xl p-4">
              <div className="flex items-center mt-[15px]">
                <div className="w-[50px] h-[50px] relative">
                  <img src="/progres.png" alt="" />
                  <span className="absolute top-[20px] text-xs font-bold left-3">
                    100+
                  </span>
                </div>
                <p className="absolute right-14 top-11 font-bold">
                  oil quality
                </p>
              </div>
            </div>
          </div>
          <div className="right-us w-[40%] pl-[50px]">
            <div className=" flex flex-col gap-5">
              <div className="right-us-desk">
                <p className="text-4xl font-bold">واحدة من أسرع الطرق لنمو</p>
                <p className="text-4xl font-bold">
                  الأعمال التجارية هي من خلال{" "}
                </p>
                <p className="text-4xl font-bold">شركة زيت السيارات لدينا.</p>
              </div>
              <p className="onlyOnMobile hidden">
                واحدة من أسرع الطرق لنمو الأعمال التجارية هي من خلال شركة زيت
                السيارات لدينا
              </p>
            </div>
            <p className="explain-txt w-[50%] mt-10 font-bold text-gray-500">
              مهمتنا هي تقديم زيوت وقطع غيار سيارات من الدرجة الأولى تضمن طول
              عمر سيارتك وأدائها. نحن نسعى جاهدين لتقديم خدمة عملاء لا مثيل لها
              ومشورة الخبراء لتلبية جميع احتياجات السيارات الخاصة بك.
            </p>
            <div className="btm-cards mt-10 border-t-2 w-[50%] border-b-2 py-3">
              <div className="content flex gap-5">
                <div className="card w-[50%] bg-gray-100 h-[74px] rounded-xl flex flex-col justify-center items-center">
                  <div className="flex gap-2">
                    <span>icon</span>
                    <span className="font-bold">400+</span>
                  </div>
                  <p className="font-bold">خدمات الأعمال</p>
                </div>
                <div className="card w-[50%] bg-gray-100 h-[74px] rounded-xl flex flex-col justify-center items-center">
                  <div className="flex gap-2">
                    <span>icon</span>
                    <span className="font-bold">400+</span>
                  </div>
                  <p className="font-bold">خدمات الأعمال</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" s3-container mx-[100px] mt-[180px]">
        <div className="content-us2 mt-20 flex justify-center gap-10 min-h-[200px] ">
          <div className="left-us w-[35%]  relative h-[500px]">
            <img className="byImage h-[405px]" src="/buy.png" alt="" />
            <div className="absolute bg-primary h-[410px] w-[370px] -z-10 -left-2 top-[4px]"></div>
          </div>
          <div className="right-us w-[40%] pl-[50px]">
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-bold headers3">
                زيوت وقطع غيار سيارات عالية الجودة
              </p>
            </div>
            <p className="descs3 mt-10 font-bold text-gray-500">
              شريكك الموثوق لزيوت السيارات عالية الجودة واستبدال قطع الغيار. مع
              سنوات من الخبرة في صناعة السيارات، نحن ملتزمون بتقديم أفضل
              المنتجات والخدمات لعملائنا للحفاظ على أداء سياراتهم بسلاسة
            </p>
            <div className="rows-us mt-10 flex flex-col gap-10">
              <div className="row1 flex justify-between mx-10">
                <div className="flex gap-3">
                  <span>icon</span>
                  <p className="font-bold opacity-70">أسعار الزيوت المعقولة</p>
                </div>
                <div className="flex gap-3">
                  <span>icon</span>
                  <p className="font-bold opacity-70">أسعار الزيوت المعقولة</p>
                </div>
              </div>
              <div className="row2 flex justify-between mx-10">
                <div className="flex gap-3">
                  <span>icon</span>
                  <p className="font-bold opacity-70">أسعار الزيوت المعقولة</p>
                </div>
                <div className="flex gap-3">
                  <span>icon</span>
                  <p className="font-bold opacity-70">أسعار الزيوت المعقولة</p>
                </div>
              </div>
            </div>
            <div className="b-content mt-20 flex gap-12">
              <div className="btn-container w-fit pr-8 py-4 border-r-2 border-gray-200">
                <div className="bg-primary mobile-btn w-fit px-5 py-3  text-white font-bold">
                  <span>LEARN MORE</span>
                </div>
              </div>
              <div className="py-4 flex flex-col gap-1">
                <p>موثوق به من قبل أكثر من 900 عميل</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs">icon</span>
                  <span className="text-xs">4.9</span>
                  <span className=" opacity-65 text-xs">(2.5k Review)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url('/bgus.png')",
          backgroundRepeat: "no-repeat",
        }}
        className=" containers4 bg w-full bg-cover min-h-[450px] flex px-10 "
      >
        <div className="left p-28 relative w-[55%] ">
          <img
            className="absolute pattern w-[200px] h-[250px] left-5 bottom-8"
            src="/pattern.png"
            alt=""
          />
          <div className="heade_exp bg-white w-fit px-5 rounded-xl ">
            <p>خبرة</p>
          </div>
          <div className="second_txt text-3xl font-bold mt-7">
            أكثر من 25 عامًا من الخبرة
          </div>
          <div className="third_txt mt-5 opacity-75">
            أكثر من 3000 عميل مؤمن عليهم في جميع أنحاء العالم
          </div>
        </div>
        <div className="right flex relative w-full">
          <div className="relative ">
            <img src="/progressBar.png" alt="" />
            <p className="font-bold progress-value text-5xl absolute top-[145px] left-[95px]">
              95%
            </p>
            <p className="text-center ml-8 progress-text font-bold text-3xl mt-4">
              استمرارية
            </p>
          </div>
          <div className="relative">
            <img src="/progressBar.png" alt="" />
            <p className="font-bold progress-value text-5xl absolute top-[145px] left-[95px]">
              95%
            </p>
            <p className="text-center ml-8 progress-text font-bold text-3xl mt-4">
              تحسين
            </p>
          </div>
          <div className="relative ">
            <img src="/progressBar.png" alt="" />
            <p className="font-bold progress-value text-5xl absolute top-[145px] left-[95px]">
              95%
            </p>
            <p className="text-center progress-text ml-8 font-bold text-3xl mt-4">
              جودة
            </p>
          </div>
          <img
            className="absolute pattern w-[200px] h-[250px] -right-10 -top-5"
            src="/pattern.png"
            alt=""
          />
        </div>
      </div>
      <div className="pt-20">
        <CustomersSaied />
      </div>
    </>
  );
}

export default page;
