/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "himynameisoleg",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: "language-",
          //     inlineCodeMarker: null,
          //     aliases: {},
          //     showLineNumbers: false,
          //     noInlineHighlight: false,
          //     languageExtensions: [
          //       {
          //         language: "superscript",
          //         extend: "javascript",
          //         definition: {
          //           superscript_types: /(SuperType)/,
          //         },
          //         insertBefore: {
          //           function: {
          //             superscript_keywords: /(superif|superelse)/,
          //           },
          //         },
          //       },
          //     ],
          //     prompt: {
          //       user: "root",
          //       host: "localhost",
          //       global: false,
          //     },
          //     escapeEntities: {},
          //   },
          // },
        ],
      },
    },
  ],
}
