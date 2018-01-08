$(function(){

	/*顶部广告关闭*/

	(function closeTopBanner(){
		var $btn = $('.index-top-banner-cont span');
		var $topBanner = $('.index-top-banner');

		$btn.click(function(){
			$topBanner.fadeOut();
		})

	})();

	//首页促销、公告JS
	(function newsMover(){
		
		var $loginCol2 = $('.index-main-login-col2');

		$loginCol2.on('mouseenter',function(e){
			activeHead = $('.login-col2-head-1');
			activeCont = $('.login-col2-cont-1');
		}).on('mouseenter','.login-col2-head-1',function(e){
			if (this !== activeHead) {
				var index = $(this).attr('data-id');
				
				$('.login-col2-head-2 a').removeClass('login-col2-head-line');
				$('.login-col2-cont-2').addClass('none');

				$('#' +'login-col2-cont-'+index).removeClass('none');
				$('.login-col2-head-1 a').addClass('login-col2-head-line');

				activeHead = $('.login-col2-head-1');
				activeCont = $('.login-col2-cont-1')
			}
			
		}).on('mouseenter','.login-col2-head-2',function(e){
			if (this !== activeHead) {
				var index = $(this).attr('data-id');

				$('.login-col2-head-1 a').removeClass('login-col2-head-line');
				$('.login-col2-cont-1').addClass('none');

				$('#' +'login-col2-cont-'+index).removeClass('none');
				$('.login-col2-head-2 a').addClass('login-col2-head-line');

				activeHead = $('.login-col2-head-2');
				activeCont = $('.login-col2-cont-2')
			}
		})


	})();

	//登录区域小图标的滑入效果
	(function iconSlideIn(){
		var $indexMainLogin = $('.index-main-login-col3'); //获取icon 与 form 的父类
		var $loginIcons = $('.login-col3-cont-icon'); //给整个小图标ul绑定事件
		var $formClose = $('.none-cont-close'); //表单上的关闭按钮绑定隐藏表单，显示小图标事件
		var $form = $('.login-col3-cont-none'); //获取整个表单

		var $liPho = $('#col3-cont-icon-pho'); //获取四个有事件的小图标
		var $liAir = $('#col3-cont-icon-air');
		var $liHot = $('#col3-cont-icon-hot');
		var $liGame = $('#col3-cont-icon-game');

		$indexMainLogin.on('mouseenter',function(){
			
		}).on('mouseenter','.col3-cont-icon-active',function(){ 
			var phoIndex = $liPho.attr('data-index')

			sildeIndex(phoIndex)

			$loginIcons.removeClass('ulSlideIn')
			$form.removeClass('iconSlideInDown')

			$form.addClass('formShow')
			$loginIcons.addClass('ulSlideOut')
			$form.addClass('iconSlideInUp')

		})



		//关闭按钮事件
		$formClose.on('click',function(){

			$loginIcons.removeClass('ulSlideOut')
			$form.removeClass('iconSlideInUp')

			$loginIcons.addClass('ulSlideIn')
			$form.addClass('iconSlideInDown')

			$form.removeClass('formShow')
		})


		//一个函数接收一个参数即四个小图标的位置，然后红线跟着变动

		function sildeIndex(index){   //index 接收数字 1 2 3 4 

			var aIndex = $('.col3-cont-none-head a[data-index = '+index+']')
			
			$silde[0].style.left = (index -1) * step +'px'
		}
		
		var $noneHead = $('.col3-cont-none-head');
		var $silde = $('.col3-cont-none-silde');
		var step = 40;

		$noneHead.on('mouseover',function(e){

			var $currentNavNum = $(e.target).attr('data-index');
			var dataIndex = $currentNavNum -1;		

			$silde[0].style.left = dataIndex * step +'px';

		})

	})();

	/*京东秒杀中间区域滑动效果*/
	(function jdSkillMove(){
		var $skillLBTN = $('#skill-left-btn');
		var $skillRBTN = $('#skill-right-btn');
		var $skillMain = $('.jd-skill-main');
		var step = 800;
		var mainItems = $('.jd-skill-main-items')[0];

		$skillMain.on('mouseenter',function(e){
			$item = $(e.target).attr('data-item');

		}).on('mouseleave',function(){
			
		}).on('click','#skill-left-btn',function(){
			
			var currentLeftVal = parseInt(mainItems.getAttribute('style').slice(5));
			
			if (currentLeftVal =='0') {
				mainItems.style.left = '-1600px'
			}else{
				var newcurrent = currentLeftVal;
				mainItems.style.left =newcurrent+ step+'px';
			}

		}).on('click','#skill-right-btn',function(){
			// var mainItems = $('.jd-skill-main-items')[0];
			var currentLeftVal = parseInt(mainItems.getAttribute('style').slice(5));

			if (currentLeftVal =='-1600') {
				mainItems.style.left = '0px'
			}else{
				var newcurrent = currentLeftVal;
				mainItems.style.left =newcurrent -step+'px';
			}
			
		})

	})();

	/*京东秒杀右侧广告滑动效果*/
	(function jdSkillBanMove(){
		var $btn1 = $('#skill-banner-btn1');
		var $btn2 = $('#skill-banner-btn2');
		var $slide1 = $('#skill-slide-1');
		var $slide2 = $('#skill-slide-2');

		var btnActive = $btn1;

		$('.skill-banner-btn').on('mouseenter',function(){
			//一进去自动播放停止
			//离开后自动播放
		}).on('mouseenter','#skill-banner-btn1',function(e){
			
			if (btnActive != $btn1) {
				$('#skill-slide-2').removeClass('img-active');
				$('#skill-slide-1').addClass('img-active');

				$btn2.removeClass('btn-active')
				$btn1.addClass('btn-active')
			}
			btnActive = $btn1;
			

		}).on('mouseenter','#skill-banner-btn2',function(e){

			$('#skill-slide-1').removeClass('img-active');
			$('#skill-slide-2').addClass('img-active');

			$btn1.removeClass('btn-active')
			$btn2.addClass('btn-active')
			btnActive = $btn2;

		})

	})();

	/*流量充值区域滑动效果*/

	(function FormHeadMove(){   
		var $formHeadItem = $('.form-head-item');

		var	active = $('.itemActive');  //初始化 话费充值 被激活
		var indexActive = $('#1a');		//初始化 话费充值的对应表单显示

		$formHeadItem.on('mouseenter',function(e){
			
		}).on('mouseenter','.item-a',function(e){  //给其子类绑定事件

			var currentIndex = $(e.target).attr('data-id');  //获得鼠标在当前的index值
			var currentForm = $('#' + currentIndex)			//获得当前index值的相应表单

			if (e.target == active) {
				return
			}

			active.removeClass('itemActive');
			indexActive.addClass('none');

			$(e.target).addClass('itemActive');
			currentForm.removeClass('none');

			active = $('.itemActive');				//改变当前状态 此处命名了全局变量 不妥 应该局部 使用闭包在当前局部全局下
			indexActive = currentForm;				//改变当前状态

		})

	})();

})