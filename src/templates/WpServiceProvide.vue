<template>
  <Layout>
    <category-view name="service-provide" :is_portfolio="'portfolio'" :categoryTitle="'Service Provided: ' + $page.wpServiceProvide.title" :items="$page.wpServiceProvide.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  wpServiceProvide(path: $path) {
    title
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
  name: "WpServiceProvide",
  components: {
    CategoryView
  },
  metaInfo() {
    return {
      title: this.$page.wpServiceProvide.title,
    };
  },
};
</script>
