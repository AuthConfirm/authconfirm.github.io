import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-medium tracking-tight text-foreground/50 hover:text-foreground/80 transition-colors flex items-center gap-2">
          <Image src="/assets/AuthConfirm.webp" alt="AuthConfirm Logo" width={32} height={32} />

          AuthConfirm
        </Link>
        <span className="font-medium tracking-tight text-foreground/50">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}