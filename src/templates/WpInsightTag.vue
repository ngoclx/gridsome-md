<template>
  <Layout>
    <category-view name="insight-tag-section" :categoryTitle="'Insights Tag: ' + $page.wpInsightTag.title" :items="$page.wpInsightTag.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query wpInsightTag ($path: String!) {
  wpInsightTag (path: $path) {
    title
    belongsTo {
      edges {
        node {
          ... on WpInsights {
            id
            title
            path
            featuredMedia { 
              id
              sourceUrl
              title
              altText
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import CategoryView from "~/components/CategoryView.vue";

export default {
  name: "WpInsightTag",
  components: {
    CategoryView,
  },
  mounted() {
    console.log(this.$page.wpInsightTag)
  }
};
</script>
