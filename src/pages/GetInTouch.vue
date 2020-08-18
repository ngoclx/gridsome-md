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
                  <div class="frm_forms">
                    <div class="row">
                      <div class="col-auto">
                        <p class="sub-title">
                          LET’S GET STARTED
                        </p>
                        <h2>Project Enquiry</h2>
                      </div>
                    </div>
                    <div class="with_frm_style">
                      <FormulateForm @submit="submitHandler">
                        <div class="row">
                          <div class="col-6 form-group">
                            <FormulateInput
                              label="Name"
                              name="fullname"
                              validation="required"
                              error-behavior="submit"
                            />
                          </div>
                          <div class="col-6 form-group">
                            <FormulateInput
                              type="email"
                              name="email"
                              label="Email"
                              validation="email"
                            />
                          </div>
                          <div class="col-6 form-group">
                            <FormulateInput
                              name="phone"
                              label="Phone"
                              validation="required"
                            />
                          </div>
                          <div class="col-6 form-group">
                            <FormulateInput
                              name="organization"
                              label="Organization"
                            />
                          </div>
                          <div class="col-12 form-group form-group-radio">
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

                          <div class="col-12 form-group">
                            <FormulateInput
                              type="textarea"
                              validation="required"
                              name="services"
                              label="Which services are you interested in?"
                            />
                          </div>

                          <div class="col-12 form-group">
                            <div class="frm_submit"><FormulateInput type="submit" label="Enquire Now" /></div>
                          </div>
                        </div>
                      </FormulateForm>
                      </div>
                  </div>
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
                    >hello@marameodesign.com</g-link>
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

    <b-modal id="highfive" centered hide-footer hide-header>
      <h2>High Five</h2>
      <p>We’ll contact you soon to discuss your requirements.</p>
      <p>In the meantime, if you are up for a chat, feel free to call Mara on <g-link
                    to="tel:+61415314198"
                    data-wpel-link="internal"
                    rel="noopener noreferrer"
                    >+61 415 314 198</g-link
                  ></p>
      <b-button class="btn-close" block @click="gotoHome()"><i class="fa fa-times"></i></b-button>
    </b-modal>

  </Layout>
</template>

<style>
  .modal-open .modal{
    background-color: rgba(0,0,0,0.5);
  }
  .modal .modal-content{
    border: none;
  }
  .modal h2{
    font-size: 2.8rem;
    color: #045499;
    margin-bottom: 1.5rem;
  }
  .modal-custom{
    background-color: rgba(0,0,0,0.5);
  }
  .modal-body{
    padding: 3rem;
  }
  .enquiry .form-group{
    margin-bottom: 2rem;
  }
  .enquiry .with_frm_style{
    margin-top: 2rem;
  }
  .enquiry .formulate-input-label{
      font-weight: 700;
      font-size: 1.9rem;
      color: #1d304a;
      font-family: Nunito,sans-serif;
      display: block;
     float: none;
     width: auto;
  }
  .enquiry .with_frm_style [data-is-showing-errors="true"] input,
  .enquiry .with_frm_style [data-is-showing-errors="true"] textarea{
    border: 1px solid #B94A48;
  }
  .enquiry .with_frm_style input[type=email], .enquiry .with_frm_style input[type=tel], .enquiry .with_frm_style input[type=text], .enquiry .with_frm_style textarea{
    width: 100%;
  }
  .enquiry .with_frm_style textarea{
    height: 15.4rem;
  }
  .enquiry .with_frm_style .frm_submit button {
    background-image: -webkit-linear-gradient(303deg,#dc03ae 0,#da2e74 100%);
    background-image: -o-linear-gradient(303deg,#dc03ae 0,#da2e74 100%);
    background-image: linear-gradient(147deg,#dc03ae 0,#da2e74 100%);
    background-image: -o-linear-gradient(147deg,#dc03ae 0,#da2e74 100%);
    background-image: -webkit-linear-gradient(147deg,#dc03ae 0,#da2e74 100%);
    background-image: -moz-linear-gradient(147deg,#dc03ae 0,#da2e74 100%);
    color: #fff;
    font-family: Nunito,sans-serif;
  }
  .enquiry  .form-group-radio .formulate-input .formulate-input-group{
    display: flex;
    display: -webkit-flex;
  }
  .enquiry  .form-group-radio .formulate-input .formulate-input-group .formulate-input-group-item{
    margin-right: 1rem;
  }
  .enquiry  .form-group-radio .formulate-input .formulate-input-group .formulate-input-label {
    position: relative;
    color: #1d304a;
    font-family: Nunito,sans-serif;
    font-size: 1.9rem;
    border-radius: 5px;
    padding: .6rem 1.5rem;
    display: block;
    z-index: 1;
    cursor: pointer;
    border: 1px solid #c5e8f4;
    background: rgba(12,170,222,.13);
    border-radius: 5px;
    font-weight: 400;
}
.enquiry  .form-group-radio .formulate-input-element--radio{
  display: none;
}
.enquiry  .form-group-radio .formulate-input[data-has-value="true"] .formulate-input-group [data-has-value="true"] .formulate-input-label{
    background-image: -webkit-linear-gradient(303deg,#0caade 0,#045499 100%);
    background-image: -o-linear-gradient(303deg,#0caade 0,#045499 100%);
    background-image: linear-gradient(147deg,#0caade 0,#045499 100%);
    background-image: -o-linear-gradient(147deg,#0caade 0,#045499 100%);
    background-image: -webkit-linear-gradient(147deg,#0caade 0,#045499 100%);
    background-image: -moz-linear-gradient(147deg,#0caade 0,#045499 100%);
    color: #fff;
 }
 .enquiry .formulate-input-errors{
   list-style: none;
   padding: 0;
 }
 .enquiry .formulate-input-errors .formulate-input-error{
   color: #B94A48;
   text-align: left;
   margin-top: .5rem;
    border-left: 10px solid #b94a48;
    padding-left: .5rem;
    font-family: Nunito,sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
 }
 .btn-close{
       position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 1.6rem;
    right: -1rem;
    top: -1rem;
    background-color:#045499;
    border: none;
 }
 .btn-close:hover,.btn-close:focus{
   background-color: #dc03ae;
 }
</style>

<script>
import LatestInsightsBlock from "~/components/LatestInsightsBlock.vue"
import axios from 'axios'

export default {
  components: {
    LatestInsightsBlock,
  },
  methods: {
    submitHandler(rawData) {
      var FormData = require('form-data')
      var data = new FormData()
      data.append('fullname', rawData.fullname)
      data.append('email', rawData.email)
      data.append('phone', rawData.phone)
      data.append('services', rawData.services)
      data.append('price', rawData.price)

      var config = {
        method: 'post',
        url: 'https://cw.marameodesign.com/wp-json/contact-form-7/v1/contact-forms/1312/feedback',
        data : data
      }

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })

      this.$bvModal.show('highfive')
    },

    gotoHome() {
      this.$bvModal.hide('highfive')
      window.location.href = '/'
    }
  },
}
</script>
