import React from "react";

function Accomplishments() {
  return (
    <div className=" content-accomplishments-container  mt-32 bg-[#FFF3DE] h-[300px] ">
      <div className="content-accomplishments flex justify-center items-center h-full">
        <div className="card flex px-20 border-r-2 border-r-gray-400 border-dotted gap-3 items-center">
          <div className="icon">
            <p>icon</p>
          </div>
          <div className="content flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">1,542+</p>
            <p className="opacity-70 font-bold">فريق متخصص </p>
          </div>
        </div>
        <div className="card flex px-20 border-r-2 border-r-gray-400 border-dotted gap-3 items-center">
          <div className="icon">
            <p>icon</p>
          </div>
          <div className="content flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">1,542+</p>
            <p className="opacity-70 font-bold">فريق متخصص </p>
          </div>
        </div>
        <div className="card flex px-20 gap-3 items-center">
          <div className="icon">
            <p>icon</p>
          </div>
          <div className="content flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">1,542+</p>
            <p className="opacity-70 font-bold">فريق متخصص </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;
