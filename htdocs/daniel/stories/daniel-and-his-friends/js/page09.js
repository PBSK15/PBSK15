// page 9
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg09-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5, zIndex : -10 });
			var wSpr = new window.animPG09Wednesday.Animation(null, 0, false).set({ name : 'wednesday', regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			var eSpr = new window.animPG09Elaina.Animation(null, 0, false).set({ name : 'elaina', regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', zIndex : -1, useZIndex : false });
			var dSpr = new window.animPG09Daniel.Animation(null, 0, false).set({ name : 'daniel', regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			this.conContent.addChild(bg, wSpr, eSpr, dSpr);
		}

		this.conContent.getChildByName('wednesday').gotoAndStop(0);
		this.conContent.getChildByName('elaina').gotoAndStop(0);
		this.conContent.getChildByName('daniel').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-9-0', { top : '140px', left : '-530px', width : '460px' });
		this.voText('page-9-0');
	},
	update : function()
	{
		
	},
	end : function() 
	{
	
	},

	click : function(e)
	{
		if ( e.target.name === 'daniel' || e.target.name === 'wednesday' || e.target.name === 'elaina' )
			e.target.gotoAndPlay(1);
		
		if ( e.target.name === 'daniel' )
			sbe.vo.play('DT thats one way were different');
			// sbe.vo.play('011 TAP TK1B DANIEL SEL DANIELFRIENDS');
	}
});