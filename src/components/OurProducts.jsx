import React from "react";

function OurProducts() {
  const data = [3, 3, 3, 3, 3, 3, 3, 3, 3];
  return (
    <div className="ourProductsContainer mt-[190px] px-20">
      <div className="ourProductsHeader flex justify-between">
        <div className="flex flex-row gap-3 items-center">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8H15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1L1 8L8 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-md font-bold">شاهد الجميع</p>
        </div>
        <div className="text-5xl font-bold muntacatna">منتجاتنا</div>
      </div>
      <div className="productsContainer mx-20">
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
                    <p className=" self-center text-center w-full font-bold">
                      $4.99
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
