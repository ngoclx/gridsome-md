<template>
  <section class="archive-bg archive-cont full-width feat-news post-card">
    <div class="container" >
      <h2 class="title-section text-center" >
        Lastest <span >insights</span>
      </h2>
      <ul class="row post-list" >
        <li class="col-lg-4 col-md-6" v-for="item in this.$static.latestInsights.edges" :key="item.key">
          <article
            class="hoverEffect cardClick"
          >
            <div class="inside-article" >
              <header class="entry-header" >
                <h3
                  class="entry-title"
                >
                  <g-link
                    :to="item.node.path"
                    >{{ item.node.title }}</g-link>
                </h3>
              </header>
              <div class="post-image" >
                <div class="in-post-image" >
                  <g-image :src="item.node.featuredMedia.sourceUrl" />
                  <p class="cate-name blue" >
                    web development
                  </p>
                </div>
              </div>
              <p >
                  <g-link
                    :to="item.node.path"
                  class="read-more"
                  >Read more
                  <i
                    class="fas fa-arrow-right"
                    aria-hidden="true"
                  ></i
                  ><span class="sr-only" >
                    of the post "{{ item.node.title }}"</span
                  ></g-link>
              </p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<static-query>
query {
latestInsights: allWpInsights (limit: 3) {
  edges
    {
      node
      {
        title
        path
        featuredMedia {
          id
          sourceUrl
          altText
          title
        }
      }
    }
  }
}
</static-query>
