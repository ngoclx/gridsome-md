<template>
  <Layout :path="$page.wpPage.path" :ptitle="$page.wpPage.title">
    <div id="page" class="hfeed site grid-container container grid-parent">
      <div id="content" class="site-content">
        {{ $page.wpPage.id }}
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
    headTags
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
