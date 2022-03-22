require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // pathPrefix: "/preem",
  pathPrefix: "/preem-digital-catalogue",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Preem - Digital Catalogue",
    description: "Preem - Digital Catalogue",
    image: "/logo.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-221812238-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
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
    "gatsby-source-sanity-transform-images",
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
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "products",
        engine: "flexsearch",
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
                      farg
                      lagstaflyttemp
                      flampunkt
                      vi
                      isovg
                      densitet
                      kokpunkt
                      brytningsindex
                      viskositet100
                      viskositet40
                      nlgi
                      tval
                      basolja40
                      tempomrade
                      tbnbastal
                      fryspunkt
                      sds
                      pds
                      _rawApplikationer
                      applikationer {
                        children {
                          text
                        }
                      }
                      slug {
                        current
                      }
                    }
                  }
                }
            `,
        engineOptions: "speed",
        ref: "id",
        index: ["produkt", "body"],
        store: [
          "id",
          "produkt",
          "path",
          "body",
          "sae",
          "farg",
          "isovg",
          "viskositet40",
          "viskositet100",
          "vi",
          "flampunkt",
          "lagstaflyttemp",
          "nlgi",
          "tval",
          "basolja40",
          "tempomrade",
          "tbnbastal",
          "densitet",
          "kokpunkt",
          "brytningsindex",
          "fryspunkt",
          "sds",
          "pds",
        ],
        normalizer: ({ data }) =>
          data.allSanityProduct.nodes.map((node) => ({
            id: node.id,
            path: node.slug.current,
            produkt: node.produkt,
            body: node.applikationer[0].children[0].text,
            sae: node.sae,
            farg: node.farg,
            isovg: node.isovg,
            viskositet40: node.viskositet40,
            viskositet100: node.viskositet100,
            vi: node.vi,
            flampunkt: node.flampunkt,
            lagstaflyttemp: node.lagstaflyttemp,
            nlgi: node.nlgi,
            tval: node.tval,
            basolja40: node.basolja40,
            tempomrade: node.tempomrade,
            tbnbastal: node.tbnbastal,
            densitet: node.densitet,
            kokpunkt: node.kokpunkt,
            brytningsindex: node.brytningsindex,
            fryspunkt: node.fryspunkt,
            sds: node.sds,
            pds: node.pds,
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
        icon: `./src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/consumer/`,
          `/industrial/`,
          `/products/*`,
          `/category/*`,
          `/product-category/*`,
          `/commercial/`,
          `/marine/`,
          `/power-generation/`,
          `/search/`,
          `/local-search/`,
          `/standards/`,
          `/glossary/*`,
          `/technical-information/`,
          `/packaging/`,
          `/all-products/*`,
        ],
        workboxConfig: {
          globPatterns: ["**/*.{js,jpg,png,svg,webp,avif,html,css,woff,woff2}"],
        },
      },
    },
  ],
};
