<template>
  <Layout>
    <portfolio-category name="industry-section" :categoryTitle="'Industry Section: ' + $page.industrySection.title" :portfolios="$page.industrySection.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  industrySection(path: $path) {
    title
    belongsTo {
      edges {
        node {
          ... on Portfolio {
            id
            title
            path
            excerpt
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
  name: "IndustrySection",
  components: {
    PortfolioCategory
  }
};
</script>