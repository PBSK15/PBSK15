// page 4
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg04-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5 });
			var aSpr = new window.animPG04Anim.Animation(null, 0, false).set({ name : 'anim', x : -230, regX : 800 * 0.5, regY : 800 * 0.5, framerate : 24, cursor : 'pointer', useZIndex : false });

			this.conContent.addChild(bg, aSpr);
		}
	},
	start : function()
	{
		this.addText('page-4-0', { top : '-340px', left : '60px', width : '420px' });
		this.voText('page-4-0');
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
			sbe.vo.play('004_daniel-singing');
		else if ( e.target.name === 'teacher' )
			sbe.vo.play('004_teacher-singing');
	}
});