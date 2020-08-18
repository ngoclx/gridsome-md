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
  }
}
</page-query>

<script>
// import PageRelated from "~/components/PageRelated.vue";

export default {
  name: "WpPage",
  metaInfo() {
    return {
      title: this.$page.wpPage.title
    }
  }
};
</script>
