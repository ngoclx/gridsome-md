// http://localhost:8080/portfolio/artsfile-3/
// http://localhost:8080/industry-section/education/
// http://localhost:8080/service-provided/accessibility

module.exports = {
  siteName: 'Gridsome',
  templates: {
    Portfolio: '/portfolio/:slug',
    IndustrySection: '/industry-section/:slug',
    ServiceProvided: '/service-provided/:slug'
  },
  plugins: []
}
