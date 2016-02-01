
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
function chat_open(){
	$(".chat-btn").on('click', function(){
		$('.side-chat').addClass('active');
		var tl = new TimelineMax();
		tl.to($('.side-chat'), 0.3, {width:"335px",ease:Back.easeInOut})
			.to($('.side-chat .loader'), 0.3, {opacity:1, visibility:'visible'})
			.to($('.search-input'), .3, {bottom: 20, opacity: 1,visibility: 'visible'},"+=0.6");
		
		// settimeoutnan userleri yukleyirem
		setTimeout(function() {
			TweenMax.to($('#user-list'),0.3, {opacity:1, visibility:'visible'});
			TweenMax.to($('.side-chat .loader'), 0.3, {opacity:0,visibility:'hidden'});
		}, 1000);
	});
	$('.user-panel .actions .fa-times').on('click', function(){
		$('.side-chat').removeClass('active');
		$('#user-list, #message-list').css({'opacity':'0','visibility':'hidden'});
		$('.search-input,.message-input').css({'opacity':'0.5','bottom':'0','visibility':'hidden'});
		TweenMax.to($('.side-chat'), 0.3, {width:"0px",ease:Back.easeInOut});
	});
}
$(document).ready(function(){
	sidebar_width();
	sidebar_submenu_init();
	sidebar_submenu_click();
	chat_open();

	$('#user-list .list-group a.list-group-item').on('click', function(){
		var tl = new TimelineMax();
		tl.to($('#user-list'), 0.3, {opacity:0, visibility:'hidden'})
			.to($('.side-chat .loader'), 0.3, {opacity:1, visibility:'visible'})
			.to($('#message-list'), 0.3, {opacity:1, visibility:'visible'})
			.to($('.side-chat .loader'), 0.3, {opacity:0,visibility:'hidden'})
			.to($('.message-input'), .3, {bottom: 20, opacity: 1,visibility: 'visible'},"-=0.3");
			$('.search-input').css({'opacity':'0.5','bottom':'0','visibility':'hidden'});
	});

	$('#message-list a.chat-back').on('click', function(){
		var tl = new TimelineMax();
		tl.to($('#message-list'), 0.3, {opacity:0, visibility:'hidden'})
			.to($('.side-chat .loader'), 0.3, {opacity:1, visibility:'visible'})
			.to($('#user-list'), 0.3, {opacity:1, visibility:'visible'})
			.to($('.side-chat .loader'), 0.3, {opacity:0,visibility:'hidden'})
			.to($('.search-input'), .3, {bottom: 20, opacity: 1,visibility: 'visible'},"-=0.3");
			$('.message-input').css({'opacity':'0.5','bottom':'0','visibility':'hidden'});
	});

	$('#message-form').submit(function(){
		if($(this).children('input').val()){
			var html = '<div class="message-dialog" style="opacity: 0; margin-top: 110px">'+
	                        '<div class="message-text right">'+
	                            '<p>'+$(this).children('input').val()+'</p>'+
	                        '</div>'+
	                    '</div>';
			$('#message-list .list-group').append(html);
			TweenMax.to($('#message-list .list-group .message-dialog:last-child'), 0.3, {opacity:1, marginTop: 10, ease:Back.easeInOut});
			$('#message-list .list-group').animate({
		        scrollTop: $('#message-list .list-group .message-dialog:last-child').offset().top
		    }, 800);
			$(this).children('input').val('');
		}
		return false;
	});

});

$( window ).resize(function() {
	sidebar_width();
	sidebar_submenu_init();
});