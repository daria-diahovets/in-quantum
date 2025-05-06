import type { Metadata } from "next";
import {
  proximaBold,
  proximaExtraBold,
  baradigBold,
  sourceSansRegular,
} from "./styles/fonts";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "inQuantum — твої перші кроки у світ ІТ",
  description:
    "inQuantum — це спільнота, яка з’явилась, щоб зробити ІТ доступним для кожного. Ми віримо, що кожна дитина або підліток може стати крутим програмістом, якщо отримає правильний підхід, план і підтримку.",
  openGraph: {
    title: "inQuantum — твої перші кроки у світ ІТ",
    description:
      "inQuantum — це спільнота, яка з’явилась, щоб зробити ІТ доступним для кожного. Ми віримо, що кожна дитина або підліток може стати крутим програмістом, якщо отримає правильний підхід, план і підтримку.",
    url: "https://in-quantum.vercel.app",
    siteName: "inQuantum",
    images: [
      {
        url: "https://in-quantum.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "inQuantum",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "inQuantum — твої перші кроки у світ ІТ",
    description:
      "inQuantum — це спільнота, яка з’явилась, щоб зробити ІТ доступним для кожного. Ми віримо, що кожна дитина або підліток може стати крутим програмістом, якщо отримає правильний підхід, план і підтримку.",
    images: ["https://in-quantum.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${proximaBold.variable} 
          ${proximaExtraBold.variable} 
          ${sourceSansRegular.variable} 
          ${baradigBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
