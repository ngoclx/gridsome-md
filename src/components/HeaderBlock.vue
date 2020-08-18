<template>
  <div class="the-header">
    <header
      id="masthead"
      class="site-header"
      role="banner"
    >
      <div class="container insideHeader">
        <div class="site-logo">
          <g-link to="/">
            <g-image
              class="header-image"
              :alt="$static.metadata.siteNam"
              src="~/images/marameo-logo.svg"
              :title="$static.metadata.siteNam"
            />
          </g-link>
        </div>

        <navbar name="navigation-bar" /> 

      </div>
      <div class="myHeaderWidgets">
            <div class="d-xl-none mobile-logo">
              <div class="site-logo"><g-image class="header-image"
              :alt="$static.metadata.siteNam"
              src="~/images/marameo-logo.svg"
              :title="$static.metadata.siteNam"
            /></div>
          </div>
          <g-link to="tel:1300811791" class="d-xl-none call-mobile button pink"
                >1300 881 791</g-link>
            <button class="menu-toggle d-flex d-xl-none justify-content-center align-items-center"
                aria-controls="menu-mobile" aria-expanded="false">
                <i class="fas fa-bars" aria-hidden="true"></i>
                <i class="fas fa-times" aria-hidden="true"></i>
                <span class=" sr-only mobile-menu">Menu</span>
            </button>
        </div>
    </header>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  name: "HeaderBlock",
  components: {
    Navbar,
  },
};
</script>
