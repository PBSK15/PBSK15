(function(window){

	// Imports
	var MagnetDialog = LunchLab.dialogs.MagnetDialog;
	/**
	*  The music page
	*  @class LunchLab.Pages.MusicPage
	*  @extends Canteen.Page
	*/
	var MusicPage = function(){},
	
	// Reference to the prototype
	p = MusicPage.prototype = new Canteen.Page(),

	/**
	*  The <audio> jquery media element
	*  @property {jquery} _audio
	*  @private
	*/
	_audio = null,

	/**
	*  The body jquery element
	*  @property {jQuery} _doc
	*  @private
	*/
	_doc = null,

	/**
	*  The collection of jquery list elements
	*  @property {jQuery} _tracks
	*  @private
	*/
	_tracks = null,

	/**
	*  The jquery element for the progres bar
	*  @property {jQuery} _bar
	*  @private
	*/
	_bar = null,

	/**
	*  The jquery element for the progress bar played amount
	*  @property {jQuery} _played
	*  @private
	*/
	_played = null,

	/**
	*  The next song button
	*  @property {jQuery} _next
	*  @private
	*/
	_next = null,

	/**
	*  The previous song button
	*  @property {jQuery} _prev
	*  @private
	*/
	_prev = null,

	/**
	*  The play/pause button
	*  @property {jQuery} _play
	*  @private
	*/
	_play = null,

	/**
	*  The wrapper for the full player
	*  @property {jQuery} _player
	*  @private
	*/
	_player = null,

	/**
	*  The current item in the playlist selected
	*  @property {int} _current
	*  @private
	*/
	_current = 0,

	/**
	*  If the tracks are loaded yet, queue the next trac
	*  @property {String} _queueTrack
	*  @private
	*/
	_queueTrack = null,

	/**
	*  The collection of music track objects
	*  @property {Array} _musicTracks
	*  @private
	*/
	_musicTracks = null,

	/** 
	* Keep track of the paused state when the page blur/focuses 
	* a value of -1 means the page isn't hidden, 1 means the 
	* playing before hide, and 0 means paused before hide
	* 
	* @property {int} _autoPaused
	* @private
	*/
	_autoPaused = -1,

	/**
	*  Button to play video
	*  @property {jquery} _videoButton
	*  @private
	*/
	_videoButton = null,

	/**
	*  Current track ID for magnet earning
	*  @property {int} _trackId
	*  @private
	*/
	_trackId,

	/**
	*  Id for a touch on the playhead to perform seeking
	*  @property {int} _seekTouchId
	*  @private
	*/
	_seekTouchId;

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		_doc = $('body').on('touchend mouseup', this._stopSeek.bind(this));

		_player = $('#musicPlayer').waypoint('sticky');
		_tracks = $('#tracks li');
		_played = $('#played');

		var touch = Modernizr.touch;
		var e = touch ? 'touchend' : 'click';

		_bar = $('#bar').on(touch ? 'touchstart' : 'mousedown', this._startSeek.bind(this));
		_next = $('#nextButton').on(e, this._nextSong.bind(this));
		_prev = $('#prevButton').on(e, this._previousSong.bind(this));
		_play = $('#playButton').on(e, this._togglePlay.bind(this));
		_videoButton = $('#videoButton');

		if (_videoButton.data('id') == '0')
		{
			_videoButton.hide();
		}
		else
		{
			_videoButton.attr('href', _videoButton.data('href'));
		}

		var li = $('li.selected');
		_current = _tracks.index(li);
		_trackId = li.data("trackid");

		_audio = $.media('#audio');
		_audio.ended(this._nextSong.bind(this));
		_audio.time(this._updatePlayhead.bind(this));

		// Lets load all the track data first
		this.site.gateway.get(
			this._getTracks.bind(this),
			'music',
			'get-music-tracks'
		);

		_autoPaused = -1;
	};

	/** 
	* Callback when page visibility has gone to hidden
	* @method hide
	*/
	p.hide = function() 
	{
		if (!_audio) return;
		
		// Only do this once (this callback can happen repeatedly)
		if (_autoPaused == -1)
		{
			// save the current status of the paused state
			_autoPaused = _audio.playing() ? 1 : 0;
		}
		_audio.pause();
	};
	
	/** 
	* Callback when page visibility has gone to show
	* @method show
	*/
	p.show = function()
	{
		if (!_audio) return;
		
		// 0 means we were playing before we went away
		// if that's the case we should unpause what the page
		// blur created
		if (_autoPaused === 1)
		{
			_audio.play();
		}
		_autoPaused = -1;
	};

	/**
	*  Handler for getting all the music tracks
	*  @method _getTracks
	*  @param {Object} response The gateway response object
	*/
	p._getTracks = function(response)
	{
		_musicTracks = response.result;

		if (_queueTrack)
		{
			this._onTrackChanged(_queueTrack);
			_queueTrack = null;
		}
	};

	/**
	*  Play the next song in the list
	*  @method _nextSong
	*  @private
	*/
	p._nextSong = function(e)
	{
		if(e.type == 'ended')
			MagnetDialog.earnRequirementByContent('MusicTrack', _trackId);	

		var i = (_current + 1 == _tracks.length) ? 0 : _current + 1;
		Canteen.Site.instance.redirect(_tracks.eq(i).data('id'));	
	};

	/**
	*  Play the previous song in the list
	*  @method _previousSong
	*  @private
	*/
	p._previousSong = function()
	{
		var i = (_current === 0) ? _tracks.length - 1 : _current - 1;
		Canteen.Site.instance.redirect(_tracks.eq(i).data('id'));	
	};

	/**
	*  Toggle the play button to play or plause
	*  @method _togglePlay
	*/
	p._togglePlay = function() 
	{
		if (!_audio.playing())
		{
			this.play();
		} 
		else
		{
			this.stop();
		}
	};

	/**
	*  Stop playing the song
	*  @method stop
	*/
	p.stop = function()
	{
		_play.removeClass('playing').addClass('paused');
		_audio.pause();
	};

	/**
	*  Resume playing the song
	*  @method play
	*/
	p.play = function()
	{
		_play.removeClass('paused').addClass('playing');
		_audio.play();
	};

	/**
	*  Begin the seeking
	*  @method _startSeek
	*  @private
	*  @param {Event} e Mouse down or touch start event
	*/
	p._startSeek = function(e)
	{
		if(e.type == "touchstart")
			_seekTouchId = e.originalEvent.targetTouches[0].identifier;
		this._seek(e);
		_doc.on('mousemove touchmove', this._seek.bind(this));
	};

	/**
	*  Mouse and touch move event for seeking audio position
	*  @method _seek
	*  @private 
	*  @param {Event} e The mouse move or touch move event
	*/
	p._seek = function(e)
	{
		e.preventDefault();
		var pos;
		if(e.originalEvent.targetTouches)//a touch event
		{
			var arr = e.originalEvent.targetTouches;
			for(var i = 0; i < arr.length; ++i)
			{
				if(arr[i].identifier == _seekTouchId)
				{
					pos = arr[i].pageX;
					break;
				}
			}
		}
		else
			pos = e.pageX;
		var xPos = pos - _bar.offset().left;
		var percent = xPos / _bar.width();
		var timePos = percent * _audio.duration();

		_audio.seek(timePos);

		this._updatePlayhead();
	};

	/**
	*  Remove the listeners on the body for seeking audio progress
	*  @method _stopSeek
	*  @private
	*/
	p._stopSeek = function()
	{
		if (_doc) _doc.off('mousemove touchmove');
	};

	/**
	*  Update the playhead position
	*  @method _updatePlayhead
	*  @private
	*/
	p._updatePlayhead = function()
	{
		var pos = (_audio.time() / _audio.duration() * 100) + '%';
		_played.css('width', pos);
		$("#playHead").css("left", pos);
	};

	/**
	*  Callback on the data update from changing track
	*  @method _onTrackChanged
	*  @private
	*/
	p._onTrackChanged = function(uri)
	{
		// The music track data isn't finished loading
		// from the gateway, we'll save the request until
		// after we're done loading the data
		if (!_musicTracks)
		{
			_queueTrack = uri;
			return;
		}

		// Find the track in the music tracks
		var track, i;
		for(i = 0; i < _musicTracks.length; i++)
		{
			if (_musicTracks[i].uri == uri)
			{
				track = _musicTracks[i];
			}
		}

		// Just in case don't don't ahve a track
		if (!track)
		{
			throw 'No track matching ' + uri;
		}

		this.stop();

		// Set the playerbar to be 0
		_played.css('width', '0%');

		if (track.video)
		{
			_videoButton.attr('href', Canteen.settings.basePath + 'videos/video/' + track.video.uri);
			_videoButton.show();
		}
		else
		{
			_videoButton.hide();
		}

		// Replace the song data
		$('#songThumb').attr('src', track.image);
		$('#songName').html(track.name);

		_audio.off('time ended');
		_audio.remove();

		// Update the audio element
		_audio = new $.mediaAudio([
			track.ogg + Canteen.settings.cacheBust,
			track.mp3 + Canteen.settings.cacheBust
		]);
		_audio.ended(this._nextSong.bind(this));
		_audio.time(this._updatePlayhead.bind(this));

		this.enabled(true);
		this.play();
		if(!_audio.playing())
			_play.removeClass('playing').addClass('paused');
	};

	/**
	*  On page refresh
	*  @method refresh
	*  @param {String} uri The uri of the new page
	*  @return {Boolean} If we should refresh the page contents
	*/
	p.refresh = function(uri)
	{
		// Remove the current selected item
		_tracks.eq(_current).removeClass('selected');

		// Get the new current track
		var li = $("li[data-id='" + uri + "']");
		_trackId = li.data("trackid");
		_current = _tracks.index(li);
		_tracks.eq(_current).addClass('selected');

		this.enabled(false);
		this._onTrackChanged(uri.split('/')[1]);

		// Always don't refresh
		return false;
	};

	/**
	*  If this player is enabled
	*  @method enabled
	*/
	p.enabled = function(enable)
	{
		if (enable)
		{
			_player.removeClass('loading');
			_next.removeAttr('disabled');
			_play.removeAttr('disabled');
			_prev.removeAttr('disabled');
		}
		else
		{
			_next.attr('disabled', true);
			_play.attr('disabled', true);
			_prev.attr('disabled', true);
			_player.addClass('loading');
		}
	};

	/**
	*  When the page is exited
	*  @method exit
	*/
	p.exit = function()
	{
		this._stopSeek();
		this.stop();
		
		var touch = Modernizr.touch;
		var e = touch ? 'touchend' : 'click';

		if(_bar)
			_bar.off(touch ? 'touchstart' : 'mousedown');
		_play.off(e);
		_prev.off(e);
		_next.off(e);

		if (_audio)
		{
			_audio.off('time ended');
			_audio.remove();
		}

		_videoButton =
		_audio = 
		_doc = 
		_tracks = 
		_bar = 
		_played = 
		_next = 
		_play = 
		_prev =
		_player = 
		_queueTrack = 
		_musicTracks = null;
		
		_current = 0;
	};

	// Assign to the global space
	namespace('LunchLab.pages').MusicPage = MusicPage;

}(window));