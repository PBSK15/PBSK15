/*
 *  JungleScreen3 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Moving wall up/down, Dropping Floor Peril, Horizontally Moving Wall 
*/

var JungleScreen3 = BaseScreen.extend({
  init: function(game){
    this._super(game);
    this.startPosX = 0;
    this.startPosY = 390;

    this.movingWallTween = null;
    this.movingWallHortizontal = null;
    this.movingWall_audioPlayed = false;
    this.isMoveableWallComplete = false;

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;
    this.floorEnabled = false;

    this.timerReset_wallVDown = null;
    this.timerReset_wallVUp = null;

    this.blockOn_anim_1 = null;
    this.blockOn_anim_2 = null;
    this.WallVUp_anim_1 = null;
    //this.WallVUp_anim_2 = null;

    this.floorDown_openSpeed = 16000;

    this.debug = false;

  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // first screen includes tent elements 
    this.tent = this.game.add.sprite(0,0, 'game_assets', 'tent');
    this.tent.body.allowGravity = false;
    this.groupDisplay.add(this.tent);

    // when a player is up against this tile stop the player
    var intersecTile = this.map.getTile(4,8, this.layerName);
    intersecTile.callback = function(){
        ref.player.bounceOffWall( (3 * tileWidth) );
    }

    var exitDoorTile = this.map.getTile(11,2, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(3 * tileWidth - 12, 3 * tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    // hide tiles related to moving wall panel up and down peril
    var wallTile_1_1 = this.map.getTile(7, 1, this.layerName);
    wallTile_1_1.alpha = 0;

    var wallTile_1_2 = this.map.getTile(7, 2, this.layerName);
    wallTile_1_2.alpha = 0;

    // reference to moving wall panel up and down peril
    this.movingWallVertical_1 = this.game.add.sprite(7 * tileWidth, 1 * tileHeight, 'PerilActions');
    this.movingWallVertical_1.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.movingWallVertical_1.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.movingWallVertical_1.body.allowGravity = false;
    this.movingWallVertical_1.play('up');
    this.movingWallVertical_1.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.movingWallVertical_1);

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "arthur_idol_01";
    this.idolPiece.x = 0;
    this.idolPiece.y = 2*tileHeight;
    this.groupDisplay.add(this.idolPiece);
    this.idolPiece.alpha = 1; 

    // hide idol piece
    this.map.getTile(0, 2, this.layerName).alpha = 0; 

    // Bounce off idol tile
    this.map.getTile(0, 2, this.layerName).callback = function(){
      ref.player.bounceOffWall( (0 * tileWidth) );
    }; 

    // bounce off wall - stopper 
    this.map.getTile(7, 2, this.layerName).callback = function(){
      ref.player.bounceOffWall( (7 * tileWidth) );
    };

    // setup of moving wall
    this.map.getTile(0, 4, this.layerName).alpha = 0;
    this.map.getTile(0, 5, this.layerName).alpha = 0;

    this.movingWallHortizontal = this.game.add.sprite(10, 4 * tileHeight, 'PerilActions');
    this.movingWallHortizontal.body.setRectangle(260, 100, -205, 0);
    this.movingWallHortizontal.animations.add('stationary', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 0, '', 2), 11);
    this.movingWallHortizontal.body.allowGravity = false;
    this.groupDisplay.add(this.movingWallHortizontal);
    this.movingWallHortizontal.alpha = 1;

    this.movingWallIsMoving = false;
    this.movingWallTween = this.game.add.tween(this.movingWallHortizontal).to({x: 6*tileWidth}, 4000, Phaser.Easing.Sinusoidal.InOut, false, 2000);
    this.movingWallTween.onStart.add(function(){
      ref.movingWallIsMoving = true;
    });
    // this.movingWallTween.onComplete.add(function(){
    //   ref.isMoveableWallComplete = true;
    //   if(ref.game.physics.overlap(ref.player.sprite, ref.movingWallHortizontal) && ref.playerFail === false){
    //     ref.player.failedCaught();
    //     ref.initialHit = true;
    //     ref.handleFail("DW and Bud got crushed.");
    //   };
    // });

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // Selector elements for moving up and down ladder
    this.arrowSelectDown_LongLadder = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_LongLadder.body.allowGravity = false;
    this.arrowSelectDown_LongLadder.alpha = 0;
    this.arrowSelectDown_LongLadder.x = 10 * tileWidth;
    this.arrowSelectDown_LongLadder.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_LongLadder);
    
    this.arrowSelectUp_LongLadder = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_LongLadder.body.allowGravity = false;
    this.arrowSelectUp_LongLadder.alpha = 0;
    this.arrowSelectUp_LongLadder.x = 10 * tileWidth;
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
    this.arrowSelectUp_ladder1.x = 3 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 1;
    this.arrowSelectDown_ladder1.x = 3 * tileWidth;
    this.arrowSelectDown_ladder1.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder1);

    this.arrowSelectUp_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder2.body.allowGravity = false;
    this.arrowSelectUp_ladder2.alpha = 0;
    this.arrowSelectUp_ladder2.x = 6 * tileWidth;
    this.arrowSelectUp_ladder2.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 1;
    this.arrowSelectDown_ladder2.x = 6 * tileWidth;
    this.arrowSelectDown_ladder2.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder2);  

    // referenced in BaseScreen
    this.arrowSelect_GetIdol.x = 1 * tileWidth;
    this.arrowSelect_GetIdol.y = 2 * tileHeight;
   
    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;    

  },
  render: function(){
  	//this.game.debug.renderSpriteBody(this.sprite);
  },
  update: function(){
    // ticker heart beat call

    if(this.enabled === false) return;// if screen is enable continue otherwise dont continue
    
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

    if(this.movingWallIsMoving === false && this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder1)){
      this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 20;
      this.climbUpDown.y = this.arrowSelectUp_ladder1.y - 12;
      this.arrowSelectDown_ladder1.alpha = 1;
      this.arrowSelectDown_ladder1.inputEnabled = true;
      this.isLadderFlipped = false;
      this.arrowSelectDown_ladder1.events.onInputDown.add(this.moveDownToNextFloor,this);

      // handle moving wall audio
      if(this.movingWall_audioPlayed === false) {
        // Moving Wall Tween
        this.movingWallTween.start();  
        
        this.playAudio('door-slide-loopable'); // play audio of snake

        this.movingWall_audioPlayed = true;
        this.arrowSelectDown_ladder1.events.onInputDown.remove(this.moveDownToNextFloor,this);
      }

    }else{
      //this.movingWall_audioPlayed = false;
      this.arrowSelectDown_ladder1.alpha = 0;
      this.arrowSelectDown_ladder1.inputEnabled = false;
    }

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder2) && this.isMoveableWallComplete === false){
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

    // logic for water peril - fail
    if((this.floorBlock1Collision === true || this.floorBlock2Collision === true) && this.playerFail === false){
        this.floorBlock1Collision = false;
        this.floorBlock2Collision = false;
        this.playAudio('water-splash'); // play audio of water splash
        this.player.failedCaught();
        this.initialHit = true;
        this.handleFail("DW and Bud fell through floors");
    }

    // logic for horizontal moving wall
    if(this.game.physics.overlap(this.player.sprite, this.movingWallHortizontal) && this.playerFail === false 
      && this.movingWallIsMoving === true){
      this.player.failedCaught();
      this.initialHit = true;
      this.handleFail("DW and Bud got crushed.");
    };

    // physics collision for getting idol selector button
    if(this.game.physics.overlap(this.player.sprite, this.arrowSelect_GetIdol) && this.idolFound === false){
        this.arrowSelect_GetIdol.alpha = 1;
        this.arrowSelect_GetIdol.inputEnabled = true;
        this.arrowSelect_GetIdol.events.onInputDown.add(this.onIdolGrab,this);
     }else{
        this.arrowSelect_GetIdol.alpha = 0;
        this.arrowSelect_GetIdol.inputEnabled = false;
     }

  },
  // setPlayer: function(player){
  // 	this.player = player;
  // },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    // handle tile collision - floor drop
    this.map.setTileIndexCallback([54,55], this.onWaterFloorCollision, this, this.layerName);
    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;
    
    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();

    // reset movable wall peril
    this.movingWallHortizontal.x = 0;
    this.movingWallHortizontal.y = 4 * tileHeight;
    this.movingWall_audioPlayed = false;
    this.isMoveableWallComplete = false;
    this.movingWallIsMoving = false;

     // set position for tent element
    this.tent.x = this.startPosX - 50;
    this.tent.y = this.startPosY - 8;

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    this.blockOn(); // start floor drop animation

    // reset Vertical wall Up/Down animation
    if(this.timerReset_WallVUp) this.timerReset_WallVUp.stop();
    if(this.timerReset_wallVDown) this.timerReset_wallVDown.stop();
    this.wallVDown(); // start wall animation
    

  },
  onWaterFloorCollision: function(sprite, tile){
    // handler for floor drop - water
    if(this.floorEnabled === true) return;

    if(sprite.name == "player"){
     
      logger( "sprite.name " + sprite.name );
      tileX = tile.x; 
      if(tile.x == 3 * tileWidth){
        this.floorBlock1Collision = true;
      }
      if(tile.x == 4 * tileWidth){
        this.floorBlock2Collision = true;
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
  
  // onExitCollision: function(sprite, tile){},

  destroy: function(){
    // not really "destroying" the object - really just disabling the display object
      this._super(); // call destroy from parent

      this.movingWallHortizontal.destroy();
      this.movingWallHortizontal = null;

      this.enabled = false;
  },
  clear: function(){
    // not really "destroying" the object - really just disabling the display object
      this._super(); // call destroy from parent
      this.enabled = false;
  }
});