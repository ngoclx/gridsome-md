<template>
  <Layout>
    <div>
      <h1 class="d-none" v-html="$page.wpInsightTag.title" />

      <div v-html="$page.wpInsightTag.content" />
    </div>
</Layout>
</template>

<page-query>
query wpInsightTag ($path: String!) {
  wpInsightTag (path: $path) {
    id
    title
    slug
    path
  }
}
</page-query>

<script>
// import InsightsRelated from "~/components/InsightsRelated.vue";

export default {
  name: "WpInsightTag",
  components: {
    // InsightsRelated,
  },
  mounted() {
    console.log(this.$page.wpInsightTag)
  }
};
</script>
