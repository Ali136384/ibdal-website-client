import React from "react";

function Page() {
  return (
    <>
      {/* <div
        style={{
          backgroundImage: 'url("/contact_2.jpg")',
        }}
        className="hero-contact w-full h-screen bg-no-repeat bg-cover relative"
      >
        <div
          style={{ backgroundColor: "rgba(255, 255,255, 0.7)" }}
          className="box h-44 top-24 left-4 md:top-36 md:left-20 lg:top-36 lg:left-52 w-[90%] md:w-[70%] lg:w-[40%] absolute rounded-3xl p-5 md:p-10"
        >
          <p className="bg-primary w-fit px-3 md:px-5 rounded-xl text-white font-bold">
            تواصل معنا
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold mt-4 md:mt-8">
            لا تتردد في الوصول إلينا
          </p>
        </div>
      </div> */}

      <div className="left-container mt-16 md:mt-28 px-4 md:px-8 lg:px-32 flex flex-col md:flex-row">
        <div className="left-lets-talk relative flex flex-col md:flex-row gap-8 md:gap-24">
          <img
            className="contactPeople rounded-3xl w-full md:w-[55%]"
            src="/contactPeople.jpg"
            alt=""
          />
          <div className="absolute -z-40 -top-14 -left-14 hidden md:block">
            <img src="/pattern.png" alt="" />
            <div className="absolute rounded-2xl h-28 w-28 bg-primary top-10 left-10"></div>
          </div>
          <div className="right-lets-talk w-full flex flex-col items-start mt-8 md:mt-0">
            <p className="bg-primary w-fit px-3 md:px-5 rounded-xl text-white font-bold">
              دعنا نتحدث
            </p>
            <p className="header-txt-lets-talk text-xl md:text-3xl lg:text-4xl font-bold mt-4 md:mt-5">
              ابق على تواصل معنا
            </p>
            <p className="mt-4 md:mt-5 w-full text-lg md:text-xl font-bold opacity-65">
              هل لديك أسئلة أو بحاجة إلى المساعدة؟ فريقنا هنا للمساعدة. اتصل بنا
              لتبدأ رحلتك في موقعنا
            </p>

            <div className="contact-item mt-8 flex gap-4">
              <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
                <span className="text-white">icon</span>
              </div>
              <div className="info">
                <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
                <p>+905399127498</p>
              </div>
            </div>
            <div className="contact-item mt-8 flex gap-4">
              <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
                <span className="text-white">icon</span>
              </div>
              <div className="info">
                <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
                <p>+905399127498</p>
              </div>
            </div>
            <div className="contact-item mt-8 flex gap-4">
              <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
                <span className="text-white">icon</span>
              </div>
              <div className="info">
                <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
                <p>+905399127498</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-form mt-16 md:mt-28 px-4 md:px-8 lg:px-32 flex flex-col md:flex-row gap-8 md:gap-32">
        <div className="left relative gap-24 w-full md:w-[70%] lg:w-[60%]">
          <div className="flex flex-col md:flex-row w-full gap-8 md:gap-10">
            <div className="input-container2 flex flex-col w-full">
              <label htmlFor="">الاسم الكامل</label>
              <input
                className="border-2 border-[#eee] py-2 px-4 mt-1 rounded-full w-full outline-none"
                type="text"
                placeholder="فلان الفلاني"
              />
            </div>
            <div className="input-container2 flex flex-col w-full">
              <label htmlFor="">الاسم الكامل</label>
              <input
                className="border-2 border-[#eee] py-2 px-4 mt-1 rounded-full w-full outline-none"
                type="text"
                placeholder="فلان الفلاني"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-8 md:gap-10 mt-8 md:mt-10">
            <div className="input-container2 flex flex-col w-full">
              <label htmlFor="">الاسم الكامل</label>
              <input
                className="border-2 border-[#eee] py-2 px-4 mt-1 rounded-full w-full outline-none"
                type="text"
                placeholder="فلان الفلاني"
              />
            </div>
            <div className="input-container2 flex flex-col w-full">
              <label htmlFor="">الاسم الكامل</label>
              <input
                className="border-2 border-[#eee] py-2 px-4 mt-1 rounded-full w-full outline-none"
                type="text"
                placeholder="فلان الفلاني"
              />
            </div>
          </div>
          <textarea
            className="resize-none px-3 py-3 w-full border-[#eee] border-2 mt-10 h-36 md:h-40 rounded-3xl outline-none"
            placeholder="اكتب رسالتك ... "
            dir="rtl"
          ></textarea>
          <button className="bg-black mt-5 px-8 md:px-10 py-3 rounded-3xl text-white text-lg md:text-xl font-bold">
            ارسل
          </button>
        </div>
        <div className="right-easialy flex flex-col w-full md:w-[30%] lg:w-[40%]">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold mt-5">
            تواصل معنا بسهوله
          </p>
          <p className="mt-4 md:mt-5 text-lg md:text-xl font-bold opacity-65">
            تواصل معنا اتصل بنا الآن لمناقشة احتياجاتك!
          </p>

          <div className="contact-item mt-8 flex gap-4">
            <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <span className="text-white">icon</span>
            </div>
            <div className="info">
              <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
              <p>+905399127498</p>
            </div>
          </div>
          <div className="contact-item mt-8 flex gap-4">
            <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <span className="text-white">icon</span>
            </div>
            <div className="info">
              <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
              <p>+905399127498</p>
            </div>
          </div>
          <div className="contact-item mt-8 flex gap-4">
            <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <span className="text-white">icon</span>
            </div>
            <div className="info">
              <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
              <p>+905399127498</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
