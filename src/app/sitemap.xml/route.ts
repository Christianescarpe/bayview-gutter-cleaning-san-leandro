import { sitePages } from '@/data/siteContent';
import { blogPosts } from '@/data/blogContent';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  const baseUrl = 'https://guttercleaningsanleandro.site';
  const today = '2026-10-05';

  const urls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [
    { loc: `${baseUrl}/`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: `${baseUrl}/services`, lastmod: today, changefreq: 'weekly', priority: '0.90' },
    { loc: `${baseUrl}/faq`, lastmod: today, changefreq: 'monthly', priority: '0.80' },
    { loc: `${baseUrl}/contact`, lastmod: today, changefreq: 'monthly', priority: '0.80' },
    { loc: `${baseUrl}/blog`, lastmod: today, changefreq: 'weekly', priority: '0.80' },
  ];

  sitePages
    .filter((p) => p.slug !== '' && p.slug !== 'faq' && p.slug !== 'contact')
    .forEach((p) => {
      urls.push({
        loc: `${baseUrl}/${p.slug}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: '0.85',
      });
    });

  blogPosts.forEach((b) => {
    urls.push({
      loc: `${baseUrl}/blog/${b.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.75',
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
