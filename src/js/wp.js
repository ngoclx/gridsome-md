window.$ = jQuery
    var windowWidth = $(window).width();
    var button = $(".toggle-access");
    var menu = $("[role=menu]");
    var buttons = $("[role=menu]").find("button:not(.increase):not(.decrease)");

    $(window).on("load", function() {
        //reframe('iframe:not(.embed-responsive-item)');
        postReferenceClick();
        mobileMenu();
        stickyHeader();
        masonry();
        megaMenuClasses();
        accessibleMenu();
        externalLinksContext();
        internalAnchors();
        inchorHash();
    });

    $(window).on("resize", function() {
        windowWidth = $(window).width();
        stickyHeader();
    });

    $(window).on("scroll", function() {
        stickyHeader();
    });

    function externalLinksContext() {
        $("[data-wpel-link=external]").each(function() {
            var helpText = $("<span class='sr-only'> (link opens in a new window)</span>");
            helpText.appendTo($(this));
        });
    }

    function mobileMenu() {

        //custom navigation first level

        $("#mega-menu-primary > li.mega-menu-item-has-children > a").each(function() {

            //unbind
            $(this).unbind();
            $(this).removeAttr("aria-expanded");
            $(this).removeAttr("aria-haspopup");

            var ul = $(this).next();

            var li = $(this).closest("li")
            var id = li.attr("id");

            ul.attr("id", id + "_ul");


            var button = $("<button class='mega-indicator mega-indicator-button top-level d-xl-none'><span class='sr-only'>" + $(this).text() + " submenu</span></button>");

            button.attr("aria-controls", id + "_ul");
            button.attr("aria-expanded", "false");

            button.insertAfter($(this));
            li.addClass("mega-with-button");
            $(this).find(".mega-indicator:not(.mega-indicator-button)").remove();
            li.addClass("js");

        });

        //support for accordion nav for second level menu items
        $(".mega-menu-grid .mega-sub-menu .mega-sub-menu .mega-indicator").each(function() {

            var ul = $(this).parent().next();
            var a = $(this).closest("a");
            var li = $(this).closest("li")
            var id = li.attr("id");

            var button = $("<button class='mega-indicator mega-indicator-button d-xl-none'><span class='sr-only'>" + a.text() + " submenu</span></button>");

            a.attr("id", id + "_link");
            li.addClass("mega-with-button");
            ul.attr("id", id + "_ul");

            button.attr("aria-controls", id + "_ul");
            button.attr("aria-expanded", "false");

            button.insertAfter(a);
            $(this).remove();
        });

        $("body").on("click", ".mega-indicator-button", function() {
            if ($(this).attr("aria-expanded") == "false") $(this).attr("aria-expanded", "true");
            else $(this).attr("aria-expanded", "false");
        });

        //toggle
        $(".menu-toggle").on("click", function() {
            var menu = $("#menu-mobile");
            if (menu.hasClass("open")) {
                menu.removeClass("open");
                $("body").removeClass("open");
                $(this).attr("aria-expanded", "false");
            } else {
                menu.addClass("open");
                $("body").addClass("open");
                $(this).attr("aria-expanded", "true");
            }
            closeAccordion();
        });

        $(".mega-menu-link[aria-haspopup='true'], .mega-menu-link[aria-haspopup='true'] .mega-indicator").on("click", function() {
            closeAccordion();
        });

        function closeAccordion() {
            $(".mega-indicator-button").attr("aria-expanded", "false");
        }
    }

    function accessibleMenu() {
        $("body").on("click", function(e) {
            if (menu.is(":visible")) {
                closeMenu(menu, button);
            }
        });

        button.on("click", function(e) {
            e.stopPropagation();
            if (menu.is(":visible")) {
                closeMenu(menu, button);
            } else {
                menu.slideDown(0);
                $(this).attr("aria-expanded", "true");
                button.find(".open").text("Close ");
                button.find(".fas").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            }
        });

        //add support for esc key
        button.on("keydown", function(e) {
            e.stopPropagation();
            if (e.keyCode === 27) {
                closeMenu(menu, button);
            }
        });

        menu.on("keydown", function(e) {
            e.stopPropagation();
            keyboardTrap(e, menu, button);
        });

        buttons.on("click", function(e) {
            e.stopPropagation();
            var classToAdd = $(this).attr("data-class");
            if ($(this).attr("aria-pressed") == "true") {
                $(this).attr("aria-pressed", "false");
                $("body").removeClass(classToAdd);
            } else {
                $(this).attr("aria-pressed", "true");
                $("body").addClass(classToAdd);
            }
        });
    }

    function closeMenu(menu, button) {

        menu.slideUp(0);
        button.attr("aria-expanded", "false");
        button.find(".open").text("Open ");
        button.find(".fas").removeClass("fa-chevron-up").addClass("fa-chevron-down");

        //button.focus();

    }


    function megaMenuClasses() {
        $("#mega-menu-primary > li").each(function() {
            if ($(this).hasClass("mega-menu-grid")) {

                $(this).attr("data-columns", $(this).find(".mega-menu-column").length)
            }
        });
    }

    function stickyHeader() {
        if ($(window).scrollTop() > $('.the-header').offset().top) $('.site-header').addClass('sticky');
        else $('.site-header').removeClass('sticky')
    }

    function masonry() {
        var $gallery = $(".grid-items");
        $gallery.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true
        });
    }

    function carouselHeight() {
        $(".carousel").each(function() {
            var height = 0;
            $(this)
                .find(".carousel-item")
                .each(function() {
                    height = Math.max(height, $(this).outerHeight());
                });

            $(this)
                .find(".carousel-item")
                .css("height", height);
        });
    }

    // post reference card - click on it

    function postReferenceClick() {
        const cards = document.querySelectorAll(
            ".post-list article"
        );
        Array.prototype.forEach.call(cards, card => {
            let down,
                up,
                link = card.querySelector(".button") || card.querySelector("a");
            card.onmousedown = () => (down = +new Date());
            card.onmouseup = () => {
                up = +new Date();
                if (up - down < 200) {
                    link.click();
                }
            };
        });
    }

    //https://css-tricks.com/snippets/jquery/smooth-scrolling/
    function internalAnchors() {
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    var offsetHeader = $('#masthead').outerHeight();

                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        var offsetTop = target.offset().top;
                        var scrolltop = offsetTop - offsetHeader - 20;
                        $('html, body').animate({
                            scrollTop: scrolltop
                        }, 600);
                    }
                }
            });
    }

    function inchorHash() {
        var has = window.location.hash;
        var offsetHeader = $('#masthead').outerHeight();
        if (has) {
            var nav = $(has);
            if (nav.length) {
                var contentNav = nav.offset().top;
                jQuery('html, body').animate({
                    scrollTop: contentNav - offsetHeader - 20
                }, 600);
            }
        }
    }