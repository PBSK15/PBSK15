/*
 *  GoalScreen - Start Backyard Screen Object
*/

var GoalScreen = BaseScreen.extend({
  init: function(game){
    this._super(game);
    this.startPosX = 30;
    this.startPosY = 360;
    this.debug = true;
    this.idolFormArthur = null;
    this.moreButton = null;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // this.idolFormArthur = this.game.add.sprite(1*tileWidth, 2*tileHeight - 30, 'arthurIdolForm');
    // this.idolFormArthur.animations.add('formCompleteIdol', Phaser.Animation.generateFrameNames('arthur_idol_form_', 0, 54, '', 2), 15, false);
    // this.idolFormArthur.body.allowGravity = false;
    // this.groupDisplay.add(this.idolFormArthur);

    this.moreButton = this.game.add.button(500, 335, 'moreButton', this.moreButtonOnClick, this, 0, 0, 0);
    this.moreButton.body.allowGravity = false;
    //this.groupDisplay.add(this.moreButton);
    this.moreButton.alpha = 0;
    this.moreButton.x = -1000;

  },
  moreButtonOnClick: function(){
    logger("More Button Pressed");
    this.moreButton.x = -1000;
    this.onMoreHandler();

  },
  onMoreHandler: function(){
    // override this function
  },
  postcreate: function(){
    this._super(); // call postcreate from parent

  },
  render: function(){
  	if(this.debug === true) {
      //this.game.debug.renderSpriteBody(this.player.sprite);
    }
  },
  update: function(){
      if(this.enabled === false) return;

      this.groupDisplay.alpha = 1;  

      this.game.physics.collide(this.player.sprite, this.layer);

  },
  setScreen: function(idolPieceName){
    var ref = this.ref; // reference back to parent class

    var formName = 'arthurIdolForm';
    var frameName = 'arthur_idol_form_';
    var yPosOffset = 50;

    switch(idolPieceName){
      case "arthur_idol_01":
       formName = 'arthurIdolForm';
       frameName = 'arthur_idol_form_';
       yPosOffset = 30;
      break;

      case "binky_idol_01":
        formName = 'binkyIdolForm';
        frameName = 'binky_idol_form_'; 
        yPosOffset = 40;
      break;

      case "dw_idol_01":
        formName = 'iadonnaIdolForm';
        frameName = 'ladonna_idol_form_';
        yPosOffset = 60;  
      break;

      case "bud_idol_01":
        formName = 'busterIdolForm';
        frameName = 'buster_idol_form_';
        yPosOffset = 40; 
      break;
    }

    this.player.sprite.x = this.startPosX;
    this.player.sprite.y = this.startPosY;
    this.layer.resizeWorld();

    this.player.whoIsWalking = this.player.CELEBRATE;
    this.player.changeIdleState();
    this.player.enablePlayer = false; 
    this.player.stop();
    //this.player.celebrate();

    this.groupDisplay.removeAll();

    this.idolFormArthur = this.game.add.sprite(1*tileWidth, 2*tileHeight - yPosOffset, formName);
    this.idolFormArthur.animations.add('formCompleteIdol', Phaser.Animation.generateFrameNames(frameName, 0, 54, '', 2), 15, false);
    this.idolFormArthur.body.allowGravity = false;
    this.idolFormArthur.alpha = 0;
    this.groupDisplay.add(this.idolFormArthur);

    var timerStart = this.game.time.create(true);
    timerStart.add(1000, function(){
      timerStart.destroy();
      this.idolFormArthur.alpha = 1;
      this.idolFormArthur.play('formCompleteIdol');
    },this);
    timerStart.start();

    this.playAudio('idol-choir-with-sparkle');

    // var timerStart = this.game.time.create(true);
    // timerStart.add(2000, function(){
    this.moreButton.alpha = 1;
    this.moreButton.x = 500;
    //   this.game.add.tween(this.moreButton).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true);
    // },this);
    // timerStart.start();

  },
  // postMoveDownLadder: function(){ },
  // moveUpLongToNextFloor: function(sprite){ },
  // moveDownLongToNextFloor: function(sprite){ },
  // postMoveDownLongLadder: function(){ },
  // setPlayer: function(player){ },
  destroy: function(){
      this.idolFormArthur.destroy();
      this.moreButton.destroy();
      //this.groupDisplay.destroy();

      this._super(); // call destroy from parent
      this.enabled = false;
      
  },
  clear: function(){
      this._super(); // call revive from parent
      this.enabled = true;
  }
  
});