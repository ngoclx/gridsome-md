<template>
  <div class="layout">

    <header-block name="block-header" />

    <slot/>

  </div>
</template>


<script>
import HeaderBlock from "~/components/HeaderBlock.vue";

export default {
  name: "Layout",
  components: {
    HeaderBlock,
  }
};
</script>
