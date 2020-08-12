<template>
  <Layout>
    <div>
      <h1>Case studies</h1>

      <ul class="row post-list">
        <li
          v-for="item in this.$page.portfolios.edges"
          :key="item.id"
          class="col-md-6 col-xl-4 post-card"
        >
          <portfolio-teaser :node="item.node" />
        </li>
      </ul>

      <pager
        :info="this.$page.portfolios.pageInfo"
        linkClass="page-link rounded"
        class="pagination justify-content-center"
      />
    </div>
  </Layout>
</template>

<page-query>

query allWpPortfolio($page: Int) {
  portfolios: allWpPortfolio(perPage: 3, page: $page) @paginate {
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
      }
    }
  }
}
</page-query>

<script>
import PortfolioTeaser from "~/components/PortfolioTeaser.vue";
import { Pager } from "gridsome";

export default {
  components: {
    PortfolioTeaser,
    Pager,
  },
  metaInfo() {
    return {
      title: "Case studies",
    };
  },
  mounted() {
    console.log(this.$page.portfolios);
  },
};
</script>
