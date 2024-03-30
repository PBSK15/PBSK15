// page 5
sbe.bookData.pages.push(
{
	setup : function()
	{
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg05-bg')).set({ regX : 1152 * 0.5, regY : 768 * 0.5 });
			var aSpr = new window.animPG05Anim.Animation(null, 0, false).set({ name : 'anim', regX : 1484 * 0.5, regY : 1154 * 0.5, framerate : 24, mouseChildren : false, cursor : 'pointer', useZIndex : false });

			this.conContent.addChild(bg, aSpr);
		}

		this.conContent.getChildByName('anim').gotoAndStop(0);
	},
	start : function()
	{
		this.addText('page-5-0', { top : '-340px', left : '-530px', width : '440px' });
		this.voText('page-5-0');
	},
	update : function()
	{
		
	},
	end : function() 
	{
		cjs.Tween.removeTweens(this.conContent.getChildByName('anim'));
	},

	click : function(e)
	{
		if ( e.target.name === 'anim' )
		{
			e.target.gotoAndPlay(1);

			if ( !sbe.vo.isPlaying )
			{
				cjs.Tween.get(e.target, { override : true })
					.call(sbe.vo.fadeOut, [null], sbe.vo)
					.wait(900)
					.call(sbe.vo.play, ['005_single-block-sound'], sbe.vo)
					.wait(1550)
					.call(sbe.vo.play, ['005_single-block-sound'], sbe.vo)
					.wait(1200)
					.call(sbe.vo.play, ['005_single-block-sound'], sbe.vo);
			}
		}
	}
});