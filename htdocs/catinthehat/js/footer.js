//footer.js

define(["jquery","utils/divy", 'utils/click', 'locations'],function($,divy, Click, Loc){
	
		return function(c){
			var self = this;
			var _c = c;
			
			var _footerLinks = {
				portfolio: {
					link: 'http://portfolioentertainment.com/',
					size: [199,65]
				},
				collingwood: {
					link: 'http://www.collingwoodandco.co.uk/',
					size: [184,64]
				},
				drseuss: {
					link: 'http://seussville.com/',
					size: [171,87]
				},
				randomhouse: {
					link: 'http://www.randomhousekids.com/',
					size: [269,58]
				},
				kqed: {
					link: 'http://www.kqed.org/',
					size: [185,55]
				},
				doe: {
					link: 'http://www.ed.gov/',
					size: [90,90]
				},
				cpb: {
					link: 'http://cpb.org/',
					size: [88,110]
				},
			}
			
			this.layout = function(c){
				_c = c;
				var s = c.scale();
				s = c.phone() ? s * 1.25 : s;
				console.log ("layout footer page");
				$('html').css('background-color', '#FFDF36');
				_div.css({
					'background-color':'#FFDF36',
					'border-top':'2px solid black'
				});
				$('.logoBox',_div).css({display:'block',margin:'auto',width:'95%','max-width':720 * s})
				$('.buttons',_div).css({
					width:330 * s,
					display:'block',
					margin:' 0 auto',
					'margin-top': 15 * s,
					'margin-bottom': 15 * s,
					'font': '0/0 a',
					'text-shadow': 'none',
					'color': 'transparent',
				});
				$('.buttons a', _div).css({
					display: 'inline-block'
				});
				$('.about', _div).css({
					'width': 150 * s,
					'height': 70 * s,
					'cursor': 'pointer',
					'display': 'inline-block',
					'background-image': 'url('+Loc.images+'footer_about-the-show.png)',
					'background-size': '100%'
				});
				$('.tips',_div).css({
					'width': 150 * s,
					'height': 70 * s,
					'margin-right':25 * s,
					'cursor': 'pointer',
					'display': 'inline-block',
					'background-image': 'url('+Loc.images+'footer_parent-tips.png)',
					'background-size': '100%'
				});
				
				var linkS = s * .5;
				if(c.phone() && c.portrait()) linkS = linkS * .73;
				var linkDivs = $('.link', _div);
				linkDivs.each(function(i, div){
					var id = $(div).attr('id');
					$(div).css({
						width: _footerLinks[id].size[0] * linkS * .8,
						height: _footerLinks[id].size[1] * linkS * .8,
						'background-image': 'url('+Loc.images+'footer/'+id+'.png)',
						'background-size': '100% 100%',
						'float': 'left',
						'margin': 30 * linkS,
						'margin-top': 50 * s - _footerLinks[id].size[1] * linkS * .4,
						cursor: 'pointer'
					});
				});
				
				$('.logos', _div).css({
					overflow: 'visible',
					background: '#ffe779',
					'width': 740 * linkS * 2,
					margin: 'auto',
					height: 80 * s,
					position: 'relative',
					'font': '0/0 a',
					'text-shadow': 'none',
					'color': 'transparent'
				});
				
				$('.produced', _div).css({
					display: 'block',
					float: 'left',
					width: 222 * linkS * 2,
					position: 'relative',
				});
				$('.association', _div).css({
					display: 'block',
					float: 'left',
					width: 363 * linkS * 2,
					position: 'relative',
				});
				$('.funded', _div).css({
					display: 'block',
					float: 'left',
					width: 155 * linkS * 2,
					position: 'relative',
				});
				$('.title', _div).css({
					'font-family':'Arial, Helvetica, sans-serif',
					'color':'#688C99',
					width: '100%',
					
					height: 60 * linkS,
					'text-align': 'center',
					position: 'absolute',
					'font-size': (c.phone() && c.portrait() ? 34:28) * linkS,
					'line-height': 30 / 14
				});
				
				$('.legalText',_div).css({padding:'1em','color':'#688C99','font-size':'.8em','line-height':'1em','text-align':'center','font-family':'Arial, Helvetica, sans-serif'})
				if (_c.phone() && _c.portrait()){
					$('.legalText',_div).css({'font-size':'.6em'});
				}
				
				_div.css({'display': 'block'}); 
			}
			
			this.div = function(){
				return _div;
			}
			
			this.run = function(){
			}
			
			var _navigateTo;
			this.setRouterFunction = function(func) {
				_navigateTo = func;
			}
			
			function make(){
				_div = $('.footer');
				return;
				divy
					.a('footer')
						.b('buttons')
							.c('tips')
							.c('about')
						.b('logos')
							.c('produced')
								.d('title').html('Produced By')
								.d('link','portfolio')
								.d('link','collingwood')
							.c('association')
								.d('title').html('In Association With')
								.d('link','drseuss')
								.d('link','randomhouse')
								.d('link','kqed')
							.c('funded')
								.d('title').html('Funded By')
								.d('link','doe')
								.d('link','cpb')
						.b('legalText').html("<p>The Cat in the Hat Knows a Lot About That! Logo and word mark &#169 2010 Dr. Seuss Enterprises, L.P. Collingwood O'Hare Productions Limited, and Portfolio Entertainment Inc. All Rights reserved.</p>"
							+"<p>The contents of this Web site were developed under a cooperative agreement, #PRU295A100025, from the U.S. Department of Education. However, those contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government.</p>")
			
				_div = divy.pop();
				
				var links = ['tips','about'];
				for(var i = 0; i < links.length; i++) addListener(links[i]);
				function addListener(link){
					Click.listen($('.'+link, _div), function() { _navigateTo(link) });
				}
				
				for(var id in _footerLinks) addFooterListener(id);
				function addFooterListener(id){
					Click.listen($('#'+id, _div), function() { window.location = _footerLinks[id].link });
				}
				
			}
			
			make();
			
		}
	
})