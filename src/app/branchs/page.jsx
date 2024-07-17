import React from "react";

function page() {
  return (
    <>
      <div className=" h-[100vh] bg-orange-50 flex">
        <div className="left w-[50%] flex flex-col">
          <div className="ml-[150px] mt-20 flex flex-col gap-10">
            <p className="text-5xl font-bold">زوروا فرعنا الجديد لتجربة أفضل</p>
            <p className="text-5xl font-bold">زيوت السيارات وضمان أداء </p>
            <p className="text-5xl font-bold"> ! متفوق لسيارتكم</p>
          </div>
          <div className="flex gap-5 mt-20 ml-[150px] ">
            <div className="bg-primary h-[53px] gap-2 w-[180px] flex justify-center items-center rounded-xl">
              <p className="text-white font-bold text-xl">جميع المنتجات</p>
              <span>icon</span>
            </div>
            <div className="bg-white border-[1px] gap-2 border-black h-[53px] w-[180px] flex justify-center items-center rounded-xl">
              <p> تواصل معنا</p>
              <span>icon</span>
            </div>
          </div>
          <div className="flex mt-20 mx-44 gap-4 flex-col">
            <div className="flex items-center gap-4">
              <p className="text-primary font-bold text-2xl">في فرعنا</p>
              <p className=" text-primary font-bold">
                ------------------------------------------{" "}
              </p>
            </div>
            <p className=" font-bold opacity-70 text-lg">
              زيوت سيارات ذات جودة عالية تضمن لك أداءً لا يضاهى
            </p>
          </div>
        </div>
        <div className="right w-[50%] relative right-0">
          <img className="right-0 absolute" src="/branchCar.png" alt="" />
        </div>
      </div>

      <div className="  flex mt-20 min-h-[500px]">
        <div className="left w-[50%] flex flex-col">
          <div className="ml-[150px] mt-20 flex flex-col gap-6">
            <p className="bg-primary px-5 py-1 w-fit font-bold text-white rounded-2xl">
              عن فرعنا
            </p>
            <p className="text-5xl font-bold">اختيارك الأمثل لزيوت السيارات </p>
            <p className="text-5xl font-bold"> ! المتطورة لصيانة مثالية </p>

            <p className=" mt-5 font-bold opacity-85">
              فرعنا الجديد لشركة زيوت السيارات، حيث نقدم لكم مجموعة متميزة من
              الزيوت عالية الجودة المصممة لتلبية احتياجات جميع أنواع المركبات.
              نسعى في فرعنا الجديد إلى توفير أفضل المنتجات والخدمات التي تضمن
              الحفاظ على أداء سيارتكم في أفضل حالاته، مع تقديم نصائح متخصصة
              وخدمات صيانة احترافية. زورونا اليوم واستمتعوا بتجربة فريدة تضمن
              لسيارتكم الأداء الأمثل والعمر الأطول
            </p>
          </div>
        </div>
        <div className="right w-[50%] relative ">
          <img className="absolute right-20 w-[70%]" src="/worker.png" alt="" />
        </div>
      </div>

      <p className="text-primary text-center mt-36 mb-10 text-2xl font-bold">
        لماذا تختار فرعنا
      </p>
      <p className="text-black text-center text-4xl font-bold">
        التميز في زيوت السيارات يضمن لك
      </p>
      <p className="text-black text-center  text-4xl font-bold mt-2 mb-10">
        ! رحلة آمنة وسلسة
      </p>

      <div className="flex mx-36 ">
        <div className="left w-[20%] ">
          <div className="card flex gap-4">
            <div className="icon">
              <span>icon</span>
            </div>
            <div className="content flex flex-col gap-3">
              <p className=" font-bold text-2xl">فريق عمل ذو خبرة عالية</p>
              <p>
                يضم فرعنا فريقًا من الفنيين والخبراء المؤهلين في مجال زيوت
                السيارات. يتمتع فريقنا بسنوات من الخبرة والمعرفة، مما يضمن تقديم
                أفضل الخدمات والنصائح لصيانة سيارتك.
              </p>
            </div>
          </div>
          <div className="card flex gap-4 mt-10">
            <div className="icon">
              <span>icon</span>
            </div>
            <div className="content flex flex-col gap-3">
              <p className=" font-bold text-2xl">فريق عمل ذو خبرة عالية</p>
              <p>
                يضم فرعنا فريقًا من الفنيين والخبراء المؤهلين في مجال زيوت
                السيارات. يتمتع فريقنا بسنوات من الخبرة والمعرفة، مما يضمن تقديم
                أفضل الخدمات والنصائح لصيانة سيارتك.
              </p>
            </div>
          </div>
        </div>
        <div className="middle w-[60%]">
          <img src="/jeep.png" alt="" />
        </div>
        <div className="right w-[20%]">
          <div className="card flex gap-4">
            <div className="icon">
              <span>icon</span>
            </div>
            <div className="content flex flex-col gap-3">
              <p className=" font-bold text-2xl">فريق عمل ذو خبرة عالية</p>
              <p>
                يضم فرعنا فريقًا من الفنيين والخبراء المؤهلين في مجال زيوت
                السيارات. يتمتع فريقنا بسنوات من الخبرة والمعرفة، مما يضمن تقديم
                أفضل الخدمات والنصائح لصيانة سيارتك.
              </p>
            </div>
          </div>{" "}
          <div className="card flex gap-4 mt-10">
            <div className="icon">
              <span>icon</span>
            </div>
            <div className="content flex flex-col gap-3">
              <p className=" font-bold text-2xl">فريق عمل ذو خبرة عالية</p>
              <p>
                يضم فرعنا فريقًا من الفنيين والخبراء المؤهلين في مجال زيوت
                السيارات. يتمتع فريقنا بسنوات من الخبرة والمعرفة، مما يضمن تقديم
                أفضل الخدمات والنصائح لصيانة سيارتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
