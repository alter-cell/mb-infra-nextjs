import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/_next/',
        '/api/',
      ],
    },
    sitemap: 'https://mbinfra.in/sitemap.xml', // Replace with your final domain
  };
}