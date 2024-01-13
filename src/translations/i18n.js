import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_language from "./languages/us.json";
import fr_language from "./languages/fr.json";

const resources = {
  en: { translation: en_language },
  fr: { translation: fr_language },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;