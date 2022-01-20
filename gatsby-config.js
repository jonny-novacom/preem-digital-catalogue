require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const queries = require("./src/constants/algolia");

module.exports = {
  // pathPrefix: "/preem",
  pathPrefix: "/preem-digital-catalogue",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Preem - Digital Catalogue",
    description: "Preem - Digital Catalogue",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `1tbc9cjy`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        ErrorDocument: `
          ErrorDocument 404 /404.html
        `,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require("./src/constants/algolia"),
        chunkSize: 10000,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "page",
        query: `
                {
                  allSanityProduct(sort: {fields: produkt, order: ASC}) {
                    nodes {
                      produkt
                      id
                      shortDescription
                      featured
                      saps
                      sae
                      lagstaflyttemp
                      vi
                      viskositet100
                      viskositet40
                      _rawApplikationer
                      flampunkt
                      slug {
                        current
                      }
                    }
                  }
                }
            `,
        engine: "flexsearch",
        engineOptions: "speed",
        ref: "id",
        index: [
          "produkt",
          "shortDescription",
          "saps",
          "sae",
          "lagstaflyttemp",
          "vi",
          "viskositet100",
          "viskositet40",
          "_rawApplikationer",
          "flampunkt",
        ],
        store: ["id", "produkt", "slug", "_rawApplikationer"],
        normalizer: ({ data }) =>
          data.allSanityProduct.nodes.map((node) => ({
            id: node.id,
            path: node.slug.current,
            title: node.produkt,
            body: node._rawApplikationer,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Preem - Digital Catalogue`,
        short_name: `Preem - Digital Catalogue`,
        start_url: `/`,
        background_color: `#006341`,
        theme_color: `#006341`,
        display: `standalone`,
        icon: `./src/images/preem-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/consumer/`,
          `/industrial/`,
          `/product/*`,
          `/category/*`,
        ],
      },
    },
  ],
};
