import React from "react";
import { useTranslation } from "react-i18next";

function GaushalaYojana() {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-10 mb-6 p-6 md:p-10" id="GaushalaYojana">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="bg-[#FFE8A1] p-6 md:p-10 rounded-xl shadow-2xl ">
          <div className="flex flex-col justify-center items-center gap-3 text-center">
            <h1 className="text-[#ef5d3c] font-bold tracking-wide text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide md:text-4xl font-serif font-extrabold tracking-tighter lg:text-5xl leading-tight">
              {t("GaushalaYojana.titleone")}
            </h1>
            <p className="text-[#333] text-base font-serif md:text-lg font-serif tracking-wide font-serif tracking-wide leading-relaxed mt-3">
              {t("GaushalaYojana.descriptionImage1")}
            </p>
            <p className="text-[#555] text-sm font-medium md:text-base font-serif leading-relaxed mt-2">
              {t("GaushalaYojana.Noteone")}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFE8A1] p-6 md:p-10 rounded-xl shadow-2xl">
          <div className="flex flex-col justify-center items-center gap-3 text-center">
            <h1 className="text-[#ef5d3c] font-bold tracking-wide text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide md:text-4xl font-serif font-extrabold tracking-tighter lg:text-5xl leading-tight">
              {t("GaushalaYojana.titletwo")}
            </h1>
            <div className="text-[#333] text-base font-serif md:text-lg font-serif tracking-wide font-serif tracking-wide leading-relaxed mt-3">
              <p>{t("GaushalaYojana.descriptionImage2")}</p>
              <p className="text-[#555] text-sm font-medium md:text-base font-serif leading-relaxed mt-2">
                {t("GaushalaYojana.Notetwo")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaushalaYojana;
