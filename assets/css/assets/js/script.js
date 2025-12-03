/*
 * SS Stone Custom JavaScript
 * Handles custom features, animations, and sticky elements
 */

$(document).ready(function() {
    // 1. Navbar Scrolldown/Sticky Effect
    // Adds a visual cue (though most styling is in style.css) when scrolled down
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    // 2. Smooth Scrolling for internal links (like #marble on products page)
    $('a[href*="#"]:not([href="#"]):not([data-bs-toggle])').click(function(e) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // Prevent default anchor click behavior
                e.preventDefault(); 
                // Animate scroll, adjusting for the fixed header (80px is an estimate)
                $('html, body').animate({
                    scrollTop: target.offset().top - 80 
                }, 1000);
                return false;
            }
        }
    });


    // 3. Products Page Tab Logic (if using deep links like products.html#marble)
    var hash = window.location.hash;
    if (hash) {
        $('.nav-pills a[href="' + hash + '"]').tab('show');
    }
});