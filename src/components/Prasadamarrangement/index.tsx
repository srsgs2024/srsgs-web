import React from "react";
import Image from "next/image";
import Prasadamarrangement1 from "../../../public/Prasadamarrangement/Prasadamarrangement1svg.svg";
import Prasadamarrangement2 from "../../../public/Prasadamarrangement/dhan-rashifal.avif";
import Prasadamarrangement3 from "../../../public/Prasadamarrangement/Prasadamarrangement3.svg";
import Prasadamarrangement4 from "../../../public/Prasadamarrangement/images6.webp";
import { useTranslation } from "react-i18next";

export default function Prasadamarrangement() {
  const { t, i18n } = useTranslation();
  return (
    <div className="p-6 md:p-10 mb-6 " id="Prasadamarrangement">
      <div className="flex flex-col justify-center items-center gap-4 md:gap-6 p-6 md:p-12 text-center">
        <div className="text-[#626F47] font-extrabold text-3xl font-serif font-bold tracking-wide tracking-tight md:text-5xl lg:text-[40px] leading-tight md:leading-[70px] lg:leading-[60px] max-w-5xl">
          <p>{t("prasadamArrangement.descriptionone")}</p>
          <p>{t("prasadamArrangement.descriptiontwo")}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 ">
        {/* First Block */}
        <div className="bg-[#fff1cb] p-5 flex flex-col gap-6 md:gap-8 rounded-xl shadow-lg w-full md:w-1/2">
          <div className="relative group cursor-pointer w-full h-[300px] md:h-[400px]">
            <Image
              src={Prasadamarrangement1}
              alt="OurAim"
              fill
              className="object-cover group-transition-all duration-200 hover:opacity-0 transition-opacity duration-300 rounded-xl shadow-lg"
            />
            <Image
              src={Prasadamarrangement3}
              alt="OurAim Hover"
              fill
              className="absolute top-0 left-0 object-cover opacity-0 group-transition-all duration-200 hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-5 text-center">
            <h1 className="text-[#ef5d3c] font-semibold text-[28px] md:text-[40px] leading-[38px] md:leading-[57.6px]">
              {t("prasadamArrangement.titleone")}
            </h1>
            <p className="text-[#1E1E1EBF] font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[34px]">
              {t("prasadamArrangement.descriptionImage1")}
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="bg-[#fff1cb] p-5 flex flex-col gap-6 md:gap-8 rounded-xl shadow-lg w-full md:w-1/2">
          <div className="relative group cursor-pointer w-full h-[300px] md:h-[400px]">
            <Image
              src={Prasadamarrangement2}
              alt="OurAim"
              fill
              className="object-cover group-transition-all duration-200 hover:opacity-0 transition-opacity duration-300 rounded-xl shadow-lg"
            />
            <Image
              src={Prasadamarrangement4}
              alt="OurAim Hover"
              fill
              className="absolute top-0 left-0 object-cover opacity-0 group-transition-all duration-200 hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-5 text-center">
            <h1 className="text-[#ef5d3c] font-semibold text-[28px] md:text-[40px] leading-[38px] md:leading-[57.6px]">
              {t("prasadamArrangement.titletwo")}
            </h1>
            <p className="text-[#1E1E1EBF] font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[34px]">
              {t("prasadamArrangement.descriptionImage2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
