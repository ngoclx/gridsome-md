<template>
  <Layout>
    <div id="page" class="hfeed site grid-container container grid-parent">
      <div id="content" class="site-content">
        <h1 class="d-none" v-html="$page.wpPage.title" />

        <div v-html="$page.wpPage.content" />
      </div>
    </div>

    <meta-info :headTags="$page.wpPage.headTags" :title="$page.wpPage.title" />
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
import MetaInfo from "~/components/MetaInfo.vue";

export default {
  name: "WpPage",

  components: {
    MetaInfo,
  },
};
</script>
