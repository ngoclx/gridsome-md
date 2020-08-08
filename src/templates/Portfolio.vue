<template>
  <Layout>
    <div>
      <h1 v-html="$page.portfolio.title" />
      <div v-html="$page.portfolio.content" />
    </div>
</Layout>
</template>

<page-query>
query Portfolio ($path: String!) {
  portfolio (path: $path) {
    title
    content
  }
}
</page-query>