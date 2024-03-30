/*
 *  TempleScreen8 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Dropping Floor, Bat, Horizontally Moving Wall 
*/

var TempleScreen8 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    this.floorBlock1Collision = false;// dropping floor into water
    this.floorBlock2Collision = false;
    this.floorEnabled = false;
    this.floorDown_openSpeed = 8000;

    this.bat_1 = null;
    this.bat_2 = null;
    this.bat_audioPlayed = false;
    this.bat_speed = 2400; // milliseconds
    this.bat_delaySpeed = 4000; // milliseconds

    this.movingWall_audioPlayed = false;
  
    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // when a player is up against this tile stop the player
    var intersecTile_1 = this.map.getTile(5,5, this.layerName);
    intersecTile_1.callback = function(){
        ref.player.bounceOffWall( (5 * tileWidth) );
    }

    // when a player is up against this tile stop the player
    var exitDoorTile = this.map.getTile(11,5, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "idol_bottom_left";
    this.idolPiece.x = 11*tileWidth;
    this.idolPiece.y = 7*tileHeight;
    this.groupDisplay.add(this.idolPiece); 
    this.idolPiece.alpha = 1;

    // hide idol piece
    var idolPieceTile = this.map.getTile(11, 7, this.layerName); // hide idol piece
    idolPieceTile.alpha = 0;

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(3 * tileWidth - 12, 3*tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false; 

    // reference to bat element peril
    this.bat_1 = this.game.add.sprite(1*tileWidth, 4*tileHeight, 'game_assets');
    this.bat_1.body.setRectangle(55, 50, 25, 50);
    this.bat_1.animations.add('loop', Phaser.Animation.generateFrameNames('flying_bat_', 0, 9, '', 1), 11, true);
    this.bat_1.play('loop');
    this.bat_1.scale.x = this.bat_1.scale.y = .8;
    this.bat_1.body.allowGravity = false;
    var batTween = this.game.add.tween(this.bat_1).to({x: 4 * tileWidth}, this.bat_speed, Phaser.Easing.Quintic.InOut, true, this.bat_delaySpeed, 9999, true);
    this.groupDisplay.add(this.bat_1); 

    // reference to bat element peril
    this.bat_2 = this.game.add.sprite(8*tileWidth, 1*tileHeight, 'game_assets');
    this.bat_2.body.setRectangle(55, 50, 25, 50);
    this.bat_2.animations.add('loop', Phaser.Animation.generateFrameNames('flying_bat_', 0, 9, '', 1), 11, true);
    this.bat_2.play('loop');
    this.bat_2.scale.x = this.bat_2.scale.y = .8;
    this.bat_2.body.allowGravity = false;
    var batTween = this.game.add.tween(this.bat_2).to({x: 11 * tileWidth}, this.bat_speed, Phaser.Easing.Quintic.InOut, true, this.bat_delaySpeed, 9999, true);
    this.groupDisplay.add(this.bat_2); 

    // hide bat tiles for peril
    this.map.getTile(1, 4, this.layerName).alpha = 0; 
    this.map.getTile(4, 4, this.layerName).alpha = 0;
    this.map.getTile(8, 1, this.layerName).alpha = 0; 
    this.map.getTile(11, 1, this.layerName).alpha = 0; 

    // hide tiles for moveable wall
    this.map.getTile(6, 4, this.layerName).alpha = 0; 
    this.map.getTile(6, 5, this.layerName).alpha = 0;

    this.movingWallHortizontal = this.game.add.sprite(6 * tileWidth, 4 * tileHeight, 'PerilActions');
    this.movingWallHortizontal.body.setRectangle(260, 100, -205, 0);
    this.movingWallHortizontal.animations.add('stationary', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 0, '', 2), 11);
    this.movingWallHortizontal.body.allowGravity = false;
    this.groupDisplay.add(this.movingWallHortizontal);
    this.movingWallHortizontal.alpha = 1;

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // Selector elements for moving up and down ladder
    this.arrowSelectUp_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder1.body.allowGravity = false;
    this.arrowSelectUp_ladder1.alpha = 0;
    this.arrowSelectUp_ladder1.x = 2 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 1;
    this.arrowSelectDown_ladder1.x = 2 * tileWidth;
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

    this.arrowSelectUp_ladder3 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder3.body.allowGravity = false;
    this.arrowSelectUp_ladder3.alpha = 0;
    this.arrowSelectUp_ladder3.x = 8 * tileWidth;
    this.arrowSelectUp_ladder3.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder3);

    this.arrowSelectDown_ladder3 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder3.body.allowGravity = false;
    this.arrowSelectDown_ladder3.alpha = 1;
    this.arrowSelectDown_ladder3.x = 8 * tileWidth;
    this.arrowSelectDown_ladder3.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder3);

    // referenced in BaseScreen
    this.getItemPlay.scale.x = 1;
    this.getItemPlay.x = 10 * tileWidth;
    this.getItemPlay.y = 8 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 10 * tileWidth;
    this.arrowSelect_GetIdol.y = 8 * tileHeight;

    // handle tile collision - floor drop
    this.map.setTileIndexCallback([52,53], this.onWaterFloorCollision, this, this.layerName);

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

      if(this.movingWallIsMoving == false && this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder3)){
        this.climbUpDown.x = (this.arrowSelectUp_ladder3.x - 20) + 85;
        this.climbUpDown.y = this.arrowSelectUp_ladder3.y - 12;
        this.arrowSelectUp_ladder3.alpha = 1;
        this.arrowSelectUp_ladder3.inputEnabled = true;
        this.isLadderFlipped = true;
        this.arrowSelectUp_ladder3.events.onInputDown.add(this.moveUpToNextFloor,this);

        // handle moving wall audio
        if(this.movingWall_audioPlayed === false) {
          // Moving Wall Tween
          this.movingWallTween.start();  
          this.playAudio('door-slide-loopable'); // play audio of door slide 
          this.movingWall_audioPlayed = true;
          this.arrowSelectUp_ladder3.events.onInputDown.remove(this.moveUpToNextFloor,this);
        }
      }else{
        this.arrowSelectUp_ladder3.alpha = 0;
        this.arrowSelectUp_ladder3.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder3)){
        this.climbUpDown.x = (this.arrowSelectUp_ladder3.x - 20) + 85;
        this.climbUpDown.y = this.arrowSelectUp_ladder3.y - 12;
        this.arrowSelectDown_ladder3.alpha = 1;
        this.arrowSelectDown_ladder3.inputEnabled = true;
        this.isLadderFlipped = true;
        this.arrowSelectDown_ladder3.events.onInputDown.add(this.moveDownToNextFloor,this);
      }else{
        this.arrowSelectDown_ladder3.alpha = 0;
        this.arrowSelectDown_ladder3.inputEnabled = false;
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
          this.floorBlock1Collision = false;
          this.floorBlock2Collision = false;
          this.playAudio('water-splash'); // play audio of water splash
          this.player.failedCaught();
          this.initialHit = true;
          this.handleFail("DW and Bud fell through floors");
        } 

        // physics collision for bat peril
      if(this.game.physics.overlap(this.player.sprite, this.bat_1) && this.playerFail === false){
        this.player.failedCaught();
        this.handleFail("DW and Bud got caught by Bat.");
      }

      // physics collision for bat peril
      if(this.game.physics.overlap(this.player.sprite, this.bat_2) && this.playerFail === false){
        this.player.failedCaught();
        this.handleFail("DW and Bud got caught by Bat.");
      }

      // logic for horizontal moving wall
    if(this.game.physics.overlap(this.player.sprite, this.movingWallHortizontal) && this.playerFail === false 
      && this.movingWallIsMoving === true){
      this.player.failedCaught();
      this.initialHit = true;
      this.handleFail("DW and Bud got crushed.");
      this.movingWallTween.stop();
    };
  },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    this.bat_audioPlayed = false; // enable audio flag for bat

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    this.blockOn(); // start floor drop animation

    var ref = this;
    this.movingWallHortizontal.x = 6 * tileWidth;
    this.movingWallHortizontal.y = 4 * tileHeight;
    this.movingWallIsMoving = false;
    this.movingWall_audioPlayed = false;
    if(this.movingWallTween) this.game.tweens.remove(this.movingWallTween);
    this.movingWallTween = this.game.add.tween(this.movingWallHortizontal).to({x: 10*tileWidth}, 4000, Phaser.Easing.Sinusoidal.InOut, false, 2000);
    this.movingWallTween.onStart.add(function(){
      ref.movingWallIsMoving = true;
    });

    this.floorBlock1Collision = false;// dropping floor into water
    this.floorBlock2Collision = false;

  },
  onWaterFloorCollision: function(sprite, tile){
    // handler for floor drop - water
    if(this.floorEnabled === true) return;

    if(sprite.name == "player"){
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

  // postMoveDownLadder: function(){ },
  // moveUpLongToNextFloor: function(sprite){ },
  // moveDownLongToNextFloor: function(sprite){ },
  // postMoveDownLongLadder: function(){ },
  // setPlayer: function(player){ },
  destroy: function(){
      // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent

      this.bat_1.destroy();
      this.bat_1 = null;
      this.bat_2.destroy();
      this.bat_2 = null;

      this.enabled = false;
  },
  clear: function(){
      // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent
      this.enabled = false;
  }
  
});