// page 10
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg10-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5, zIndex : -1000 });
			// var dSpr = new window.animPG10Daniel.Animation(null, 0, false).set({ name : 'daniel', regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer' });
			// var eSpr = new window.animPG10Elaina.Animation(null, 0, false).set({ name : 'elaina', zIndex : -10, regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer' });
			// var wSpr = new window.animPG10Wednesday.Animation(null, 0, false).set({ name : 'wednesday', regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer' });
			// var cSpr = new window.animPG10Chrissie.Animation(null, 0, false).set({ name : 'chrissie', zIndex : 10, regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer' });
			var aSpr = new window.animPG10Anim.Animation(null, 0, false).set({ name : 'anim', regX : 1152 * 0.5, regY : 768 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			this.conContent.addChild(bg, aSpr);
		}

		// this.conContent.getChildByName('daniel').gotoAndStop(0);
		// this.conContent.getChildByName('elaina').gotoAndStop(0);
		// this.conContent.getChildByName('wednesday').gotoAndStop(0);
		// this.conContent.getChildByName('chrissie').gotoAndStop(0);
		this.conContent.getChildByName('anim').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-10-0', { top : '150px', left : '70px', width : '400px' });
		this.voText('page-10-0');
	},
	update : function()
	{
		
	},
	end : function() 
	{
	
	},
	click : function(e)
	{
		// if ( e.target.name === 'daniel' || e.target.name === 'chrissie' || e.target.name === 'elaina' || e.target.name === 'wednesday' )
		if ( e.target.name === 'anim' )
		{
			e.target.gotoAndPlay(0);
			sbe.vo.play('010-happy');
		}
	}
});