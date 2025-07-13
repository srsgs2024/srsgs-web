"use client";
import React from "react";
import Image from "next/image";
import OurAim1 from "../../../public/OurAim/OurAim1.svg";
import OurAim2 from "../../../public/OurAim/OurAim2.svg";
import OurAim3 from "../../../public/OurAim/ourAmi8.png";
import OurAim4 from "../../../public/OurAim/ourAim6png.png";
import { useTranslation } from "react-i18next";

export default function OurAim() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10">
      {/* First Block */}
      <div className="bg-[#fff1cb] p-5 flex flex-col gap-6 md:gap-8 rounded-xl shadow-lg w-full md:w-1/2">
        <div className="relative group cursor-pointer w-full h-[300px] md:h-[400px]">
          <Image
            src={OurAim1}
            alt="OurAim"
            fill
            className="object-cover group-transition-all duration-200 hover:opacity-0 transition-opacity duration-300 rounded-xl shadow-lg"
          />
          <Image
            src={OurAim2}
            alt="OurAim Hover"
            fill
            className="absolute top-0 left-0 object-cover opacity-0 group-transition-all duration-200 hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-5 text-center">
          <h1 className="text-[#ef5d3c] font-semibold text-[28px] md:text-[40px] leading-[38px] md:leading-[57.6px]">
            {t("OurAim.titleone")}
          </h1>
          <p className="text-[#1E1E1EBF] font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[34px]">
            {t("OurAim.descriptionImage1")}
          </p>
        </div>
      </div>

      {/* Second Block */}
      <div className="bg-[#fff1cb] p-5 flex flex-col gap-6 md:gap-8 rounded-xl shadow-lg w-full md:w-1/2">
        <div className="relative group cursor-pointer w-full h-[300px] md:h-[400px]">
          <Image
            src={OurAim3}
            alt="OurAim"
            fill
            className="object-cover group-transition-all duration-200 hover:opacity-0 transition-opacity duration-300 rounded-xl shadow-lg"
          />
          <Image
            src={OurAim4}
            alt="OurAim Hover"
            fill
            className="absolute top-0 left-0 object-cover opacity-0 group-transition-all duration-200 hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-5 text-center">
          <h1 className="text-[#ef5d3c] font-semibold text-[28px] md:text-[40px] leading-[38px] md:leading-[57.6px]">
            {t("OurAim.titletwo")}
          </h1>
          <p className="text-[#1E1E1EBF] font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[34px]">
            {t("OurAim.descriptionImage2")}
          </p>
        </div>
      </div>
    </div>
  );
}
