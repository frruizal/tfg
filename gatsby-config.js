module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://formaciongobiernodelarioja.docker.localhost/`,
      },
    },

    /*{
      resolve: `gatsby-source-drupal-graphql`,
      options: {
        drupal: {
          url: process.env.http://formaciongobiernodelarioja.docker.localhost/,
          auth: {
            // Use as String
            token: process.env.DRUPAL_AUTH_TOKEN,
            // Use as Function
            token: login.fetchOauthToken(
              process.env.http://formaciongobiernodelarioja.docker.localhost/,
              process.env.fruizalejos,
              process.env.contraseña,
              process.env.DRUPAL_AUTH_CLIENT_ID
            ),
          },
          development: {
            query_limit: process.env.DRUPAL_DEVELOPMENT_QUERY_LIMIT,
            image_placeholder: process.env.DRUPAL_DEVELOPMENT_IMAGE_PLACEHOLDER,
          },
          exclude_media_extensions: ['gif', 'pdf'],
        },
        environment: process.env.NODE_ENV,
      },
    },*/
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
