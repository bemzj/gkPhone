$(function(){
	$('.zw').css('padding-bottom',$('body').height()+'px');
	$('.mNav').on('click',function(event){
		event.stopPropagation();
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			$('.secondNav').stop().slideDown(500);
			
		}else{
			$(this).attr('isOpen',false);			
			$('.secondNav').stop().slideUp(500);
			$('.navMore').attr('isOpen',false);
			$('.navMore').next('ul').stop().slideUp(500);
			$('.navMore').css('background-image','url(img/add.png)');
		}
	});
	$('.navMore').on('click',function(event){
		event.stopPropagation();
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			$(this).next('ul').stop().slideDown(500);
			$(this).css('background-image','url(img/none.png)');
		}else{
			$(this).attr('isOpen',false);			
			$(this).next('ul').stop().slideUp(500);
			$(this).css('background-image','url(img/add.png)');
		}
	});
	$('.zw').on('click',function(event){
		event.stopPropagation();
		$(this).attr('isOpen',false);			
		$('.secondNav').stop().slideUp(500);
	});
	$(window).scroll(function(){
		if($('.zw').offset().top-$(window).scrollTop()<=0)
		{
			$('.secondNav').attr('isOpen',false);			
			$('.secondNav').stop().slideUp(500);
			$('.navMore').attr('isOpen',false);
			$('.navMore').next('ul').stop().slideUp(500);
			$('.navMore').css('background-image','url(img/add.png)');
		}
        if($(document).scrollTop()>400){
            $('#top').show()
        }else{
            $('#top').hide()
        }
	});
    $('#top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    })
});
