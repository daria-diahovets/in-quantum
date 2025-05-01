import localFont from "next/font/local";

const baradigBold = localFont({
  variable: "--font-baradig-bold",
  src: "../fonts/BaradigBold.woff",
  weight: "700",
  style: "normal",
});

const proximaBold = localFont({
  variable: "--font-proxima-bold",
  src: "../fonts/ProximaNova-Bold.woff",
  weight: "700",
  style: "normal",
});

const proximaExtraBold = localFont({
  variable: "--font-proxima-extra-bold",
  src: "../fonts/ProximaNova-Extrabld.woff",
  weight: "800",
  style: "normal",
});

const sourceSansRegular = localFont({
  variable: "--font-source-sans",
  src: "../fonts/SourceSansPro-Regular.woff",
  weight: "400",
  style: "normal",
});

export { baradigBold, proximaBold, proximaExtraBold, sourceSansRegular };
