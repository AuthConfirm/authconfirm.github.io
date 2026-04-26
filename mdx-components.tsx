import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-5xl font-bold mb-6 mt-6 tracking-tight text-foreground">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-10 tracking-tight border-b border-panel-border pb-2 text-foreground">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">{children}</h3>,
    p: ({ children }) => <p className="text-lg text-foreground/80 leading-relaxed mb-6">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-foreground/80">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-foreground/80">{children}</ol>,
    li: ({ children }) => <li className="text-lg">{children}</li>,
    a: ({ href, children }) => <a href={href} className="text-brand-500 hover:text-brand-600 transition-colors underline underline-offset-4">{children}</a>,
    code: ({ children }) => <code className="bg-foreground/5 border border-panel-border px-1.5 py-0.5 rounded text-sm font-mono text-brand-600">{children}</code>,
    pre: ({ children }) => <pre className="bg-panel-bg border border-panel-border p-4 rounded-xl overflow-x-auto mb-6 text-sm font-mono shadow-sm">{children}</pre>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-brand-500 pl-4 italic text-foreground/70 mb-6 bg-brand-500/5 py-3 pr-4 rounded-r-lg">{children}</blockquote>,
    hr: () => <hr className="my-8 border-panel-border" />,
    ...components,
  }
}
