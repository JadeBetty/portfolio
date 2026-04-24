import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
  params: { link: string; description: string; banner: string };
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { link, description, banner } = params;
  
  return {
    title: `JadeBetty - ${link}`,
    description: description,
    authors: [{ name: 'JadeBetty' }],
    openGraph: {
      title: `JadeBetty - ${link}`,
      description: description,
      images: [`/images/${banner}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `JadeBetty - ${link}`,
      description: description,
      images: [`/images/${banner}`],
    },
  };
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-inter",
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full flex flex-col items-center gap-8">
          {children}
        </div>
      </body>
    </html>
  );
}
