module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-mdx', 
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'montserrat\:300,500,700',
      ],
      display: 'swap',
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      short_name: 'JayCode Developer',
      start_url: '/',
      display: 'standalone',
      icon: 'src/assets/images/Logo.png',
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets\/icons/,
      },
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  }],
};
