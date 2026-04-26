import { ReactNode } from "react";

export default function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative z-10 max-w-4xl mx-auto w-full px-6 py-6 flex-1">
      <article className="glass-panel p-8 md:p-12 rounded-2xl shadow-xl">
        {children}
        
      </article>
    </div>
  );
}
