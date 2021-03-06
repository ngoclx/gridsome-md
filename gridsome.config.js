module.exports = {
    siteName: 'Marameo',
    siteUrl: 'https://marameodesign.com',

    // Rebuild the project when adding a new route definition (templates)
    templates: {

        WpPortfolio: (node) => {
            return new URL(node.link).pathname
        },

        WpIndustrySection: '/industry-section/:slug',
        WpServiceProvide: '/service-provided/:slug',

        WpInsights: '/insights/:slug',
        WpInsightTag: '/insight-tag/:slug',

        // Define multiple alias for the same entity (page)
        WpPage: (node) => {
            console.log(node.id)
            console.log(node.link)
            return new URL(node.link).pathname
        }
    },
    plugins: [{
            use: '@gridsome/source-wordpress',
            options: {
                baseUrl: 'https://cw.marameodesign.com', // required
                apiBase: 'wp-json',
                typeName: 'Wp',
                perPage: 10,
                concurrent: 5,
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
                exclude: ['/case-studies-2', '/insights-2', '/lets-get-started-2'],
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
        {
            use: 'gridsome-plugin-gtm',
            options: {
                id: 'GTM-M5PTTV3',
                enabled: true,
                debug: false
            }
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