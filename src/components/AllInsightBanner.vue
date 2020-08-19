<template>
  <div v-html="this.$static.data.content" />
</template>


<static-query>
query {
  data: wpPage (id: 807) {
    content
  },
}
</static-query>
