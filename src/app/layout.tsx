import "./globals.css";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full flex flex-col items-center gap-10">
          {children}
        </div>
      </body>
    </html>
  );
}
