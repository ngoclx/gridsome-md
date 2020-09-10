<template>
  <Layout :path="$page.wpInsightTag.path" :ptitle="$page.wpInsightTag.title" :pageAncestors="[]">
    <category-view name="insight-tag-section" :categoryTitle="'Insights / ' + $page.wpInsightTag.title" :items="$page.wpInsightTag.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query wpInsightTag ($path: String!) {
  wpInsightTag (path: $path) {
    title
    path
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
  },
  metaInfo() {
    return {
      title: this.$page.wpInsightTag.title,
    };
  },
};
</script>
