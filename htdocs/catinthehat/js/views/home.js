//home.js
define(['jquery', 'utils/divy','utils/click', 'locations',"utils/modern","data/sprites","domSprite"],function($, Divy,Click, Loc,Modern,Sprites,domSprite) {
	return function(){
		
		var _div;
		var _c;
		var _links = [
			{id:'videos_link',
				link: 'videos'}, 
			{id:'deep_sea',
				link:'followme'},
			{id:'my_seahorse',
				link:'seahorse'}];
				
		var _navigateTo;
		this.setRouterFunction = function(func) {
			_navigateTo = func;
		}
		var self = this;
		var _dance;
		
		function make(){
			
			_div = $('.home',$('.main'));
			
			// Divy
			// .a('home')
				// .b('kite')
				// .b('thing')
				// .b('fish');
			// for(var i = 0; i < _links.length; i++){
				// Divy
				// .b('link', _links[i].id)
					// .c('background')
					// .c('frame');
			// }
			// Divy
				// .b('cat');
			// _div = Divy.pop();
			$('.kite',_div).fadeOut(0);
			
			var can = new domSprite({name:"cat",atlas: Sprites[0].an})
			$('.cat',_div).append(can.div());
			
			
			can.gotoAndStop(0);
			_dance = can;

		
			setTimeout(function(){
				_dance.loop(2);
			},3000);
			
			
			Click.listen(can.div(),function(){
				_dance.loop(1);
			})
			
			
			Modern.transition($('.kite',_div),"11s");
			$('.kite',_div).fadeOut(0);
			Modern.transition($('.thing',_div),"1s");
			
			var firstPop = true;
			
			function flyKite(){
				if (_c){
					if (firstPop){
						popOut()
						firstPop = false;
						}
					var k = $('.kite',_div);
					
				
					k.fadeOut(0);	
					Modern.translateX(k,_c.width()*1.3);
					
					setTimeout(function(){
						k.fadeIn(0);
						Modern.translateX(k,-_c.width());
						setTimeout(flyKite,12000);
					},100);
					
					
				
				}else
				setTimeout(flyKite,1000);
			}
			
			
			flyKite();
			
			function popIn(){
				var th = $('.thing',_div);
				
				var ls = _c.phone() ? .78 : .9;
				var s = _c.scale();
			
				if (!_c.portrait()){
					Modern.translateY(th,s*(20*ls));
				}
				else{
					Modern.translateX(th,s*(0*ls));
				}
				
				setTimeout(popOut,4000);
			}
			
			function popOut(){
			
				var th = $('.thing',_div);
				var s = _c.scale();
				
				var ls = _c.phone() ? .78 : .9;
			
				if (!_c.portrait()){
					Modern.translateY(th,s*(120*ls));
				}
				else{
					Modern.translateX(th,s*(-90*ls));
				}
				
				setTimeout(popIn,5000);
			}
			
			
			
		}
		make();
		
		this.div = function() { return _div; }
		
		var _c;
		
		                                                //Layout
		
		this.layout = function(c){
			_c = c;
			var s = function(num) { return Math.round(c.scale() * num) }
			var p = c.portrait();
			var l = c.large();
			var layout = p ? 'portrait' : 'landscape';
			var w = c.width();
			var h = Math.round(c.width() * (p? 1.1 : (l ? .6 : .5)));
			
			_div.css({
				width: w,
				height: h,
				background: 'url('+Loc.images+'landscape_homepage_bg.png)',
				display:'inline-block',
				'background-size': 'cover',
				'position': 'relative',
				'line-height': 0,
				'font': '0/0 a',
				'text-shadow': 'none',
				'color': 'transparent',
			}).find('*').css({
				'position': 'absolute',
			});

			_div.css({"overflow":"hidden"});
				
			
			var ls = c.phone() ? .78 : .9;
			
			
			function layoutLink(link, i) {       //Links
				var div = $('#'+link, _div);
				div.css({
					'width': s(450 * ls),
					'height': s(290 * ls),
				}).css(
					c.landscape() ? 
					{
						left: s([l ? 650 : 780,50,50][i] * ls),
						top: s([200,50,350][i] * ls)
					}:{
						left: s(300),
						top: s((l?20:30) + (l?260:230) * i)
					}
				);
				$('.frame', div).css({
					width: '100%',
					height: '100%',
				});
				$('.background', div).css({
					width: s(408 * ls),
					height: s(244 * ls),
					top: s(22 * ls),
					left: s(24 * ls),
					position: 'absolute',
					'background-size': '100%',
					'background-image': 'url('+Loc.images+link+'_background.png)'
				});	
				
			}
			for(var i = 0; i < _links.length; i++) layoutLink(_links[i].id, i);
			var cS = .85;             //Cat
			$('.cat', _div).css({
				width: s(256),
				height: s(512),
				top: s(p ? 80 : (l?-20:-60)),
				left: p? s(-55) : .5 * (w - s(512*cS)),
				//'background-image': 'url('+Loc.images+'homepage_cat2.png)'
			});
			
			var catScale = 1.65 * c.scale();
			var wid = _dance.div().width();
			var hig = _dance.div().height();
			
			Modern.translateAndScale(_dance.div(),(wid/2)*-1*(1-catScale),(hig/2)*-1*(1-catScale), catScale);
			
		//	$('.canvas').css({width:'100%',height:'100%'});
			
			$('.canvas', _div).css({
				position:'relative',
				width: s(600*cS),
				height: s(650*cS),
				top: s(-55*cS),
				left:  s(-104*cS),
			});
			
			
			var fS = .85;             //Fish
			$('.fish', _div).css({
				'width': s(124*fS),
				'height': s(200*fS)				
			}).css(c.landscape()?{
				'left': w - s(124*fS),
				'top': h - s(200*fS)
			}:{
				'left': 0,
				'top': h - s(250*fS)
			}).attr('src', Loc.images + (c.landscape() ? 'landscape_homepage_fish.png':'homepage_fish.png'));
			
			var tS = ls;            //Thing
			$('.thing', _div).css(c.landscape()?{
				'width': s(136 * tS),
				'height': s(156 * tS),
				'top': s(70*tS),
				'left': s((l ? 800 : 950)*tS)
			}:{
				'width': s(140 * tS),
				'height': s(185 * tS),
				'top': s(100*tS),
				'left': s(-30*tS),
			}).attr('src', Loc.images + (c.landscape()? 'landscape_homepage_thing.png':'homepage_thing.png'));
			
			var kS = .85;
			$('.kite', _div).css({
				'width': s(360*kS),
				'height': s(180*kS),
				'top': s(0)
			});
			
			$('.main').css('display', 'block');
			
			
		}
		
	}
});