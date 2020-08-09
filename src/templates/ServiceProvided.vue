<template>
  <Layout>
    <h1>{{ $page.serviceProvided.title }}</h1>
    <ul>
      <li v-for="edge in $page.serviceProvided.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  serviceProvided(path: $path) {
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
