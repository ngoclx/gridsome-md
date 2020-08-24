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

    <footer-block name="block-footer" />

    <ClientOnly>
        <client-js />
    </ClientOnly>
  </div>
</template>


<style>
.breadcrumbs nav .breadcrumb .breadcrumb-item.active:after{
  display: none;
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
  methods: {
    breadcrumbItems() {
      // For server
      if (typeof window == 'undefined') {
        return [];
      }

      var path = window.location.pathname
      var elems = path.split("/")
      var filtered = _.reject(elems, _.isEmpty)

      // No breadcrumb on homepage
      if (filtered.length == 0) {
        return []
      }

      // Else
      var items = []
      var first = true

      while (filtered.length > 0)
      {
        var currentPath = "/" + filtered.join("/")
        var last = filtered.pop()

        var pageTitle = _.replace(last, '-', ' ')
        pageTitle = _.startCase(pageTitle)

        if (first) {      
          first = false
          items.unshift({ text: pageTitle, active: true })
        }
        else {
          items.unshift({ text: pageTitle, href: currentPath })
        }
      }

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
