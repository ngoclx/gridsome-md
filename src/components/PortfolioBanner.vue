<template>
  <div class="head-portfolio full-width">
    <div class="container">
        <div class="row">
            <div class="col-xl-7">
                <header class="entry-header">
                    <h1 class="entry-title" itemprop="headline">{{ banner.title | decodeSpecialChars }}</h1>
                </header>
                <!-- .entry-header -->
                <div class="industry-section-terms portfolio-terms pink">
                    <span class="sr-only">Industry Section</span>
                    <ul>
                        <li v-for="item in banner.industrySectionTerms" :key="item.id">
                            <g-link :to="'/industry-section/'+ item.slug" data-wpel-link="internal" rel="noopener noreferrer">{{ item.name }}</g-link>
                        </li>
                    </ul>
                </div>
                <div class="excerpt" v-html="banner.excerpt"></div>
                <div class="service-provide-terms portfolio-terms blue">
                    <span class="sr-only">Service provided</span>
                    <ul>
                        <li v-for="item in banner.serviceProvideTerms" :key="item.id">
                            <g-link :to="'/service-provided/'+ item.slug" data-wpel-link="internal" rel="noopener noreferrer">{{ item.name }}</g-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-5">
                <div class="feat-img" v-if="banner.featuredMedia">
                  <g-image :src="banner.featuredMedia.sourceUrl"  :alt="banner.featuredMedia.altText" width="691" height="1024" class="attachment-large size-large wp-post-image" />
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: "portfolioBanner",
  props: {
    banner: {
      type: Object,
      required: true,
    },
  },
  filters: {
    decodeSpecialChars: function(value) {
      var he = require('he')
      return he.decode(value)
    },
  },
};
</script>
