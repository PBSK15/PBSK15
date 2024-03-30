/*
 *  TempleScreen2 - Temple Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Dropping Floor Peril, Moving Up and Down Wall
*/

var TempleScreen2 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    // set references to elements, boolean flags or animations
    this.timerReset_blockOn = null;
    this.timerReset_blockOff = null;
    
    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;
    this.floorEnabled = false;

    this.timerReset_wallVDown = null;
    this.timerReset_wallVUp = null;
    this.wallVEnabled = false;
    this.movingWallVert_openSpeed = 6000;

    this.blockOn_anim_1 = null;
    this.blockOn_anim_2 = null;
    this.WallVUp_anim_1 = null;
    this.WallVUp_anim_2 = null;

    this.floorDown_openSpeed = 8000;

    this.isFirstFloorDrop = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = 'idol_bottom_right';
    this.idolPiece.x = 11*tileWidth;
    this.idolPiece.y = 1*tileHeight;
    this.groupDisplay.add(this.idolPiece); 
    this.idolPiece.alpha = 1;

    // hide idol piece
    var idolPieceTile = this.map.getTile(11, 1, this.layerName); // hide idol piece
    idolPieceTile.alpha = 0; 

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(3 * tileWidth - 12, 3 * tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    this.floorDown_2 = this.game.add.sprite(7 * tileWidth - 12, 3 * tileHeight - 21, 'PerilActions');
    this.floorDown_2.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown_2.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown_2.body.allowGravity = false;
    this.floorDown_2.play('down');
    this.floorDown_2.alpha = 1;
    this.groupDisplay.add(this.floorDown_2);

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;

    // setup of moving wall
    this.movingWallVertical_1 = this.game.add.sprite(3 * tileWidth, 7 * tileHeight, 'PerilActions');
    this.movingWallVertical_1.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.movingWallVertical_1.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.movingWallVertical_1.body.allowGravity = false;
    this.movingWallVertical_1.play('down');
    this.movingWallVertical_1.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.movingWallVertical_1);

    this.movingWallVertical_2 = this.game.add.sprite(6 * tileWidth, 7 * tileHeight, 'PerilActions');
    this.movingWallVertical_2.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.movingWallVertical_2.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.movingWallVertical_2.body.allowGravity = false;
    this.movingWallVertical_2.play('down');
    this.movingWallVertical_2.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.movingWallVertical_2);

    // hide moving wall tiles
    var wallTile_1_1 = this.map.getTile(3, 7, this.layerName);
    wallTile_1_1.alpha = 0;

    var wallTile_1_2 = this.map.getTile(3, 8, this.layerName);
    wallTile_1_2.alpha = 0;

    var wallTile_2_1 = this.map.getTile(6, 7, this.layerName);
    wallTile_2_1.alpha = 0;

    var wallTile_2_2 = this.map.getTile(6, 8, this.layerName);
    wallTile_2_2.alpha = 0;

    // when a player is up against this tile stop the player
    this.map.getTile(3, 8, this.layerName).callback = function(){
      ref.player.bounceOffWall( (3 * tileWidth) );
    };

    this.map.getTile(6, 8, this.layerName).callback = function(){
      ref.player.bounceOffWall( (6 * tileWidth) );
    };

    var exitDoorTile = this.map.getTile(11,5, this.layerName);
    exitDoorTile.callback = function(){
      ref.player.bounceOffWall( (11 * tileWidth) );
    }

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    var ref = this.ref; // reference back to parent class

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

    // handle tile collision - floor drop
    this.map.setTileIndexCallback([52,53], this.onWaterFloorCollision, this, this.layerName);

  },
  render: function(){
  	if(this.debug === true) {
      this.game.debug.renderSpriteBody(this.movingWallVertical_1);
      this.game.debug.renderSpriteBody(this.movingWallVertical_2);
    }
  },
  update: function(){
    // ticker heart beat call
    if(this.enabled === false) return; // if screen is enable continue otherwise dont continue

    // show group display
    this.groupDisplay.alpha = 1;

    // enable physics collision for player and animation
  	this.game.physics.collide(this.player.sprite, this.layer);

    // physics collision for up and down ladder
    // Note: If selecter button of opposite direction is hit, show that selector button. 
    //       Move animation element based on selector position
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder1)){
      this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 15;
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
      this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 15;
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
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 15);
      this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 12;

      this.arrowSelectUp_ladder2.alpha = 1;
      this.arrowSelectUp_ladder2.inputEnabled = true;
      this.isLadderFlipped = false;
      this.arrowSelectUp_ladder2.events.onInputDown.add(this.moveUpToNextFloor,this);
    }else{
      this.arrowSelectUp_ladder2.alpha = 0;
      this.arrowSelectUp_ladder2.inputEnabled = false;
    }

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder2)){
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 15);
      this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 12;

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

     // logic for water peril - fail
     if((this.floorBlock1Collision === true || this.floorBlock2Collision === true) && this.playerFail === false){
        logger("Floor Block Hit:  this.playerFail: " + this.playerFail + " this.floorBlock1Collision: " + this.floorBlock1Collision);
        this.floorBlock1Collision = false;
        this.floorBlock2Collision = false;
        this.playAudio('water-splash'); // play audio of water splash
        this.player.failedCaught();
        this.initialHit = true;
        this.handleFail("DW and Bud fell through floors");
      }

  },
  // setPlayer: function(player){
  // 	this.player = player;
  // },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent
    
    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();

    // reset water peril logic
    this.waterBlock1Collision = this.waterBlock2Collision = false;
    this.initialHit = true;
    
    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    this.blockOn(); // start floor drop animation
    
    // reset Vertical wall Up/Down animation
    if(this.timerReset_WallVUp) this.timerReset_WallVUp.stop();
    if(this.timerReset_wallVDown) this.timerReset_wallVDown.stop();
    this.wallVUp(); // start wall animation

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;
    
  },
  onWaterFloorCollision: function(sprite, tile){
    // handler for floor drop - water
    if(this.floorEnabled === true) return; // reference back to parent class

    if(sprite.name == "player"){
      tileX = tile.x; 
      if(tileX == 3 * tileWidth){
        logger("Floor here?");
        this.floorBlock1Collision = true;
        this.isFirstFloorDrop = true;
      }
      if(tileX == 4 * tileWidth){
        this.floorBlock2Collision = true;
        this.isFirstFloorDrop = true;
      }

      if(tileX == 7 * tileWidth){
        this.floorBlock1Collision = true;
        this.isFirstFloorDrop = false;
      }
      if(tileX == 8 * tileWidth){
        this.floorBlock2Collision = true;
        this.isFirstFloorDrop = false;
      }
    } 
  },
  
  // inherited function -  floor drop - water peril
  // blockOn: function()
  // blockOff: function()

  // inherited function -  vertical wall - up/down
  // wallVUp: function()
  // wallVDown: function()

  /* inherited function from parent object */
  // onIdolMantle: function(){ },
  // moveUpToNextFloor: function(sprite){ },
  // postMoveUpLadder: function(){ },
  // moveDownToNextFloor: function(sprite){ },
  // postMoveDownLadder: function(){ },
  // moveUpLongToNextFloor: function(sprite){ },
  // moveDownLongToNextFloor: function(sprite){ },
  // postMoveDownLongLadder: function(){ },
  // setPlayer: function(player){ },
  onExitCollision: function(sprite, tile){
    if(this.enabled === false) return;
    if(this.cageLeverFlipped === false || this.idolFound === false) return;

    if(this.debug === true) logger("onExitCollision - end of series");
    this.player.stop();
    this.exitScreen(); 
  },
  destroy: function(){
    // not really "destroying" the object - really just disabling the display object
     this._super(); // call destroy from parent

     // this.floorDown.destroy();
     // this.floorDown = null;

     // this.floorDown_2.destroy();
     // this.floorDown_2 = null;

     this.enabled = false;
  },
  clear: function(){
    // not really "destroying" the object - really just disabling the display object
     this._super(); // call destroy from parent
     this.enabled = false;
  }
});