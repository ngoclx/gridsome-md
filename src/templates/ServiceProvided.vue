<template>
  <Layout>
    <portfolio-category name="service-provided" :categoryTitle="'Service Provided: ' + $page.serviceProvided.title" :portfolios="$page.serviceProvided.belongsTo.edges" />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  serviceProvided(path: $path) {
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
  name: "ServiceProvided",
  components: {
    PortfolioCategory
  }
};
</script>
