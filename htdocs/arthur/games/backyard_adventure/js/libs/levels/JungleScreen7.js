/*
 *  JungleScreen7 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Dropping Floor, Moving wall UP AND DOWN, Blocking Wall
*/

var JungleScreen7 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    this.budCaged = null;
    this.cage = null;
    this.dwCaged = null;
    this.lever = null;
    this.enableCagePeril = false;
    this.leverIsOn = false;
    this.cageLeverFlipped = false;

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;
    this.floorEnabled = false;
    this.floorDown_openSpeed = 8000;

    this.timerReset_wallVDown = null;
    this.timerReset_wallVUp = null;
    this.wallVEnabled = false;

    this.logSprite = null;
    this.logImg = null;
    this.arrowSelect_log = null;
    this.animLogMove = null;
    this.isLogMoved = false;
    this.blockingWall = null;

    this.WallVUp_anim_1 == null;
    this.WallVUp_anim_2 == null;

    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // first screen includes tent elements 
    this.tent = this.game.add.sprite(0,0, 'game_assets', 'tent');
    this.tent.body.allowGravity = false;
    this.groupDisplay.add(this.tent);

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "idol_bottom_left";
    this.idolPiece.x = 5*tileWidth;
    this.idolPiece.y = 2*tileHeight;
    this.groupDisplay.add(this.idolPiece);
    this.idolPiece.alpha = 1;

     // hide idol piece
    var idolPieceTile = this.map.getTile(5, 2, this.layerName); // hide idol piece
    idolPieceTile.alpha = 0; 

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(7 * tileWidth - 12, 6 * tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    // reference to log graphic and animation for Open panel / log peril 
    this.logSprite = this.game.add.sprite(3*tileWidth - 30, 8*tileHeight - 13, 'Bud_DW_Actions'); 
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

    this.logImg = this.game.add.sprite(4*tileWidth, 9*tileHeight - 10, 'log');
    this.logImg.body.velocity.x = 0;
    this.logImg.body.allowGravity = false;
    this.logImg.alpha = 1;
    this.groupDisplay.add(this.logImg);

    // references to elements for cage Peril
    var selectedTile_cageEnable = this.map.getTile(8, 2, this.layerName); // invisible
    selectedTile_cageEnable.alpha = 0;

    this.budCaged = this.game.add.sprite(7 * tileWidth + 10, 2 * tileHeight - 12, 'PerilActions');
    this.budCaged.body.allowGravity = false;
    this.budCaged.animations.add("captureStart", 
      Phaser.Animation.generateFrameNames('bud_captured_start_', 0, 7, '', 2), 11, false);
    this.budCaged.animations.add("captureEnd", 
      Phaser.Animation.generateFrameNames('bud_captured_end_', 0, 4, '', 2), 11, false);
    this.budCaged.alpha = 0;
    this.groupDisplay.add(this.budCaged);
    
    this.cage = this.game.add.sprite(7 * tileWidth, -115, 'PerilActions');
    this.cage.body.allowGravity = false;
    this.cage.animations.add("down", 
      Phaser.Animation.generateFrameNames('cage_comes_down_', 0, 7, '', 2), 11, false);
    this.cage.animations.add("up", 
      Phaser.Animation.generateFrameNames('cage_comes_up_', 0, 8, '', 2), 11, false);
    this.cage.alpha = 0;
    this.groupDisplay.add(this.cage);

    this.dwCaged = this.game.add.sprite(8 * tileWidth, 2 * tileHeight - 8, 'PerilActions');
    this.dwCaged.body.allowGravity = false;
    this.dwCaged.animations.add("start", 
      Phaser.Animation.generateFrameNames('DW_Cage_Down_Start_', 0, 28, '', 2), 11, false);
    this.dwCaged.animations.add("middle", 
      Phaser.Animation.generateFrameNames('DW_Cage_Down_Middle_', 0, 13, '', 2), 11, false);
    this.dwCaged.animations.add("end", 
      Phaser.Animation.generateFrameNames('DW_Cage_Down_End_', 0, 20, '', 2), 11, false);
    this.dwCaged.alpha = 0;
    this.dwCaged.play("start");
    this.groupDisplay.add(this.dwCaged);

    this.lever = this.game.add.sprite(9 * tileWidth + 5, 2 * tileHeight +19, 'PerilActions');
    this.lever.body.allowGravity = false;
    this.lever.animations.add("off", 
      Phaser.Animation.generateFrameNames('lever_', 0, 0, '', 2), 11, false);
    this.lever.animations.add("turnOn", 
      Phaser.Animation.generateFrameNames('lever_', 0, 9, '', 2), 11, false);     
    this.lever.animations.add("on", 
      Phaser.Animation.generateFrameNames('lever_', 9, 9, '', 2), 11, false);   
    this.lever.alpha = 0;
    this.groupDisplay.add(this.lever);

    this.map.getTile(9, 2, this.layerName).alpha = 0; // hide tile for lever

    // setup of moving wall UP AND DOWN
    this.blockingWall = this.game.add.sprite(6 * tileWidth + 40, 7 * tileHeight, 'PerilActions');
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
    this.movingWallVertical_1 = this.game.add.sprite(3 * tileWidth, 1 * tileHeight, 'PerilActions');
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

    var wallTile_2_1 = this.map.getTile(3, 1, this.layerName);
    wallTile_2_1.alpha = 0;

    var wallTile_2_2 = this.map.getTile(3, 2, this.layerName);
    wallTile_2_2.alpha = 0;

    // when a player is up against this tile stop the player
    this.map.getTile(3, 2, this.layerName).callback = function(){
      ref.player.bounceOffWall( (7 * tileWidth) );
    };

    this.map.getTile(3, 5, this.layerName).callback = function(){
      ref.player.bounceOffWall( (3 * tileWidth) );
    };

    this.map.getTile(7, 8, this.layerName).callback = function(){ // blocking wall
      ref.player.bounceOffWall( (6 * tileWidth) );
    };

    var exitDoorTile = this.map.getTile(11,2, this.layerName);
    exitDoorTile.callback = function(){
      ref.player.bounceOffWall( (11 * tileWidth) );
    }

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // open panel - selector element 
    this.arrowSelect_log = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelect_log.body.allowGravity = false;
    this.arrowSelect_log.x = 3 * tileWidth;
    this.arrowSelect_log.y = 8 * tileHeight;
    this.arrowSelect_log.alpha = 0;

    // Selector elements for moving up and down ladder
    this.arrowSelectUp_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder1.body.allowGravity = false;
    this.arrowSelectUp_ladder1.alpha = 0;
    this.arrowSelectUp_ladder1.x = 11 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 1;
    this.arrowSelectDown_ladder1.x = 11 * tileWidth;
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

    // Selector element for Cage peril
    this.arrowSelect_cageLever = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelect_cageLever.body.allowGravity = false;
    this.arrowSelect_cageLever.alpha = 0;
    this.arrowSelect_cageLever.x = 9 * tileWidth;
    this.arrowSelect_cageLever.y = 2 * tileHeight;

    // referenced in BaseScreen
    this.arrowSelect_GetIdol.x = 5 * tileWidth;
    this.arrowSelect_GetIdol.y = 2 * tileHeight;

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;

    // handle tile collision - for cage peril
    this.map.setTileIndexCallback(35, this.onEnableCageHandler, this, this.layerName);

    // handle tile collision - floor drop
    this.map.setTileIndexCallback([54,55], this.onWaterFloorCollision, this, this.layerName); 

    // short time blocker - stopPlayerOnce
    this.map.getTile(8, 5, this.layerName).alpha = 0;
    this.map.getTile(9, 5, this.layerName).alpha = 0; 
    this.stopPlayerOnceXPos = (9 * tileWidth); // x coordinates value 
    this.map.setTileIndexCallback(50, this.stopPlayerOnce, this, this.layerName);  

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

        if(this.snake_audioPlayed === false) {
          this.playAudio('snake-rattle'); // play audio of snake
          this.snake_audioPlayed = true;
        }
      }else{
        this.arrowSelectDown_ladder1.alpha = 0;
        this.arrowSelectDown_ladder1.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder2)){
        this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 20) + 85;
        this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 12;

        this.arrowSelectUp_ladder2.alpha = 1;
        this.arrowSelectUp_ladder2.inputEnabled = true;
        this.isLadderFlipped = true;
        this.arrowSelectUp_ladder2.events.onInputDown.add(this.moveUpToNextFloor,this);
      }else{
        this.arrowSelectUp_ladder2.alpha = 0;
        this.arrowSelectUp_ladder2.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder2)){
        this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 20) + 85;
        this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 12;

        this.arrowSelectDown_ladder2.alpha = 1;
        this.arrowSelectDown_ladder2.inputEnabled = true;
        this.isLadderFlipped = true;
        this.arrowSelectDown_ladder2.events.onInputDown.add(this.moveDownToNextFloor,this);
      }else{
        this.arrowSelectDown_ladder2.alpha = 0;
        this.arrowSelectDown_ladder2.inputEnabled = false;
      }

      // physics collision for cage peril selector button
      if(this.game.physics.overlap(this.player.sprite, this.arrowSelect_cageLever) && this.leverIsOn === false){
        if(this.cageLeverFlipped === false) {
          this.arrowSelect_cageLever.alpha = 1;
          this.arrowSelect_cageLever.inputEnabled = true;
          this.arrowSelect_cageLever.events.onInputDown.add(this.flipLever,this);
        }
      }else{
          this.arrowSelect_cageLever.alpha = 0;
          this.arrowSelect_cageLever.inputEnabled = false;
      }

      // logic for water peril - fail
    if((this.floorBlock1Collision === true || this.floorBlock2Collision === true) && this.playerFail === false){
        this.floorBlock1Collision = false;
        this.floorBlock2Collision = false;
        this.playAudio('water-splash'); // play audio of water splash
        this.player.failedCaught();
        this.initialHit = true;
        this.handleFail("DW and Bud fell through floors");
    }

    // physics collision for getting idol selector button
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelect_GetIdol) && this.idolFound === false){
        if(this.player.enablePlayer === true){ // hide arrowSelect when onIdolMantle is clicked - player is disabled
          this.arrowSelect_GetIdol.alpha = 1;  
        }else{
          this.arrowSelect_GetIdol.alpha = 0;  
        }
        this.arrowSelect_GetIdol.inputEnabled = true;
        this.arrowSelect_GetIdol.events.onInputDown.add(this.onIdolGrab,this);
     }else{
        this.arrowSelect_GetIdol.alpha = 0;
        this.arrowSelect_GetIdol.inputEnabled = false;
     }
  },
  onWaterFloorCollision: function(sprite, tile){
    // handler for floor drop - water
    if(this.floorEnabled === true) return;

    if(sprite.name == "player"){
     
      logger( "sprite.name " + sprite.name + " " + tile.x);
      tileX = tile.x; 
      if(tile.x == 7 * tileWidth){
        this.floorBlock1Collision = true;
      }
      if(tile.x == 8 * tileWidth){
        this.floorBlock2Collision = true;
      }
    } 
  },
  
  // inherited function -  floor drop - water peril
  // blockOn: function()
  // blockOff: function()

  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    // set position for tent element
    this.tent.x = this.startPosX - 50;
    this.tent.y = this.startPosY - 8;

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();

    //this.isLogMoved = false; // reset log moved flag

    // reset Vertical wall Up/Down animation
    if(this.timerReset_WallVUp) this.timerReset_WallVUp.stop();
    if(this.timerReset_wallVDown) this.timerReset_wallVDown.stop();
    this.wallVDown(); // start wall animation

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    this.blockOn(); // start floor drop animation

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;
    this.floorEnabled = false;

  },

  // inherited functions - Cage peril
  //onEnableCageHandler: function(){
  //flipLever: function(){ 
  
  // inherited function for Blocking Wall - move log
  // moveLogHandler: function

  // inherited function -  vertical wall - up/down
  // wallVUp: function()
  // wallVDown: function()

  moveUpToNextFloor: function(sprite){
    if(this.debug === true) logger("moveUpToNextFloor " + this.enableCagePeril);

    if(this.enableCagePeril === true && this.cageLeverFlipped == false) return;

    this._super(sprite); // call moveUpToNextFloor from parent
  },
  // postMoveUpLadder: function(){ },
  moveDownToNextFloor: function(sprite){ 
    if(this.debug === true) logger("moveDownToNextFloor " + this.enableCagePeril);

    if(this.enableCagePeril === true && this.cageLeverFlipped == false) return;

    this._super(sprite); // call moveDownToNextFloor from parent
  },
  // postMoveDownLadder: function(){ },
  // setPlayer: function(player){ },
  destroy: function(){
      // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent
      
      this.budCaged.destroy();
      this.budCaged = null;
      this.cage.destroy();
      this.cage = null;
      this.dwCaged.destroy();
      this.dwCaged = null;
      this.lever.destroy();
      this.lever = null;
      this.logSprite.destroy();
      this.logSprite = null;
      this.logImg.destroy()
      this.logImg = null;
      this.arrowSelect_log.destroy();
      this.arrowSelect_log = null;
      this.blockingWall.destroy();
      this.blockingWall = null;

      this.enabled = false;
     
  },
  clear: function(){
      // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent
      this.enabled = false;
  }
  
});