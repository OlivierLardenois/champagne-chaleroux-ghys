import { GatsbyConfig } from "gatsby";

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://champagnechalerouxghys.fr/",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-XTSVQGP2FS"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      // https://developers.google.com/search/docs/advanced/crawling/localized-versions?hl=fr#sitemap
      options: {
        excludes: ["/**/404", "/**/404.html"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolvePages: (data: any) =>
          data.allSitePage.nodes.map((node: any) => ({
            siteUrl: data.site.siteMetadata.siteUrl,
            ...node,
          })),
        serialize: (x: any) => ({
          url: x.siteUrl + x.path,
          links: [
            { lang: "fr", url: x.siteUrl + x.path },
            { lang: "en", url: `${x.siteUrl}/en${x.path}` },
            { lang: "x-default", url: x.siteUrl + x.path },
          ],
        }),
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`,
        name: "locale",
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages: ["fr", "en"],
        defaultLanguage: "fr",
        siteUrl: "https://champagnechalerouxghys.fr/",
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: "always",
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          nsSeparator: false,
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Champagne Chaléroux-Ghys",
        short_name: "Chaléroux-Ghys`",
        start_url: "/",
        background_color: "#663399",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/logo.png",
      },
    },
  ],
};

export default gatsbyConfig;
