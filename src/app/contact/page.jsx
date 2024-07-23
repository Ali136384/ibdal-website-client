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
                <span className="text-white">
                  <svg
                    width="50"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25.9648" r="25" fill="#181818" />
                    <path
                      d="M21.1453 26.0268C21.9521 27.6929 23.2993 29.0367 24.9674 29.8392C25.0905 29.8975 25.2266 29.9227 25.3624 29.9124C25.4981 29.9021 25.6288 29.8566 25.7417 29.7804L28.1918 28.1437C28.3001 28.0703 28.4251 28.0255 28.5554 28.0135C28.6856 28.0015 28.8168 28.0227 28.9366 28.0751L33.5233 30.045C33.68 30.1102 33.811 30.2252 33.896 30.3722C33.981 30.5192 34.0153 30.69 33.9937 30.8584C33.8483 31.9931 33.2945 33.0359 32.4358 33.7917C31.5772 34.5475 30.4726 34.9646 29.3287 34.9648C25.7937 34.9648 22.4035 33.5606 19.9039 31.061C17.4043 28.5614 16 25.1712 16 21.6362C16.0003 20.4923 16.4173 19.3876 17.1731 18.529C17.929 17.6704 18.9718 17.1165 20.1064 16.9712C20.2748 16.9495 20.4457 16.9838 20.5926 17.0689C20.7396 17.1539 20.8546 17.2848 20.9198 17.4416L22.8897 22.038C22.941 22.156 22.9624 22.2847 22.9521 22.4129C22.9419 22.541 22.9003 22.6647 22.8309 22.773L21.1943 25.2624C21.1214 25.375 21.0786 25.5044 21.07 25.6382C21.0615 25.772 21.0874 25.9058 21.1453 26.0268V26.0268Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="info">
                <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
                <p>+905399127498</p>
              </div>
            </div>
            <div className="contact-item mt-8 flex gap-4">
              <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
                <span className="text-white">
                  <svg
                    width="50"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25.9648" r="25" fill="#181818" />
                    <path
                      d="M16 18.9648H34V32.1871C34 32.3933 33.921 32.5912 33.7803 32.737C33.6397 32.8829 33.4489 32.9648 33.25 32.9648H16.75C16.5511 32.9648 16.3603 32.8829 16.2197 32.737C16.079 32.5912 16 32.3933 16 32.1871V18.9648Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34 18.9648L25 26.9648L16 18.9648"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="info">
                <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
                <p>+905399127498</p>
              </div>
            </div>
            <div className="contact-item mt-8 flex gap-4">
              <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
                <span className="text-white">
                  <svg
                    width="50"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25.5" r="25" fill="#181818" />
                    <path
                      d="M24.9986 26.7C26.7659 26.7 28.1986 25.2674 28.1986 23.5C28.1986 21.7327 26.7659 20.3 24.9986 20.3C23.2313 20.3 21.7986 21.7327 21.7986 23.5C21.7986 25.2674 23.2313 26.7 24.9986 26.7Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33 23.5C33 30.7 25 36.3 25 36.3C25 36.3 17 30.7 17 23.5C17 21.3783 17.8429 19.3434 19.3431 17.8431C20.8434 16.3429 22.8783 15.5 25 15.5C27.1217 15.5 29.1566 16.3429 30.6569 17.8431C32.1571 19.3434 33 21.3783 33 23.5V23.5Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
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
              <span className="text-white">
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="26.5379"
                    cy="26.1658"
                    r="26.1658"
                    fill="#FFECBB"
                  />
                  <path
                    d="M22.9845 25.1889C24.0222 27.332 25.7551 29.0605 27.9009 30.0928C28.0591 30.1677 28.2342 30.2001 28.4088 30.1869C28.5835 30.1736 28.7516 30.1151 28.8968 30.0171L32.0483 27.9119C32.1875 27.8174 32.3484 27.7598 32.516 27.7444C32.6835 27.729 32.8522 27.7562 33.0064 27.8236L38.9061 30.3575C39.1077 30.4414 39.2762 30.5893 39.3855 30.7783C39.4948 30.9674 39.539 31.1872 39.5112 31.4038C39.3242 32.8633 38.6118 34.2046 37.5073 35.1768C36.4029 36.149 34.982 36.6855 33.5106 36.6858C28.9636 36.6858 24.6029 34.8795 21.3877 31.6643C18.1725 28.4491 16.3662 24.0884 16.3662 19.5414C16.3665 18.07 16.903 16.6491 17.8752 15.5447C18.8474 14.4402 20.1887 13.7278 21.6482 13.5408C21.8648 13.513 22.0846 13.5572 22.2737 13.6665C22.4627 13.7758 22.6106 13.9443 22.6945 14.1459L25.2284 20.0582C25.2943 20.2099 25.3218 20.3755 25.3086 20.5404C25.2954 20.7053 25.2419 20.8644 25.1527 21.0037L23.0475 24.2057C22.9538 24.3505 22.8988 24.5169 22.8877 24.6891C22.8767 24.8612 22.91 25.0333 22.9845 25.1889V25.1889Z"
                    stroke="#DEAA27"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="info">
              <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
              <p>+905399127498</p>
            </div>
          </div>
          <div className="contact-item mt-8 flex gap-4">
            <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <span className="text-white">
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="26.5379"
                    cy="26.4975"
                    r="26.1658"
                    fill="#A4EDA4"
                  />
                  <path
                    d="M26.4243 37.9309C32.5477 37.9309 37.5117 32.9669 37.5117 26.8435C37.5117 20.7201 32.5477 15.7561 26.4243 15.7561C20.3009 15.7561 15.3369 20.7201 15.3369 26.8435C15.3369 32.9669 20.3009 37.9309 26.4243 37.9309Z"
                    stroke="#4EAF4E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.4248 20.3757V26.8434H32.8925"
                    stroke="#4EAF4E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="info">
              <p className="font-bold text-lg md:text-xl">هل لديك أي سؤال؟</p>
              <p>+905399127498</p>
            </div>
          </div>
          <div className="contact-item mt-8 flex gap-4">
            <div className="bg-black h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <span className="text-white">
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26.5379" cy="26.686" r="26.1658" fill="#EAEAEA" />
                  <path
                    d="M26.1222 27.6521C28.1611 27.6521 29.8139 25.9992 29.8139 23.9603C29.8139 21.9214 28.1611 20.2686 26.1222 20.2686C24.0833 20.2686 22.4304 21.9214 22.4304 23.9603C22.4304 25.9992 24.0833 27.6521 26.1222 27.6521Z"
                    stroke="#181818"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.3504 23.9603C35.3504 32.2668 26.121 38.7274 26.121 38.7274C26.121 38.7274 16.8916 32.2668 16.8916 23.9603C16.8916 21.5126 17.864 19.165 19.5948 17.4342C21.3257 15.7033 23.6732 14.731 26.121 14.731C28.5688 14.731 30.9163 15.7033 32.6471 17.4342C34.378 19.165 35.3504 21.5126 35.3504 23.9603V23.9603Z"
                    stroke="#181818"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
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
