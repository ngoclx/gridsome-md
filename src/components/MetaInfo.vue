<template>
    <span class="meta-info"/>
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
            content: item.content,
          })
        } else if (item.property) {
          metaAttr.push({
            property: item.property,
            content: item.content,
          })
        }
      }
    });
    return {
      title: this.title.replace(/[^&a-zA-Z ]/g, ""),
      meta: metaAttr,
    };
  },
};
</script>
