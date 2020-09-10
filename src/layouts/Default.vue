<template>
  <div class="layout">
    <header-block name="block-header" />
    <div class="breadcrumbs full-width">
      <div class="container">
        <nav aria-label="breadcrumb">
          <b-breadcrumb :items="breadcrumbItems()" v-if="breadcrumbItems().length"></b-breadcrumb>
        </nav>
      </div>
    </div>
    <slot/>

    <footer-block name="block-footer" :hideCalendar="hideCalendar" />

    <ClientOnly>
        <client-js />
    </ClientOnly>
  </div>
</template>


<style>
.breadcrumbs nav .breadcrumb .breadcrumb-item.active:after{
  display: none;
}
.case-studies-section .in-case-studies ul .post-reference-post article a {
    color: #04243f;
    text-decoration: none;
}
</style>


<script>
import HeaderBlock from "~/components/HeaderBlock.vue";
import FooterBlock from "~/components/FooterBlock.vue";
import ClientJs from "~/components/ClientJs.vue";

export default {
  name: "Layout",
  components: {
    HeaderBlock,
    FooterBlock,
    ClientJs
  },
  props: {
    hideCalendar:{
      type: Boolean,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
    ptitle: {
      type: String,
      required: false,
    },
    pageAncestors: {
      type: Array,
      required: true,
    }
  },
  methods: {
    changeDomain(value) {
      let siteUrl = 'https://marameodesign.com'
      let url = new URL(value)
      return siteUrl + url.pathname.replace('portfolio', 'case-studies')
    },

    breadcrumbItems() {
      let self = this

      if (typeof this.path === 'undefined' || this.path == '/') {
        return [];
      }

      // Else
      var items = []

      // Current page
      items.unshift({ text: self.ptitle, active: true })

      // Ancestor
      self.pageAncestors.forEach(function(ancestor) {
        items.unshift({ text: ancestor.title, href: self.changeDomain(ancestor.link) })
      })

      // Home
      items.unshift({ text: 'Home', href: '/' })

      return items
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'GTWalsheimPro Bold';
    src: url("../fonts/GTWalsheimPro-Bold.ttf");
    font-weight: 700;
}

@font-face {
    font-family: 'GTWalsheimPro Medium';
    src: url("../fonts/GTWalsheimPro-Medium.ttf");
    font-weight: 500;
}

@font-face {
    font-family: 'GTWalsheimPro MediumOblique';
    src: url("../fonts/GTWalsheimPro-MediumOblique.ttf");
    font-weight: 500;
}

@font-face {
    font-family: 'GTWalsheimPro Regular';
    src: url("../fonts/GTWalsheimPro-Regular.ttf");
    font-weight: 400;
}

@font-face {
    font-family: 'GTWalsheimPro RegularOblique';
    src: url("../fonts/GTWalsheimPro-RegularOblique.ttf");
    font-weight: 400;
}

@font-face {
    font-family: 'GTWalsheimPro Light';
    src: url("../fonts/GTWalsheimPro-Light.ttf");
    font-weight: 300;
}

@font-face {
    font-family: 'GTWalsheimPro LightOblique';
    src: url("../fonts/GTWalsheimPro-LightOblique.ttf");
    font-weight: 300;
}
</style>
