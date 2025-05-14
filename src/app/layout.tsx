import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Orbit Alliance",
  description: "42 rio Orbit Alliance dashboard",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
