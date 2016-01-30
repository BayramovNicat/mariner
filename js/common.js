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
$(document).ready(function(){
	sidebar_width();
	$('#new-boats').css({'z-index':'10','height':$('#menu').css('height'),'width':$('#menu').css('width'), 'position':'absolute','top':'0','left':parseInt($('#menu').css('width'))});
	$('#menu a').on('click', function(){
		TweenMax.to($($(this).data('target')), 0.2, {left:'0',ease: Power3.easeOut});
	});
	$('.menu-back').on('click',function(){
		TweenMax.to($(this).parent(), 0.2, {left:parseInt($('#menu').css('width')),ease: Power3.easeOut});
	});
	
	// console.log($('#menu').css('width'));
});

$( window ).resize(function() {
	sidebar_width();
});