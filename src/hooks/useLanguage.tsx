import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.fr;
  otherLang: Language;
  otherLangPath: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "fr"; // Default to French for this business (postal code 2xxx)
  if (location.pathname.startsWith("/de")) {
    lang = "de";
  } else if (location.pathname.startsWith("/en")) {
    lang = "en";
  }

  const t = translations[lang];

  // For simplicity, show German as the "other" language when on French
  // and French when on German or English
  let otherLang: Language;
  let otherLangPath: string;

  if (lang === "fr") {
    otherLang = "de";
    otherLangPath = "/de";
  } else {
    otherLang = "fr";
    otherLangPath = "/";
  }

  return (
    <LanguageContext.Provider value={{ lang, t, otherLang, otherLangPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
