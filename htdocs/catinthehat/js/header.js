//header.js

define(["jquery","utils/divy",'utils/click', 'locations'],function($,divy,Click, Loc){
	
		return function(r){
			var self = this;
			var _router = r;
			
			var _div; 
			
			
			this.layout = function(c){
				_c = c;
				_div.css({
					'margin':0, 
					'padding': 0,
					'font': '0/0 a',
					'text-shadow': 'none',
					'color': 'transparent',
				});
				
				$('b').css('display', 'none');
				
				var s = 1;
				if(_c.width()<675){
					var r = 675/100;
					s = _c.width()/695;
					s = (1-s)/5 + s
				}
				if(c.landscape()) s = s * .85;
				if(c.landscape() && c.phone()) s = s * .9;
				
				$('.logos',_div).css({'position':'absolute','left':0});
				var links = $('.links',_div);
				$('div',links).css({'margin-left':25 * s})
				_div.css({'background':'url('+Loc.images+'portrait_header_bg.png)',width:_c.width(),height:100 * s,"display":"inline-block","border-bottom":'2px solid black'});
				
				$('.pbs',_div).css({
					width:80*s,
					height: 80*s,
					
					'display': 'inline-block',
					'margin-left': 4*s
				});
				$('.home',_div).css({
					width:190*s,
					height: 90 * s,
					
					'display': 'inline-block',
					'cursor': 'pointer',
					'margin-left': -2 * s,
					'margin-right': -5 * s
				});
				$('img',links).css({
					'margin-left':(c.small() && c.portrait() ? 3 : 13 * s),
					'display': 'inline-block',
					width:90*s,
					cursor: 'pointer',
					height: 90 * s,
				});
		
				$('.characters',_div).css({
					'width': 100*s
				});
				
				if (_router.current() == "videos"){
					$('.videos',_div).attr('src',Loc.images+'nav_videos_active.png');
				}
				if (_router.current() == "games"){
					$('.games',_div).attr('src', Loc.images+'nav_games_active.png');
				}
				if (_router.current() == "characters"){
					$('.characters',_div).attr('src', Loc.images+'nav_characters_active.png');
				}
				$('.videos',_div).css({width:90*s,'cursor': 'pointer'})
				var small = c.phone() && c.portrait();
				
				var left =  small ? 310 : 340;
				$('.links',_div).css({'position':'absolute','left':_c.width()- left*s, width: left * s});
				
				_div.css({height:100*s})
				$('img', $('.logos',_div)).css({
					'margin-left': (small ? 0 : 10 * s)
				});
				
				
				//debug
				
			/*	$('.debug', _div).html('W'+_c.width() + ' H'+_c.height()).css({
					'font-size': 12 * s,
					'font-weight': 'bold',
					'color': 'white',
					'font-family': 'Segoe UI, Arial',
					'position': 'absolute',
					'top': 82 * s,
					'left': 5 * s,
					'width': 100 * s,
					'height': 20 * s,
					'line-height': 1.2
				});*/
				
				
				_div.css({
					'display': 'block'
				});
				
			}
			
			this.div = function(){
				return _div;
			}
			
			var _navigateTo;
			this.setRouterFunction = function(func) {
				_navigateTo = func;
			}
			
			this.run = function(c){
				
				this.layout(c);
			}
			
			function make(){
				_div = $('.headbar');
				return;
				divy
					.a('headbar')
						.b('logos')
							.c('pbs')
							.c('home')
						.b('links')
							.c('games')
							.c('videos')
							.c('characters')
						.b('debug');
				_div = divy.pop();
				
				var links = ['games', 'videos', 'characters', 'home'];
				for(var i = 0; i < links.length; i++) addListener(links[i]);
				function addListener(link){
					Click.listen($('.'+link, _div), function() { _navigateTo(link) });
				}
				Click.listen($('.pbs',_div),function(){window.location.href = "http://www.pbskids.org"});
				
			}
			
			make();
			
		}
	
})