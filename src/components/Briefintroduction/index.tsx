"use client";
import React from "react";
import Image from "next/image";
import Briefintroduction1 from "../../../public/Briefintroduction/Briefintroduction1.svg";
import { useTranslation } from "react-i18next";

export default function BriefIntroduction() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-[#fff1cb] flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6 md:px-28 py-20 min-h-screen md:py-36"
      id="BriefIntroduction"
    >
      {/* Left: Slightly shifted and taller image */}
      <div className="flex justify-center w-full md:justify-start">
        <div className="relative w-full max-w-[650px]">
          <Image
            src={Briefintroduction1}
            alt="Illustration representing brief introduction"
            width={650} // Increased width
            height={700} // Slightly increased height
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl space-y-6">
        <h1 className="text-[#ef5d3c] font-extrabold text-[32px] md:text-[44px] lg:text-[50px] leading-[42px] md:leading-[54px]">
          {t("introduction.heading")}
        </h1>

        <div className="text-[#1E1E1E] font-medium text-[17px] md:text-[20px] lg:text-[22px] leading-[28px] md:leading-[34px] space-y-4">
          <p>{t("introduction.paraOne")}</p>
          <p>{t("introduction.paraTwo")}</p>
          <p>{t("introduction.paraThree")}</p>
          <p>{t("introduction.paraFour")}</p>
        </div>
      </div>
    </section>
  );
}
