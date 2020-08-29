<template>
  <Layout>
    <div class="single-portfolio">
      <div id="page" class="hfeed site grid-container container grid-parent">
        <div id="content" class="site-content">
          <div class="container">
            <portfolio-banner :banner="$page.wpPortfolio" />
            <h1 class="d-none" v-html="$page.wpPortfolio.title" />
            <div v-html="$page.wpPortfolio.content" />

            <portfolio-related
              name="related-portfolios"
              :portfolios="$page.wpPortfolio.relatedPortfolios"
            />
          </div>
        </div>
      </div>
    </div>

    <meta-info
      :headTags="$page.wpPortfolio.headTags"
      :title="$page.wpPortfolio.title"
    />
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
import MetaInfo from "~/components/MetaInfo.vue";

export default {
  name: "WpPortfolio",
  components: {
    PortfolioRelated,
    PortfolioBanner,
    MetaInfo,
  },
};
</script>
