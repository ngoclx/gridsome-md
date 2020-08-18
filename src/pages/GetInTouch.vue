<template>
  <Layout>
    <div class="container page-template-page-contact">
      <div class="site-padding">
        <div class="entry-header template-header full-width">
          <div class="container">
            <div class="row">
              <div class="template-header-text col-lg-6 col-xl-5">
                <h1 itemprop="headline" class="header-title">
                  Get in touch
                </h1>
                <div class="intro-text">
                  <p>
                    Working with Marameo is fun, rewarding and beneficial to
                    your business.
                  </p>
                </div>
                <p>
                  <a href="tel:1300881791" target="" class="button pink"
                    >Call 1300 881 791</a
                  >
                </p>
              </div>
              <div class="col-lg-6 col-xl-7">
                <div class="form enquiry" id="enquiry-form">
                  <div class="row">
                    <div class="col-auto">
                      <p class="sub-title">
                        LET’S GET STARTED
                      </p>
                      <h2>Project Enquiry</h2>
                    </div>
                  </div>

                  <FormulateForm @submit="submitHandler">
                    <div class="row">
                      <div class="col-6">
                        <FormulateInput
                          label="Name"
                          name="name"
                          validation="required"
                          error-behavior="submit"
                        />
                      </div>
                      <div class="col-6">
                        <FormulateInput
                          type="email"
                          name="email"
                          label="Email"
                          validation="email"
                        />
                      </div>
                      <div class="col-6">
                        <FormulateInput
                          name="phone"
                          label="Phone"
                          validation="required|number"
                        />
                      </div>
                      <div class="col-6">
                        <FormulateInput
                          name="organization"
                          label="Organization"
                        />
                      </div>
                      <div class="col-12">
                        <FormulateInput
                          type="radio"
                          label="Approximate Budget"
                          validation="required"
                          :options="{
                            price0to5: '<$5K',
                            price5to15: '$5K - $15K',
                            price15to30: '$15K - $30K',
                            price30to70: '$30K - $70K',
                            price70up: '$70K >',
                          }"
                        />
                      </div>

                      <div class="col-12">
                        <FormulateInput
                          type="textarea"
                          validation="required"
                          label="Which services are you interested in?"
                        />
                      </div>

                      <div class="col-12">
                        <FormulateInput type="submit" label="Enquire Now" />
                      </div>
                    </div>
                  </FormulateForm>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- .entry-header -->
        <div class="contact">
          <div class="row">
            <div class="col-xl-4">
              <div class="top-section">
                <h2 class="title-section">
                  Contact us today for some clear digital thinking
                </h2>
                <p class="sub-title">
                  READY TO WORK TOGETHER?
                </p>
              </div>
              <div class="intro text-left">
                <h3>Sydney Office</h3>
                <p>
                  <g-link to="mailto:hello@marameodesign.com"
                    >hello@marameodesign.com</g-link
                  >
                  <br />
                  <g-link
                    to="tel:+61280050069"
                    data-wpel-link="internal"
                    rel="noopener noreferrer"
                    >+61 2 8005 0069</g-link
                  >
                </p>
                <h3>Mara Milani</h3>
                <p>
                  <g-link to="mailto:mara@marameodesign.com"
                    >mara@marameodesign.com</g-link
                  ><br />
                  <g-link
                    to="tel:+61415314198"
                    data-wpel-link="internal"
                    rel="noopener noreferrer"
                    >+61 415 314 198</g-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="find-us">
          <div class="top-section">
            <h2 class="title-section">Our offices</h2>
            <p class="sub-title">HOW TO FIND US</p>
          </div>
          <div class="our-offices">
            <ul class="row">
              <li class="col-lg-4 col-md-6">
                <g-image
                  width="440"
                  height="283"
                  src="https://cw.marameodesign.com/wp-content/uploads/2020/07/65830387-440x283.jpg"
                  class="attachment-card-size size-card-size"
                  alt="Sydney by night"
                />
                <p class="sub-title">G'day mate!</p>
                <h3>Sydney, Australia</h3>
                <p class="location">
                  Level 2, 243 King St <br />
                  Newtown, 2042 - Sydney
                </p>
                <a
                  href="https://maps.google.com/?q=Sydney%2C+Australia"
                  target="_blank"
                  data-wpel-link="external"
                  rel="external noopener noreferrer"
                  class="wpel-icon-right"
                  >Open in Google Maps<span
                    class="wpel-icon wpel-image wpel-icon-6"
                  ></span
                  ><span class="sr-only"> (link opens in a new window)</span></a
                >
              </li>
              <li class="col-lg-4 col-md-6">
                <g-image
                  width="440"
                  height="283"
                  src="https://cw.marameodesign.com/wp-content/uploads/2020/07/Danang-city-Vietnam-tour-440x283.jpg"
                  class="attachment-card-size size-card-size"
                  alt="Danang by night"
                />
                <p class="sub-title">Xin chao!</p>
                <h3>Danang, Vietnam</h3>
                <p class="location">
                  31 Tran Phu St, <br />Hai Chau District, Danang
                </p>
                <a
                  href="https://maps.google.com/?q=Danang%2C+Vietnam"
                  target="_blank"
                  data-wpel-link="external"
                  rel="external noopener noreferrer"
                  class="wpel-icon-right"
                  >Open in Google Maps<span
                    class="wpel-icon wpel-image wpel-icon-6"
                  ></span
                  ><span class="sr-only"> (link opens in a new window)</span></a
                >
              </li>
              <li class="col-lg-4 col-md-6">
                <g-image
                  width="440"
                  height="283"
                  src="https://cw.marameodesign.com/wp-content/uploads/2020/07/The_Romantic_Rome_at_Nighttime-440x283.jpg"
                  class="attachment-card-size size-card-size"
                  alt="Rome by night"
                />
                <p class="sub-title">ciao, belli!</p>
                <h3>Rome, Italy</h3>
                <p class="location">
                  Via delle Baleniere, <br />
                  186 Ostia Lido, 00121 - Roma
                </p>
                <a
                  href="https://maps.google.com/?q=Rome%2C+Italy"
                  target="_blank"
                  data-wpel-link="external"
                  rel="external noopener noreferrer"
                  class="wpel-icon-right"
                  >Open in Google Maps<span
                    class="wpel-icon wpel-image wpel-icon-6"
                  ></span
                  ><span class="sr-only"> (link opens in a new window)</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <latest-insights-block />
  </Layout>
</template>

<script>
import LatestInsightsBlock from "~/components/LatestInsightsBlock.vue";

export default {
  components: {
    LatestInsightsBlock,
  },
  methods: {
    submitHandler(data) {
      
    },
  },
};
</script>
