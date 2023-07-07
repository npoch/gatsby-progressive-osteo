/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ontario Academy of Progressive Osteopathy`,
    description: `Discover the Future of Osteopathy.`,
    siteUrl: `https://www.progressiveosteopathy.ca`,
    location: {
      address: `4773 Yonge St. Unit 4D`,
      city: `Toronto`,
      province: `Ontario`,
      country: `Canada`,
      postalCode: `M2N 0G2`,
    },
    phone: `+1(647)770-2967`,
    email: `info@progressiveosteopathy.ca`,
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
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-NDXDNH6GM6", // Google Analytics / GA
        // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Defaults to https://www.googletagmanager.com
        // origin: "YOUR_SELF_HOSTED_ORIGIN",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Ontario Academy of Progressive Osteopathy`,
      short_name: `OAoPO`,
      description: `Discover the Future of Osteopathy.`,
      lang: `en`,
      display: `standalone`,
      icon: 'src/images/favicon.png',
      start_url: `/`,
      theme_color: 'false',
    },
  },
  // "gatsby-plugin-sitemap", 
  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "images",
  //     "path": "./src/images/"
  //   },
  //   __key: "images"
  // }
]
};