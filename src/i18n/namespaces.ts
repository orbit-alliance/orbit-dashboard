// import json files from the `messages` directory and export into a single object
import loginTranslations from "@/../messages/en/login.json";

const translations = {
    en: {}
};

translations.en = {
  login: loginTranslations,
};

export type Translations = typeof translations;
export type TranslationsKeys = keyof typeof translations;

export default translations;