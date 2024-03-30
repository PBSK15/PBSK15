// page 8
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg08-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5 });
			var eSpr = new window.animPG08Elaina.Animation(null, 0, false).set({ name : 'elaina', x : 440, y : 260, framerate : 24, regX : 550 * 0.5, regY : 800 * 0.5, mouseChildren : false, cursor : 'pointer', useZIndex : false });

            this.conContent.addChild(bg, eSpr);
		}

		this.conContent.getChildByName('elaina').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-8-0', { top : '-340px', left : '-520px', width : '380px' });
		this.voText('page-8-0');

		var e = this.conContent.getChildByName('elaina');
		cjs.Tween.get(this).wait(600).call(e.gotoAndPlay, [1], e);
	},
	update : function()
	{
		
	},
	end : function() 
	{
	
	},
	click : function(e)
	{
		if ( e.target.name === 'elaina' )
			e.target.gotoAndPlay(1);
	}
});