import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",
  
  turbopack: {
    rules: {
      '*.mdx': ['@mdx-js/loader'],
    },
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      'remark-mdx-frontmatter',
      'remark-frontmatter',
    ],
  }
});

export default withMDX(nextConfig);
