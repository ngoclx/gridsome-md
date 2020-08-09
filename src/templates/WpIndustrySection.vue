<template>
  <Layout>
    <portfolio-category name="industry-section" :categoryTitle="'Industry Section: ' + $page.wpIndustrySection.title" :portfolios="$page.wpIndustrySection.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  wpIndustrySection(path: $path) {
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
  name: "WpIndustrySection",
  components: {
    PortfolioCategory
  }
};
</script>