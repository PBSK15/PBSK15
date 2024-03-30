sbe.VO = sbe.Class.extend(
{
	isPlaying : false,
	index : 0,

	sequence : [],
	callback : null,
	soundObj : null,

	play : function(sequence, callback)
	{
		if ( this.isPlaying )
			return;

		// stop!
		this.stop();

		this.sequence = sequence instanceof Array ? sequence : [sequence];
		this.callback = callback || null; 

		// set it up
		for ( var i = 0; i < this.sequence.length; i++ )
		{
			var sequenceInfo = this.sequence[i];

			if ( typeof sequenceInfo !== 'object' )
				this.sequence[i] = { id : sequenceInfo };
		}

		// play it
		this.playNext();
	},

	playNext : function()
	{
		var sequenceInfo = this.sequence[this.index++];

		if ( sequenceInfo )
		{
			var ftnStart = sequenceInfo.ftnStart || null;
			var ftnComplete = sequenceInfo.ftnComplete || null;
			var delay = sequenceInfo.delay || 0;
			var id = sequenceInfo.id;

			cjs.Tween.get(this)
				.wait(delay)
				.call(function()
				{
					this.isPlaying = true;

					if ( ftnStart )
						ftnStart();
					ftnStart = null;

					this.soundObj = cjs.Sound.play(id, cjs.Sound.INTERRUPT_ANY);
					this.soundObj.on('complete', function()
					{
						// a small catch just in case we are fading out
						if ( !this.isPlaying )
							return;

						if ( ftnComplete )
							ftnComplete();
						ftnComplete = null;

						// finally onto the next
						this.playNext();

					}, this);

				}, null, this);
		}
		else
		{
			// done with it
			this.stop();

			if ( this.callback )
				this.callback();

			this.callback = null;
		}
	},

	stop : function()
	{
		cjs.Tween.removeTweens(this);

		if ( this.soundObj )
			this.soundObj.stop();

		this.soundObj = null;
		this.index = 0;
		this.sequence.length = 0;
		this.isPlaying = false;
	},

	fadeOut : function(time)
	{
		if ( !this.soundObj )
			return;

		this.isPlaying = false;
		cjs.Tween.removeTweens(this);
		cjs.Tween.get(this.soundObj).to({ volume : 0 }, time || 600).call(this.stop, null, this);
	}
});