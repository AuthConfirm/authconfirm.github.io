import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-128 w-full p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center glass-panel px-5 py-2.5 rounded-full">
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Image src="/assets/AuthConfirm.webp" alt="AuthConfirm Logo" width={32} height={32} />

          <span className="font-medium tracking-tight text-foreground text-lg">AuthConfirm</span>
        </Link>
      </div>
    </nav>
  );
}
