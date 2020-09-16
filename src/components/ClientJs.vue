<template>
    <span class="custom-jquery"></span>
</template>

<script>

export default {
    name: 'ClientJs',
    metaInfo: {
        script: [{
            type: 'application/ld+json',
            json: {
                "@context":"https:\/\/schema.org",
                "@graph":[
                {
                    "@type":"WebSite",
                    "@id":"https:\/\/marameodesign.com",
                    "url":"https:\/\/marameodesign.com",
                    "name":"Marameo Design",
                    "potentialAction":{
                        "@type":"SearchAction",
                        "target":"https:\/\/marameodesign.com\/?s={search_term_string}",
                        "query-input":"required name=search_term_string"
                    }
                },
                {
                    "@type":"Service",
                    "name":"Sydney Website Design + Web Development Agency » Marameo",
                    "description":"Marameo is a full-service web design agency, offering expert web design and development services with personalised care and support, at affordable prices.",
                    "serviceType":"",
                    "offers":{
                        "@type":"Offer",
                        "price":"0",
                        "priceCurrency":""
                    },
                    "image":{
                        "@type":"ImageObject",
                        "image":"https:\/\/cw.marameodesign.com\/wp-content\/uploads\/2020\/09\/Marameo.png",
                        "width":260,
                        "height":38
                    }
                },
                {
                    "@type":"ProfessionalService",
                    "@id":"https:\/\/marameodesign.com\/sydney-digital-agency",
                    "name":"Marameo Design",
                    "url":"https:\/\/marameodesign.com",
                    "address":{
                        "@type":"PostalAddress",
                        "streetAddress":"Level 2, 243 King St",
                        "addressLocality":"Newtown",
                        "addressRegion":"NSW",
                        "postalCode":"2042",
                        "addressCountry":""
                    },
                    "review": {
                        "@type": "Review",
                        "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                        },
                        "author": {
                        "@type": "Person",
                        "name": "Mara Milani"
                        }
                    },
                    "openingHours":[
                        "Monday,Tuesday,Wednesday,Thursday,Friday 09:00-17:30"
                    ],
                    "priceRange":"$$",
                    "image":"https:\/\/cw.marameodesign.com\/wp-content\/uploads\/2020\/09\/Marameo.png",
                    "telephone":"1300881791"
                    }
                ]
            }
        }]
    },
    mounted() {
        // Load external scripts for clients
            this.$loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js").then(() => {
            //this.$loadScript("https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js")
            //this.$loadScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js")
            //this.$loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js")
            this.$loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js")
        })

        const $ = require('jquery')
        window.$ = $

        var windowWidth = $(window).width()

        postReferenceClick()
        mobileMenu()
        stickyHeader()
        //masonry()
        megaMenuClasses()
        externalLinksContext()
        internalAnchors()
        inchorHash()

        $(window).on("resize", function() {
            windowWidth = $(window).width()
            stickyHeader()
        })

        $(window).on("scroll", function() {
            stickyHeader()
        })

        function externalLinksContext() {
            $("[data-wpel-link=external]").each(function() {
                var helpText = $("<span class='sr-only'> (link opens in a new window)</span>")
                helpText.appendTo($(this))
            })
        }

        function mobileMenu() {

            //custom navigation first level
            $("#mega-menu-primary > li.mega-menu-item-has-children > a").each(function() {

                //unbind
                $(this).unbind()
                $(this).removeAttr("aria-expanded")
                $(this).removeAttr("aria-haspopup")

                var ul = $(this).next()

                var li = $(this).closest("li")
                var id = li.attr("id")

                ul.attr("id", id + "_ul")


                var button = $("<button class='mega-indicator mega-indicator-button top-level d-xl-none'><span class='sr-only'>" + $(this).text() + " submenu</span></button>")

                button.attr("aria-controls", id + "_ul")
                button.attr("aria-expanded", "false")

                button.insertAfter($(this))
                li.addClass("mega-with-button")
                $(this).find(".mega-indicator:not(.mega-indicator-button)").remove()
                li.addClass("js")
            })

            $(".mega-indicator-button").click(function() {
                if ($(this).attr("aria-expanded") == "false") $(this).attr("aria-expanded", "true")
                else $(this).attr("aria-expanded", "false")
            })

            //toggle
            $(".menu-toggle").on("click", function() {
                var menu = $("#menu-mobile")
                if (menu.hasClass("open")) {
                    menu.removeClass("open")
                    $("body").removeClass("open")
                    $(this).attr("aria-expanded", "false")
                } else {
                    menu.addClass("open")
                    $("body").addClass("open")
                    $(this).attr("aria-expanded", "true")
                }
                closeAccordion()
            })

            $(".mega-menu-link[aria-haspopup='true'], .mega-menu-link[aria-haspopup='true'] .mega-indicator").on("click", function() {
                closeAccordion()
            })

            if (windowWidth < 1200) {
                $(".mega-menu-link").click(function() {
                    $('.mega-indicator-button').attr("aria-expanded", "false")
                    $("#menu-mobile").removeClass('open')
                    $("body").removeClass('open')
                });
            }

            function closeAccordion() {
                $(".mega-indicator-button").attr("aria-expanded", "false")
            }
        }


        function megaMenuClasses() {
            $("#mega-menu-primary > li").each(function() {
                if ($(this).hasClass("mega-menu-grid")) {
                    $(this).attr("data-columns", $(this).find(".mega-menu-column").length)
                }
            })
        }

        function stickyHeader() {
            if ($(window).scrollTop() > $('.the-header').offset().top) $('.site-header').addClass('sticky')
            else $('.site-header').removeClass('sticky')
        }

        function masonry() {
            var $gallery = $(".grid-items")
            if (typeof $gallery != 'undefined' && $gallery.length) {
                $gallery.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-item',
                    percentPosition: true
                })
            }
        }

        function carouselHeight() {
            $(".carousel").each(function() {
                var height = 0
                $(this)
                    .find(".carousel-item")
                    .each(function() {
                        height = Math.max(height, $(this).outerHeight())
                    })

                $(this)
                    .find(".carousel-item")
                    .css("height", height)
            })
        }

        // post reference card - click on it

        function postReferenceClick() {
            const cards = document.querySelectorAll(
                ".post-list article,.carousel-inner .carousel-item"
            )
            Array.prototype.forEach.call(cards, card => {
                let down,
                    up,
                    link = card.querySelector(".button,.read-more") || card.querySelector("a")
                card.onmousedown = () => (down = +new Date())
                card.onmouseup = () => {
                    up = +new Date()
                    if (up - down < 200) {
                        link.click()
                    }
                }
            })
        }

        //https://css-tricks.com/snippets/jquery/smooth-scrolling/
        function internalAnchors() {
            $('a[href*="#"]')
                // Remove links that don't actually link to anything
                .not('[href="#"]')
                .not('[href="#0"]')
                .not('.carousel-control-prev')
                .not('.carousel-control-next')
                .click(function(event) {
                    // On-page links
                    if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                        location.hostname == this.hostname
                    ) {
                        // Figure out element to scroll to
                        var target = $(this.hash)
                        var offsetHeader = $('#masthead').outerHeight()

                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
                        // Does a scroll target exist?
                        if (target.length) {
                            // Only prevent default if animation is actually gonna happen
                            event.preventDefault()
                            var offsetTop = target.offset().top
                            var scrolltop = offsetTop - offsetHeader - 20
                            $('html, body').animate({
                                scrollTop: scrolltop
                            }, 600)
                        }
                    }
                })
        }

        function inchorHash() {
            var has = window.location.hash
            var offsetHeader = $('#masthead').outerHeight()
            if (has) {
                var nav = $(has)
                if (nav.length) {
                    var contentNav = nav.offset().top
                    jQuery('html, body').animate({
                        scrollTop: contentNav - offsetHeader - 20
                    }, 600)
                }
            }
        }
    }
}
</script>
