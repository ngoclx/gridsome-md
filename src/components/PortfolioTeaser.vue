<template>
  <article
    class="hoverEffect cardClick"
    id="post-274"
    itemtype="https://schema.org/CreativeWork"
    itemscope=""
  >
    <div class="inside-article" >
      <header class="entry-header" >
        <h2 class="entry-title" itemprop="headline" >
          <a
            :href="node.path"
            rel="bookmark noopener noreferrer"
            data-wpel-link="internal"
            v-html="node.title" />
        </h2>
      </header>
      <div class="post-image" >
        <div class="in-post-image" >
          <img
            width="190"
            height="300"
            src="http://dev.marameodesign.com/wp-content/uploads/2020/08/THE-GEORGE-INSTITUTE-Screen-190x300.png"
            class="attachment-medium size-medium wp-post-image"
            alt="THE GEORGE INSTITUTE Screen"
            itemprop="image"
            srcset="
              http://dev.marameodesign.com/wp-content/uploads/2020/08/THE-GEORGE-INSTITUTE-Screen-190x300.png    190w,
              http://dev.marameodesign.com/wp-content/uploads/2020/08/THE-GEORGE-INSTITUTE-Screen-649x1024.png   649w,
              http://dev.marameodesign.com/wp-content/uploads/2020/08/THE-GEORGE-INSTITUTE-Screen-768x1212.png   768w,
              http://dev.marameodesign.com/wp-content/uploads/2020/08/THE-GEORGE-INSTITUTE-Screen-973x1536.png   973w,
              http://dev.marameodesign.com/wp-content/uploads/2020/08/THE-GEORGE-INSTITUTE-Screen-1298x2048.png 1298w
            "
            sizes="(max-width: 190px) 100vw, 190px"
          />
        </div>
      </div>
      <div class="entry-summary" itemprop="text" v-html="node.excerpt" />
      <p>
        <a
          :href="node.path"
          class="read-more"
          data-wpel-link="internal"
          rel="noopener noreferrer"  
          >Read more
          <i
            class="fas fa-arrow-right"
            aria-hidden="true"
          ></i
          ><span class="sr-only" >
            of the post "{{ node.title }}"</span
          ></a
        >
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "PortfolioTeaser",
  props: {
    node: {
      type: Object,
      required: true,
    }
  },
};
</script>
