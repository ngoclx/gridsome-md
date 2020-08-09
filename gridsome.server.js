const axios = require('axios')

module.exports = function (api) {

  // Import industry terms
  api.loadSource(async actions => {
    const { data } = await axios.get('http://md.local/wp-json/wp/v2/industry_section')
    const industry_sections = actions.addCollection('IndustrySection')
    for (const item of data) {
      industry_sections.addNode({
        id: item.id,
        title: item.name,  
        slug: item.slug
      })
    }
  }),


  // Import service provided
  api.loadSource(async actions => {
    const { data } = await axios.get('http://md.local/wp-json/wp/v2/service_provide')
    const service_provideds = actions.addCollection('ServiceProvided')
    for (const item of data) {
      service_provideds.addNode({
        id: item.id,
        title: item.name,  
        slug: item.slug
      })
    }
  }),


  // Import porfolio posts
  api.loadSource(async actions => { 
     const { data } = await axios.get('http://md.local/wp-json/wp/v2/portfolio')
     const portfolios = actions.addCollection('Portfolio')
     portfolios.addReference('industry_sections', 'IndustrySection')
     portfolios.addReference('service_provideds', 'ServiceProvided')
     for (const item of data) {
       portfolios.addNode({
         id: item.id,
         title: item.title.rendered,
         status: item.status,
         content: item.content.rendered,
         excerpt: item.excerpt.rendered,
         slug: item.slug,
         date: item.date,
         featured_media: item.featured_media,
         industry_sections: item.industry_section,
         service_provideds: item.service_provide
       })
     }
  })
}
