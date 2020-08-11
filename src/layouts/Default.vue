<template>
  <div class="layout">

    <header-block name="block-header" />

    <slot/>

    <footer-block name="block-footer" />
  </div>
</template>


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
