/*
 *  JungleScreen6 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Dropping Floor Peril, Snake
*/

var JungleScreen6 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 100;
    this.startPosY = 90;

    this.snake = null;
    this.snake_audioPlayed = false;
    this.snake_speed = 4000;
    this.snake_delaySpeed = 6000;

    this.timerReset_blockOn = null;
    this.timerReset_blockOff = null;
    this.floorDown_openSpeed = 8000;

    this.floorBlock1Collision = false; // dropping floor into water
    this.floorBlock2Collision = false;
    this.floorEnabled = false;
  
    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // when a player is up against this tile stop the player
    // var intersecTile = this.map.getTile(4,8, this.layerName);
    // intersecTile.callback = function(){
    //     ref.player.bounceOffWall( (4 * tileWidth) );
    // }

    // var wallBlockage = this.map.getTile(7,2, this.layerName);
    // wallBlockage.callback = function(){
    //    ref.player.bounceOffWall( (7 * tileWidth) );
    // }

    var exitDoorTile = this.map.getTile(11,8, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "arthur_idol_02";
    this.idolPiece.x = 7 * tileHeight - 10;
    this.idolPiece.y = 1 * tileHeight;
    this.groupDisplay.add(this.idolPiece);
    this.idolPiece.alpha = 1; 

    // hide idol piece
    var idolPieceTile = this.map.getTile(6, 1, this.layerName); 
    idolPieceTile.alpha = 0; 

    // hide tiles related to snake
    this.map.getTile(0, 8, this.layerName).alpha = 0; 
    this.map.getTile(9, 8, this.layerName).alpha = 0;

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(7 * tileWidth - 12, 6*tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    // element for snake peril
    this.snake = this.game.add.sprite(2 * tileWidth, 8*tileHeight + 15, 'game_assets');
    this.snake.body.setRectangle(55, 35, 20, 0);
    this.snake.animations.add('loop', Phaser.Animation.generateFrameNames('snake_', 0, 19, '', 2), 11, true);
    this.snake.play('loop');
    this.snake.body.allowGravity = false;
    var snakeTween = this.game.add.tween(this.snake).to({x: 9*tileWidth}, this.snake_speed, Phaser.Easing.Sinusoidal.InOut, true, this.snake_delaySpeed, 9999, true);
    this.groupDisplay.add(this.snake); 

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // Selector elements for moving up and down ladder
    this.arrowSelectDown_LongLadder = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_LongLadder.body.allowGravity = false;
    this.arrowSelectDown_LongLadder.alpha = 1;
    this.arrowSelectDown_LongLadder.x = 2 * tileWidth;
    this.arrowSelectDown_LongLadder.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_LongLadder);
    
    this.arrowSelectUp_LongLadder = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_LongLadder.body.allowGravity = false;
    this.arrowSelectUp_LongLadder.alpha = 1;
    this.arrowSelectUp_LongLadder.x = 2 * tileWidth;
    this.arrowSelectUp_LongLadder.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_LongLadder); 

    this.climbUpDownLong = this.game.add.sprite(0, 0, 'Bud_DW_Actions');
    this.climbUpDownLong.body.allowGravity = false;
    this.climbUpDownLong.animations.add("climbUp", Phaser.Animation.generateFrameNames('BudDW_Climbs_long_Up_', 0, 24, '', 2), 11, false);
    this.climbUpDownLong.animations.add("climbDown", Phaser.Animation.generateFrameNames('BudDW_Climbs_long_Down_', 25, 50, '', 2), 11, false);
    this.climbUpDownLong.alpha = 0;
    this.groupDisplay.add(this.climbUpDownLong);

    this.arrowSelectUp_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder1.body.allowGravity = false;
    this.arrowSelectUp_ladder1.alpha = 0;
    this.arrowSelectUp_ladder1.x = 5 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 1;
    this.arrowSelectDown_ladder1.x = 5 * tileWidth;
    this.arrowSelectDown_ladder1.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder1);

    this.arrowSelectUp_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder2.body.allowGravity = false;
    this.arrowSelectUp_ladder2.alpha = 0;
    this.arrowSelectUp_ladder2.x = 11 * tileWidth;
    this.arrowSelectUp_ladder2.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 1;
    this.arrowSelectDown_ladder2.x = 11 * tileWidth;
    this.arrowSelectDown_ladder2.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder2); 

    // referenced in BaseScreen
    this.getItemPlay.x = 8 * tileWidth + 10;
    this.getItemPlay.y = 2 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 7 * tileWidth;
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

      // physics collision for up and down ladder
    // Note: If selecter button of opposite direction is hit, show that selector button. 
    //       Move animation element based on selector position

    // handle play collision with arrow select - down arrow is the hit area for the up arrow
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_LongLadder)){
      this.climbUpDownLong.x = this.arrowSelectUp_LongLadder.x - 10;
      this.climbUpDownLong.y = this.arrowSelectUp_LongLadder.y - 10;
      this.arrowSelectUp_LongLadder.alpha = 1;
      this.arrowSelectUp_LongLadder.inputEnabled = true;
      this.arrowSelectUp_LongLadder.events.onInputDown.add(this.moveUpLongToNextFloor,this);
      // handle snake peril audio
      if(this.snake_audioPlayed === false) {
        this.playAudio('snake-rattle'); // play audio of snake
        this.snake_audioPlayed = true;
      }
    }else{
      this.arrowSelectUp_LongLadder.alpha = 0;
      this.arrowSelectUp_LongLadder.inputEnabled = false;
    }

    // handle play collision with arrow select - up arrow is the hit area for the down arrow
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_LongLadder)){
      this.climbUpDownLong.x = this.arrowSelectUp_LongLadder.x - 10;
      this.climbUpDownLong.y = this.arrowSelectUp_LongLadder.y - 10;
      this.arrowSelectDown_LongLadder.alpha = 1;
      this.arrowSelectDown_LongLadder.inputEnabled = true;
      this.arrowSelectDown_LongLadder.events.onInputDown.add(this.moveDownLongToNextFloor,this);
    }else{
      this.arrowSelectDown_LongLadder.alpha = 0;
      this.arrowSelectDown_LongLadder.inputEnabled = false;
    }
    
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder1)){
      this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 20;
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
      this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 20;
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
      
      this.handleFail("DW and Bud got caught by Snake."); 
    }

    // logic for floor drop water peril - fail
    if((this.floorBlock1Collision === true || this.floorBlock2Collision === true) && this.playerFail === false){
      if(this.debug === true) logger("Floor Block Hit:  this.playerFail: " + this.playerFail);
      this.floorBlock1Collision = false;
      this.floorBlock2Collision = false;
      this.initialHit = true;
      this.playAudio('water-splash'); // play audio of water splash
      //this.player.sprite.x = (8 * tileWidth) + (tileWidth/2); // far left water drop tile + half title width
      //this.player.sprite.y = this.player.sprite.y + 40; 
      this.player.failedCaught();
      this.handleFail("DW and Bud fell through floors");
    }

  },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();

    // handle tile collision - for cage, floor drop and water peril
    this.map.setTileIndexCallback([54,55], this.onWaterFloorCollision, this, this.layerName);

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    this.blockOn(); // restart floor drop to water

    this.snake_audioPlayed = false;

    this.floorBlock1Collision = false; // dropping floor into water
    this.floorBlock2Collision = false;
    this.floorEnabled = false;
  },
  onWaterFloorCollision: function(sprite, tile){
    // handler for floor drop - water
    if(this.floorEnabled === true) return;

    if(sprite.name == "player"){
      
      tileX = tile.x;

      if(tile.x == 7 * tileWidth){
        this.floorBlock1Collision = true;
        //this.player.bounceOffWall( (7 * tileWidth) ); 
      }
      if(tile.x == 8 * tileWidth){
        this.floorBlock2Collision = true;
        //this.player.bounceOffWall( (8 * tileWidth) ); 
      }
    } 
  },
  
  // inherited function -  floor drop - water peril
  // blockOn: function()
  // blockOff: function()

  // postMoveDownLadder: function(){ },
  // moveUpLongToNextFloor: function(sprite){ },
  // moveDownLongToNextFloor: function(sprite){ },
  // postMoveDownLongLadder: function(){ },
  // setPlayer: function(player){ },
  destroy: function(){
      // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent

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