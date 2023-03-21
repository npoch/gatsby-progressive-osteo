/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ontario Academy of Progressive Osteopathy`,
    description: `Discover the Future of Osteopathy in Canada.`,
    siteUrl: `https://www.progressiveosteopathy.com`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "msr25ovq",
      "dataset": "production"
    }
  },
  "gatsby-plugin-image",
  {
    resolve: "gatsby-plugin-sharp",
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `blurred`,
        quality: 75,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
      }
    }
  }, 
  "gatsby-transformer-sharp", 
  // "gatsby-plugin-google-gtag", 
  // "gatsby-plugin-sitemap", {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "images",
  //     "path": "./src/images/"
  //   },
  //   __key: "images"
  // }
]
};