$(document).ready(function(e) {
  $('.top').hide();

	$(document).scroll(function(){
		if( $(document).scrollTop()>1 ){
			$('.top').fadeIn();
		}else{
			$('.top').fadeOut();
		}
	});

	$('.top').click(function(){
		$('html,body').animate({'scrollTop' : '0px'} , 800);
	});

	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		$('.title_frame').css('background-position-y', -(scrollPos / 2) + 'px');
		$('.deco1').css('transform' , 'translateX( ' + (scrollPos / 4) + 'px )');
		$('.deco2').css('transform' , 'translateX( ' + ( - scrollPos / 4) + 'px )');
		$('.fourth_block').css('background-position-y', -(scrollPos / 2) + 'px');
	});

});

