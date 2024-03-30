/*
 *  TempleScreen5 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Moving Wall up/down, Blocking Wall
*/

var TempleScreen5 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    this.movingWallVertical_1 = null;
    this.movingWallVertical_2 = null;
    this.timerReset_wallVDown = null;
    this.timerReset_wallVUp = null;
    this.wallVEnabled = false;

    this.logSprite = null;
    this.logImg = null;
    this.arrowSelect_log = null;
    this.animLogMove = null;
    this.isLogMoved = false;
    this.blockingWall = null;
  
    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // reference to log graphic and animation for Open panel / log peril 
    this.logSprite = this.game.add.sprite(4*tileWidth - 30, 8*tileHeight - 13, 'Bud_DW_Actions'); 
    this.logSprite.body.velocity.x = 0;
    this.logSprite.body.allowGravity = false;
    this.logSprite.alpha = 0; 
    this.logSprite.animations.add('moveLog', Phaser.Animation.generateFrameNames('Bud_DW_log_', 0, 41, '', 2), 11);
    this.logSprite.name = "logSprite";
    this.groupDisplay.add(this.logSprite); 

    this.animLogMove = this.logSprite.animations.getAnimation('moveLog');
    this.animLogMove.onComplete = function(){
      if(ref.isLogMoved === true) return;
      //this.restart();
      //logger("animLogMove.onComplete");
      this.stop(true);
      ref.logSprite.alpha = 0;
      ref.logImg.alpha = 1;
      ref.player.enablePlayer = true;
      ref.logImg.x = ref.logImg.x - 65;
      ref.logImg.y = ref.logImg.y - 5;
      ref.player.sprite.x = ref.logImg.x - 5;
      ref.player.sprite.scale.x = 1;
      ref.player.stop();
      ref.player.sprite.alpha = 1;
      //ref.stoneBlocksOpen = true;
      ref.blockingWall.play('up');
      ref.isLogMoved = true;
      //ref.animLogMove.destroy();
    };

    this.logImg = this.game.add.sprite(5*tileWidth, 9*tileHeight - 10, 'log');
    this.logImg.body.velocity.x = 0;
    this.logImg.body.allowGravity = false;
    this.logImg.alpha = 1;
    this.groupDisplay.add(this.logImg);

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = 'idol_bottom_right';
    this.idolPiece.x = 11*tileWidth;
    this.idolPiece.y = 1*tileHeight;
    this.groupDisplay.add(this.idolPiece); 
    this.idolPiece.alpha = 1;

    // hide idol piece
    var idolPieceTile = this.map.getTile(11, 1, this.layerName); // hide idol piece
    idolPieceTile.alpha = 0; 

    // setup of moving wall UP AND DOWN
    this.blockingWall = this.game.add.sprite(7 * tileWidth, 7 * tileHeight, 'PerilActions');
    this.blockingWall.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.blockingWall.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.blockingWall.body.allowGravity = false;
    this.blockingWall.play('down');
    this.blockingWall.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.blockingWall);

    // hide blocking wall
    var wallTile_3_1 = this.map.getTile(7, 7, this.layerName);
    wallTile_3_1.alpha = 0;
    var wallTile_3_2 = this.map.getTile(7, 8, this.layerName);
    wallTile_3_2.alpha = 0;

    // setup of moving wall
    this.movingWallVertical_1 = this.game.add.sprite(7 * tileWidth, 4 * tileHeight, 'PerilActions');
    this.movingWallVertical_1.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.movingWallVertical_1.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.movingWallVertical_1.body.allowGravity = false;
    this.movingWallVertical_1.play('up');
    this.movingWallVertical_1.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.movingWallVertical_1);

    this.movingWallVertical_2 = this.game.add.sprite(3 * tileWidth, 4 * tileHeight, 'PerilActions');
    this.movingWallVertical_2.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.movingWallVertical_2.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.movingWallVertical_2.body.allowGravity = false;
    this.movingWallVertical_2.play('up');
    this.movingWallVertical_2.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.movingWallVertical_2);

    // hide moving wall tiles
    var wallTile_1_1 = this.map.getTile(3, 4, this.layerName);
    wallTile_1_1.alpha = 0;

    var wallTile_1_2 = this.map.getTile(3, 5, this.layerName);
    wallTile_1_2.alpha = 0;

    var wallTile_2_1 = this.map.getTile(7, 4, this.layerName);
    wallTile_2_1.alpha = 0;

    var wallTile_2_2 = this.map.getTile(7, 5, this.layerName);
    wallTile_2_2.alpha = 0;

    // when a player is up against this tile stop the player
    this.map.getTile(7, 5, this.layerName).callback = function(){
      ref.player.bounceOffWall( (7 * tileWidth) );
    };

    this.map.getTile(3, 5, this.layerName).callback = function(){
      ref.player.bounceOffWall( (3 * tileWidth) );
    };

    this.map.getTile(7, 8, this.layerName).callback = function(){
      ref.player.bounceOffWall( (7 * tileWidth) );
    };

    var exitDoorTile = this.map.getTile(11,8, this.layerName);
    exitDoorTile.callback = function(){
      ref.player.bounceOffWall( (11 * tileWidth) );
    }

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // open panel - selector element 
    this.arrowSelect_log = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelect_log.body.allowGravity = false;
    this.arrowSelect_log.x = 4 * tileWidth;
    this.arrowSelect_log.y = 8 * tileHeight;
    this.arrowSelect_log.alpha = 0;

    // Selector elements for moving up and down ladder
    this.arrowSelectUp_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder1.body.allowGravity = false;
    this.arrowSelectUp_ladder1.alpha = 0;
    this.arrowSelectUp_ladder1.x = 9 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 1;
    this.arrowSelectDown_ladder1.x = 9 * tileWidth;
    this.arrowSelectDown_ladder1.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder1);

    this.arrowSelectUp_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder2.body.allowGravity = false;
    this.arrowSelectUp_ladder2.alpha = 0;
    this.arrowSelectUp_ladder2.x = 0;
    this.arrowSelectUp_ladder2.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 1;
    this.arrowSelectDown_ladder2.x = 0;
    this.arrowSelectDown_ladder2.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder2); 

    // referenced in BaseScreen
    this.getItemPlay.scale.x = 1;
    this.getItemPlay.x = 10 * tileWidth;
    this.getItemPlay.y = 2 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 10 * tileWidth;
    this.arrowSelect_GetIdol.y = 2 * tileHeight;
  },
  render: function(){
  	if(this.debug === true) { }
  },
  update: function(){
      // ticker heart beat call
      if(this.enabled === false) return; // if screen is enable continue otherwise dont continue
  
      // show group display 
      this.groupDisplay.alpha = 1;

      // enable physics collision for player and animation
  	  this.game.physics.collide(this.player.sprite, this.layer); 

    // handle play collision with log
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelect_log) && this.isLogMoved !== true){
      if(this.logImg.alpha === 1) { // hide arrow selector when moveLogHandler running (alpha of log sprite changes) 
        this.arrowSelect_log.alpha = 1;
      }else{
        this.arrowSelect_log.alpha = 0;
      }
      this.arrowSelect_log.inputEnabled = true;
      this.arrowSelect_log.events.onInputDown.add(this.moveLogHandler,this);
    }else{
      this.arrowSelect_log.alpha = 0;
      this.arrowSelect_log.inputEnabled = false;
    }

    // physics collision for up and down ladder
    // Note: If selecter button of opposite direction is hit, show that selector button. 
    //       Move animation element based on selector position
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder1)){
      this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 10;
      this.climbUpDown.y = this.arrowSelectUp_ladder1.y - 12;
      this.arrowSelectUp_ladder1.alpha = 1;
      this.arrowSelectUp_ladder1.inputEnabled = true;
      this.isLadderFlipped = false;
      this.arrowSelectUp_ladder1.events.onInputDown.add(this.moveUpToNextFloor,this);
    }else{
      this.arrowSelectUp_ladder1.alpha = 0;
      this.arrowSelectUp_ladder1.inputEnabled = false;
    }

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder1)){
      this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 10;
      this.climbUpDown.y = this.arrowSelectUp_ladder1.y - 12;
      this.arrowSelectDown_ladder1.alpha = 1;
      this.arrowSelectDown_ladder1.inputEnabled = true;
      this.isLadderFlipped = false;
      this.arrowSelectDown_ladder1.events.onInputDown.add(this.moveDownToNextFloor,this);
    }else{
      this.arrowSelectDown_ladder1.alpha = 0;
      this.arrowSelectDown_ladder1.inputEnabled = false;
    }

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder2)){
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 10);
      this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 10;

      this.arrowSelectUp_ladder2.alpha = 1;
      this.arrowSelectUp_ladder2.inputEnabled = true;
      this.isLadderFlipped = false;
      this.arrowSelectUp_ladder2.events.onInputDown.add(this.moveUpToNextFloor,this);
    }else{
      this.arrowSelectUp_ladder2.alpha = 0;
      this.arrowSelectUp_ladder2.inputEnabled = false;
    }

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder2)){
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 10);
      this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 10;

      this.arrowSelectDown_ladder2.alpha = 1;
      this.arrowSelectDown_ladder2.inputEnabled = true;
      this.isLadderFlipped = false;
      this.arrowSelectDown_ladder2.events.onInputDown.add(this.moveDownToNextFloor,this);
    }else{
      this.arrowSelectDown_ladder2.alpha = 0;
      this.arrowSelectDown_ladder2.inputEnabled = false;
    }

    // physics collision for getting idol selector button
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelect_GetIdol) && this.idolFound === false){
      if(this.player.enablePlayer === true){ // hide arrowSelect when onIdolMantle is clicked - player is disabled
        this.arrowSelect_GetIdol.alpha = 1;  
      }else{
        this.arrowSelect_GetIdol.alpha = 0;  
      }
      this.arrowSelect_GetIdol.inputEnabled = true;
      this.arrowSelect_GetIdol.events.onInputDown.add(this.onIdolMantle,this);
    }else{
      this.arrowSelect_GetIdol.alpha = 0;
      this.arrowSelect_GetIdol.inputEnabled = false;
    } 
  },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    //this.isLogMoved = false; // reset log moved flag

    // this.map.putTile(0, 6, 7, this.layerName);
    // this.map.putTile(0, 6, 8, this.layerName);

    // reset Vertical wall Up/Down animation
    if(this.timerReset_WallVUp) this.timerReset_WallVUp.stop();
    if(this.timerReset_wallVDown) this.timerReset_wallVDown.stop();
    this.wallVDown(); // start wall animation

  },
  
  // inherited function for Blocking Wall - move log
  // moveLogHandler: function

  // inherited function -  vertical wall - up/down
  // wallVUp: function()
  // wallVDown: function()

  // postMoveDownLadder: function(){ },
  // moveUpLongToNextFloor: function(sprite){ },
  // moveDownLongToNextFloor: function(sprite){ },
  // postMoveDownLongLadder: function(){ },
  // setPlayer: function(player){ },
  
  destroy: function(){
      // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent
      this.enabled = false;
  },
  revive: function(){
       // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent
      this.enabled = false;
  }
  
});