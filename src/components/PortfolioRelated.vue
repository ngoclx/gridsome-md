<template>
  <section class="archive-cont full-width feat-news post-card portfolio">
    <div class="container">
      
      <h2 class="title-section text-center">Related <span>case studies</span></h2>
      
      <ul class="row post-list">
        <li
          v-for="item in portfolios"
          :key="item.id"
          class="col-md-6 col-xl-4 post-card"
        >
          <portfolio-teaser :node="item" />
        </li>
    </ul>
    </div>
  </section>
</template>

<script>
import PortfolioTeaser from "~/components/PortfolioTeaser.vue";

export default {
  name: "PortfolioRelated",
  components: {
    PortfolioTeaser,
  },
  props: {

    portfolios: {
      type: Array,
      required: true,
    }
  }
};
</script>
