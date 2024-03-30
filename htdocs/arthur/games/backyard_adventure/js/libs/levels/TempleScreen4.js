/*
 *  TempleScreen4 - Temple Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Dropping Floor, Cage, Snake
*/

var TempleScreen4 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    // set references to elements, boolean flags or animations
    this.timerReset_blockOn = null;
    this.timerReset_blockOff = null;
    
    this.floorBlock1Collision = false;// dropping floor into water
    this.floorBlock2Collision = false;
    this.floorEnabled = false;
    this.floorDown_openSpeed = 8000;

    this.budCaged = null;
    this.cage = null;
    this.dwCaged = null;
    this.lever = null;
    this.enableCagePeril = false;
    this.leverIsOn = false;
    this.cageLeverFlipped = false;

    this.blockOn_anim_1 = null;
    this.blockOn_anim_2 = null;

    this.snake = null;
    this.snake_audioPlayed = false;
    this.snake_speed = 2400;
    this.snake_delaySpeed = 4000;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // when a player is up against this tile stop the player
    var exitDoorTile = this.map.getTile(11,5, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // reference to idol element, updated to set idol in setScreen function
    this.idolPiece.frameName = 'idol_bottom_right';
    this.idolPiece.x = 11*tileWidth;
    this.idolPiece.y = 1*tileHeight;
    this.groupDisplay.add(this.idolPiece); 
    this.idolPiece.alpha = 1;

    //var idolPieceTile = this.map.getTile(11, 1, this.layerName); // hide idol piece
    //idolPieceTile.alpha = 0;

    // element for snake peril
    this.snake = this.game.add.sprite(8 * tileWidth, 8 * tileHeight + 15, 'game_assets');
    this.snake.body.setRectangle(55, 35, 20, 0);
    this.snake.animations.add('loop', Phaser.Animation.generateFrameNames('snake_', 0, 19, '', 2), 11, true);
    this.snake.play('loop');
    this.snake.body.allowGravity = false;
    var snakeTween = this.game.add.tween(this.snake).to({x: 11*tileWidth}, this.snake_speed, Phaser.Easing.Sinusoidal.InOut, true, this.snake_delaySpeed, 9999, true);
    this.groupDisplay.add(this.snake);
    // hide snake markers
    this.map.getTile(8, 8, this.layerName).alpha = 0;
    this.map.getTile(11, 8, this.layerName).alpha = 0;  

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(5 * tileWidth - 12, 6*tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;

    // references to elements for cage Peril
    var selectedTile_cageEnable = this.map.getTile(4, 8, this.layerName); // invisible
    selectedTile_cageEnable.alpha = 0;

    this.budCaged = this.game.add.sprite(3 * tileWidth + 10, 8 * tileHeight - 12, 'PerilActions');
    this.budCaged.body.allowGravity = false;
    this.budCaged.animations.add("captureStart", 
      Phaser.Animation.generateFrameNames('bud_captured_start_', 0, 7, '', 2), 11, false);
    this.budCaged.animations.add("captureEnd", 
      Phaser.Animation.generateFrameNames('bud_captured_end_', 0, 4, '', 2), 11, false);
    this.budCaged.alpha = 0;
    this.groupDisplay.add(this.budCaged);
    
    this.cage = this.game.add.sprite(3 * tileWidth,4 * tileHeight - 14, 'PerilActions');
    this.cage.body.allowGravity = false;
    this.cage.animations.add("down", 
      Phaser.Animation.generateFrameNames('cage_comes_down_', 0, 7, '', 2), 11, false);
    this.cage.animations.add("up", 
      Phaser.Animation.generateFrameNames('cage_comes_up_', 0, 8, '', 2), 11, false);
    this.cage.alpha = 0;
    this.groupDisplay.add(this.cage);

    this.dwCaged = this.game.add.sprite(4 * tileWidth, 8 * tileHeight - 8, 'PerilActions');
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

    this.lever = this.game.add.sprite(5 * tileWidth, 8 * tileHeight +19, 'PerilActions');
    this.lever.body.allowGravity = false;
    this.lever.animations.add("off", 
      Phaser.Animation.generateFrameNames('lever_', 0, 0, '', 2), 11, false);
    this.lever.animations.add("turnOn", 
      Phaser.Animation.generateFrameNames('lever_', 0, 9, '', 2), 11, false);     
    this.lever.animations.add("on", 
      Phaser.Animation.generateFrameNames('lever_', 9, 9, '', 2), 11, false);   
    this.lever.alpha = 0;
    this.groupDisplay.add(this.lever);

    this.map.getTile(5, 8, this.layerName).alpha = 0; // hide tile for lever
    this.map.getTile(9, 2, this.layerName).alpha = 0; // hide tile for idol piece

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

    // this.climbUpDown = this.game.add.sprite(0, 0, 'Bud_DW_Actions');
    // this.climbUpDown.body.allowGravity = false;
    // this.climbUpDown.animations.add("climbUp", Phaser.Animation.generateFrameNames('BudDW_Climbs_Up_', 0, 15, '', 2), 11, false);
    // this.climbUpDown.animations.add("climbDown", Phaser.Animation.generateFrameNames('BudDW_Climbs_Down_', 0, 15, '', 2), 11, false);
    // this.climbUpDown.alpha = 0;
    // this.groupDisplay.add(this.climbUpDown);

    // Selector element for Cage peril
    this.arrowSelect_cageLever = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelect_cageLever.body.allowGravity = false;
    this.arrowSelect_cageLever.alpha = 0;
    this.arrowSelect_cageLever.x = 5 * tileWidth;
    this.arrowSelect_cageLever.y = 8 * tileHeight;

    // referenced in BaseScreen
    this.getItemPlay.scale.x = 1;
    this.getItemPlay.x = 10 * tileWidth;
    this.getItemPlay.y = 2 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 10 * tileWidth;
    this.arrowSelect_GetIdol.y = 2 * tileHeight;

  },
  render: function(){
  	if(this.debug === true) {
      // this.game.debug.renderSpriteBody(this.movingWallVertical_1);
      // this.game.debug.renderSpriteBody(this.movingWallVertical_2);
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

     // logic for water peril - fail
     if((this.floorBlock1Collision === true || this.floorBlock2Collision === true) && this.playerFail === false){
        this.floorBlock1Collision = false;
        this.floorBlock2Collision = false;
        this.playAudio('water-splash'); // play audio of water splash
        this.player.failedCaught();
        this.initialHit = true;
        this.handleFail("DW and Bud fell through floors");
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

       // physics collision for snake peril - fail
      if(this.game.physics.overlap(this.player.sprite, this.snake) && this.playerFail === false){
        this.player.failedCaught();
        this.initialHit = true;
        //if(this.enableCagePeril === false){
          //this.revive();
        //}
        this.handleFail("DW and Bud got caught by Snake."); 
      }

  },
  // setPlayer: function(player){
  // 	this.player = player;
  // },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    // reset cage if bud is trapped and dw hit a peril 
    if(this.enableCagePeril === true && this.cageLeverFlipped === false){
        this.resetCagePeril();
    }

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();

    // handle tile collision - for cage, floor drop and water peril
    this.map.setTileIndexCallback([52,53], this.onWaterFloorCollision, this, this.layerName);
    this.map.setTileIndexCallback(35, this.onEnableCageHandler, this, this.layerName);
    //this.map.setTileIndexCallback([54,55], this.onWaterFloorCollision, this, this.layerName);

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;
    this.initialHit = true;

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    this.blockOn(); // start floor drop animation
   
    this.playAudio('snake-rattle'); // play audio of snake
    
  },
  onWaterFloorCollision: function(sprite, tile){
    // handler for floor drop - water
    if(this.floorEnabled === true) return;

    if(sprite.name == "player"){
      tileX = tile.x; 
      if(tile.x == 5 * tileWidth){
        this.floorBlock1Collision = true;
      }
      if(tile.x == 6 * tileWidth){
        this.floorBlock2Collision = true;
      }
    } 
  },
  
  // inherited function -  floor drop - water peril
  // blockOn: function()
  // blockOff: function()

  // inherited functions - Cage peril
  // onEnableCageHandler: function(){
  // flipLever: function(){ 

  /* inherited function from parent object */
  // onIdolMantle: function(){ },
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

     this.cage.destroy();
     this.cage = null;
     this.dwCaged.destroy();
     this.dwCaged = null;
     this.lever.destroy();
     this.lever = null;
     this.snake.destroy();
     this.snake = null;

     this.enabled = false;
  },
  clear: function(){
    // not really "destroying" the object - really just disabling the display object
     this._super(); // call destroy from parent
     this.enabled = false;
  }
});