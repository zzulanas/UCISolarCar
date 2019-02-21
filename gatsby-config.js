module.exports = {
  siteMetadata: {
    title: `UCI Solar Car`,
    description: `A website showcasing the UCI Solar Car team`,
    author: `@zzulanas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/blog/assets`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "blogs",
      },
    },
    `gatsby-plugin-catch-links`,
    {
    resolve:`gatsby-transformer-remark`,
    options : {
      plugins: [
        {
          resolve: `gatsby-remark-relative-images`,
          options: {
            name: `assets`
          }
        },
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
      ]
    }
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout.js`)
      }

    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UCI Solar Car Website`,
        short_name: `Solar Car`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon1.png`, // This path is relative to the root of the site.
        include_favicon: true, 
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
