module.exports = {
  siteMetadata: {
    title: `Champagne Chaléroux-Ghys, Avize`,
    description: `Champagne Chaléroux-Ghys, vignoble grand cru blanc de blanc situé à avize`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Champagne Chaléroux-Ghys`,
        short_name: `Chaléroux-Ghys`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#ae7743`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Fondamento", "Quattrocento Sans"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `fr`],
        defaultLanguage: `fr`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
