// http://localhost:8080/portfolio/artsfile-3/
// http://localhost:8080/industry-section/education/
// http://localhost:8080/service-provided/accessibility
// https://dev.marameodesign.com/wp-json/wp/v2/media


module.exports = {
  siteName: 'Marameo Design',
  templates: {
    WpPortfolio: '/portfolio/:slug',
    WpIndustrySection: '/industry-section/:slug',
    WpServiceProvide: '/service-provided/:slug'
  },
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://dev.marameodesign.com', // required
        apiBase: 'wp-json',
        typeName: 'Wp',
        perPage: 20,
        concurrent: 10,
        customEndpoints: [
          {
            typeName: "WPMenu",
            route: 'menus/all', // Custom menu rest api endpoint, check helpers.api.php
            // - this should be included to your theme or just a new plugin.
            // Maybe a plugin is good!
          }
        ]
      },
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
