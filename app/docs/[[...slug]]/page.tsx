export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string }>
}) {
  const { slug } = await params
  const { default: Post, frontmatter } = await import(`@/content/docs/${slug || "page"}.mdx`)

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