<template>
  <Layout>
    <div>
      <h1 class="d-none" v-html="$page.wpInsights.title" />

      <div v-html="$page.wpInsights.content" />
    </div>
</Layout>
</template>

<page-query>
query WpInsights ($path: String!) {
  wpInsights (path: $path) {
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
// import InsightsRelated from "~/components/InsightsRelated.vue";

export default {
  name: "WpInsights",
  components: {
    // InsightsRelated,
  },
  mounted() {
    console.log(this.$page.wpInsights)
  }
};
</script>
