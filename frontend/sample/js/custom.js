/* ------------------------ document redy -----------------------*/

jQuery(document).ready(function($){
	
	/* snap menus */
	var snapper = new Snap({
		element: document.getElementById('content-snap'),
	});
	$(".open-left").click(function() {
		if( snapper.state().state=="left" ){
			snapper.close();
		} else {
			snapper.open('left');
		}
	});
	$(".open-right").click(function() {
		if( snapper.state().state=="right" ){
			snapper.close();
		} else {
			snapper.open('right');
		}
	});
	
	/* superfish main menu */
	$('#tfc-menu').superfish({
		cssArrows:	false,
		delay:       200,
		speed:         'fast',
		speedOut:      'fast' 
	});
	$( ".sf-menu > li > ul").prepend( '<div class="bubble"></div>' );
	$( ".sf-menu li:first-child a:first-child").css("border-left","none");
	$( ".sf-menu li:last-child a:first-child").css("border-right","none");

	
	/* flexslider caroussels / slider */
	$('.flexcarousel').flexslider({
		animation: "slide",
		itemWidth: 130,
		slideshow: false,
		controlNav: false,
		prevText: "",
		nextText: ""
	});
	$('.productcaroussel').flexslider({
		animation: "slide",
		itemWidth: 130,
		slideshow: false,
		controlNav: false,
		prevText: "",
		nextText: ""
	});
	$('.menucaroussel').flexslider({
		animation: "slide",
		animationLoop: false,
		slideshow: false,
		controlNav: false,
		directionNav: true,
		prevText: "",
		nextText: "",
		start: function(){
			$('.slides').show(); 
		},
	});
	if ( $( '.flexslider' ).length && jQuery() ) { 
		var target_flexslider = $('.flexslider');
		target_flexslider.flexslider({
		animation: "fade",    
	});
	}
	if ( $( '.bannerslider' ).length && jQuery() ) { 
		var target_flexslider = $('.bannerslider');
		target_flexslider.flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: false,    
	});
	}
	
	/* select box */	  
	$(function () { 
		$(".selectBox").selectBox();
		$(".optionChoice").selectBox(); 
	});
	
	/* tabs */	
	$.fn.tabs = function() {
		var selector = this;
		this.each(function() {
			var obj = $(this); 
			$(obj.attr('href')).hide();
			obj.click(function() {
				$(selector).removeClass('selected');
				$(this).addClass('selected');
				$($(this).attr('href')).fadeIn();
				$(selector).not(this).each(function(i, element) {
					$($(element).attr('href')).hide();
				});
				return false;
			});
		});
		$(this).show();
		$(this).first().click();
	};	
	$('#tabs a').tabs();
	
	
	/* list / grid view on categories */
	if ( $( '.list_on' ).length && jQuery() ) { 
	  $( "#list" ).on({
		click: function() {
		  if(!$( "#list" ).hasClass( "list_on" )){
			  $('.product-grid').attr('class', 'product-list');
			  $( "#list" ).addClass( "list_on" );
			  $( "#grid" ).removeClass( "list_on" );
		  }}
	  });
	  $( "#grid" ).on({
		click: function() {
		  if(!$( "#grid" ).hasClass( "list_on" )){
			  $('.product-list').attr('class', 'product-grid');
			  $( "#grid" ).addClass( "list_on" );
			  $( "#list" ).removeClass( "list_on" );
		  }}
	  });
	}
	
	/* Add this to Home screen */
	  addToHomescreen({
		 skipFirstVisit: false,
		 maxDisplayCount: 1
	  });
	
	  function debouncer( func , timeout ) {
		 var timeoutID , timeout = timeout || 200;
		 return function () {
			var scope = this , args = arguments;
			clearTimeout( timeoutID );
			timeoutID = setTimeout( function () {
				func.apply( scope , Array.prototype.slice.call( args ) );
			} , timeout );
		 }
  	}
	
	/* on window resize */
	$( window ).resize( debouncer( function ( e ) {
		/* snapper */
		$(window).width();
		if($(window).width() <= 991){
			snapper.enable();
		} else {
			snapper.disable();
		}
		/* mini cart on top */
		if ($(window).width() <= 749) { 
			var tgt = "#cart .heading";
		} else {
			var tgt = "#cart";
		}
		
		$(document).on('click',tgt,function(e){
			if($( "#cart" ).hasClass( "active" )){
				$( "#cart" ).removeClass( "active" );
			} else {
				$( "#cart" ).addClass( "active" );
			}
		  });
		  if ($(window).width() > 749) { 
			  $(document).on('mouseleave',tgt,function(e){
				  if($( "#cart" ).hasClass( "active" )){
					  $( "#cart" ).removeClass( "active" );
				  }
			  });
		  }
		
		/*slidetoggle on mobile mode */
		if($(window).width() <= 479){
			$('.footer_top_item h3').click(function() {
				$(this).next('div').slideToggle();
			});
			$(".qtyinput").each(function(i) {
				$(this).find('input').attr('name', 'dummy' + i);
			});
		}
		if($(window).width() <= 750){
			$('.h1-accordeon').click(function() {
				$(this).next('.tab-content').slideToggle();
			});
			$('.tc-first').hide();
			
		}
		/* color box */
		$(window).width();
		if($(window).width() <= 749){
			$('.colorbox').colorbox({
				overlayClose: true,
				opacity: 0.4,
				rel: "colorbox",
				width:"100%", 
				height:"100%"
			});
		} else {
			$('.colorbox').colorbox({
				overlayClose: true,
				opacity: 0.4,
				rel: "colorbox"
			});
		}
		/* list / grid */
		if ( $( '.list_on' ).length && jQuery() ) { 
		  if($(window).width() <= 479){
			  $.totalStorage('display', 'list');
		  }
		}
		/* box product fix */
		var counter=1;
		$('#column-left + #content .product-grid .box-product').each(function(){
			if(counter % 3==0){ 
				if ($(window).width() > 738) { 
					$(this).css('margin-right','0');
				}
			}
			counter++;
		});
		counter=1;
		$('#column-right + #content .product-grid .box-product').each(function(){
			if(counter % 3==0){ 
				if ($(window).width() > 738) { 
					$(this).css('margin-right','0');
				}
			}
			counter++;
		});
		counter=1;
		$('#content .box-content .box-product').each(function(){
			if(counter % 3==0){ 
				if ($(window).width() > 738) { 
					$(this).css('margin-right','0');
				}
			}
			counter++;
			if($(this).hasClass("last-item")){
				counter = 1;
			}
		});
		$('.setgrid .box-product').each(function(){
			if(counter % 3==0){ 
				if ($(window).width() > 738) { 
					$(this).css('margin-right','0');
				}
			}
			counter++;
		});
	}));
	
	$(window).resize();
	
	/* Web App Mode */
	if (("standalone" in window.navigator) && window.navigator.standalone) {
		$('#header').addClass('nologo');
		// Fix for links in Wep App Mode
		$(document).on('click','a',function(e){
			var new_location = $(this).attr("href");
			if (new_location != undefined && new_location.substr(0, 1) != "#" && new_location!='' && $(this).attr("data-method") == undefined && $(this).attr("rel") == undefined && $(this).not(".open-left") && $(this).not(".open-right")){
				e.preventDefault();
				window.location = new_location;
			}
		});
	}
	
	$( ".checkout-heading" ).on({
		click: function() {
			if($(window).width() >= 479){
				$('.checkout-content').slideUp('slow');
				$(this).parent().find('.checkout-content').slideDown('slow');
			}
		}
	});

});
/* ---------------document ready end----------------- */


/* ---------------------Facebook / Twitter----------------------- */
  
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=371189259657718";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");