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
      icon: "./src/images/logo.svg",
      display: `standalone`,
      start_url: `/`,
    },
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },
  {
    resolve: `gatsby-plugin-csp`,
    options: {
      disableOnDev: true,
      reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
      mergeScriptHashes: false, // you can disable scripts sha256 hashes
      mergeStyleHashes: false, // you can disable styles sha256 hashes
      mergeDefaultDirectives: true,
      directives: {
        "default-src": "'self' * 'unsafe-inline'",
        "script-src": "'self' * 'unsafe-inline'",
        "style-src": "'self' * 'unsafe-inline'",
        "object-src": "'self' * 'unsafe-inline'",
        "img-src": "'self' data: blob: *.sanity.io *.ytimg.com youtube.com",
        "media-src": "'self' * 'unsafe-inline'",
        "frame-src": "'self' * 'unsafe-inline'",
        "font-src": "'self' * 'unsafe-inline' data: blob:",
        "connect-src": "'self' * 'unsafe-inline'",

        // "script-src-elem": "'self' www.googletagmanager.com/gtm.js?id=GTM-WXFN77V&l=ceDataLayer",
        // "font-src": "'self' fonts.googleapis.com",
        // // "style-src-elem": "fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap *"
        // "script-src": "'self' 'unsafe-inline' 'wasm-unsafe-eval' 'inline-speculation-rules' www.google-analytics.com www.googletagmanager.com docs.google.com/forms",
        // "style-src": "'self' 'unsafe-inline' www.googletagmanager.com docs.google.com/forms fonts.googleapis.com",
        // "img-src": "'self' 'unsafe-inline' data: www.google-analytics.com www.googletagmanager.com docs.google.com/forms fonts.googleapis.com cdn.sanity.io ytimg.com youtube.com ",
        // "connect-src": "'self' msr25ovq.api.sanity.io/v1/graphql/production/default www.google-analytics.com",
        // "media-src": "'self' 'unsafe-inline' data: youtube",
        // "frame-src": "'self' 'unsafe-inline' youtube docs.google.com/forms",
        // you can add your directives or override defaults
      }
    }
  },
  "gatsby-plugin-sitemap", 
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