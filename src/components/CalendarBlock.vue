<template>
  <div class="book-project margin-negative">
    <div class="container">
        <div class="in-book-project">
            <div class="row">
                <div class="book-project-left col-xl-8 col-lg-12">
                    <div class="intro">
                        <div class="top-section">
                            <h2 class="title-section">Book a free consultation on how your project should be implemented</h2>
                            <p class="sub-title">Clear digital thining</p>
                        </div>
                        <p class="description">
                            We’ll go through your goals and give you our view on how the project should be designed.
                            We’ll help you with project scoping, implementation or innovating a digital service.
                        </p>
                    </div>
                    <div class="contact-infor">
                        <div class="row">
                            <div class="col-lg-7 col-md-12">
                                <div class="row">
                                    <div class="col-auto avatar">
                                        <g-image src="~/images/mara.jpg" alt="Mara Milani" />
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
                                <a href="" class="pink">Fill in our Project Planner</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-12 the-calendly">
                    <h2 class="sr-only">Book your project</h2>
                    <!-- Calendly inline widget begin -->
                    <div class="calendly-inline-widget" data-url="https://calendly.com/marameodesign/schedule-call?hide_event_type_details=1" style="min-width:320px;height:600px;"></div>
                    <!-- <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> -->
                    <!-- Calendly inline widget end -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "calendar-block",
  metaInfo: {
    script: [{ src: "https://assets.calendly.com/assets/external/widget.js", async: true, defer: true }],
  }
};
</script>
