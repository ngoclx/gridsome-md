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
  name: "Homepage",
  created() {
    // console.log(this.$page.wpPage)
  },
  // metaInfo: {
  //   script: [
  //     { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js", async: true, defer: true },
  //     { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", async: true, defer: true },
  //     { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", async: true, defer: true },
  //   ]
  // }
};
</script>
