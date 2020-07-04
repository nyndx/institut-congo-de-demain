require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Institut Congo de Demain`,
    description: `L'institut congolais de demain est un centre de réflexion non partisan, à but non lucratif pour relever les plus grands défis de la R.D.C.`,
    siteUrl: `https://institut-congo-de-demain.com`,

    author: `@nynd_x`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    "gatsby-plugin-postcss",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/styles`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Institut Congo de demain`,
        short_name: `ICD`,
        start_url: `/`,
        background_color: `#7F9CF5`,
        theme_color: `#7F9CF5`,
        display: `minimal-ui`,
        icon: `src/images/icd-icon.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
