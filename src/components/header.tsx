import Link from "next/link";

export default async function Header() {
  const pfpUrl = "/images/favicon.jpg";

  return (
    <header className="w-full flex flex-col items-center text-center">
      <div className="flex flex-col items-center gap-2">
        <img 
          src={pfpUrl}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border border-border" 
          alt="profile picture" 
        />
        <Link href="/" className="font-medium text-xl pt-3 text-text"> jadebetty </Link>
        <p className="text-sm text-text opacity-80">i dont even know anymore</p>
      </div>
    </header>
  );
}
