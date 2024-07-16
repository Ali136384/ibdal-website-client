import React from "react";

function OurProducts() {
  const content = [3, 3, 3, 3, 3, 3, 3, 3, 3];
  return (
    <div className="mt-[190px] px-20">
      <div className="ourProductsHeader flex justify-between">
        <div className="flex flex-row gap-3">
          <span>Icon</span>
          <p className="text-md font-bold">شاهد الجميع</p>
        </div>
        <div className="text-5xl font-bold">منتجاتنا</div>
      </div>
      <div className="cards-our-products mt-10">
        {content.map((ele, index) => {
          return (
            <React.Fragment key={index}>
              <div className="card-our-products bg-[#FAFAFA] h-[425px] rounded-xl">
                <div className="flex justify-center">
                  <img src="/product.png" alt="" />
                </div>
                <div className="middle-content mt-10 flex justify-between px-5">
                  <p className="font-bold text-xl">زيوت سيارات الركاب</p>
                  <p className="text-[#FEA501]">$25</p>
                </div>
                <div className="w-full flex justify-center">
                  <div className="h-[50px] mt-10 bg-primary w-[90%] flex justify-center rounded-xl items-center">
                    <p className="text-white font-bold text-lg">التفاصيل</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default OurProducts;
