<template>
  <Layout>
    <div>
      <h1 v-html="$page.wpPortfolio.title" />
      <div v-html="$page.wpPortfolio.content" />
    </div>
</Layout>
</template>

<page-query>
query WpPortfolio ($path: String!) {
  wpPortfolio (path: $path) {
    title
    content
  }
}
</page-query>