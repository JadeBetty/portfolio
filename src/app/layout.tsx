import "./globals.css";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
  params: { link: string; description: string; banner: string };
}

export const metadata = {
  title: {
    default: "JadeBetty",
    template: "JadeBetty — %s", 
  },
  description: "a quick one before the eternal worm devours connecticut",
  icons: {
    icon: "/images/favicon.jpg",
  },
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-inter",
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} bg-background min-h-screen flex flex-col items-center justify-center p-4`}>
        <div className="w-full flex flex-col items-center gap-8">
          {children}
        </div>
      </body>
    </html>
  );
}
