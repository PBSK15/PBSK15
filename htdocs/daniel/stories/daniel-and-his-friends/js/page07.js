// page 7
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg07-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5 });
			var aSpr = new window.animPG07Anim.Animation(null, 0, false).set({ name : 'anim', regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });

			this.conContent.addChild(bg, aSpr);
		}
		this.conContent.getChildByName('anim').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-7-0', { top : '-340px', left : '-530px', width : '440px' });
		this.voText('page-7-0');
	},
	update : function()
	{
		
	},
	end : function() 
	{
	
	},
	click : function(e)
	{
		if ( e.target.name === 'anim' )
		{
			sbe.vo.play('007_yeehaw');
			e.target.gotoAndPlay(1);
		}
	}
});