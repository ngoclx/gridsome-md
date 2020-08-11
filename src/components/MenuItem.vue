<template>
  <g-link
    :to="link"
    v-html="title"
    class="mega-menu-link"
    data-wpel-link="internal"
    rel="noopener noreferrer"
    />
</template>

<script>

export default {
  name: "MenuItem",
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    children: {
      type: Array,
      required: true,
    }
  }
};
</script>