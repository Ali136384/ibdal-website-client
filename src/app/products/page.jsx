import React from "react";

function page() {
  const data = [
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    ,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    22,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
  ];
  return (
    <div className="  mx-20">
      <p className="text-right font-bold text-5xl mt-10">منتجاتنا</p>
      <div className="content mt-20 flex flex-wrap gap-8 justify-center">
        {data.map((ele, index) => {
          return (
            <React.Fragment key={index}>
              <div className="product-card w-[30%] bg-[#cbffc41a] shadow-xl rounded-xl min-h-[416px] gap-6 flex flex-col justify-center items-center">
                <img
                  className="h-[220px] rounded-xl"
                  src="/oilcan.avif"
                  alt=""
                />
                <div>
                  <p className=" text-center font-bold">زيت سيارات الركاب</p>
                  <p className=" text-sm font-bold">Route 5w40 SN- CF</p>
                </div>
                <div className="bg-white w-[70%] flex justify-between py-3 rounded-xl px-5 shadow-sm shadow-orange-200">
                  <p className=" self-center text-center w-full">$4.99</p>
                  <span className=" self-start">+</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default page;
