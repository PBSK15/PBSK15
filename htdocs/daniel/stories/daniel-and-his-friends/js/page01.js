// page 1
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length )
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg01-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5, zIndex : -1000 });
			var dSpr = new window.animPG01Daniel.Animation(null, 0, false).set({ name : 'daniel', x : -290, y : 132, regX : 500 * 0.5, regY : 500 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			var cSpr = new window.animPG01Chrissie.Animation(null, 0, false).set({ name : 'chrissie', x : 365, y : 100, regX : 550 * 0.5, regY : 550 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			var eSpr = new window.animPG01Elaina.Animation(null, 0, false).set({ name : 'elaina', x : 70, y : 110, regX : 550 * 0.5, regY : 550 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });
			this.conContent.addChild(bg, dSpr, cSpr, eSpr);
		}
	
		this.conContent.getChildByName('daniel').gotoAndStop(0);
		this.conContent.getChildByName('elaina').gotoAndStop(0);
		this.conContent.getChildByName('chrissie').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-1-0', { top : '-340px', left : '-520px', width : '420px' });
		this.voText('page-1-0');

		this.conContent.getChildByName('daniel').gotoAndPlay(1);
		this.conContent.getChildByName('elaina').gotoAndPlay(1);
		this.conContent.getChildByName('chrissie').gotoAndPlay(1);		
	},
	click : function(e)
	{
		if ( e.target.name === 'daniel' )
		{
			sbe.vo.play('001_hi-1-daniel');
			e.target.gotoAndPlay(1);
		}
		else if ( e.target.name === 'chrissie' )
		{
			sbe.vo.play('001_hi-3-chrissie');
			e.target.gotoAndPlay(1);
		}
		else if ( e.target.name === 'elaina' )
		{
			sbe.vo.play('001_hi-2');
			e.target.gotoAndPlay(1);
		}
	}
});