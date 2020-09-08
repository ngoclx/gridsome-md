<template>
  <span class="meta-info" />
</template>

<script>
export default {
  name: "MetaInfo",

  props: {
    headTags: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },

  metaInfo() {
    let self = this
    var metaArr = [];
    var metaAttr = [];

    if (this.headTags != "undefined") {
      this.headTags.forEach(function(item) {
        metaArr.push(item.attributes);
      });
    }
    metaArr.forEach(function(item) {
      if (typeof item === "object" && item !== null) {
        if (item.name) {
          metaAttr.push({
            name: item.name,
            content: self.changeDomain(item.name, item.content),
          });
        } else if (item.property) {
          metaAttr.push({
            property: item.property,
            content: self.changeDomain(item.property, item.content),
          });
        }
      }
    });
    return {
      title: this.title.replace(/[^&a-zA-Z ]/g, ""),
      meta: metaAttr,
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
