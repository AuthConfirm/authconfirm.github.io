import fs from 'fs';
import path from 'path';

export function generateStaticParams() {
  const docsDir = path.join(process.cwd(), 'content/docs');
  const files = fs.readdirSync(docsDir);
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      if (slug === 'page') {
        return { slug: [] };
      }
      return { slug: [slug] };
    });
}

console.log(await generateStaticParams());

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];
  const slugPath = slugArray.length > 0 ? slugArray.join('/') : 'page';
  
  const { default: Post, frontmatter } = await import(`@/content/docs/${slugPath}.mdx`)

  console.log('frontmatter: ', frontmatter)
 
  return (
    <>
      {frontmatter?.title && (
        <h1 className="text-5xl font-bold mb-6 mt-6 tracking-tight text-foreground">
          {frontmatter.title}
        </h1>
      )}

      <Post />
    </>
  )
}
 
export const dynamicParams = false