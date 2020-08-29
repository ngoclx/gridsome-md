<template>
  <Layout>
    <div class="inside-article">
      <div class="entry-content" itemprop="text">
        <div class="narrow">
          <header class="entry-header">
            <div class="post-tag" v-if="$page.wpInsights.insightTag.length">
              <span class="sr-only">Tags:</span>

              <g-link
                v-for="tag in $page.wpInsights.insightTag" :key="tag.key"
                :to="tag.path"
                data-wpel-link="internal"
                rel="noopener noreferrer"
                >{{ tag.title }}<span class="comma" aria-hidden="true">, </span></g-link>

            </div>

            <h1 class="entry-title" v-html="$page.wpInsights.title" />

            <div class="author-article">
              <div class="row">
                <div class="author-avatar col-auto">
                  <g-image
                    :src="$page.wpInsights.authorInfo.avatar"
                    :alt="$page.wpInsights.authorInfo.name"
                  />
                </div>
                <div class="author-infor col">
                  <p
                    class="author-title"
                    itemprop="author"
                  >
                    <span class="sr-only">Author </span>
                    <span itemprop="name" v-html="$page.wpInsights.authorInfo.name" />
                  </p>
                  <p class="published">
                    <span class="sr-only">Published on </span>
                    <time datetime="2020-07-14" itemprop="datePublished">{{ $page.wpInsights.date | dmy }}</time
                    >
                  </p>
                </div>
              </div>
            </div>
          </header>
          <!-- .entry-header -->
        </div>
      </div>

      <div v-html="$page.wpInsights.content" />

      <latest-insights-block :masterInsight="$page.wpInsights.id"/>

    </div>

    <meta-info :headTags="$page.wpInsights.headTags" :title="$page.wpInsights.title" />
  </Layout>
</template>

<page-query>
query WpInsights ($path: String!) {
  wpInsights (path: $path) {
    id
    title
    slug
    path
    excerpt
    content
    date
    insightTag {
      title
      slug
      path
    }
    authorInfo {
      name
      avatar
    }
    headTags{
      tag
      content
      attributes{
        name
        content
        title
        property
      }
    }
  }
}
</page-query>

<script>
import moment from 'moment';
import LatestInsightsBlock from "~/components/LatestInsightsBlock.vue";
import MetaInfo from "~/components/MetaInfo.vue";

export default {
  name: "WpInsights",
  components: {
    LatestInsightsBlock,
    MetaInfo,
  },
  mounted() {
    console.log(this.$page.wpInsights);
  },
  filters: {
    dmy: function (value) {
      return moment(value).format('DD MMMM YYYY');
    }
  },
};
</script>
