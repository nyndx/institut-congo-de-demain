require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Institut Congo de Demain`,
    description: `L'institut congolais de demain est un centre de réflexion non partisan, à but non lucratif, qui se consacre à la promotion d'idées pratiques pour relever les plus grands défis auxquels est confrontée la république démocratique du congo.`,
    author: `@nynd_x`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATA_API_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Institut Congo de demain`,
        short_name: `ICD`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icd-icon.jpg`, // This path is relative to the root of the site.
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-postcss",
  ],
}
