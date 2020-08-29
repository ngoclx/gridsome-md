<template>
  <Layout>
    <div id="page" class="hfeed site grid-container container grid-parent">
      <div id="content" class="site-content">
        <case-studies-banner />
          <ul class="row post-list">
            <li
              v-for="item in this.$page.portfolios.edges"
              :key="item.id"
              class="col-md-6 col-xl-4 post-card portfolio"
            >
              <post-teaser :node="item.node" :posttype="portfolios" />
            </li>
          </ul>
      <!-- <pager
        :info="this.$page.portfolios.pageInfo"
        linkClass="page-link rounded"
        class="pagination justify-content-center"
      /> -->

      <latest-insights-block />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query allWpPortfolio {
  portfolios: allWpPortfolio {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
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
        industrySectionTerms{
          termId
          name
          slug
        }
      }
    }
  }
}
</page-query>

<script>
import CaseStudiesBanner from "~/components/CaseStudiesBanner.vue"
import PostTeaser from "~/components/PostTeaser.vue"
import LatestInsightsBlock from "~/components/LatestInsightsBlock.vue"
// import { Pager } from "gridsome"

export default {
  components: {
    LatestInsightsBlock,
    CaseStudiesBanner,
    PostTeaser,
    // Pager,
  },
  data() {
    return{
        portfolios: 'portfolios'
    }
  },
  metaInfo() {
    return {
      title: "Case studies",
    };
  },
  mounted() {
    // console.log(this.$page.portfolios);
  },
};
</script>
