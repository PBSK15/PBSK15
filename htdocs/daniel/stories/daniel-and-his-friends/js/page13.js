// page 13
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg13-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5, zIndex : -1000 });
			var dSpr = new window.animPG13Daniel.Animation(null, 0, false).set({ name : 'daniel', y : 32, regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			this.conContent.addChild(bg, dSpr);
		}
		this.con.x = 0;
		this.conContent.getChildByName('daniel').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-13-0', { top : '-340px', left : '-540px', width : '400px' });
		this.addText('page-13-1', { top : '-340px', left : '80px', width : '400px' }, false);

		// UGLY!
        this.voText('page-13-0', function() 
        { 
        	var d = this.conContent.getChildByName('daniel');
        	cjs.Tween.get(d).wait(2800).call(d.gotoAndPlay, [1], d);

        }.bind(this)); // UGLY!
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
		{
			sbe.vo.play('ugga-mugga');
			e.target.gotoAndPlay(1);
		}
	}
});