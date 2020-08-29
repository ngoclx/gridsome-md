<template>
  <section class="archive-cont full-width feat-news post-card portfolio">
    <div class="container">
      <h2 class="title-section text-center">
        Related <span>case studies</span>
      </h2>

      <ul class="row post-list">
        <li
          v-for="item in related3"
          :key="item.id"
          class="col-md-6 col-xl-4 post-card"
        >
          <post-teaser :node="item" posttype="portfolio" />
        </li>
      </ul>
    </div>
  </section>
</template>

<static-query>
query {
relatedPortfolio: allWpPortfolio (limit: 3) {
  edges
    {
      node
      {
        id
        title
        path
        featuredMedia {
          id
          sourceUrl
          altText
          title
        }
        serviceProvide{
          id
          title
          slug
        }
        industrySectionTerms {
          name
        }
      }
    }
  }
}
</static-query>

<script>
import PostTeaser from "~/components/PostTeaser.vue";

export default {
  name: "PortfolioRelated",
  components: {
    PostTeaser,
  },
  props: {
    portfolios: {
      type: Array,
      required: false,
    },
  },
  computed: {
    related3() {
      if (typeof this.portfolios == 'undefined') {
        var related3 = [];
        this.$static.relatedPortfolio.edges.forEach(function(item) {
          related3.push(item.node)
        })

        return related3
      }
      else {
        return this.portfolios
      }
    },
  },
};
</script>
