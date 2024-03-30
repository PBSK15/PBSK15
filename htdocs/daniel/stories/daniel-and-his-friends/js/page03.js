// page 3
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg03-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5 });
			var dSpr = new window.animPG03Daniel.Animation(null, 0, false).set({ name : 'daniel', x : -290, y : 52, regX : 550 * 0.5, regY : 600 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });

			this.conContent.addChild(bg, dSpr);
		}

		this.conContent.getChildByName('daniel').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-3-0', { top : '-340px', left : '0px', width : '460px' });
		this.voText('page-3-0');

		var d = this.conContent.getChildByName('daniel');
		cjs.Tween.get(d).wait(800).call(d.gotoAndPlay, [1], d);
	},
	update : function()
	{
		
	},
	end : function() 
	{
	
	},

	click : function(e)
	{
		if ( e.target.name === 'daniel' )
			e.target.gotoAndPlay(1);
	}
});