export async function GET(request, { params }) {
  const p = await params;
  return Response.json({
    name: 'mike',
    id: p.id
  })
}