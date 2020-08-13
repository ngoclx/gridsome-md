<template>
  <Layout>
    <div>
      <h1 class="d-none" v-html="$page.wpPage.title" />

      <div v-html="$page.wpPage.content" />
    </div>
</Layout>
</template>

<page-query>
query WpPage {
  wpPage (id: 8) {
    id
    title
    slug
    path
    excerpt
    content
  }
}
</page-query>

<script>

export default {
  name: "WpPage",
  created() {
    console.log(this.$page.wpPage)
  }
};
</script>
