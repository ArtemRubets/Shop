$( document ).ready(function() {
	$('.slider-wrap').slick({
		arrows: false,
		dots: true,
		dotsClass: 'slider-content__dots',
		autoplay: true,
		autoplaySpeed: 10000
	});
	$('.slider-goods-wrap').slick({
		arrows: true,
		appendArrows: '.slider-arrow',
		prevArrow: '<button id="prev" type="button" class="slick-left"></button>',
        nextArrow: '<button id="next" type="button" class="slick-right"></button>',
		slidesToShow: 3,

		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 720,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  ]

	});
});
