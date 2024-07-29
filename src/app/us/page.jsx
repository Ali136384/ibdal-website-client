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
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="bg-white border-[1px] gap-2 border-black h-[53px] w-[180px] flex justify-center items-center rounded-xl">
              <p> تواصل معنا</p>
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
                    <span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0718 1.37432C10.3711 0.453007 11.6745 0.453006 11.9739 1.37432L13.8616 7.18417C13.9955 7.59619 14.3794 7.87515 14.8127 7.87515H20.9215C21.8902 7.87515 22.293 9.11477 21.5093 9.68417L16.5671 13.2749C16.2167 13.5295 16.07 13.9809 16.2039 14.3929L18.0916 20.2027C18.391 21.1241 17.3365 21.8902 16.5528 21.3208L11.6106 17.7301C11.2601 17.4754 10.7855 17.4754 10.435 17.7301L5.49289 21.3208C4.70917 21.8902 3.65469 21.1241 3.95404 20.2027L5.84178 14.3929C5.97565 13.9809 5.829 13.5295 5.47851 13.2749L0.536355 9.68417C-0.247359 9.11477 0.155416 7.87515 1.12414 7.87515H7.23298C7.6662 7.87515 8.05016 7.59619 8.18404 7.18417L10.0718 1.37432Z"
                          fill="#FFCC4A"
                        />
                      </svg>
                    </span>
                    <span className="font-bold">400+</span>
                  </div>
                  <p className="font-bold">خدمات الأعمال</p>
                </div>
                <div className="card w-[50%] bg-gray-100 h-[74px] rounded-xl flex flex-col justify-center items-center">
                  <div className="flex gap-2">
                    <span>
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5698 0.570312C9.35643 0.570313 7.19274 1.22666 5.35236 2.45636C3.51198 3.68607 2.07758 5.43389 1.23054 7.47881C0.383511 9.52373 0.161889 11.7739 0.593702 13.9448C1.02552 16.1156 2.09137 18.1097 3.65649 19.6748C5.2216 21.24 7.21567 22.3058 9.38655 22.7376C11.5574 23.1694 13.8076 22.9478 15.8525 22.1008C17.8974 21.2537 19.6453 19.8193 20.875 17.979C22.1047 16.1386 22.761 13.9749 22.761 11.7615C22.7553 8.79515 21.5744 5.95193 19.4769 3.85441C17.3794 1.75689 14.5362 0.576001 11.5698 0.570312ZM15.4437 8.31805C15.6991 8.31805 15.9488 8.39378 16.1611 8.53567C16.3735 8.67756 16.539 8.87923 16.6367 9.11518C16.7344 9.35113 16.76 9.61077 16.7102 9.86125C16.6604 10.1117 16.5374 10.3418 16.3568 10.5224C16.1762 10.703 15.9461 10.826 15.6956 10.8758C15.4451 10.9256 15.1855 10.9001 14.9496 10.8023C14.7136 10.7046 14.5119 10.5391 14.37 10.3267C14.2281 10.1144 14.1524 9.86473 14.1524 9.60934C14.1524 9.26686 14.2885 8.93842 14.5306 8.69626C14.7728 8.45409 15.1012 8.31805 15.4437 8.31805ZM7.69597 8.31805C7.95136 8.31805 8.20102 8.39378 8.41337 8.53567C8.62572 8.67756 8.79123 8.87923 8.88897 9.11518C8.9867 9.35113 9.01227 9.61077 8.96245 9.86125C8.91262 10.1117 8.78964 10.3418 8.60905 10.5224C8.42846 10.703 8.19838 10.826 7.94789 10.8758C7.6974 10.9256 7.43777 10.9001 7.20182 10.8023C6.96586 10.7046 6.76419 10.5391 6.6223 10.3267C6.48041 10.1144 6.40468 9.86473 6.40468 9.60934C6.40468 9.26686 6.54073 8.93842 6.78289 8.69626C7.02506 8.45409 7.3535 8.31805 7.69597 8.31805ZM16.7888 14.7745C16.2599 15.6907 15.4992 16.4515 14.5831 16.9805C13.667 17.5095 12.6277 17.788 11.5698 17.788C10.512 17.788 9.47272 17.5095 8.55659 16.9805C7.64046 16.4515 6.87973 15.6907 6.35088 14.7745C6.2835 14.6767 6.23707 14.5661 6.21451 14.4496C6.19194 14.333 6.19372 14.2131 6.21974 14.0973C6.24575 13.9814 6.29545 13.8722 6.36569 13.7765C6.43594 13.6808 6.52522 13.6007 6.62792 13.5412C6.73062 13.4816 6.84453 13.444 6.96248 13.4306C7.08044 13.4172 7.19989 13.4283 7.31333 13.4633C7.42677 13.4983 7.53175 13.5563 7.62168 13.6338C7.7116 13.7113 7.78452 13.8066 7.83586 13.9136C8.21498 14.5682 8.75952 15.1116 9.41488 15.4894C10.0702 15.8672 10.8134 16.066 11.5698 16.066C12.3263 16.066 13.0694 15.8672 13.7248 15.4894C14.3802 15.1116 14.9247 14.5682 15.3038 13.9136C15.4268 13.7352 15.6125 13.6098 15.8239 13.5623C16.0353 13.5148 16.2569 13.5488 16.4444 13.6574C16.6318 13.7661 16.7714 13.9415 16.8352 14.1485C16.8991 14.3556 16.8825 14.5791 16.7888 14.7745Z"
                          fill="#007AFF"
                          fill-opacity="0.15"
                        />
                      </svg>
                    </span>
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
