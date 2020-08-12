<template>
  <div v-html="this.$static.data.content" />
</template>


<static-query>
query {
  data: wpPage (id: 12) {
    content
  },
}
</static-query>
