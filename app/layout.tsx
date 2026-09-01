import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mozhno-luchshe-production.up.railway.app"),
  title: "Можно Лучше — ИИ-наставник и игровые механики для здоровых привычек",
  description:
    "«Можно Лучше» помогает выстроить заботу о себе: персональный план, понятные ежедневные задачи и игровые механики, которые поддерживают интерес. Концепция продукта и демонстрационная работа.",
  openGraph: {
    title: "Можно Лучше — модификация образа жизни",
    description:
      "ИИ-наставник, персональный план и игровые механики, которые помогают здоровым привычкам прижиться.",
    url: "https://mozhno-luchshe-production.up.railway.app",
    siteName: "Можно Лучше",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/media/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Можно Лучше — модификация образа жизни",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
