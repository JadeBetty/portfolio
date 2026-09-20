import "./globals.css";
import {
  JetBrains_Mono,
  Roboto,
  Open_Sans,
  Plus_Jakarta_Sans,
  Poppins,
  Lato,
  Nunito,
  Roboto_Slab,
  Rubik,
  Ubuntu,
  Outfit,
  Work_Sans,
} from "next/font/google";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#e3deea",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "links - jadebetty",
  description: "list of socials",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "jadebetty",
  },
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVars = [
    jetbrainsMono.variable,
    roboto.variable,
    openSans.variable,
    jakartaSans.variable,
    poppins.variable,
    lato.variable,
    nunito.variable,
    robotoSlab.variable,
    rubik.variable,
    ubuntu.variable,
    outfit.variable,
    workSans.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <body className="min-h-[100dvh] flex flex-col items-center justify-center p-4 sm:p-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        <div className="w-full max-w-screen-xl flex flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
