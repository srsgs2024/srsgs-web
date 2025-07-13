"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Daankare() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex justify-center items-center text-center min-h-[500px]">
      {/* Video Background */}
      <video
        src="/viedo/5324327-hd_1920_1080_25fps (1).mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-orange-300/10 "></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-6">
        <h1
          className="text-[#ffef3f] font-extrabold text-3xl font-serif font-bold tracking-wide tracking-tight sm:text-4xl font-serif font-extrabold tracking-tighter md:text-5xl lg:text-[45px] 
                     lg:leading-[90px] tracking-wide drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]"
        >
          <span className="block">{t("mantra.paraOne")}</span>
          <span className="block">{t("mantra.paratwo")}</span>
        </h1>
      </div>
    </div>
  );
}
