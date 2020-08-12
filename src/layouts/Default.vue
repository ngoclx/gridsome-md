<template>
  <div class="layout">

    <header-block name="block-header" />

    <slot/>

    <footer-block name="block-footer" />
  </div>
</template>

<style>
  @import 'https://use.fontawesome.com/releases/v5.9.0/css/all.css';
</style>
<script>
import HeaderBlock from "~/components/HeaderBlock.vue";
import FooterBlock from "~/components/FooterBlock.vue";

export default {
  name: "Layout",
  components: {
    HeaderBlock,
    FooterBlock,
  }
};
</script>
