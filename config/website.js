module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Rushikesh.io', // Navigation and Site Title
  titleAlt: 'Rushikesh.io', // Title for JSONLD
  description: 'A full stack developer',
  headline: 'Hi, I\'m Rushikesh', // Headline for schema.org JSONLD
  url: 'https://rushikesh.io', // Domain of your site. No trailing slash!
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Rushikesh.io', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Rushikesh', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: 'rk-7', // Twitter Username
  facebook: 'rk-7', // Facebook Site Name
  googleAnalyticsID: 'UA-XXXXXX-X',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
