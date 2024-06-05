import "@/app/globals.css";
import "@/app/globalicons.css"
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DateProvider } from "@/context/DateContext";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "@/components/ui/sonner";


// Can be imported from a shared config
const locales = ["en", "es"];

export const metadata = {
  title: "Luma | A new way to study solar activity",
  description: "Generated by create next app"
};

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DateProvider>
              {children}
            <SpeedInsights />
            <Toaster />
          </DateProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
