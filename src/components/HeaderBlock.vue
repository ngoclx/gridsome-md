<template>
  <div class="the-header">
    <header
      id="masthead"
      class="site-header"
      role="banner"
    >
      <div class="container insideHeader">
        <div class="site-logo">
          <h1>
            <g-image
              class="header-image"
              :alt="$static.metadata.siteNam"
              src="~/images/marameo-logo.svg"
              :title="$static.metadata.siteNam"
            />
          </h1>
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
  name: "Layout",
  components: {
    Navbar,
  },
};
</script>
