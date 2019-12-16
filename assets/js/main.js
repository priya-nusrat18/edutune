(function($) {
    "use strict";

    jQuery(document).ready(function($) {

    	/*Magnific popup js*/

    	$(".video-play-btn").magnificPopup({
    		type: 'video'
    	});

    	$('.count').counterUp({
    	    delay: 15,
    	    time: 2000
    	});
       


    });


    jQuery(window).load(function() {


    });


}(jQuery));