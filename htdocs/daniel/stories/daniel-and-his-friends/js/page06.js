// page 6
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg06-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5 });
			var cSpr = new window.animPG06Chrissie.Animation(null, 0, false).set({ name : 'chrissie', x : 200, y : 100, framerate : 24, regX : 550 * 0.5, regY : 550 * 0.5, mouseChildren : false, cursor : 'pointer', useZIndex : false });

			this.conContent.addChild(bg, cSpr);
		}

		this.conContent.getChildByName('chrissie').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-6-0', { top : '-340px', left : '-530px', width : '440px' });
		this.voText('page-6-0');
	},
	update : function()
	{
		
	},
	end : function() 
	{
	
	},
	click : function(e)
	{
		if ( e.target.name === 'chrissie' )
			e.target.gotoAndPlay(1);
	}
});