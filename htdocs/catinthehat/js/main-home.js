//main.js

require.config({
	shim: {
        easel: {
            exports: 'createjs'
        },
        tween: {
            deps: ['easel'],
            exports: 'Tween'
        },
		preload: {
			deps: ['easel']
		},
		soundjs: {
			deps: ['easel']
		},
		pbsVideo:{
			deps:['jquery'],
			exports: 'org'
		}
    },
    paths: {
		jquery:'jquery',
        easel: 'createjs/easeljs',
        tween: 'createjs/tweenjs',
		preload: 'createjs/preloadjs-NEXT.min',
		soundjs: 'createjs/soundjs-NEXT.min',
		pbsVideo:'pbsVideo.v2.min'
    } 
});

require(['jquery','utils/context','views/home','header','footer', 'utils/router'], function($,Context,homeView,Header,Footer,Router) {
	$(function(){
		if(navigator.userAgent.match(/Android|BlackBerry|Iphone|iPad|iPod|Silk|Opera Mini|Kindle|Nook|IEMobile|Mobile|Phone|webOS/i)){
			
			$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />');
			$('head').append('<meta name="HandheldFriendly" content="true" />');
	
			
			var _c = new Context();
			
			var _head;
			var _main;
			var _foot;
			var _lastLayout;
			
			var stylesheet = $('link[title="main style sheet"]')[0];
			if(stylesheet) stylesheet.disabled=true;
		
			
			$('body').css({'margin':0,'line-height':0});
			$('body').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
			$('body').append($('<style type="text/css">-webkit-tap-highlight-color: rgba(0,0,0,0);</style>'));
			var _router = new Router({
				'home': homeView,
			}, 'home', $('.main'), _c);
			
			_head = new Header(_router);
			_head.run(_c);
				
			_foot = new Footer();
			_foot.run();
			
			
			
			_router.listenTo([
				_head,
				_foot
			]);
			_router.start();
			
			
			
			function layout(){
				
				_c.update();
				
				
				
				if (_c.portrait() && _lastLayout != "portrait")
					setTimeout(function(){
						_lastLayout = "portrait";
						layout();
					},500);
					
				if (!_c.portrait() && _lastLayout != "landscape")
					setTimeout(function(){
						_lastLayout = "landscape";
						layout();
					},500);
				
				$('.header').css({position:'relative',width:_c.width(),display:'inline-block',margin:0,padding:0});
				$('.main').css({position:'relative',width:_c.width(),display:'inline-block',margin:0,padding:0});
				$('.footer').css({position:'relative',width:_c.width(),display:'inline-block',margin:0,padding:0});
				
				_c.current = _router.current;
				_head.layout(_c);
				_router.layout(_c);
				_foot.layout(_c);
			}
			window.addEventListener('orientationchange', layout);
			$(window).resize(layout);
			layout();
			
		}
		else {
			$('.header').remove();
			$('.main').remove();
			$('.footer').remove();
			$.get('content.html', function(data){
				$('body').append(data);
				$('head').append('<meta name="viewport" content="initial-scale=1.0, width=device-width"/>');
			});
		}
	});
});