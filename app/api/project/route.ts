export const dynamic = 'force-static'
 
export async function GET() {
  const res = await fetch('https://api.scratch.mit.edu/projects/1275511960')
  const data = await res.json()
 
  return Response.json({ data })
}