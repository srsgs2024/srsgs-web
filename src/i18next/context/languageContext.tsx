"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import i18n from "../index";
import { useCookies } from "react-cookie"; // Import the react-cookie hook

// Define types for the context value
interface LanguageContextType {
  language: string;
  switchLanguage: (lng: string) => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Use the useCookies hook to manage cookies
  const [cookies, setCookie] = useCookies(["language"]);

  // Retrieve the language from cookies or default to i18n's current language
  const [language, setLanguage] = useState<string>(
    cookies.language || i18n.language
  );

  useEffect(() => {
    // Update i18n whenever the language changes
    i18n.changeLanguage(language);

    // Set the cookie with the language value and expiration date
    const expiresDate = new Date();
    expiresDate.setFullYear(expiresDate.getFullYear() + 1); // 1 year from now

    setCookie("language", language, {
      path: "/",
      expires: expiresDate, // Set expiration date
    });
  }, [language, setCookie]);

  const switchLanguage = (lng: string) => {
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the LanguageContext
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
