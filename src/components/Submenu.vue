<template>
  <ul class="mega-sub-menu">
    <li class="mega-menu-row">
      <ul class="mega-sub-menu">
        <menu-column v-for="item in items" :items="item.child_items" :key="item.key" />
      </ul>
    </li>
  </ul>
</template>

<script>
import MenuColumn from "~/components/MenuColumn.vue";

export default {
  name: "Submenu",
  components: {
    MenuColumn
  },
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
