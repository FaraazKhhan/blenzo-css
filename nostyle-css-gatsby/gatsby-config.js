/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "NOStyleCSS: free, open source CSS framework",
    desc:
      "Create awesome modern websites even zero experience of CSS with NOStyleCSS.",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
        path: `${__dirname}/src/documentation`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NOStyleCSS`,
        short_name: `NOStyleCSS`,
        start_url: `/`,
        icon: `src/images/favicon.svg`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
}
