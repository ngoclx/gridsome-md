<template>
  <div class="book-project margin-negative" id="free-consultation">
    <span id="calendar-lib" />
    <div class="container">
        <div class="in-book-project">
            <div class="row">
                <div class="book-project-left col-xl-8 col-lg-12">
                    <div class="intro">
                        <div class="top-section">
                            <h2 class="title-section">Book a free consultation to discuss your next project</h2>
                            <h3 class="sub-title">CLEAR DIGITAL THINKING</h3>
                        </div>
                        <p class="description">
                            We’ll discuss your goals and share our insights and expertise on your project design, helping you with scoping, implementation or innovating your digital services.
                        </p>
                    </div>
                    <div class="contact-infor">
                        <div class="row">
                            <div class="col-lg-7 col-md-12">
                                <div class="row">
                                    <div class="col-auto avatar">
                                        <g-image src="~/images/mara_milani.png" alt="Mara Milani" />
                                    </div>
                                    <div class="col text">
                                        <h3>Mara Milani</h3>
                                        <p><a href="mailto:mara@marameodesign.com">mara@marameodesign.com</a> <br>
                                            <a href="tel:+61415314198" class="exclude-ext-link">+61 415314198</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12 not-feeling-chatty">
                                <h3>Not feeling chatty</h3>
                                <a href="/lets-get-started/" class="pink">Fill in our Project Planner</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-12 the-calendly">
                    <h2 class="sr-only">Book your project</h2>
                    <!-- Calendly inline widget begin -->
                    <div class="calendly-inline-widget" data-url="https://calendly.com/marameodesign/schedule-call?hide_event_type_details=1" style="min-width:320px;height:750px;"></div>
                    <!-- <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> -->
                    <!-- Calendly inline widget end -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
    .the-calendly{
        overflow: auto;
    }
</style>
<script>
export default {
  name: "calendar-block",
  metaInfo: {
    script: [{ src: "https://assets.calendly.com/assets/external/widget.js", async: true, defer: true }],
  }
};
</script>
