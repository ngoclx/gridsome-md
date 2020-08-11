<template>
  <Layout>
    <div>
      <h1 v-html="$page.wpPage.title" />

      <div v-html="$page.wpPage.content" />
    </div>
</Layout>
</template>

<page-query>
query WpPage ($path: String!) {
  wpPage (path: $path) {
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
