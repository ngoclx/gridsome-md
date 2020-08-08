const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('http://md.local/wp-json/wp/v2/portfolio')

    const collection = actions.addCollection('Portfolio')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title.rendered,
        status: item.status,
        content: item.content.rendered,
        excerpt: item.excerpt.rendered,
        slug: item.slug,
        date: item.date,
        featured_media: item.featured_media  
      })
    }
  })
}
