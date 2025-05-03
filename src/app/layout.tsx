import type { Metadata } from "next";
import { proximaBold, proximaExtraBold, baradigBold } from "./styles/fonts";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "inQuantum — твої перші кроки у світ ІТ",
  description:
    "inQuantum — це спільнота, яка з’явилась, щоб зробити ІТ доступним для кожного.",
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
          ${baradigBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
