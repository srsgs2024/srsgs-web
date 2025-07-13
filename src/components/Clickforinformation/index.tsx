"use client";
import React from "react";
import Clickforinformation1 from "../../../public/Clickforinformation/cow.png";
import { useTranslation } from "react-i18next";

export default function Clickforinformation() {
  const { t } = useTranslation();

  return (
    <div
      className="relative flex flex-col justify-center items-center text-center min-h-screen bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: `url(${Clickforinformation1.src})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-10 w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-[#ef5d3c] font-bold tracking-wide text-4xl font-serif font-extrabold tracking-tighter sm:text-5xl md:text-6xl leading-tight tracking-wide drop-shadow-md">
          {t("Clickforinformation.descriptionone")}
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFD700] font-semibold text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide sm:text-3xl font-serif font-bold tracking-wide tracking-tight md:text-4xl font-serif font-extrabold tracking-tighter leading-snug drop-shadow-md">
          {t("Clickforinformation.descriptiontwo")}<br></br>
          {t("Clickforinformation.descriptionothree")}
        </p>

        {/* Details */}
        <div className="text-[#F8F9FA] font-medium text-lg font-serif tracking-wide font-serif tracking-wide sm:text-xl font-serif tracking-wide font-serif font-semibold md:text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide leading-relaxed space-y-3 drop-shadow-md">
          <p>{t("Clickforinformation.detailsparaOne")}</p>
          <p>{t("Clickforinformation.detailsparaTwo")}</p>
        </div>
      </div>
    </div>
  );
}
