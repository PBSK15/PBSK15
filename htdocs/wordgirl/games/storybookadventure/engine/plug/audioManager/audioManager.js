var AudioManager = function(audioPlayer) {
    var self = this;
    this.player = audioPlayer;
    this.clips = PBS.KIDS.storybook.config.audioClips;  // defined in the config-book.js
    this.chains = {};

    this.soundObjFromClipId = function(clipId) {
        return _.findWhere(self.clips, {
            clipId : clipId
        })
    };

    this.soundObjFromClipIds = function(clipIds) {
        //console.log(clipIds);
        // create the base sound object
        var soundObj;
        _.each(clipIds.reverse(), function(clipId, i) {
            // recursively nest the soundObj from the previous iteration into the one from the current iteration
            if(_.isObject(soundObj)) {
                soundObj = _.extend(
                    { next : soundObj },
                    self.soundObjFromClipId(clipId)
                );
            }
            // if a soundObj hasn't been defined yet, create a new one instead of nesting
            else {
                soundObj = self.soundObjFromClipId(clipId);
            }
        });
        return soundObj;
    };

    // plays a single clip
    this.playClip = function(clipId) {
        self.player.play(
            self.soundObjFromClipId(clipId)
        );
    };

    // plays a collection of clips defined in a chain
    this.playClips = function(clipIds) {
        self.player.play(self.soundObjFromClipIds(clipIds));
    };

    this.playComplete = function(soundObj) {
        if(soundObj && soundObj.next) {
            self.player.play(soundObj.next)
        }
    };

    _.each(PBS.KIDS.storybook.config.audioChains, function(chain, i) {
        self.chains[chain.chainId] = self.soundObjFromClipIds(chain.clipIds);
    });
    //console.log(self.chains);

    return this;
};