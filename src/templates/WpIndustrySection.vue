<template>
  <Layout :path="$page.wpIndustrySection.path" :ptitle="$page.wpIndustrySection.title" :pageAncestors="[]">
    <category-view name="industry-section" :is_portfolio="'portfolio'" :categoryTitle="'Industry Section: ' + $page.wpIndustrySection.title" :items="$page.wpIndustrySection.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  wpIndustrySection(path: $path) {
    title
    path
    belongsTo {
      edges {
        node {
          ... on WpPortfolio {
            id
            title
            path
            excerpt
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
  name: "WpIndustrySection",
  components: {
    CategoryView
  },
  metaInfo() {
    return {
      title: this.$page.wpIndustrySection.title,
    };
  },
};
</script>