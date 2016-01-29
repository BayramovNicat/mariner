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
});

$( window ).resize(function() {
	sidebar_width();
});