"use client";
import {
  At,
  CaretRight,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPinLine,
  TelegramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import React from "react";
import Image from "next/image";
import whatsapp from "../../../public/whatsapp-logo-whatsapp.webp";
import Instagram from "../../../public/FooterLinks/instagram2.jpeg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: <FacebookLogo size={28} color="#1877F2" />,
      href: "https://www.facebook.com/people/Shri-Radheyshyam-Gaushala-Samiti/pfbid02Rz4quRSHePw8U2GYcX2kjeHk8BroiiiNQAZNoqShcwQjNrvNVHXhAcv2CTAgdxXkl/?rdid=vpZbIVfCjGeVs1Jt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F189KBPrFau%2F",
    },
    {
      icon: <XLogo size={28} color="#000000" />,
      href: "https://x.com/SRSGS2024?t=BJGvy8ENfTXSuw6HaP3gHA&s=09",
    },
    {
      icon: <Image src={Instagram} alt="Instagram" height={28} width={28} />,
      href: "https://www.instagram.com/srsgs_/?igsh=NzBlNnBhNHk2Y2Z6#",
    },
    {
      icon: <YoutubeLogo size={28} color="#FF0000" />,
      href: "https://www.youtube.com/@S.R.S.G.S.2024",
    },
    {
      icon: <LinkedinLogo size={28} color="#0A66C2" />,
      href: "https://www.linkedin.com/in/srsgs-undefined-679604347/?trk=contact-info",
    },
    {
      icon: <TelegramLogo size={28} color="#0088CC" />,
      href: "https://t.me/SRSGS2024",
    },
  ];

  const importantLinks = [
    { name: t("Footer.home"), link: "/" },
    {
      name: t("Footer.secretDonation"),
      link: "https://sevek.srsgs.com/guptdaan",
    },
    {
      name: t("Footer.prasadamArrangement"),
      link: "#Prasadamarrangement",
    },
    {
      name: t("Footer.briefIntroduction"),
      link: "#BriefIntroduction",
    },
    {
      name: t("Footer.helpCenter"),
      link: "#Footerarrangement",
    },
    { name: t("Footer.faq"), link: "/page/faqs" },
    { name: t("Footer.Terms&Condition"), link: "/page/terms-conditions" },
    {
      name: t("Footer.PrivacyPolicy"),
      link: "/page/privacy-policy",
    },
  ];

  const contactInfo = [
    {
      icon: <MapPinLine size={24} color="#1E1E1E" />,
      text: (
        <>
          <p>{t("Footer.address1")}</p>
          <p>{t("Footer.address2")}</p>
          <p>{t("Footer.address3")}</p>
        </>
      ),
    },
    {
      icon: <EnvelopeSimple size={24} color="#1E1E1E" />,
      text: "info@srsgs.com",
    },
    {
      icon: <EnvelopeSimple size={24} color="#1E1E1E" />,
      text: "support@srsgs.com",
    },
  ];

  const helplines = [
    {
      number: "+91 7818004613",
      text: 'Help Line for "General"',
    },
    {
      number: "+91 9259719989",
      text: 'Help Line for "Prasadam"',
    },
    {
      number: "+91 9259729866",
      text: 'Help Line for "Profile"',
    },
  ];

  return (
    <footer className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 bg-[#fff1cb] text-[#1E1E1E]" id="Footerarrangement">
      <div className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 container mx-auto px-4 py-10">
        {/* Title and Social Links */}
        <div className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 text-center mb-8">
          <h1 className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide font-semibold mb-4">{t("Footer.title")}</h1>
          <div className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 transition-all duration-200 hover:scale-110 transition-transform"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Important Links and Contact Info */}
        <div className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Important Links */}
          <div>
            <h2 className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 text-xl font-serif tracking-wide font-serif font-semibold font-semibold text-[#ef5d3c] mb-4">
              {t("Footer.ImportantLink")}
            </h2>
            <ul className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    target={
                      link.link.startsWith("http") || link.link.endsWith(".pdf")
                        ? "_blank"
                        : "_self"
                    }
                    rel="noopener noreferrer"
                    className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 flex items-center gap-2 transition-all duration-200 hover:text-[#ef5d3c]"
                  >
                    <CaretRight size={20} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 text-xl font-serif tracking-wide font-serif font-semibold font-semibold text-[#ef5d3c] mb-4">
              {t("Footer.ContactUs")}
            </h2>
            <ul className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 flex items-center gap-2">
                  {info.icon}
                  {info.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Helplines */}
          <div>
            <h2 className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 text-xl font-serif tracking-wide font-serif font-semibold font-semibold text-[#ef5d3c] mb-4">
              Helplines
            </h2>
            <ul className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 space-y-2">
              {helplines.map((line, index) => (
                <li key={index} className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 flex items-center gap-2">
                  <Image src={whatsapp} alt="whatsapp" width={24} height={24} />
                  <a
                    href={`https://wa.me/${line.number.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 transition-all duration-200 hover:text-[#ef5d3c]"
                  >
                    {line.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-yellow-100 shadow-inner font-serif text-sm tracking-wide text-gray-800 px-6 py-6 text-center py-2 bg-[#626F47] text-white">
        © 2025 श्री राधेश्याम गौशाला समिति™. All Rights Reserved.
      </div>
    
<div className="bg-yellow-200 text-center py-4 rounded-xl shadow-md mt-6">
  <h2 className="text-xl font-bold text-yellow-800">गौसेवा में सहभागी बनें</h2>
  <p className="text-sm text-yellow-900 mt-2">हमारी सेवा यात्रा में साथ चलें — संपर्क करें या दान दें</p>
</div>

</footer>
  );
}
