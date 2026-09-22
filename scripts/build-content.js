const fs = require('fs');
const path = require('path');

const s1 = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'sheet1_parsed.json'), 'utf8'));
const s2 = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'sheet2_parsed.json'), 'utf8'));

// Helper to categorize pages in Sheet 1
function categorizeUrl(url) {
  if (url === '/') return 'home';
  if (url === '/faq') return 'faq';
  if (url === '/contact') return 'contact';
  if (url === '/areas-we-serve') return 'location-hub';
  const locationSlugs = [
    '/san-lorenzo', '/castro-valley', '/oakland', '/hayward',
    '/alameda', '/union-city', '/fremont', '/newark'
  ];
  if (locationSlugs.includes(url)) return 'location';
  return 'service';
}

function parseSections(html) {
  // Split HTML into H2 sections
  const h1Match = html.match(/<h1>(.*?)<\/h1>/is);
  const h1 = h1Match ? h1Match[1].trim() : '';

  // Get content before first <h2>
  const firstH2Index = html.indexOf('<h2>');
  let introHtml = '';
  if (firstH2Index !== -1) {
    const preH2 = html.substring(0, firstH2Index);
    introHtml = preH2.replace(/<h1>.*?<\/h1>/is, '').trim();
  } else {
    introHtml = html.replace(/<h1>.*?<\/h1>/is, '').trim();
  }

  // Extract all H2 sections
  const sections = [];
  const h2Regex = /<h2>(.*?)<\/h2>(.*?)(?=(?:<h2>|$))/gis;
  let match;
  while ((match = h2Regex.exec(html)) !== null) {
    const title = match[1].trim();
    const content = match[2].trim();
    
    // Extract list items if any
    const listItems = [];
    const liRegex = /<li>(.*?)<\/li>/gis;
    let liMatch;
    while ((liMatch = liRegex.exec(content)) !== null) {
      listItems.push(liMatch[1].trim());
    }

    sections.push({
      title,
      content,
      listItems
    });
  }

  return {
    h1,
    introHtml,
    sections
  };
}

const sitePages = [];
for (let i = 1; i < s1.length; i++) {
  const row = s1[i];
  if (!row.D) continue;
  const parsed = parseSections(row.F || '');
  const url = row.D.trim();
  const slug = url === '/' ? '' : url.replace(/^\//, '');

  sitePages.push({
    title: row.A?.trim() || '',
    seoTitle: row.B?.trim() || '',
    metaDescription: row.C?.trim() || '',
    url,
    slug,
    type: categorizeUrl(url),
    focusKeywords: (row.E || '').split(';').map(k => k.trim()).filter(Boolean),
    contentHtml: row.F || '',
    parsedH1: parsed.h1,
    introHtml: parsed.introHtml,
    sections: parsed.sections,
    internalAnchors: [row.G, row.H, row.I].filter(Boolean),
    externalAnchor: row.J || ''
  });
}

const blogPosts = [];
for (let i = 1; i < s2.length; i++) {
  const row = s2[i];
  if (!row.D) continue;
  const parsed = parseSections(row.F || '');
  const url = row.D.trim();
  const slug = url.replace(/^\/blog\//, '').replace(/^\//, '');

  blogPosts.push({
    title: row.A?.trim() || '',
    seoTitle: row.B?.trim() || '',
    metaDescription: row.C?.trim() || '',
    url,
    slug,
    focusKeywords: (row.E || '').split(';').map(k => k.trim()).filter(Boolean),
    contentHtml: row.F || '',
    parsedH1: parsed.h1,
    introHtml: parsed.introHtml,
    sections: parsed.sections,
    internalAnchors: [row.G, row.H, row.I].filter(Boolean),
    externalAnchor: row.J || ''
  });
}

const dataDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(
  path.join(dataDir, 'sitePages.json'),
  JSON.stringify(sitePages, null, 2)
);

fs.writeFileSync(
  path.join(dataDir, 'blogPosts.json'),
  JSON.stringify(blogPosts, null, 2)
);

// Also generate typed siteContent.ts and blogContent.ts
const siteContentTs = `// Generated automatically from Google Sheet SEO Content Plan
export interface PageSection {
  title: string;
  content: string;
  listItems: string[];
}

export interface SitePage {
  title: string;
  seoTitle: string;
  metaDescription: string;
  url: string;
  slug: string;
  type: 'home' | 'service' | 'location' | 'location-hub' | 'faq' | 'contact';
  focusKeywords: string[];
  contentHtml: string;
  parsedH1: string;
  introHtml: string;
  sections: PageSection[];
  internalAnchors: string[];
  externalAnchor: string;
}

export const sitePages: SitePage[] = ${JSON.stringify(sitePages, null, 2)};

export function getPageBySlug(slug: string): SitePage | undefined {
  const cleanSlug = slug.replace(/^\\//, '');
  return sitePages.find(p => p.slug === cleanSlug);
}

export function getPagesByType(type: SitePage['type']): SitePage[] {
  return sitePages.filter(p => p.type === type);
}

export const services = sitePages.filter(p => p.type === 'service');
export const locations = sitePages.filter(p => p.type === 'location');
`;

const blogContentTs = `// Generated automatically from Google Sheet Blog Content Plan
import { PageSection } from './siteContent';

export interface BlogPost {
  title: string;
  seoTitle: string;
  metaDescription: string;
  url: string;
  slug: string;
  focusKeywords: string[];
  contentHtml: string;
  parsedH1: string;
  introHtml: string;
  sections: PageSection[];
  internalAnchors: string[];
  externalAnchor: string;
}

export const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const cleanSlug = slug.replace(/^blog\\//, '').replace(/^\\//, '');
  return blogPosts.find(p => p.slug === cleanSlug);
}
`;

fs.writeFileSync(path.join(dataDir, 'siteContent.ts'), siteContentTs);
fs.writeFileSync(path.join(dataDir, 'blogContent.ts'), blogContentTs);

console.log(`Successfully built ${sitePages.length} site pages and ${blogPosts.length} blog posts into src/data/`);
