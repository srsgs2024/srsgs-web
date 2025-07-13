"use client";
import React from "react";
import Image from "next/image";
import UpdateNew1 from "../../../public/UpdateNew/one.png";
import UpdateNew2 from "../../../public/UpdateNew/cow.jpg";
import UpdateNew3 from "../../../public/UpdateNew/UpdateNew3.svg";

import { ChatCircle } from "@phosphor-icons/react";

export default function UpdateNew() {
  return (
    <div className="flex flex-col gap-10 px-5 md:px-10">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-[#ff814e] font-[800] text-3xl font-serif font-bold tracking-wide tracking-tight md:text-[48px] md:leading-[64.8px]">
          ताजा समाचार
        </h1>
        <div className="flex flex-col gap-3 text-[#1E1E1EBF] font-medium text-sm font-medium md:text-[28px] leading-[24px] md:leading-[28.8px] max-w-2xl">
          <p>
            ताजा समाचार हमारे द्वारा आयोजित कार्यक्रमों, अभियानों, और गौशाला के
            संबंधित महत्वपूर्ण घटनाओं या अपडेट्स का संग्रह है।
          </p>
          <p>
            यह खंड हमारे समुदाय को नवीनतम गतिविधियों, पहल, और अन्य संबंधित खबरों
            से अवगत कराता है।
          </p>
        </div>
      </div>

     
    </div>
  );
}
