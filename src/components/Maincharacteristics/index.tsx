"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function MainCharacteristics() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-[#4A5B2A] bg-cover bg-center bg-no-repeat  text-[#F8F9FA] 
                 text-lg font-serif tracking-wide font-serif tracking-wide md:text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide lg:text-[32px] py-16 md:py-20 px-6 md:px-12 
                 flex flex-col items-center gap-10 relative text-center leading-relaxed"
    >
      {/* Title */}
      <h1 className="text-[#ef5d3c] font-extrabold text-3xl font-serif font-bold tracking-wide tracking-tight md:text-5xl lg:text-[50px] w-[80%] leading-tight">
        {t("mainCharacteristics.heading")}
      </h1>

      {/* List of Characteristics */}
      <ul className="md:max-w-[80%] max-w-[100%] list-none   text-base font-serif md:text-[20px] mt-6 space-y-8 md:space-y-10 leading-[32px]">
        <li className="border-l-4 border-[#FFD700] pl-4">
          {t("mainCharacteristics.pointone")}
        </li>
        <li className="border-l-4 border-[#FFD700] pl-4">
          {t("mainCharacteristics.pointtwo")}
        </li>
        <li className="border-l-4 border-[#FFD700] pl-4">
          {t("mainCharacteristics.pointthree")}
        </li>
        <li className="border-l-4 border-[#FFD700] pl-4">
          {t("mainCharacteristics.pointfour")}
        </li>
      </ul>

      {/* Conclusion */}
      <p className="text-center text-lg font-serif tracking-wide font-serif tracking-wide md:text-[22px] text-gray-300 font-normal max-w-[75%] leading-relaxed">
        {t("mainCharacteristics.conclusion")}
      </p>
    </div>
  );
}
