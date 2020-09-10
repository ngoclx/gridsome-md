<template>
  <span class="meta-info" />
</template>

<script>
export default {
  name: "MetaInfo",

  props: {
    headTags: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },

  metaInfo() {
    let self = this
    var rawMetaTags = []
    var metaTags = []
    var metaTitle = ''
    var canonicalLink = 'https://marameodesign.com'

    var encodedHeadTags = JSON.parse(self.headTags)
    if (encodedHeadTags !== "undefined") {
      encodedHeadTags.forEach(function(item) {
        // if (item.tag == "link") console.log(item)
        if (item.tag == "meta") {
          rawMetaTags.push(item.attributes);
        }
        else if (item.tag == "title") {
          metaTitle = item.content
        }
        else if (item.tag == "link" && item.attributes.rel == "canonical") {
          canonicalLink = self.changeDomain('canonical', item.attributes.href)
        }
      });
    }

    metaTags.push({
      property: 'og:url',
      content: canonicalLink
    })

    rawMetaTags.forEach(function(item) {
      if (typeof item === "object" && item !== null) {
        if (item.name != 'dc.relation' && item.name != 'dc.source' && item.property != 'og:url') {
          if (item.name) {
            if (item.content) {
              metaTags.push({
                name: item.name,
                content: self.changeDomain(item.name, item.content),
              });
            }
            if (item.name == 'dc.description') {
              if (item.content) {
                metaTags.push({
                  name: 'description',
                  content: item.content,
                });
              }
            }
          } else if (item.property) {
            if (item.content) {
              metaTags.push({
                property: item.property,
                content: self.changeDomain(item.property, item.content),
              });
            }
          }
        }
      }
    })

    return {
      title: metaTitle ? metaTitle : self.title,
      titleTemplate: '%s',
      meta: metaTags,
      link: [
        { rel: 'canonical', href: canonicalLink }
      ]
    };
  },
  methods: {
    changeDomain(property, value) {
      let siteUrl = 'https://marameodesign.com'
      let toChange = ['og:url', 'dc.relation', 'dc.source', 'canonical']
      if (toChange.includes(property)) {
        let url = new URL(value)
        return siteUrl + url.pathname.replace('portfolio', 'case-studies')
      }
      else {
        return value
      }
    }
  }
};
</script>
