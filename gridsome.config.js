// http://localhost:8080/portfolio/artsfile-3/
// http://localhost:8080/industry-section/education/
// http://localhost:8080/service-provided/accessibility

module.exports = {
  siteName: 'Gridsome',
  templates: {
    WpPortfolio: '/portfolio/:slug',
    // WpIndustrySection: '/industry-section/:slug',
    // WpServiceProvided: '/service-provided/:slug'
  },
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://dev.marameodesign.com', // required
        apiBase: 'wp-json',
        typeName: 'Wp',
        perPage: 100,
        concurrent: 10
      }
    },

    // This package downloads "some?" images but not recommended? We better go for CDN solution.
    // {
    //   use: 'gridsome-source-wordpress',
    //   options: {
    //     baseUrl: 'https://dev.marameodesign.com', // required
    //     apiBase: 'wp-json',
    //     typeName: 'Pi',
    //     perPage: 100,
    //     concurrent: 10,
    //     splitPostsIntoFragments: false, // default false
    //     downloadRemoteImagesFromPosts: true, // default false
    //     downloadRemoteFeaturedImages: true, // default false
    //     downloadACFImages: true, // default false
    //   }
    // }
  ]
}
