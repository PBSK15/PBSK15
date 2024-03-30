// page 2
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg02-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5 });

			var dSpr = new window.animPG02Daniel.Animation(null, 0, false).set({ name : 'daniel', x : -290, y : 140, regX : 550 * 0.5, regY : 550 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });

            this.conContent.addChild(bg, dSpr);
		}

		this.conContent.getChildByName('daniel').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-2-0', { top : '-340px', left : '-530px', width : '480px' });
		this.voText('page-2-0');
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