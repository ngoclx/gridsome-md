<template>
  <li
    :class="wrapperClasses + node.classes"
  >
    <g-link
      :to="pathname"
      class="mega-menu-link"
      data-wpel-link="internal"
      rel="noopener noreferrer"
      v-if="(node.item_type === 'link')"
    >
    {{ node.title }}
    </g-link>

    <button
      class="mega-indicator mega-indicator-button top-level d-xl-none"
      v-if="hasChild && node.item_type == 'link'"
    >
      <span class="sr-only">{{ node.title }} submenu</span>
    </button>

    <submenu :items="node.child_items" v-if="hasChild  && node.item_type == 'link'" />

    <div
    v-html="node.copy"
    v-if="(node.item_type === 'html')" />

  </li>
</template>

<script>
import Submenu from "~/components/Submenu.vue";

export default {
  name: "MenuItem",
  data:{
    isHovering: false
  },
  components: {
    Submenu
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  computed: {
    wrapperClasses() {
      if (this.node.item_type == 'link' || this.node.item_type == 'html') {
        if (typeof this.node.child_items != 'undefined' && this.node.child_items.length) {
          return "mega-menu-item mega-menu-megamenu mega-align-bottom-left mega-menu-item-has-children mega-with-button mega-menu-grid js "
        } else {
          return "mega-menu-item mega-menu-megamenu mega-align-bottom-left "
        }
      }
      else if (this.node.item_type == 'column') {
        return "mega-menu-column mega-menu-columns-3-of-12 "
      }
    },
    hasChild() {
      return typeof this.node.child_items != 'undefined' && this.node.child_items.length;
    },
    pathname() {
      var url = new URL(this.node.url);
      return url.pathname;
    }
  },
  // mounted() {
  //   console.log('iteeem')
  //   console.log(this.node);
  // },
};
</script>
<style>
  #mega-menu-wrap-primary #mega-menu-primary>li.mega-menu-megamenu.mega-menu-item.mega-menu-item-has-children:hover >ul.mega-sub-menu{
      visibility: visible;
  } 
  .main-navigation #mega-menu-primary>li.mega-menu-item.mega-menu-item-has-children .mega-menu-column .mega-menu-item{
    padding: 0!important
  }
  @media (min-width: 1200px){
    .main-navigation #mega-menu-primary>li.mega-menu-item.mega-menu-item-has-children>.mega-sub-menu{
          width: 88rem!important;
        left: 26rem!important;
        margin-top: 18px!important;
        border-radius: 5px;
        padding: 2rem 2rem 2.5rem!important;
        border: 1px solid #ccc!important;
        border-top: 4px solid #0caade!important;
    }
  }
</style>
