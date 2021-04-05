<template>
  <div v-if="this.$static.data && this.$static.data != 'null'" v-html="this.$static.data.content" />
</template>


<static-query>
query {
  data: wpPage (id: 12) {
    content
  },
}
</static-query>
