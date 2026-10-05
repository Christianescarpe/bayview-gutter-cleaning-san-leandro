export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://guttercleaningsanleandro.site/sitemap.xml
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
