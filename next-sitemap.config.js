/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.alex-labuda.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.alex-labuda.com/sitemap.xml',
    ],
  },
  exclude: [],
  outDir: './public',
} 