<template>
  <div>
  <calendar-block />
  <footer class="site-footer">
    <div class="fat-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xl-3">
            <h2 id="insights-lastest-post-id">Insights</h2>

            <div
              class="insights-lastest-post"
              aria-labelledby="insights-lastest-post-id"
            >
              <ul>
                <li v-for="i in this.$static.latestInsights.edges" :key="i.key">
                  <g-link :to="i.node.path">
                    {{ i.node.title }}
                  </g-link>
                </li>
              </ul>

              <g-link
                class="text-uppercase read-more"
                to=""
                data-wpel-link="internal"
                rel="noopener noreferrer"
                >Read all insights</g-link
              >
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="footer-menu-item">
              <h2 id="services-nav-id">Services</h2>
              <nav aria-labelledby="services-nav-id">
                <ul>
                  <li
                    v-for="s in this.$static.servMenu.items"
                    :key="s.key"
                    class="menu-item"
                  >
                    <g-link :to="s.url | pathname">
                      {{ s.title }}
                    </g-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="footer-menu-item">
              <h2 id="technologies-nav-id">Technologies</h2>
              <nav aria-labelledby="technologies-nav-id">
                <ul>
                  <li
                    v-for="t in this.$static.techMenu.items"
                    :key="t.key"
                    class="menu-item"
                  >
                    <g-link :to="t.url | pathname">
                      {{ t.title }}
                    </g-link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="footer-menu-item">
              <h2 id="migrations-nav-id">Migrations</h2>
              <nav aria-labelledby="migrations-nav-id">
                <ul>
                  <li
                    v-for="m in this.$static.migMenu.items"
                    :key="m.key"
                    class="menu-item"
                  >
                    <g-link :to="m.url | pathname">
                      {{ m.title }}
                    </g-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <h2>Get in Touch</h2>
            <div class="contacts">
              <div class="contact-item">
                <p><strong>G’day Mate! Sydney Office</strong></p>
                <p>
                  Level 2, 243 King St <br />
                  Newtown, 2042 – Sydney
                </p>
              </div>
              <div class="contact-item">
                <p><strong>Xin chao! Danang Office</strong></p>
                <p>
                  31 Tran Phu Street, <br />
                  Hai Chau District - Danang
                </p>
              </div>
              <div class="contact-item">
                <p><strong>Ciao Belli! Rome Office</strong></p>
                <p>
                  Via delle Baleniere, 186 <br />
                  Ostia Lido, 00121 - Roma
                </p>
              </div>
              <g-link to="tel:1300811791" class="button pink"
                >1300 881 791</g-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-section">
      <div class="container">
        <div class="row">
          <div class="copy col-lg-8">
            <p>
              Digital Agency in Sydney specialising in web design, web
              development, user experience, accessibility and more. © @date-here
              Marameo Design Pty Ltd.
            </p>
          </div>
          <div class="terms-and-policy col-lg-4">
            <p>
              <g-link to="/privacy-policy">Privacy Policy</g-link> |
              <g-link to="/terms-of-use-of-website">Terms of Use</g-link> |
              <g-link to="/sitemap">Sitemap</g-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<static-query>
query {
  techMenu: wpMenu (id: "technologies-menu") {
    name
    items {
      title
      url
    }
  },
  servMenu: wpMenu (id: "services-menu") {
    name
    items {
      title
      url
    }
  },
  migMenu: wpMenu (id: "migrations-menu") {
    name
    items {
      title
      url
    }
  },
  latestInsights: allWpInsights (sortBy: "id", limit: 3) {
    edges
    {
      node {
        id
        title
        path
      }
    }
  },
}

</static-query>

<script>
// import Navbar from "~/components/Navbar.vue";
import CalendarBlock from "~/components/CalendarBlock.vue";

export default {
  name: "FooterBlock",
  components: {
     CalendarBlock,
  },
  filters: {
    pathname: function (value) {
      var url = new URL(value)
      return url.pathname
    }
  },
  mounted() {
    // console.log(this.$static.migMenu)
    // console.log(this.$static.latestInsights)
  },
};
</script>
