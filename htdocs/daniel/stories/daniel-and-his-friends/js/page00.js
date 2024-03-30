// cover, page 0 
sbe.bookData.pages.push(
{
	setup : function() 
	{
		// is it empty?
		if ( !this.conContent.children.length ) 
		{
			var bg = new cjs.Bitmap(sbe.loader.get('pg00-bg')).set({ regX : 576 * 0.5, regY : 768 * 0.5 });
			this.conContent.addChild( bg );
		}
	},
	start : function() {
		sbe.vo.play('TITLE TK1A DANIEL SEL DANIELFRIENDS');
	},
	click : function(e) {
		sbe.book.gotoPage(1);
	}
});