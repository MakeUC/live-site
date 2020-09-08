module.exports = {
  siteMetadata: {
    title: `MakeUC 2020`,
    siteUrl: `https://makeuc.io`,
    description: `MakeUC 2020 is a 24-hour hackathon hosted by IEEE at University of Cincinnati!`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};