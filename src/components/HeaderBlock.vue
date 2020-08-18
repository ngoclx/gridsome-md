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
