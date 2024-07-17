import React from "react";

function Footer() {
  return (
    <div className="mt-[100px] h-[375px] w-full bg-[#FFF8EB] ">
      <div className="content-footer flex flex-row justify-center pt-20 mx-[200px] gap-16">
        <div className="slice ">
          <img className="mb-5" src="/logo.png" alt="" />
          <p className="w-[60%]">
            مهمتنا هي تقديم زيوت وقطع غيار سيارات من الدرجة الأولى تضمن طول عمر
            سيارتك وأدائها. نحن نسعى جاهدين لتقديم خدمة عملاء لا مثيل لها ومشورة
            الخبراء لتلبية جميع احتياجات السيارات الخاصة بك.
          </p>
        </div>
        <div className="slice flex flex-col gap-4">
          <p className="font-bold mb-6">روابط مهمه</p>
          <p>من نحن</p>
          <p>الشروط والاحكام</p>
          <p>سياسه الاستخدام والخصوصيه</p>
        </div>
        <div className="slice flex flex-col gap-4">
          <p className="font-bold mb-6">روابط مهمه</p>
          <div className="flex gap-3">
            <p>icon</p>
            <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
          </div>
          <div className="flex gap-3">
            <p>icon</p>
            <p>+603 4784 273 12</p>
          </div>
          <div className="flex gap-3">
            <p>icon</p>
            <p>lorem@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
