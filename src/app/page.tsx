import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Home",
};

export default function Home() {
  const links = [
    { name: "JetPhotos", href: "https://jetphotos.com/photographer/443263" },
    { name: "Discord", href: "https://discord.com/users/758617912566087681" },
    { name: "Website", href: "https://jadebetty.tech" },
    { name: "Email", href: "mailto:contact@jadebetty.tech" },
  ];

  return (
    <>
      <Header />
      <main className="w-full px-6">
        <div className="flex flex-col justify-center items-center gap-4 text-text text-md">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="w-full max-w-xs">
               <div className="flex items-center justify-center bg-[#0a0a0a] h-12 w-full rounded-full text-center hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
                {link.name}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
