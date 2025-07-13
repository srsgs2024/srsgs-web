"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

export default function Gaysanrakshan() {
  const { t } = useTranslation();
  const contentData = {
    cartData: [
      { heading: t("runningCard.titleone"), para: t("runningCard.descriptioncardone") },
      { heading: t("runningCard.titletwo"), para: t("runningCard.descriptioncardtwo") },
      { heading: t("runningCard.titlethree"), para: t("runningCard.descriptioncardthree") },
      { heading: t("runningCard.titlefour"), para: t("runningCard.descriptioncardfour") },
    ],
  };

  return (
    <div>
      <Marquee pauseOnHover>
        <div className="py-16">
          <div className="flex justify-start gap-5 px-3">
            {contentData.cartData.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer p-5 border rounded-xl shadow-lg shadow-lg bg-[#FFE8A1]"
                style={{ minWidth: "340px", maxHeight: "100%" }}
              >
                <h3 className= "flex justify-center items-center text-[#ef5d3c] text-lg font-serif tracking-wide font-serif tracking-wide font-bold tracking-wide">{item.heading}</h3>
                <p className="text-[#333] text-sm font-medium mt-2">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </Marquee>
    </div>
  );
}
