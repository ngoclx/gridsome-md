<template>
  <Layout>
    <div class="single-portfolio">
      <div id="page" class="hfeed site grid-container container grid-parent">
        <div id="content" class="site-content">
          <div class="container">
            <portfolio-banner :banner="$page.wpPortfolio" />
            <h1 class="d-none" v-html="$page.wpPortfolio.title" />
            <div v-html="$page.wpPortfolio.content" />

            <portfolio-related name="related-portfolios" :portfolios="$page.wpPortfolio.relatedPortfolios" />
          </div>
      </div>
    </div>
  </div>
</Layout>
</template>

<page-query>
query WpPortfolio ($path: String!) {
  wpPortfolio (path: $path) {
    id
    title
    slug
    path
    excerpt
    content
    featuredMedia{
      sourceUrl
      altText
    }
    industrySectionTerms{
      termId
      name
      slug
    }
    serviceProvideTerms{
      termId
      name
      slug
    }
    relatedPortfolios { 
      id
      slug
      title
      path
      excerpt
      featuredMedia {
        id
        sourceUrl
        altText
        title
      }
    }
    headTags{
      tag
      content
      attributes{
        name
        content
        title
        property
      }
    }
  }
}
</page-query>

<script>
import PortfolioRelated from "~/components/PortfolioRelated.vue";
import PortfolioBanner from "~/components/PortfolioBanner.vue";

export default {
  name: "WpPortfolio",
  components: {
    PortfolioRelated,
    PortfolioBanner,
  },
  mounted() {
    console.log(this.$page.wpPortfolio)
  },
  metaInfo() {
    var metaArr = [];
    var metaAttr = [];
    if (typeof this.$page.wpPortfolio.headTags != 'undefined') {
      this.$page.wpPortfolio.headTags.forEach(function(item) {
        metaArr.push(item.attributes);
      });
    }
    metaArr.forEach(function(item) {
      if(typeof item === 'object' && item !== null){
        metaAttr.push(
          {
            name : item.name,
            property: item.property,
            content: item.content
          }
        );
      }
    });
    return {
      title: this.$page.wpPortfolio.title,
      meta: metaAttr
    };
  },
};
</script>
