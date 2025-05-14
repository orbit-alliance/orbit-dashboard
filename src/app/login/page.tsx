import LoginTemplate from "@/components/templates/LoginTemplate";
import translations, { TranslationsKeys } from "@/i18n/namespaces";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { FC } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await cookies()).get("locale")?.value || "en";
  const translations_data = translations[locale as TranslationsKeys].login;
  return {
    title: `Orbit Alliance | ${translations_data.title_page}`,
    description: translations_data.description_page,
  };
}

const login: FC = () => <LoginTemplate />;

export default login;
