$(".side-nav").on('click', function(){
	if($(this).hasClass('active')){
		TweenMax.to($(this), 0.3, {width:"80px",ease:Back.easeInOut});
		TweenMax.to($('.view-container'), 0.3, {paddingRight:"80px",ease:Back.easeInOut});
	}else{
		TweenMax.to($(this), 0.3, {width:"335px",ease:Back.easeInOut});
		TweenMax.to($('.view-container'), 0.3, {paddingRight:"335px",ease:Back.easeInOut});
	}
	$(this).toggleClass('active');
});
function sidebar_width(){
	sidebar = $('.content-sidebar');
	sidebar.css('width',sidebar.parent().width());
}
function sidebar_submenu(){
	$('.submenu').css({'z-index':'10','height':$('#menu').css('height'),'width':$('#menu').css('width'), 'position':'absolute','top':'0','left':parseInt($('#menu').css('width'))+10});
	$('#menu a.dropdown').on('click', function(){
		TweenMax.to($($(this).data('target')), 0.3, {x:-1*(parseInt($('#menu').css('width'))+10),ease:Power4.easeNone});
		return false;
	});
	$('.menu-back').on('click',function(){
		TweenMax.to($(this).parent(), 0.3, {x:0,ease:Power4.easeNone});
		return false;
	});
}
$(document).ready(function(){
	sidebar_width();
	sidebar_submenu();
});

$( window ).resize(function() {
	sidebar_width();
});