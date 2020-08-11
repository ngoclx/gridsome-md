// http://localhost:8080/portfolio/artsfile-3/
// http://localhost:8080/industry-section/education/
// http://localhost:8080/service-provided/accessibility
// https://dev.marameodesign.com/wp-json/wp/v2/media


module.exports = {
  siteName: 'Marameo Design',
  templates: {
    WpPortfolio: '/portfolio/:slug',
    WpIndustrySection: '/industry-section/:slug',
    WpServiceProvide: '/service-provided/:slug',
    WpPage: '/:slug',
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

            // Custom menu rest api endpoint, check helpers.api.php
            // - this should be included to your theme or just a new plugin.
            // Maybe a plugin is good!
            route: 'menus/all',
          }
        ],
      },
    },
  ]
}
