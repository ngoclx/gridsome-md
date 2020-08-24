<template>
  <div class="container">
    <header class="page-header">
      <h1 class="page-title" v-html="categoryTitle"></h1>
    </header>
    <ul class="row post-list">
      <li
        v-for="item in items"
        :key="item.id"
        class="col-md-6 col-xl-4 post-card" v-bind:class="is_portfolio"
      >
        <post-teaser :node="item.node" />
      </li>
    </ul>
  </div>
</template>

<script>
import PostTeaser from "~/components/PostTeaser.vue";

export default {
  name: "CategoryView",
  components: {
    PostTeaser,
  },
  props: {
    categoryTitle: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    is_portfolio:{
      type: String,
      required: false,
    }
  }
};
</script>
