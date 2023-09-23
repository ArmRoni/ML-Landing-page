(function($){
    function marQFun() {
        let widthResize = jQuery(window).width();
        let appendMarQ = jQuery('.marquee_style_area');
        let appendSocial = jQuery('.social_media');
        let banner_list = jQuery('.banner_list');
        let why_sameningeld_img = jQuery('.why_sameningeld_img');

        if (widthResize < 1800) {
            jQuery('.header_container').prepend(appendMarQ);
        }else {
            jQuery('.right_headerInner').prepend(appendMarQ);
        }

        if (widthResize > 1278 && widthResize < 1800) {
            jQuery('.marquee_style_area').prepend(appendSocial);
        }else {
            jQuery('.right_headerInner').prepend(appendSocial);
        }

        if (widthResize < 991) {
            console.log("dkdk")
            jQuery('.banner_form_wrap').after(banner_list);
        }else {
            jQuery('.banner_title').after(banner_list);
        }

        if (widthResize < 768) {
            jQuery('.why_sameningeld_content_inner').append(why_sameningeld_img);
        }else {
            jQuery('.why_sameningeld_imgcol').append(why_sameningeld_img);
        }
    }

    marQFun();
    jQuery(window).resize(function() {
        marQFun();
    });

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 60) {
           jQuery('.header_container').addClass('header_sticky');
        } else {
           jQuery('.header_container').removeClass('header_sticky');
        }
    });



    jQuery(document).ready(function(){
        jQuery.fn.isInViewport = function() {
        var elementTop = jQuery(this).offset().top;
        var elementBottom = elementTop + jQuery(this).outerHeight();

        var viewportTop = jQuery(window).scrollTop();
        var viewportBottom = viewportTop + jQuery(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;};

        jQuery(window).on('resize scroll', function() {
            if(jQuery('.sticky-footer-view').length > 0) {
                if (jQuery('.sticky-footer-view').isInViewport()) {
                    jQuery('.floating_btn').removeClass('is_stuck');
                } else {
                    jQuery('.floating_btn').addClass('is_stuck');
                }
            }
        });

        
        jQuery(function(){
            jQuery('.header_btn, .pre_btn').click(function () {
                var Lochref = jQuery(this).attr('href');
                jQuery("html, body").stop().animate({
                scrollTop: jQuery(Lochref).offset().top-150
                }, 1500);
                return false;
            });
        });
    });



    if(matchMedia('only screen and (max-width: 991px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 40,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible:true,

        });

        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });

        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });

        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        })
    }

    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });
})(jQuery);

    