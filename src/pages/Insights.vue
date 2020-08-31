<template>
  <Layout path="/insights" ptitle="Insights">
    <div id="page" class="hfeed site grid-container container grid-parent">
      <div id="content" class="site-content">
        <all-insight-banner />
          <ul class="row post-list">
            <li
              v-for="item in this.$page.insights.edges"
              :key="item.id"
              class="col-md-6 col-xl-4 post-card"
            >
              <post-teaser :node="item.node" posttype="insights" />
            </li>
          </ul>
     <!-- <pager
        :info="this.$page.insights.pageInfo"
        linkClass="page-link rounded"
        class="pagination justify-content-center"
      /> -->
            <portfolio-related />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query allWpInsights {
  insights: allWpInsights {
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
        insightCategory{
          id
          title
          slug
        }
      }
    }
  }
}
</page-query>
<script>
import AllInsightBanner from "~/components/AllInsightBanner.vue"
import PostTeaser from "~/components/PostTeaser.vue"
import PortfolioRelated from "~/components/PortfolioRelated.vue"
//import { Pager } from "gridsome"

export default {
  components: {
    AllInsightBanner,
    PostTeaser,
    PortfolioRelated
    //Pager,
  },
  data() {
    return{
        insights: 'insights'
    }
  },
  metaInfo() {
    return {
      title: "Insights",
    };
  },
  mounted() {
    // console.log(this.$page.insights);
  },
};
</script>
