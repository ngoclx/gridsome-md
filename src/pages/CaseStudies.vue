<template>
  <Layout path="/case-studies" ptitle="Case Studies">
    <div id="page" class="hfeed site grid-container container grid-parent">
      <div id="content" class="site-content">
        <case-studies-banner />
        <ul class="row post-list">
          <li
            v-for="item in this.$page.portfolios.edges"
            :key="item.id"
            class="col-md-6 col-xl-4 post-card portfolio"
          >
            <post-teaser :node="item.node" posttype="portfolio" />
          </li>
        </ul>
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
import CaseStudiesBanner from "~/components/CaseStudiesBanner.vue";
import PostTeaser from "~/components/PostTeaser.vue";
import LatestInsightsBlock from "~/components/LatestInsightsBlock.vue";
// import { Pager } from "gridsome"

export default {
  components: {
    LatestInsightsBlock,
    CaseStudiesBanner,
    PostTeaser,
    // Pager,
  },
  data() {
    return {
      portfolios: "portfolios",
    };
  },
  metaInfo() {
    return {
      title: "Case studies | Sydney Website Design + Web Development Agency » Marameo",
      meta: [
        {
          name: 'dc.title',
          content: 'Case studies | Sydney Website Design + Web Development Agency » Marameo'
        },
        {
          name: 'dc.description',
          content: 'Review some of our projects below and learn how we solve problems to produce intelligent designs, deliver engaging experiences and build meaningful connections.'
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
          content: 'https://marameodesign.com/case-studies/',
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
          content: 'Sydney Website Design + Web Development Agency » Marameo',
        },
        {
          property: 'og:description',
          content: 'Review some of our projects below and learn how we solve problems to produce intelligent designs, deliver engaging experiences and build meaningful connections.',
        },
        {
          property: 'og:image',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/case-studies.png'
        },
        {
          property: 'og:image:secure_url',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/case-studies.png'
        },
        {
          property: 'og:image:alt',
          content: 'CASE STUDIES'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: 'Case studies | Sydney Website Design + Web Development Agency » Marameo'
        },
        {
          name: 'twitter:description',
          content: 'Review some of our projects below and learn how we solve problems to produce intelligent designs, deliver engaging experiences and build meaningful connections.'
        },
        {
          name: 'twitter:image',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/case-studies.png'
        },
      ],
    };
  },
  mounted() {
    // console.log(this.$page.portfolios);
  },
};
</script>
