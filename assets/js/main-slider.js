$(function() {
	/*-----------------
		MAIN SLIDER
	-----------------*/
	$('.main-slider').bxSlider({
		pagerCustom: '.pager-container',
		controls: false,
		easing: 'ease-in',
		speed: 800,
		auto: true,
		pause: 6000
	});

	/*-------------
		VIDEO
	-------------*/
	$('#video .radial-progress').on('click', function() {
		$('#video > iframe').show();
	});

	/*----------------
		TOOLTIP
	----------------*/
	$('.tooltip').tooltipster({
		animation: 'grow',
		position: 'bottom'
	});

	/*-----------------
		RESIZE IMAGE
	-----------------*/
	$("figure.imgLiquidFill").imgLiquid();

	/*----------------
		IMAGE POPUP
	----------------*/
	$('ul.dishes > li > div > a').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		image: {
	    	tError: 'The image could not be loaded.'
	  	},
	  	closeMarkup: '<span class="mfp-close"></span>'
	});
});