import React, { useState, useEffect } from "react";
import { List } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/i18next/context/languageContext";
import dynamic from "next/dynamic";

const Drawer = dynamic(() => import("react-modern-drawer"), {
  ssr: false,
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { language, switchLanguage } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    switchLanguage(newLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#fefae0] shadow-md font-serif tracking-wide px-4 py-2 rounded-xl relative">
      {/* Top section with logo and buttons */}
      <div className="flex justify-between items-center px-6 py-1.5">
        <img
          src="/log.png"
          alt="logo"
          className="w-[240px] sm:w-[220px] p-2 mt-8 sm:mt-6"
        />

        {/* Desktop Buttons */}
        <div className="hidden gap-2 sm:flex">
          <div className="px-4 py-1.5 font-bold text-[#626F47] border-2 border-[#626F47] cursor-pointer">
            <a
              href="https://sevek.srsgs.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.cowSevakLogin")}
            </a>
          </div>
          <div className="px-4 py-1.5 font-bold text-[#626F47] border-2 border-[#626F47] cursor-pointer">
            <a
              href="https://sevek.srsgs.com/join"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.registration")}
            </a>
          </div>
          <div
            className="text-[#626F47] font-bold px-4 py-1.5 cursor-pointer"
            onClick={toggleLanguage}
          >
            {isClient ? (language === "en" ? "हिंदी" : "English") : "Loading..."}
          </div>
        </div>
      </div>

      {/* Mobile top section */}
      <div className="md:hidden flex justify-between px-2 py-6">
        <button onClick={toggleDrawer}>
          <List size={32} color="#626F47" />
        </button>

        <div className="flex gap-2 block sm:hidden">
          <div className="px-2 py-1.5 font-bold text-[#626F47] border-2 border-[#626F47] cursor-pointer">
            <a
              href="https://sevek.srsgs.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.cowSevakLogin")}
            </a>
          </div>
          <div className="px-2 py-1.5 font-bold text-[#626F47] border-2 border-[#626F47] cursor-pointer">
            <a
              href="https://sevek.srsgs.com/join"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.registration")}
            </a>
          </div>
          <div
            className="text-[#626F47] font-bold px-2 py-1.5 cursor-pointer"
            onClick={toggleLanguage}
          >
            {isClient ? (language === "en" ? "हिंदी" : "English") : "Loading..."}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bg-[#FEFAE0] text-[#626F47] font-medium text-[20px] py-3 pl-4 pr-3 shadow-md z-50"
      >
        <p className="text-blue-600 font-bold cursor-pointer">{t("navbar.home")}</p>
        <p className="cursor-pointer">
          <a
            href="https://sevek.srsgs.com/guptdaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("navbar.secretDonation")}
          </a>
        </p>
        <p className="cursor-pointer">
          <a href="#Prasadamarrangement">{t("navbar.prasadamArrangement")}</a>
        </p>
        <p className="cursor-pointer">
          <a href="#BriefIntroduction">{t("navbar.briefIntroduction")}</a>
        </p>
        <p className="cursor-pointer">
          <a href="#Footerarrangement">{t("navbar.helpCenter")}</a>
        </p>
        <p className="cursor-pointer">
          <a href="/page/faqs" target="_blank" rel="noopener noreferrer">
            {t("navbar.faq")}
          </a>
        </p>
      </Drawer>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex justify-between px-6 py-1.5 items-center bg-[#ffe296] text-[18px]">
        <div className="flex justify-center gap-10 w-full text-[#586440] font-semibold">
          <p className="text-blue-600 font-bold cursor-pointer">{t("navbar.home")}</p>
          <p className="cursor-pointer">
            <a
              href="https://sevek.srsgs.com/guptdaan"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.secretDonation")}
            </a>
          </p>
          <p className="cursor-pointer">
            <a href="#Prasadamarrangement">{t("navbar.prasadamArrangement")}</a>
          </p>
          <p className="cursor-pointer">
            <a href="#BriefIntroduction">{t("navbar.briefIntroduction")}</a>
          </p>
          <p className="cursor-pointer">
            <a href="#Footerarrangement">{t("navbar.helpCenter")}</a>
          </p>
          <p className="cursor-pointer">
            <a href="/page/faqs" target="_blank" rel="noopener noreferrer">
              {t("navbar.faq")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
