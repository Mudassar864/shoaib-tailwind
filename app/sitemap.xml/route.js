import { client } from '@/sanity/lib/client'; // Adjust this import path to where your Sanity client is defined

export async function GET() {
  const baseUrl = 'https://theshoaibshahid.com';

  const staticRoutes = [
    '',
    'about',
    'contact',
    'gallery',
    'invest-in-dubai',
    'off-plan-projects',
    'services'
  ];
  
  // Fetch dynamic slugs from your data source
  const offPlanProjects = await getData();
  const dynamicSlugs = offPlanProjects.map(project => project.slug.current);
  
  const pages = [
    ...staticRoutes.map((path) => `${baseUrl}/${path}`),
    ...dynamicSlugs.map((slug) => `${baseUrl}/off-plan-projects/${slug}`)
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (url) => `<url>
  <loc>${url}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

// Fetch data from Sanity CMS
async function getData() {
  const query = `
    *[_type == "offPlanProject"]{
      slug
    }`;

  const data = await client.fetch(query);
  return data;
}