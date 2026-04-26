import { ArrowRight } from "lucide-react";
import { GSAPWrapper } from "@/components/GSAPWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
      <GSAPWrapper>
        <h1 className="animate-in text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-foreground leading-[1.1]">
          Authenticate in Scratch JP even if <span className="text-gradient">cloud variable is not working.</span>
        </h1>

        <p className="animate-in text-lg md:text-2xl text-(--foreground)/50 mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
          AuthConfirm is a manual authentication/verification system for Scratch JP that allows you to verify members without relying on Scratch cloud variables.
        </p>

        <div className="animate-in">
          <div className="flex gap-6 justify-center">
            <Link href="/docs" className="px-8 py-4 rounded-full bg-brand-400 dark:bg-brand-500 text-background font-semibold flex items-center justify-center gap-3 hover:scale-105 active:scale-100 transition-all glow-effect shadow-2xl text-lg group ease-out">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </GSAPWrapper>
    </main>
  );
}
