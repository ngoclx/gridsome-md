<template>
  <div class="container">
    <header class="page-header">
      <h1 class="page-title" v-html="categoryTitle"></h1>
    </header>
    <ul class="row post-list">
      <li
        v-for="item in portfolios"
        :key="item.id"
        class="col-md-6 col-xl-4 post-card"
      >
        <portfolio-teaser :node="item.node" />
      </li>
    </ul>
  </div>
</template>

<static-query>
query WpMenu(id: "custom-mega-menu") {
      id
      name
      items {
        item_type
        image
        copy
        slug
        title
        classes
        guid
        url
        child_items {
          item_type
          image
          copy
          slug
          title
          classes
          guid
          url
          child_items {
            item_type
            image
            copy
            slug
            title
            classes
            guid
            url
            child_items {
              item_type
              image
              copy
              slug
              title
              classes
              guid
              url
            }
          }
        }
      }
  }
</static-query>
