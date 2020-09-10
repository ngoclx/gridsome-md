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
            metaTags.push({
              name: item.name,
              content: self.changeDomain(item.name, item.content),
            });
            if (item.name == 'dc.description') {
              metaTags.push({
                name: 'description',
                content: item.content,
              });
            }
          } else if (item.property) {
            metaTags.push({
              property: item.property,
              content: self.changeDomain(item.property, item.content),
            });
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
      var toChange = ['og:url', 'dc.relation', 'dc.source']
      if (toChange.includes(property)) {
        var url = new URL(value)
        return siteUrl + url.pathname
      }
      else {
        return value
      }
    }
  }
};
</script>
