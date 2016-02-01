
function sidebar_width(){
	sidebar = $('.content-sidebar');
	sidebar.css('width',sidebar.parent().width());
}
function sidebar_submenu_init(){
	$('.submenu').css({'z-index':'10','height':$('#menu').css('height'),'width':$('#menu').css('width'), 'position':'absolute','top':'0','left':parseInt($('#menu').css('width'))+10});
}
function sidebar_submenu_click(){
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
	sidebar_submenu_init();
	sidebar_submenu_click();
	$(".chat-btn").on('click', function(){
		if($('.side-chat').hasClass('active')){
			TweenMax.to($('.side-chat'), 0.3, {width:"0px",ease:Back.easeInOut});
		}else{
			TweenMax.to($('.side-chat'), 0.3, {width:"335px",ease:Back.easeInOut});
		}
		$('.side-chat').toggleClass('active');
	});
	$('.user-panel .actions .fa-times').on('click', function(){
		$('.side-chat').toggleClass('active');
	});
});

$( window ).resize(function() {
	sidebar_width();
	sidebar_submenu_init();
});