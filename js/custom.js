$( document ).ready(function() {
	
	/*------------------------------ Page Scrolling ----------------------*/
	
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	/*------------------------------ Tooltips ----------------------*/
	
	$('.tooltips').tooltip();
	
	/*------------------------------ Voice Control -----------------*/
	

	/*------------------------------ Bootstrap Carousel ----------------------*/

	$('#myCarousel').carousel({
		interval: 10000, //changes the speed
		pause: "false"
	})
	//Bootstrap Carousel Progressbar
	
	$("#progressbar").progressbar({
		value: 1
	});
	$("#progressbar > .ui-progressbar-value").animate({
		width: "100%"
	}, 10000);
	
	$('#myCarousel').bind('slid.bs.carousel', function (e) {		
			$("#progressbar > .ui-progressbar-value").finish();
			$("#progressbar > .ui-progressbar-value").animate({
			width: "0%"
			}, 0);
			$("#progressbar > .ui-progressbar-value").animate({
			width: "100%"
			}, 10000);				
	});

	/*------------------------------ Masonry Blog -----------------*/


	/*------------------------------ OWL Carousel -----------------*/

	$("#owl-man-family").owlCarousel({
		items : 2,
		lazyLoad : true
	});
	
	$("#owl-woman-family").owlCarousel({
		items : 2,
		lazyLoad : true
	});
	
	$("#owl-moments").owlCarousel({
		items : 4,
		pagination : false,
		autoPlay : true,
		lazyLoad : true
	});
	
	$("#owl-common").owlCarousel({
		items : 3,
		lazyLoad : true
	});
	
	$("#owl-blog-post-gallery").owlCarousel({
		singleItem:true,
		autoPlay : true,
		lazyLoad : true
	});
	
	/*------------------------------ Sticky Navigation -----------------*/
	
	$(".topbar-nav").sticky({topSpacing:0});
	
	/*------------------------------ Magnific POP -----------------*/
	
	$('.popup-vimeo').magnificPopup({
		type: 'iframe'
	});
	$('.popup-image').magnificPopup({
	  type: 'image',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  callbacks: {
		beforeOpen: function() {
		  // just a hack that adds mfp-anim class to markup 
		   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		   this.st.mainClass = this.st.el.attr('data-effect');
		}
	  },
	  closeOnContentClick: true,
	  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

	/*------------------------------ Waypoint Counting -----------------*/

	$('#startcounting').waypoint(function() {
		$('.counts').countTo();
		$('#startcounting').waypoint('disable');
	});
	
	/*------------------------------ Parallax Effect -----------------*/

	$('.parallax-section').each(function(){
		$(this).parallax("50%", 0.5);
	});	
	
	/*------------------------------ WOW Script ----------------------*/

	new WOW().init();
	
	/*------------------------------ Twitter Feeds -----------------*/
	
	
	/*------------------------------ Ajax Contact Form -----------------*/
	
	
});


/*------------------------------ Count Up ----------------------*/

setInterval(function() {
    var timespan = countdown(new Date("06/30/2019"), new Date());
    var div = document.getElementById('time');
    div.innerHTML = "</div>" + "<div><span>Meses</span>" + timespan.months + "</div>" + "<div><span>Dias</span>" + timespan.days + "</div>" + "<div><span>Horas</span>" + timespan.hours + "</div>" + "<div><span>Minutos</span>" + timespan.minutes + "</div>" + "<div><span>Segundos</span>" + timespan.seconds + "</div>"
}, 1000);

/*------------------------------ Tooltips ----------------------*/

$.widget.bridge('uitooltip', $.ui.tooltip); // Resolve name collision between jQuery UI and Bootstrap

/*------------------------------ Preloader ----------------------*/

$(window).load(function() { 
	$('.spinner').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});
});

/*------------------------------ Collapse the navbar on scroll ----------------------*/

$(window).scroll(function() {
    // if ($(".navbar").offset().top > 50) {
    //     $(".navbar-fixed-top").addClass("top-nav-collapse");
    // } else {
    //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
    // }
});

/*------------------------------ Background Video ----------------------*/

document.getElementById("bgvideo").width=document.body.offsetWidth;
