<template>
  <article
    class="hoverEffect"
    itemtype="https://schema.org/CreativeWork"
    itemscope=""
  >
  <g-link :to="node.path" data-wpel-link="internal" rel="noopener noreferrer" >
    <div class="inside-article" >
      <header class="entry-header" >
        <h2 class="entry-title" itemprop="headline" >
          <g-link
            :to="node.path"
            rel="bookmark noopener noreferrer"
            data-wpel-link="internal"
            >{{ node.title | decodeSpecialChars }}</g-link>
        </h2>
      </header>
      <div class="post-image" >
        <div class="in-post-image" >
          <g-image v-if="node.featuredMedia" :src="node.featuredMedia.sourceUrl" width="190" height="300" class="attachment-medium size-medium wp-post-image" />

          <!-- For portfolio specifically -->
          <template  v-if="posttype === 'insights'">
            <p class="cate-name blue" v-for="term in node.insightCategory" :key="term.key" v-html="term.title"></p>
          </template>
          <template  v-else>
            <p class="cate-name pink" v-for="term in node.industrySectionTerms" :key="term.key" v-html="term.name" />
          </template>
        </div>
      </div>
      <div class="entry-summary" itemprop="text" v-html="node.excerpt" v-if="node.excerpt" />
      
      <p
          class="read-more"
          >Read more
          <i
            class="fas fa-arrow-right"
            aria-hidden="true"
          ></i
          ><span class="sr-only" >
            of the post "{{ node.title | decodeSpecialChars }}"</span
          >
      </p>
    </div>
    </g-link>
  </article>
</template>
<style>
.post-card article >a{
  text-decoration: none;
}
</style>
<script>
export default {
  name: "PostTeaser",
  props: {
    node: {
      type: Object,
      required: true,
    },
    posttype:{
      type: String,
      required: false,
    }
  },
  filters: {
    decodeSpecialChars: function(value) {
      var he = require('he')
      return he.decode(value)
    },
  },
};
</script>
