<template>
  <div class="container">
    <header class="page-header">
      <h1 class="page-title" v-html="categoryTitle"></h1>
    </header>
    <ul class="row post-list">
      <li
        v-for="item in portfolios"
        :key="item.id"
        class="col-md-6 col-xl-4 post-card"
      >
        <portfolio-teaser :node="item.node" />
      </li>
    </ul>
  </div>
</template>

<script>
import PortfolioTeaser from "~/components/PortfolioTeaser.vue";

export default {
  name: "PortfolioCategory",
  components: {
    PortfolioTeaser,
  },
  props: {
    categoryTitle: {
      type: String,
      required: true,
    },
    portfolios: {
      type: Array,
      required: true,
    }
  },
  mounted () {
    console.log(666)
    console.log(this.portfolios)
  }
};
</script>
