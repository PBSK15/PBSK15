// page 11
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg11-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5, zIndex : -1000 });
			var dSpr = new window.animPG11Daniel.Animation(null, 0, false).set({ name : 'daniel', regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			var kSpr = new window.animPG11Katerina.Animation(null, 0, false).set({ name : 'katerina', zIndex : -10, regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			dSpr.scaleX = dSpr.scaleY = 0.9;
			dSpr.x += 60;
			this.conContent.addChild(bg, dSpr, kSpr);
		}

		this.conContent.getChildByName('daniel').gotoAndStop(0);
		this.conContent.getChildByName('katerina').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-11-0', { top : '-340px', left : '-540px', width : '400px' });
		this.voText('page-11-0');
		
		var k = this.conContent.getChildByName('katerina');
		cjs.Tween.get(k).wait(600).call(k.gotoAndPlay, [0], k);
	},
	update : function()
	{
		
	},
	click : function(e) 
	{
		if ( e.target.name === 'daniel' || e.target.name === 'katerina' )
			e.target.gotoAndPlay(0);

		if ( e.target.name === 'daniel' )
			sbe.vo.play('011 TAP TK1B DANIEL SEL DANIELFRIENDS');
	}
});