// page 12
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg12-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5, zIndex : -1000 });

			var sSpr = new cjs.Shape().set({ name : 'shape', cursor : 'pointer', alpha : 0.01 });
			sSpr.graphics.c().f('#fff').mt(-6, -244).lt(128, -236).lt(154, -63).lt(491, 0).lt(486, 345).lt(40, 311).lt(-416, 349).lt(-417, 57).lt(-44, -40);

			this.conContent.addChild( bg, sSpr );
		}
	},
	start : function()
	{
		this.addText('page-12-0', { top : '-340px', left : '-540px', width : '400px' });
		this.voText('page-12-0');
	},
	update : function()
	{
		// console.log(~~sbe.input.mouse.x - sbe.system.width * 0.5, ~~sbe.input.mouse.y - sbe.system.height * 0.5);
	},
	end : function() 
	{
	
	},

	click : function(e)
	{
		if ( e.target.name === 'shape' )
			sbe.vo.play('012-song');
	}
});