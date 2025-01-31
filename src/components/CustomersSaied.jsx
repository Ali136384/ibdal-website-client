"use client";
import React, { useRef } from "react";

function CustomersSaied() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -440, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 440, behavior: "smooth" });
    }
  };

  return (
    <div className="customer-said-contianer mt-[100px] mx-[120px]">
      <div
        className="cards-custo flex gap-2 overflow-x-auto hide-scrollbar"
        ref={containerRef}
      >
        {data.map((ele, ind) => {
          return (
            <div
              key={ind}
              className="card-custo min-h-[260px] h-auto min-w-[360px] pb-10 bg-[#F2F2F2] mx-4 rounded-xl "
            >
              <div className="content- p-6 flex  gap-3 items-center">
                <div className="img-container">
                  <img className="rounded-full" src="/person.png" alt="" />
                </div>
                <div>
                  <p className="font-bold text-xl">احمد عدنان</p>
                  <p className="h-[26px] w-[60px] bg-primary text-center rounded-full text-white font-bold mt-2">
                    مصمم
                  </p>
                </div>
              </div>
              <div className="bottom-content bg-white h-auto mx-6 rounded-xl p-4 relative">
                <div>
                  <img
                    className="h-12 absolute right-0 -top-6"
                    src="/ellibse.png"
                    alt=""
                  />
                </div>
                <p>
                  libero iusto po ssimus repel lend us consectetur ip adipi scic
                  tetur a dipisi ing elit. sum Lorem ipsum dolor sit ad ipi
                  scict etur eli sum minim a nostrum?
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center mb-4 mt-20">
        <div className="h-[60px] w-[130px] bg-[#F3F3F3] rounded-[50px] flex justify-center items-center gap-4 z-10 relative">
          <div
            onClick={scrollLeft}
            className="absolute h-full w-full z-[999] cursor-pointer"
          ></div>
          <div className="bg-black w-[46px] h-[43px] rounded-full flex justify-center items-center">
            <p className="text-white">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1179 6.91821L1.04993 6.91821"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.396 12.2642L1.05 6.91817L6.396 1.57217"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
          <span className="font-bold text-lg">السابق</span>
        </div>

        <div className="h-[60px] w-[130px] bg-[#F3F3F3] rounded-[50px] flex justify-center items-center gap-4 z-10 relative">
          <div
            onClick={scrollRight}
            className="absolute h-full w-full z-[999] cursor-pointer"
          ></div>
          <div className="bg-primary w-[46px] h-[43px] rounded-full flex justify-center items-center">
            <p>
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02881 6.85352H15.1177M15.1177 6.85352L9.35407 1.50757M15.1177 6.85352L9.35407 12.1996"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
          <span className="font-bold text-lg">التالي</span>
        </div>
      </div>
    </div>
  );
}

export default CustomersSaied;
