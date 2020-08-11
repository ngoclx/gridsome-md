<template>
  <li class="mega-menu-column mega-menu-columns-3-of-12">
    <ul class="mega-sub-menu">
      <menu-item v-for="item in items" :node="item" :key="item.key" />
    </ul>
  </li>
</template>

<script>
export default {
  name: "MenuColumn",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  // mounted() {
  //   console.log(this.items);
  // },
};
</script>
