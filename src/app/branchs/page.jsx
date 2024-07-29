import React from "react";

function page() {
  return (
    <div className=" py-4 px-20 flex justify-center gap-20">
      <div className="left-hero-branch w-[60%] flex  flex-col items-center mt-32">
        <div className="flex justify-center flex-col items-center">
          <div className=" flex flex-col gap-4 items-center">
            <p className=" text-5xl font-bold">فرع شركة ابو الزيت يقدم زيوت</p>
            <p className=" text-5xl font-bold">سيارات عالية الجودة وخدمات </p>
            <p className=" text-5xl font-bold">تغيير الزيت السريعة</p>
            <p className=" w-[63%] text-center mt-10 opacity-75 font-bold">
              فرع شركة الزيوت يوفر زيوت سيارات عالية الجودة مع خدمات تغيير الزيت
              السريعة. يضمن فريقنا الفني المحترف أفضل أداء لمحركات السيارات
            </p>
          </div>
          <div className="us-buttons flex gap-5 mt-20">
            <div className="bg-primary h-[53px] gap-2 w-[180px] flex justify-center items-center rounded-xl">
              <p className=" text-white font-bold">المنتجات</p>
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
            <div className="bg-white border-[1px] font-bold gap-2 border-black h-[53px] w-[180px] flex justify-center items-center rounded-xl">
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
      <div className="right-hero-branch  flex justify-end">
        <img
          className=" rounded-tl-[100px] rounded-tr-[20px] rounded-br-[50px] rounded-bl-[20px]"
          src="/branch.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default page;
