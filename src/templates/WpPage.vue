<template>
  <Layout>

    <div id="page" class="hfeed site grid-container container grid-parent">
        <div id="content" class="site-content">
          <h1 class="d-none" v-html="$page.wpPage.title" />

          <div v-html="$page.wpPage.content" />
      </div>
    </div>
</Layout>
</template>

<page-query>
query WpPage ($path: String!) {
  wpPage (path: $path) {
    id
    title
    slug
    path
    excerpt
    content
    headTags{
      tag
      content
      attributes{
        name
        content
        title
        property
      }
    }
  }
}
</page-query>

<script>
// import PageRelated from "~/components/PageRelated.vue";

export default {
  name: "WpPage",
  metaInfo() {
    var metaArr = [];
    var metaAttr = [];
    if (typeof this.$page.wpPage.headTags != 'undefined') {
      this.$page.wpPage.headTags.forEach(function(item) {
        metaArr.push(item.attributes);
      });
    }
    metaArr.forEach(function(item) {
      if(typeof item === 'object' && item !== null){
        metaAttr.push(
          {
            name : item.name,
            property: item.property,
            content: item.content,
          }
        );
      }
    });
    //metaAttr = metaAttr.obj.filter((value: {}) => Object.keys(value).length !== 0);
    //metaAttr = metaAttr.filter(val => (val!==undefined) && (val!==null));
    return {
      title: this.$page.wpPage.title.replace(/[^&a-zA-Z ]/g, ''),
      meta: metaAttr
    }
  }
};
</script>
