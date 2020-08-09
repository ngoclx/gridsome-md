<template>
  <Layout>
    <portfolio-category name="service-provide" :categoryTitle="'Service Provided: ' + $page.wpServiceProvide.title" :portfolios="$page.wpServiceProvide.belongsTo.edges" />
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
import PortfolioCategory from "~/components/PortfolioCategory.vue";

export default {
  name: "WpServiceProvide",
  components: {
    PortfolioCategory
  }
};
</script>
