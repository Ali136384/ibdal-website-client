import React from "react";
import { Icon } from "@iconify/react";
function WhyUs() {
  return (
    <div className="why-us mt-[150px] flex gap-10 justify-center items-center">
      <div className="left-why w-[25%]">
        <p className="why-us-title font-bold text-4xl">لماذا شركتنا؟</p>
        <p className="why-us-p mt-4 opacity-60 font-bold">
          ونحن ملتزمون بتزويد عملائنا استثنائية الخدمة، والأسعار التنافسية،
          ومجموعة واسعة من.
        </p>
        <button className="button-start h-[53px] w-[160px] bg-primary mt-4 rounded-xl">
          ابدا الان <span>icon</span>
        </button>
      </div>
      <div className="right-why  w-[55%] flex flex-wrap gap-6 ">
        <div className="card-why w-[48%] flex flex-col gap-2">
          <p>
            <Icon fontSize={40} icon="mdi-light:home" />
          </p>
          <p className="text-xl font-bold">عروض مميزه</p>
          <p>
            بأقل تكلفة مع عروضنا الحصرية على زيوت المحركات. لا تفوت فرصة توفير
            المال والتأكد من كفاءة محرك سيارتك. قم بزيارتنا اليوم!
          </p>
        </div>
        <div className="card-why w-[48%]  flex flex-col gap-2">
          <p>
            <Icon fontSize={40} icon="mdi-light:home" />
          </p>
          <p className="text-xl font-bold">عروض مميزه</p>
          <p>
            بأقل تكلفة مع عروضنا الحصرية على زيوت المحركات. لا تفوت فرصة توفير
            المال والتأكد من كفاءة محرك سيارتك. قم بزيارتنا اليوم!
          </p>
        </div>
        <div className="card-why w-[48%]  flex flex-col gap-2">
          <p>
            <Icon fontSize={40} icon="mdi-light:home" />
          </p>
          <p className="text-xl font-bold">عروض مميزه</p>
          <p>
            بأقل تكلفة مع عروضنا الحصرية على زيوت المحركات. لا تفوت فرصة توفير
            المال والتأكد من كفاءة محرك سيارتك. قم بزيارتنا اليوم!
          </p>
        </div>
        <div className="card-why w-[48%]  flex flex-col gap-2">
          <p>
            <Icon fontSize={40} icon="mdi-light:home" />
          </p>
          <p className="text-xl font-bold">عروض مميزه</p>
          <p>
            بأقل تكلفة مع عروضنا الحصرية على زيوت المحركات. لا تفوت فرصة توفير
            المال والتأكد من كفاءة محرك سيارتك. قم بزيارتنا اليوم!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
