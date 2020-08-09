<template>
  <Layout>
    <h1>{{ $page.industrySection.title }}</h1>
    <ul>
      <li v-for="edge in $page.industrySection.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  industrySection(path: $path) {
    title
    belongsTo {
      edges {
        node {
          ... on Portfolio {
            id
            title
            path
          }
        }
      }
    }
  }
}
</page-query>
