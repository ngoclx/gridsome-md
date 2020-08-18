<template>
  <div class="layout">

    <header-block name="block-header" />

    <slot/>

    <footer-block name="block-footer" />
  </div>
</template>
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
<script>
import HeaderBlock from "~/components/HeaderBlock.vue";
import FooterBlock from "~/components/FooterBlock.vue";

export default {
  name: "Layout",
  components: {
    HeaderBlock,
    FooterBlock,
  },
}
</script>
