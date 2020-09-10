<template>
  <Layout path="/insights" ptitle="Insights" :pageAncestors="[]">
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
      title: "Insights | Sydney Website Design + Web Development Agency » Marameo",
      meta: [
        {
          name: 'dc.title',
          content: 'Insights | Sydney Website Design + Web Development Agency » Marameo'
        },
        {
          name: 'dc.description',
          content: 'A collection of useful resources for business owners, marketers and developers crafted by industry professionals.'
        },
        {
          name: 'dc.language',
          content: 'en_US',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'googlebot',
          content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        },
        {
          name: 'bingbot',
          content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        },
        {
          property: 'og:url',
          content: 'https://marameodesign.com/insights/',
        },
        {
          property: 'og:site_name',
          content: 'Sydney Website Design + Web Development Agency » Marameo',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:title',
          content: 'Insights | Sydney Website Design + Web Development Agency » Marameo',
        },
        {
          property: 'og:description',
          content: 'A collection of useful resources for business owners, marketers and developers crafted by industry professionals.',
        },
        {
          property: 'og:image',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/insights.png'
        },
        {
          property: 'og:image:secure_url',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/insights.png'
        },
        {
          property: 'og:image:alt',
          content: 'INSIGHTS'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: 'Insights | Sydney Website Design + Web Development Agency » Marameo'
        },
        {
          name: 'twitter:description',
          content: 'A collection of useful resources for business owners, marketers and developers crafted by industry professionals.'
        },
        {
          name: 'twitter:image',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/insights.png'
        },
      ],
    };
  },
  mounted() {
    // console.log(this.$page.insights);
  },
};
</script>
