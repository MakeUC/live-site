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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lattice",
        short_name: "Lattice",
        start_url: "localhost:8000/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "images/logo.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`
  ]
};
