<template>
  <section class="archive-bg archive-cont full-width feat-news post-card">
    <div class="container" >
      <h2 class="title-section text-center" >
        Lastest <span >insights</span>
      </h2>

      <ul class="row post-list" >
        <li class="col-lg-4 col-md-6" v-for="item in latest3" :key="item.key">
          <article
            class="hoverEffect"
          >
          <g-link :to="item.node.path" data-wpel-link="internal" rel="noopener noreferrer">
            <div class="inside-article" >
              <header class="entry-header" >
                <h3
                  class="entry-title"
                >
                  {{ item.node.title }}
                </h3>
              </header>
              <div class="post-image" >
                <div class="in-post-image" >
                  <g-image v-if="item.node.featuredMedia" :src="item.node.featuredMedia.sourceUrl" />
                  <p class="cate-name blue" v-for="term in item.node.insightCategory" :key="term.key" v-html="term.title" />
                </div>
              </div>
              <p  
                  class="read-more"
                  >Read more
                  <i
                    class="fas fa-arrow-right"
                    aria-hidden="true"
                  ></i
                  ><span class="sr-only" >
                    of the post "{{ item.node.title }}"</span
                  >
              </p>
            </div>
            </g-link>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<static-query>
query {
latestInsights: allWpInsights (limit: 4) {
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
        insightCategory{
          id
          title
          slug
        }
      }
    }
  }
}
</static-query>
<style>
.post-card article >a{
  text-decoration: none;
  color: #1d304a;
}
.post-card article > a:hover h3{
  color: #da2e74;
}
</style>
<script>

export default {
  name: "LatestInsightsBlock",
  props: {
    masterInsight: {
      type: Number,
      required: false,
    }
  },
  computed: {
    latest3() {
      if (typeof this.masterInsight == 'undefined') {
        var latest3 = this.$static.latestInsights.edges.slice(0, 3)       
        
        return latest3
      }
      else {
        var latest3 = [];
        var count = 0
        var i = 0
        while (count < 3) {
          if (this.$static.latestInsights.edges[i].node.id != this.masterInsight) {
            latest3[count++] = this.$static.latestInsights.edges[i]
          }
          i++
        }

        return latest3
      }
    },
  },
};
</script>

