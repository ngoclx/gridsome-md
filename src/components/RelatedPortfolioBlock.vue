<template>
  <section class="archive-bg archive-cont full-width feat-news post-card portfolio">
    <div class="container" >
      <h2 class="title-section text-center" >
        Related <span >Case studies</span>
      </h2>

      <ul class="row post-list" >
        <li class="col-lg-4 col-md-6" v-for="item in related3" :key="item.key">
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
                  <p class="cate-name pink" v-for="term in item.node.serviceProvide" :key="term.key" v-html="term.title" />
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
relatedPortfolio: allWpPortfolio (limit: 4) {
  edges
    {
      node
      {
        id
        title
        path
        featuredMedia {
          id
          sourceUrl
          altText
          title
        }
        serviceProvide{
          id
          title
          slug
        }
      }
    }
  }
}
</static-query>

<script>

export default {
  name: "RelatedPortfolioBlock",
  props: {
    masterPortfolio: {
      type: Number,
      required: false,
    }
  },
  computed: {
    related3() {
      if (typeof this.masterPortfolio == 'undefined') {
        var related3 = this.$static.relatedPortfolio.edges.slice(0, 3)       
        
        return related3
      }
      else {
        var related3 = [];
        var count = 0
        var i = 0
        while (count < 3) {
          if (this.$static.relatedPortfolio.edges[i].node.id != this.masterPortfolio) {
            related3[count++] = this.$static.relatedPortfolio.edges[i]
          }
          i++
        }

        return related3
      }
    },
  },
};
</script>

