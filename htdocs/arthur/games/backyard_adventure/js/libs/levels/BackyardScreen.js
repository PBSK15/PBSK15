/*
 *  BackyardScreen - Start Backyard Screen Object
 *    Note: This class inherits from BaseScreen.
*/

var BackyardScreen = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class
    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    this.debug = false; // enable debug flag per class
    
    this.middleHandSelect = null; // reference to hand pointer
    this.tutorialIsCompleted = false; // flag for determining whether the initial "tutorial" has displayed
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // create background image instance
    var backgroundIMG = this.game.add.sprite(0, 0, 'backyard');
    backgroundIMG.body.allowGravity = false;
    this.groupDisplay.add(backgroundIMG);

    // reference bottom tile for collision for transition to next screen
    var intersecTile = this.map.getTile(10,9, this.layerName);
    intersecTile.callback = function(){
        ref.player.stop();
        ref.player.fadeOut();
        ref.game.sound.play('dream-shimmer');

        // give a little pause before transition
        var timerStart = ref.game.time.create(true);
        timerStart.add(3000, function(){ 
          ref.exitScreen();
          timerStart.destroy();
        },this);
        timerStart.start();

        ref.tutorialIsCompleted = true; // enable flag
    }

  },
  postcreate: function(){
    this._super(); // call postcreate from parent
    
    this.player.sprite.alpha = 0;// hide player initially
    
    // setup reference to hand pointer
    this.middleHandSelect = this.game.add.sprite(CANVAS_WIDTH/2, tileHeight * 7.8, 'fingerPoint');
    this.middleHandSelect.body.allowGravity = false;
    this.middleHandSelect.alpha = 1;
    this.middleHandSelect.scale.x = this.middleHandSelect.scale.y = .6;
    this.groupDisplay.add(this.middleHandSelect);

    // setup pointer icon for action - transition to first screen
    this.pointerIconSellect = this.game.add.sprite(tileWidth * 11, tileHeight * 7.8, 'game_assets', 'arrow_select_down');
    this.pointerIconSellect.body.allowGravity = false;
    this.pointerIconSellect.alpha = 0;
    this.groupDisplay.add(this.pointerIconSellect);

  },
  render: function(){
    // render for debugging display
  	if(this.debug === true) {
       this.game.debug.renderSpriteBody(this.player.sprite);
    }
  },
  update: function(){
    // tick heart beat call
    if(this.enabled === false) return; // if screen is enable continue otherwise dont continue

    this.groupDisplay.alpha = 1;  // display group elements

    this.game.physics.collide(this.player.sprite, this.layer); // enable physics collision with set tiles

    // if player collides with hand pointer display icon pointer / thought bubble
    if( this.game.physics.overlap(this.player.sprite, this.middleHandSelect) ){ 
        var blinkingSelectTween = this.game.add.tween(this.pointerIconSellect).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 6, true).to({ alpha: 0 });
        this.middleHandSelect.alpha = 0;
        this.player.getThoughtBubble(11, false);
    }

  },
  setScreen: function(){
    // setup screen
    var ref = this.ref; // reference back to parent class

    this.idolPiece.alpha = 0;

    // set up starting position
    this.player.sprite.x = this.startPosX;
    this.player.sprite.y = this.startPosY;
    
    this.layer.resizeWorld(); // apply layer set

    // enable walking state
    this.player.whoIsWalking = this.player.WALKING_BUD_DW_CLASSIC;
    this.player.changeIdleState();
    this.player.enablePlayer = false;

    // display tutorial otherwise position to middle of screen
    if(this.tutorialIsCompleted == false){
      var blinkingSelectTween = this.game.add.tween(this.middleHandSelect).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 6, true).to({ alpha: 1 });
      this.player.sprite.alpha = 1;
      var timerStart = this.game.time.create(true);
      timerStart.add(1000, function(){
        this.player.enablePlayer = true; 
        timerStart.destroy();
      },this);
      timerStart.start();
    }else{
      this.player.sprite.alpha = 1;
      this.player.enablePlayer = true; 
      this.player.sprite.x = CANVAS_WIDTH/2;
      var blinkingSelectTween = this.game.add.tween(this.pointerIconSellect).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 6, true).to({ alpha: 0 });
      this.middleHandSelect.alpha = 0;
      this.player.getThoughtBubble(11, true);
    }


  },
  // postMoveDownLadder: function(){ },
  // moveUpLongToNextFloor: function(sprite){ },
  // moveDownLongToNextFloor: function(sprite){ },
  // postMoveDownLongLadder: function(){ },
  // setPlayer: function(player){ },
  destroy: function(){
      this._super(); // call destroy from parent
      this.enabled = false;
  },
  clear: function(){
      this._super(); // call revive from parent
      this.enabled = true;
  }
  
});