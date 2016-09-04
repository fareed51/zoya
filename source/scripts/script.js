$(document).ready(function() {
	$('#header .fa-bars').click(function(){
		$('.navigation').slideToggle(1000);
	});
});
// <i class="fa fa-times" aria-hidden="true"></i>
//pin navigation-----------------------
  var pin = new ScrollScene({
    triggerElement: "#nav",
  }).setPin("#nav").addTo(controller);
  //--------------------------------------

// $(function(){
// 	var fitnessheight = $('.fitness-article').outerHeight(true);
// 	$('.fitness-figure').css('height', fitnessheight);

// 	var bodyheight = $('.body').outerHeight(true);
// 	$('.yours').css('height', bodyheight);

// 	var walkheight = $('.walk img').outerHeight(true);
// 	$('.beach-view').css('height', walkheight);

// 	var secondheight = $('.life-style').outerHeight(true);
// 	$('.fun').css('height', secondheight);

// 	var fourthheight = $('.habits').outerHeight(true);
// 	$('.involved').css('height', fourthheight);

// });

// $(window).resize(function() {
// 	var fitnessheight = $('.fitness-article').outerHeight(true);
// 	$('.fitness-figure').css('height', fitnessheight);

// 	var bodyheight = $('.body').outerHeight(true);
// 	$('.yours').css('height', bodyheight);

// 	var walkheight = $('.walk img').outerHeight(true);
// 	$('.beach-view').css('height', walkheight);

// 	var secondheight = $('.life-style').outerHeight(true);
// 	$('.fun').css('height', secondheight);

// 	var fourthheight = $('.habits').outerHeight(true);
// 	$('.involved').css('height', fourthheight);


// });