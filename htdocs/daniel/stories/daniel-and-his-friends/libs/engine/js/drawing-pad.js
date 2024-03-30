sbe.DrawingPad = sbe.Class.extend(
{
	data : null,
	disObj : null,

	mousePt : {},
	pointInfo : [],

	init : function(data)
	{
		data = data || {};
		data.eraser = data.eraser || false;
		data.color = data.color || '#000';
		data.size = data.size || 12;
		data.dist = data.dist || 4;
		this.data = data;

		this.can = sbe.$new('canvas');
		this.can.width = data.width || sbe.system.pageWidth;
		this.can.height = data.height || sbe.system.pageHeight;
		this.ctx = this.can.getContext('2d');

		this.disObj = new createjs.Bitmap(this.can);
		// this.disObj.set({ regX : this.can.width * 0.5, regY : this.can.height * 0.5 });
	},

	update : function()
	{
		this.disObj.parent.globalToLocal(sbe.input.mouse.x, sbe.input.mouse.y, this.mousePt);

		this.mousePt.x -= this.disObj.x;
		this.mousePt.y -= this.disObj.y;

		var lastPoint = this.pointInfo[ this.pointInfo.length - 1 ];
		var dist = lastPoint ? Math.distance(this.mousePt.x, this.mousePt.y, lastPoint.x, lastPoint.y) : Infinity;

		if ( sbe.input.pressed(sbe.KEY.MOUSE1) && this.mousePt.x > 0 && this.mousePt.y > 0 && this.mousePt.x < this.can.width && this.mousePt.y < this.can.height )
		{
			this.isPainting = true;
			this.addPoint(this.mousePt.x, this.mousePt.y, false);
		}

		if ( sbe.input.state(sbe.KEY.MOUSE1) && dist > this.data.dist && this.isPainting )
			this.addPoint(this.mousePt.x, this.mousePt.y, true);

		if ( sbe.input.released(sbe.KEY.MOUSE1) )
		{
			if ( this.isPainting )
				this.addPoint(this.mousePt.x, this.mousePt.y, false);
			
			this.isPainting = false;
		}
	},

	addPoint : function(x, y, drag)
	{
		this.pointInfo.push(
		{
			x : x,
			y : y,
			eraser : this.data.eraser,
			color : this.data.color,
			size : this.data.size,
			drag : drag
		});

		this.draw();
	},

	draw : function()
	{
		this.clear();

		for ( var i = 0; i < this.pointInfo.length; i++ )
		{
			var info = this.pointInfo[i];
			
			this.ctx.beginPath();

			if ( info.drag && i )
				this.ctx.moveTo(this.pointInfo[i - 1].x, this.pointInfo[i - 1].y);
			else
				this.ctx.moveTo(info.x - 1, info.y);

			this.ctx.lineTo(info.x, info.y);

			if ( info.eraser )
				this.ctx.globalCompositeOperation = 'destination-out';
			else
			{
				this.ctx.globalCompositeOperation = 'source-over';
				this.ctx.strokeStyle = info.color;
			}

			this.ctx.lineCap = 'round';
			this.ctx.lineJoin = 'round';
			this.ctx.lineWidth = info.size;
			this.ctx.stroke();
		}

		this.ctx.closePath();
		this.ctx.globalCompositeOperation = 'source-over';

		// draw the texture image
		if ( this.data.textureImage )
			this.ctx.drawImage(this.data.textureImage, 0, 0);

		// draw the outline image
		if ( this.data.overlayImage )
			this.ctx.drawImage(this.data.overlayImage, 0, 0);
	},

	clear : function(reset)
	{
		this.ctx.clearRect(0, 0, this.can.width, this.can.height);

		if ( reset )
			this.pointInfo.length = 0;
	}
});