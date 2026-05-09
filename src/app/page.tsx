import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Home",
};

export default function Home() {
  const links = [
    { name: "Discord", href: "https://discord.com/users/758617912566087681" },
    { name: "Tiktok", href: "https://tiktok.com/@jadebetty_7261" },
    {
      name: "Musixmatch",
      href: "https://www.musixmatch.com/profile/3vUCAMIiJQmjDoTq78_w0ZXfwkSRYiSbWdCBtOUXB4Q9fYEJNN1pxvW7MGTO2AJ0wo3pL4eLm7Cs9PYYMffryJ5ntos_pH-dhwk9d1WCG9Nv7bgsUPQH8RPJPohnlKboeseX8vrZAP2icbx-oMO-wrR_Txs",
    },
    { name: "Letterboxd", href: "https://boxd.it/eNW6r" },
    { name: "Serializd", href: "https://srlzd.com/u/JadeBetty" },
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
