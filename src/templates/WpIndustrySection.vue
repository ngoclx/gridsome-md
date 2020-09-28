<template>
  <Layout :path="$page.wpIndustrySection.path" :ptitle="$page.wpIndustrySection.title" :pageAncestors="[]">
    <category-view name="industry-section" :is_portfolio="'portfolio'" :categoryTitle="'Industry Section: ' + $page.wpIndustrySection.title" :items="$page.wpIndustrySection.belongsTo.edges" />   
  </Layout>
</template>

<page-query>
query ($path: String!) {
  wpIndustrySection(path: $path) {
    title
    path
    belongsTo {
      edges {
        node {
          ... on WpPortfolio {
            id
            title
            path
            excerpt
            featuredMedia { 
              id
              sourceUrl
              title
              altText
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import CategoryView from "~/components/CategoryView.vue";

export default {
  name: "WpIndustrySection",
  components: {
    CategoryView,
  },
  metaInfo() {
    return {
      title: this.$page.wpIndustrySection.title + " | Sydney Website Design + Web Development Agency » Marameo",
      meta: [
        {
          name: 'dc.title',
          content: this.$page.wpIndustrySection.title + ' | Sydney Website Design + Web Development Agency » Marameo'
        },
        // {
        //   name: 'dc.description',
        //   content: 'Review some of our projects below and learn how we solve problems to produce intelligent designs, deliver engaging experiences and build meaningful connections.'
        // },
        {
          name: 'dc.language',
          content: 'en_US',
        },
        {
          name: 'robots',
          content: 'noindex,nofollow',
        },
        {
          property: 'og:url',
          content: 'https://marameodesign.com'+this.$page.wpIndustrySection.path,
        },
        {
          property: 'og:site_name',
          content: 'Sydney Website Design + Web Development Agency » Marameo',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          property: 'og:type',
          content: 'object',
        },
        {
          property: 'og:title',
          content: this.$page.wpIndustrySection.title + ' - Sydney Website Design + Web Development Agency » Marameo',
        },
        // {
        //   property: 'og:description',
        //   content: 'Review some of our projects below and learn how we solve problems to produce intelligent designs, deliver engaging experiences and build meaningful connections.',
        // },
        {
          property: 'og:image',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/sydney-digital-agency.png'
        },
        {
          property: 'og:image:secure_url',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/sydney-digital-agency.png'
        },
        {
          property: 'og:image:alt',
          content: this.$page.wpIndustrySection.title
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: this.$page.wpIndustrySection.title + ' - Sydney Website Design + Web Development Agency » Marameo'
        },
        // {
        //   name: 'twitter:description',
        //   content: 'Review some of our projects below and learn how we solve problems to produce intelligent designs, deliver engaging experiences and build meaningful connections.'
        // },
        {
          name: 'twitter:image',
          content: 'https://cw.marameodesign.com/wp-content/uploads/2020/08/sydney-digital-agency.png'
        },
      ],
    };
  },
};
</script>