<template>
  <div class="container">
    <div id="menu-mobile">
      <div class="in_menu-mobile">
        <div class="container">
          <nav
            id="site-navigation"
            aria-label="Main navigation"
            class="main-navigation"
          >
            <div class="container">
              <div class="inside-navigation grid-container grid-parent">
                <div id="mega-menu-wrap-primary" class="mega-menu-wrap">
                  <div class="mega-menu-toggle">
                    <div class="mega-toggle-blocks-left"></div>
                    <div class="mega-toggle-blocks-center"></div>
                    <div class="mega-toggle-blocks-right">
                      <div
                        class="mega-toggle-block mega-menu-toggle-block mega-toggle-block-1"
                        id="mega-toggle-block-1"
                        tabindex="0"
                      >
                        <span
                          class="mega-toggle-label"
                          role="button"
                          aria-expanded="false"
                          ><span class="mega-toggle-label-closed">MENU</span
                          ><span class="mega-toggle-label-open"
                            >MENU</span
                          ></span
                        >
                      </div>
                    </div>
                  </div>
                  <ul
                    id="mega-menu-primary"
                    class="mega-menu max-mega-menu mega-menu-horizontal" 
                  >
                    <menu-item
                      v-for="item in this.$static.wpMenu.items"
                      :node="item"
                      :key="item.key"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  wpMenu(id: "custom-mega-menu") {
    id
    name
    items {
      item_type
      image
      copy
      title
      classes
      guid
      url
      child_items {
        item_type
        image
        copy
        title
        classes
        guid
        url
        child_items {
          item_type
          image
          copy
          title
          classes
          guid
          url          
        }
      }
    }
  }
}

</static-query>

<script>
export default {
  name: "Navbar"
};
</script>
