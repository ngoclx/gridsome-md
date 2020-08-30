// http://localhost:8080/portfolio/artsfile-3/
// http://localhost:8080/industry-section/education/
// http://localhost:8080/service-provided/accessibility
// https://dev.marameodesign.com/wp-json/wp/v2/media


module.exports = {
    siteName: 'Marameo Design',
    siteUrl: 'https://marameodesign.com',

    // Rebuild the project when adding a new route definition (templates)
    templates: {

        WpPortfolio: '/case-studies/:slug',
        WpIndustrySection: '/industry-section/:slug',
        WpServiceProvide: '/service-provided/:slug',

        WpInsights: '/insights/:slug',
        WpInsightTag: '/insight-tag/:slug',

        // Define multiple alias for the same entity (page)
        WpPage: (node) => {
            return new URL(node.link).pathname
        }
    },
    plugins: [{
            use: '@gridsome/source-wordpress',
            options: {
                baseUrl: 'https://cw.marameodesign.com', // required
                apiBase: 'wp-json',
                typeName: 'Wp',
                perPage: 20,
                concurrent: 10,
                customEndpoints: [{
                    typeName: "WPMenu",

                    // Custom menu rest api endpoint, check helpers.api.php
                    // - this should be included to your theme or just a new plugin.
                    // Maybe a plugin is good!
                    route: 'menus/all',
                }],
            },
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000, // default
                exclude: ['/case-studies-2', '/insights-2'],
                config: {
                    '/*': {
                        changefreq: 'weekly',
                        priority: 0.5
                    }
                }
            }
        },
        {
            use: "gridsome-plugin-htaccess",
        },
        {
            use: 'gridsome-plugin-robots-txt',
        },
    ],
    icon: {
        favicon: {
            src: './src/favicon/favicon-32x32.png',
            sizes: [16]
        },
        touchicon: {
            src: './src/favicon/apple-touch-icon.png',
            sizes: [192, 512],
            precomposed: true
        }
    }

}