import React from "react";

function page() {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/contact_2.jpg")',
        }}
        className="hero-conteact w-full h-screen bg-no-repeat bg-cover relative"
      >
        <div
          style={{ backgroundColor: "rgba(255, 255,255, 0.7)" }}
          className="box h-44 top-[150px] left-[200px] w-[500px] absolute rounded-3xl"
        >
          <p className="bg-primary w-fit ml-10 mt-10 px-5 rounded-xl text-white font-bold">
            تواصل معنا
          </p>
          <p className=" text-4xl font-bold mt-8 ml-10">
            لا تتردد في الوصول إلينا
          </p>
        </div>
      </div>

      <div className="container mt-28 ml-32 flex  ">
        <div className="left relative flex gap-24 ">
          <img
            className="rounded-3xl w-[55%]"
            src="/contactPeople.jpg"
            alt=""
          />
          <div className="absolute -z-40 -top-14 -left-14">
            <img src="/pattern.png" alt="" />
            <div className=" absolute rounded-2xl h-28 w-28 bg-primary top-10 left-10"></div>
          </div>
          <div className="right w-full flex flex-col items-start">
            <p className="bg-primary w-fit  px-5 rounded-xl text-white font-bold">
              دعنا نتحدث
            </p>
            <p className=" text-4xl font-bold mt-5">ابق على تواصل معنا</p>
            <p className="mt-5 w-[80%] text-xl font-bold opacity-65">
              هل لديك أسئلة أو بحاجة إلى المساعدة؟ فريقنا هنا للمساعدة. اتصل بنا
              لتبدأ رحلتك في موقعنا
            </p>

            <div className="contact-item mt-8 flex gap-4">
              <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
                <span className="text-white">icon</span>
              </div>
              <div className="info">
                <p className="font-bold text-xl">هل لديك أي سؤال؟</p>
                <p>+905399127498</p>
              </div>
            </div>
            <div className="contact-item mt-8 flex gap-4">
              <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
                <span className="text-white">icon</span>
              </div>
              <div className="info">
                <p className="font-bold text-xl">هل لديك أي سؤال؟</p>
                <p>+905399127498</p>
              </div>
            </div>
            <div className="contact-item mt-8 flex gap-4">
              <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
                <span className="text-white">icon</span>
              </div>
              <div className="info">
                <p className="font-bold text-xl">هل لديك أي سؤال؟</p>
                <p>+905399127498</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-28 ml-32 flex w-[100vw] gap-32">
        <div className="left relative  gap-24 w-[90%]">
          <div className=" flex w-full gap-10">
            <div className="input-container2 flex flex-col w-full">
              <label htmlFor="">الاسم الكامل</label>
              <input
                className="border-2 border-[#eee] py-4 px-4 mt-1 rounded-full w-full  outline-none"
                type="text"
                placeholder="فلان الفلاني"
              />
            </div>
            <div className="input-container2 flex flex-col w-full">
              <label htmlFor="">الاسم الكامل</label>
              <input
                className="border-2 border-[#eee] py-4 px-4 mt-1 rounded-full w-full outline-none"
                type="text"
                placeholder="فلان الفلاني"
              />
            </div>
          </div>
          <div className=" flex w-full gap-10 mt-10">
            <div className="input-container2 flex flex-col w-full">
              <label htmlFor="">الاسم الكامل</label>
              <input
                className="border-2 border-[#eee] py-4 px-4 mt-1 rounded-full w-full outline-none"
                type="text"
                placeholder="فلان الفلاني"
              />
            </div>
            <div className="input-container2 flex flex-col w-full">
              <label htmlFor="">الاسم الكامل</label>
              <input
                className="border-2 border-[#eee] py-4 px-4 mt-1 rounded-full w-full outline-none"
                type="text"
                placeholder="فلان الفلاني"
              />
            </div>
          </div>
          <textarea
            className=" resize-none px-3 py-3 w-full border-[#eee] border-2 mt-10 h-[140px] rounded-3xl  outline-none"
            placeholder="اكتب رسالتك ... "
            dir="rtl"
          ></textarea>
          <button className="bg-black mt-5 px-10 py-3 rounded-3xl text-white text-xl font-bold">
            ارسل
          </button>
        </div>
        <div className="right flex flex-col ">
          <p className=" text-4xl font-bold mt-5">تواصل معنا بسهوله</p>
          <p className="mt-5 w-[100%] text-xl font-bold opacity-65">
            تواصل معنا . اتصل بنا الآن لمناقشة احتياجاتك!"
          </p>

          <div className="contact-item mt-8 flex gap-4">
            <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <span className="text-white">icon</span>
            </div>
            <div className="info">
              <p className="font-bold text-xl">هل لديك أي سؤال؟</p>
              <p>+905399127498</p>
            </div>
          </div>
          <div className="contact-item mt-8 flex gap-4">
            <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <span className="text-white">icon</span>
            </div>
            <div className="info">
              <p className="font-bold text-xl">هل لديك أي سؤال؟</p>
              <p>+905399127498</p>
            </div>
          </div>
          <div className="contact-item mt-8 flex gap-4">
            <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <span className="text-white">icon</span>
            </div>
            <div className="info">
              <p className="font-bold text-xl">هل لديك أي سؤال؟</p>
              <p>+905399127498</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
