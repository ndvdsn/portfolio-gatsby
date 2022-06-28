module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects/`,
      },
    },
    'gatsby-plugin-mdx'
  ],
}
