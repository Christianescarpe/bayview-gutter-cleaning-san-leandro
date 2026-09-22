import { MetadataRoute } from 'next';
import { sitePages } from '@/data/siteContent';
import { blogPosts } from '@/data/blogContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bayviewguttercleaningsanleandro.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const siteRoutes: MetadataRoute.Sitemap = sitePages
    .filter((p) => p.url !== '/' && p.url !== '/faq' && p.url !== '/contact')
    .map((p) => ({
      url: `${baseUrl}${p.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...siteRoutes, ...blogRoutes];
}
