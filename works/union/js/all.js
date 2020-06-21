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


});

