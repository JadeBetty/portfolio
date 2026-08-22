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
      <body className="bg-background min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full flex flex-col items-center gap-10">
          {children}
        </div>
      </body>
    </html>
  );
}
