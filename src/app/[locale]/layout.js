import "@/app/globals.css";
import { notFound } from "next/navigation";
import { SpeedInsights } from '@vercel/speed-insights/next';

// Can be imported from a shared config
const locales = ["en", "es"];

export const metadata = {
  title: "Luma | A new way to study solar activity",
  description: "Generated by create next app"
};

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  return (
    <html lang={locale}>
      <body>
          {children}
          <SpeedInsights />
      </body>
    </html>
  );
}
