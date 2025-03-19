/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://reeta-madaan-boutique.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
} 