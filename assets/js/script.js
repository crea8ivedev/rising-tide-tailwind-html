/*eslint no-undef: "error"*/

/*eslint no-dupe-keys: "error"*/
/*eslint no-unused-vars: "error"*/

/*global jQuery, Swiper*/
/* eslint-disable no-unused-vars */

document.addEventListener('DOMContentLoaded', () => {
    jQuery(document).ready(function($) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass('nav-sticky');
            } else {
                $('.header').removeClass('nav-sticky');
            }
        });
        /*Sticky Header end*/
        
        // Banner Slider
        var banner = new Swiper(".banner-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            centerSlide: false,
            // speed:2000,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            speed:1000,    
        });
        
         // search bar
         if ($('.sidebar-nav').length) {
            let searchManuallyOpened = false; 
        
            $(".btn-search").click(function (event) {
                event.stopPropagation();
        
                let searchBar = $(".search-bar");
                let searchInput = $("#search");
        
                if (!searchBar.hasClass("active")) {
                    searchBar.addClass("active");
                    $("body").addClass("search-active"); // Add class to body
                    searchManuallyOpened = true; 
        
                    setTimeout(function () {
                        searchInput.focus();
                    }, 100);
                } else {
                    searchBar.removeClass("active");
                    $("body").removeClass("search-active"); // Remove class from body
                    searchManuallyOpened = false;
                }
            });
        
            $(document).click(function (event) {
                if (!$(event.target).closest(".search-bar, .btn-search").length) {
                    $(".search-bar").removeClass("active");
                    $("body").removeClass("search-active"); // Remove class from body
                    $("#search").val('');
                    searchManuallyOpened = false;
                }
            });
        
            $(".search-bar input").click(function (event) {
                event.stopPropagation();
            });
        
            $(window).on("scroll", function () {
                if ($("header").hasClass("is-sticky")) {
                    if (!searchManuallyOpened) {
                        $(".search-bar").removeClass("active");
                        $("body").removeClass("search-active"); // Remove class from body
                        $("#search").val('');
                    }
                } else {
                    searchManuallyOpened = false;
                }
            });
        
            var $btns = $('.btn').click(function() {
                if (this.id == 'all') {
                  $('.tab-list > div').fadeIn(450);
                } else {
                  var $el = $('.' + this.id).fadeIn(450);
                  $('.tab-list > div').not($el).hide();
                }
                $btns.removeClass('active');
                $(this).addClass('active');
            })
        }
        
        // Video Slider
        var video = new Swiper(".video-slider", {
            slidesPerView: 3.1,
            spaceBetween: 20,    
            // speed:2000,
            loop: true,
            pagination: {
                el: ".swiper-pagination-video",
                clickable: true,
            },
            autoplay: {
                delay: 2500,
            },
            speed:1000,
            breakpoints: {        
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3.1,
                    spaceBetween: 20,
                },
            },
        });
        
        // Reels Slider
        var reels = new Swiper(".reels-slider", {
            slidesPerView: 5.7,
            spaceBetween: 20,    
            // speed:2000,
            loop: true,
            pagination: {
                el: ".swiper-pagination-reels",
                clickable: true,
            },
            autoplay: {
                delay: 2500,
            },
            speed:1000,
            breakpoints: {        
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3.7,
                    spaceBetween: 20,
                },
                1500: {
                    slidesPerView: 5.7,
                    spaceBetween: 20,
                },
            },
        });
        
        // Photo Slider
        var photo = new Swiper(".photo-slider", {
            slidesPerView: 3.1,
            spaceBetween: 20,    
            // speed:2000,
            loop: true,
            pagination: {
                el: ".swiper-pagination-photo",
                clickable: true,
            },
            autoplay: {
                delay: 2500,
            },
            speed:1000,
            breakpoints: {        
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3.1,
                    spaceBetween: 20,
                },
            },
        });
        
        // Radio Slider
        var radio = new Swiper(".radio-slider", {
            slidesPerView: 8,
            spaceBetween: 20,    
            // speed:2000,
            loop: true,
            pagination: {
                el: ".swiper-pagination-radio",
                clickable: true,
            },
            autoplay: {
                delay: 2500,
            },
            speed:1000,
            breakpoints: {        
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
                1300: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                },
            },
        });
    });

});