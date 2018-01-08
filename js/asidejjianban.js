
$(function(){
//侧边nav显示函数
	(function asideNavShow(){
		var $sub = $('.nav-sub-box');

		var activeLi,activeNav;
		var timer;
		var mouseInSub = false;

		$sub.on('mouseenter',function(e){
			mouseInSub = true;
		}).on('mouseleave',function(e){
			mouseInSub = false;
		})


		$('.nav').on('mouseenter',function(){
			$sub.removeClass('none');

		}).on('mouseleave',function(){
			$sub.addClass('none');

			if (activeLi) {
				activeLi.removeClass('active');
				activeLi =null;
			}
			if (activeNav) {
				activeNav.addClass('none');
				activeNav = null;
			}

		}).on('mouseenter','li',function(e){
			if (!activeLi) {
				activeLi = $(this).addClass('active');
				index = $(this).attr('data-index');
				activeNav = $('#' +'nav-sub-item'+ index);
				activeNav.removeClass('none');	
				return;
			}

			if (timer) {
				clearTimeout(timer);
			}

			
		
			timer =	setTimeout(function(){
				if (mouseInSub) {
					return;
				}

				activeLi.removeClass('active');
				activeNav.addClass('none');
				
				activeLi = $(e.target);
				activeLi.addClass('active');
				activeNav =$('#' +'nav-sub-item'+ $(e.target).attr('data-index'));
				activeNav.removeClass('none');	
				timer = null;
			},100)
				
		})
	})();

})