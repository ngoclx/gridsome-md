// http://localhost:8080/portfolio/artsfile-3/
// http://localhost:8080/industry-section/education/
// http://localhost:8080/service-provided/accessibility
// https://dev.marameodesign.com/wp-json/wp/v2/media


module.exports = {
  siteName: 'Marameo Design',

  // Rebuild the project when adding a new route definition (templates)
  templates: {

    WpPortfolio: '/portfolio/:slug',
    WpIndustrySection: '/industry-section/:slug',
    WpServiceProvide: '/service-provided/:slug',

    WpInsights: '/insights/:slug',
    WpInsightTag: '/insight_tag/:slug',

    // Define multiple alias for the same entity (page)
    WpPage: [
      {
        path: '/:slug',
        component: './src/templates/WpPage.vue'
      },

      {
        name: 'services',
        path: '/services/:slug',
        component: './src/templates/WpPage.vue'
      },

      {
        name: 'strategy-services',
        path: '/services/strategy-services/:slug',
        component: './src/templates/WpPage.vue'
      },

      {
        name: 'support-maintenance',
        path: '/services/support-maintenance/:slug',
        component: './src/templates/WpPage.vue'
      },
 
      {
        name: 'web-design',
        path: '/services/web-design/:slug',
        component: './src/templates/WpPage.vue'
      },

    ]
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
