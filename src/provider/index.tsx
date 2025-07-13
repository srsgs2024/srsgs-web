"use client";
import i18n from "@/i18next";
import { LanguageProvider } from "@/i18next/context/languageContext";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Suspense>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>{children}</LanguageProvider>
      </I18nextProvider>
    </Suspense>
  );
};
