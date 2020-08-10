<template>
  <Layout>
    <div>
      <h1 v-html="$page.wpPortfolio.title" />

      <div v-html="$page.wpPortfolio.content" />

      <portfolio-related name="related-portfolios" :portfolios="$page.wpPortfolio.relatedPortfolios" />
    </div>
</Layout>
</template>

<page-query>
query WpPortfolio ($path: String!) {
  wpPortfolio (path: $path) {
    id
		title
		slug
    content
    relatedPortfolios { 
      id
      slug
      excerpt
      featuredMedia {
        id
        sourceUrl
        altText
        title
      }
    }
  }
}
</page-query>

<script>
import PortfolioRelated from "~/components/PortfolioRelated.vue";

export default {
  name: "WpPortfolio",
  components: {
    PortfolioRelated,
  }
};
</script>
