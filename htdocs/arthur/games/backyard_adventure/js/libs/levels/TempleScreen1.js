/*
 *  TempleScreen1 - Temple Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Moving Wall, snake
*/

var TempleScreen1 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    // set references to elements, boolean flags or animations
    this.snake = null;
    this.isFloorBroken = false;

    this.snake_audioPlayed = false;
    this.snake_speed = 2400;
    this.snake_delaySpeed = 4000;

    this.movingWall_audioPlayed = false;
    this.debug = false;

    this.breakableTile1 = null;
    this.breakAbleTile1Enabled = false;

    this.breakableTile2 = null;
    this.breakAbleTile2Enabled = false;

    this.breakableTile3 = null;
    this.breakAbleTile3Enabled = false;

    this.breakingTile_01 = null;
    this.breakingTile_02 = null;
    this.breakingTile_03 = null;
  },
  create: function(layerName, map){
    this._super(layerName, map);// call create from parent

    var ref = this.ref; // reference back to parent class

    // when a player is up against this tile stop the player
    var intersecTile_1 = this.map.getTile(5,8, this.layerName);
    intersecTile_1.callback = function(){
        ref.player.bounceOffWall( (5 * tileWidth) );
    }

    var intersecTile_2 = this.map.getTile(8,5, this.layerName);
    intersecTile_2.callback = function(){
        ref.player.bounceOffWall( (8 * tileWidth) );
    }

    // element for snake peril
    this.snake = this.game.add.sprite(3*tileWidth, 5*tileHeight + 15, 'game_assets');
    this.snake.animations.add('loop', Phaser.Animation.generateFrameNames('snake_', 0, 19, '', 2), 11, true);
    this.snake.body.setRectangle(55, 35, 20, 0);
    this.snake.body.allowGravity = false;
    this.snake.play('loop');
    var snakeTween = this.game.add.tween(this.snake).to({x: 6*tileWidth}, this.snake_speed, Phaser.Easing.Sinusoidal.InOut, true, this.snake_delaySpeed, 9999, true)
    this.groupDisplay.add(this.snake); 
    
    // hide snake tiles
    this.map.getTile(3, 5, this.layerName).alpha = 0;  
    this.map.getTile(7, 5, this.layerName).alpha = 0; 

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "idol_bottom_left";
    this.idolPiece.x = 6*tileWidth;
    this.idolPiece.y = 7*tileHeight;
    this.groupDisplay.add(this.idolPiece); 
    this.idolPiece.alpha = 1;

    // hide idol piece
    var idolPieceTile = this.map.getTile(6, 7, this.layerName); // hide idol piece
    idolPieceTile.alpha = 0; 

    var refMap = this.map;
    //logger("ref.layerName " +  this.layerName);
    // refMap.putTile(41, 5, 3, this.layerName);
    // refMap.putTile(41, 6, 3, this.layerName);
    // refMap.putTile(41, 7, 3, this.layerName);

    this.map.getTile(5, 3, this.layerName).alpha = 0;  
    this.map.getTile(6, 3, this.layerName).alpha = 0; 
    this.map.getTile(7, 3, this.layerName).alpha = 0;

    this.breakingTile_01 = this.game.add.sprite(5*tileWidth, 3*tileHeight, 'templeBreakingTile');
    this.breakingTile_01.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_01);
    this.breakingTile_02 = this.game.add.sprite(6*tileWidth, 3*tileHeight, 'templeBreakingTile'); 
    this.breakingTile_02.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_02);
    this.breakingTile_03 = this.game.add.sprite(7*tileWidth, 3*tileHeight, 'templeBreakingTile'); 
    this.breakingTile_03.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_03);  


    // handle breakable tile collision
    this.breakAbleTile1Enabled = false;
    this.breakableTile1 = this.map.getTile(5, 3, this.layerName);
    this.breakableTile1.callback = function(){
      //refMap.putTile(0, 5, 3, ref.layerName);
      //logger("ref.layerName " + ref.layerName);
      ref.breakingTile_01.alpha = 0;
      
      if(ref.breakAbleTile1Enabled === false) {
        ref.breakAbleTile1Enabled = true;
        ref.playAudio('floor-crumble'); // play audio of water splash
      }
    };
    
    this.breakAbleTile2Enabled = false;
    this.breakableTile2 = this.map.getTile(6, 3, this.layerName);
    this.breakableTile2.callback = function(){
      //refMap.putTile(0, 6, 3, ref.layerName);
      ref.breakingTile_02.alpha = 0;
      
      if(ref.isFloorBroken === true){
          if(ref.debug) logger("Fallen down");
          ref.initialHit = true;
          ref.player.failedCaught();
          ref.handleFail("DW and Bud fell down");
      }

       if(ref.breakAbleTile2Enabled === false) {
          ref.breakAbleTile2Enabled = true;
          ref.playAudio('floor-crumble'); // play audio of water splash
        }
      
    };

    this.breakAbleTile3Enabled = false;
    this.breakableTile3 = this.map.getTile(7, 3, this.layerName);
    this.breakableTile3.callback = function(){
      //refMap.putTile(0, 7, 3, ref.layerName);
      ref.breakingTile_03.alpha = 0;

      if(ref.breakAbleTile3Enabled === false) {
        ref.breakAbleTile3Enabled = true;
        ref.playAudio('floor-crumble'); // play audio of water splash
      }
      ref.isFloorBroken = true;
    };

    // hide tiles for moveable wall
    this.map.getTile(0, 1, this.layerName).alpha = 0; 
    this.map.getTile(0, 2, this.layerName).alpha = 0;

    this.movingWallHortizontal = this.game.add.sprite(0, 1 * tileHeight, 'PerilActions');
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
    this.arrowSelectUp_ladder1.x = 4 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 1;
    this.arrowSelectDown_ladder1.x = 4 * tileWidth;
    this.arrowSelectDown_ladder1.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder1);

    this.arrowSelectUp_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder2.body.allowGravity = false;
    this.arrowSelectUp_ladder2.alpha = 0;
    this.arrowSelectUp_ladder2.x = 2 * tileWidth;
    this.arrowSelectUp_ladder2.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 1;
    this.arrowSelectDown_ladder2.x = 2 * tileWidth;
    this.arrowSelectDown_ladder2.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder2); 

    this.arrowSelectUp_ladder3 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder3.body.allowGravity = false;
    this.arrowSelectUp_ladder3.alpha = 0;
    this.arrowSelectUp_ladder3.x = 11 * tileWidth;
    this.arrowSelectUp_ladder3.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder3);

    this.arrowSelectDown_ladder3 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder3.body.allowGravity = false;
    this.arrowSelectDown_ladder3.alpha = 1;
    this.arrowSelectDown_ladder3.x = 11 * tileWidth;
    this.arrowSelectDown_ladder3.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder3);

    this.arrowSelectUp_ladder4 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder4.body.allowGravity = false;
    this.arrowSelectUp_ladder4.alpha = 0;
    this.arrowSelectUp_ladder4.x = 9 * tileWidth;
    this.arrowSelectUp_ladder4.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder4);

    this.arrowSelectDown_ladder4 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder4.body.allowGravity = false;
    this.arrowSelectDown_ladder4.alpha = 1;
    this.arrowSelectDown_ladder4.x = 9 * tileWidth;
    this.arrowSelectDown_ladder4.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder4); 

    // referenced in BaseScreen
    this.getItemPlay.x = 8 * tileWidth + 20;
    this.getItemPlay.y = 8 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 7 * tileWidth;
    this.arrowSelect_GetIdol.y = 8 * tileHeight;
  },
  render: function(){
  	if(this.debug === true) {
      this.game.debug.renderSpriteBody(this.movingWallHortizontal);
      // this.game.debug.renderSpriteBody(this.snake);
      // this.game.debug.renderSpriteBody(this.arrowSelectUp_ladder1);
      // this.game.debug.renderSpriteBody(this.arrowSelectDown_ladder1);
      // this.game.debug.renderSpriteBody(this.arrowSelectUp_ladder2);
      // this.game.debug.renderSpriteBody(this.arrowSelectDown_ladder2);
      // this.game.debug.renderSpriteBody(this.arrowSelectUp_ladder3);
      // this.game.debug.renderSpriteBody(this.arrowSelectDown_ladder3);
      // this.game.debug.renderSpriteBody(this.arrowSelectUp_ladder4);
      // this.game.debug.renderSpriteBody(this.arrowSelectDown_ladder4);
    }
  },
  update: function(){
    // ticker heart beat call
    if(this.enabled === false) return;

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
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 15) + 85;
      this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 12;

      this.arrowSelectUp_ladder2.alpha = 1;
      this.arrowSelectUp_ladder2.inputEnabled = true;
      this.isLadderFlipped = true;
      this.arrowSelectUp_ladder2.events.onInputDown.add(this.moveUpToNextFloor,this);
    }else{
      this.arrowSelectUp_ladder2.alpha = 0;
      this.arrowSelectUp_ladder2.inputEnabled = false;
    }

    if(this.movingWallIsMoving === false && this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder2)){
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 15) + 85;
      this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 12;

      this.arrowSelectDown_ladder2.alpha = 1;
      this.arrowSelectDown_ladder2.inputEnabled = true;
      this.isLadderFlipped = true;
      this.arrowSelectDown_ladder2.events.onInputDown.add(this.moveDownToNextFloor,this);
      
      // handle moving wall audio
      if(this.movingWall_audioPlayed === false) {
        // Moving Wall Tween
        this.movingWallTween.start();  
        this.playAudio('door-slide-loopable'); // play audio of door sliding
        this.movingWall_audioPlayed = true;
        this.arrowSelectDown_ladder2.events.onInputDown.remove(this.moveDownToNextFloor,this);
      }

    }else{
      this.movingWall_audioPlayed = false;

      this.arrowSelectDown_ladder2.alpha = 0;
      this.arrowSelectDown_ladder2.inputEnabled = false;
    }

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder3)){
      this.climbUpDown.x = (this.arrowSelectUp_ladder3.x - 20) + 85;
      this.climbUpDown.y = this.arrowSelectUp_ladder3.y - 12;
      this.arrowSelectUp_ladder3.alpha = 1;
      this.arrowSelectUp_ladder3.inputEnabled = true;
      this.isLadderFlipped = true;
      this.arrowSelectUp_ladder3.events.onInputDown.add(this.moveUpToNextFloor,this);
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

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder4)){
      this.climbUpDown.x = (this.arrowSelectUp_ladder4.x - 20) + 85;
      this.climbUpDown.y = this.arrowSelectUp_ladder4.y - 12;

      this.arrowSelectUp_ladder4.alpha = 1;
      this.arrowSelectUp_ladder4.inputEnabled = true;
      this.isLadderFlipped = true;
      this.arrowSelectUp_ladder4.events.onInputDown.add(this.moveUpToNextFloor,this);
    }else{
      this.arrowSelectUp_ladder4.alpha = 0;
      this.arrowSelectUp_ladder4.inputEnabled = false;
    }

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder4)){
      this.climbUpDown.x = (this.arrowSelectUp_ladder4.x - 20) + 85;
      this.climbUpDown.y = this.arrowSelectUp_ladder4.y - 12;

      this.arrowSelectDown_ladder4.alpha = 1;
      this.arrowSelectDown_ladder4.inputEnabled = true;
      this.isLadderFlipped = true;
      this.arrowSelectDown_ladder4.events.onInputDown.add(this.moveDownToNextFloor,this);
    }else{
      this.arrowSelectDown_ladder4.alpha = 0;
      this.arrowSelectDown_ladder4.inputEnabled = false;
    }

    // physics collision for snake peril - fail
    if(this.game.physics.overlap(this.player.sprite, this.snake) && this.playerFail === false){
      this.player.failedCaught();
      this.initialHit = true;
      this.handleFail("DW and Bud got caught by Snake.");
    }

    // logic for horizontal moving wall
    if(this.game.physics.overlap(this.player.sprite, this.movingWallHortizontal) && this.playerFail === false 
      && this.movingWallIsMoving === true){
      this.player.failedCaught();
      this.initialHit = true;
      this.handleFail("DW and Bud got crushed.");
      this.movingWallTween.stop();
    };

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
    
    // re-build tile series
    this.breakingTile_01.alpha = 1;
    this.breakingTile_02.alpha = 1;
    this.breakingTile_03.alpha = 1;  
    
    this.isFloorBroken = false;
    this.breakAbleTile1Enabled = false;
    this.breakAbleTile2Enabled = false;
    this.breakAbleTile3Enabled = false;

    var ref = this;
    this.movingWallHortizontal.x = 0;
    this.movingWallHortizontal.y = 1 * tileHeight;
    this.movingWallIsMoving = false;
    this.movingWall_audioPlayed = false;
    this.movingWallTween = this.game.add.tween(this.movingWallHortizontal).to({x: 4*tileWidth}, 4000, Phaser.Easing.Sinusoidal.InOut, false, 2000);
    this.movingWallTween.onStart.add(function(){
      ref.movingWallIsMoving = true;
    });

    this.snake_audioPlayed = false;
  },
  /* inherited function from parent object */
  // onIdolMantle: function(){ },
  // onExitCollision: function(sprite, tile){ },
  // moveUpToNextFloor: function(sprite){ },
  // postMoveUpLadder: function(){ },
  // moveDownToNextFloor: function(sprite){ },
  // postMoveDownLadder: function(){ },
  // moveUpLongToNextFloor: function(sprite){ },
  // moveDownLongToNextFloor: function(sprite){ },
  // postMoveDownLongLadder: function(){ },
  // setPlayer: function(player){ },
  destroy: function(){
    // not really "destroying" the object - really just disabling the display object 
     this._super(); // call destroy from parent
     this.enabled = false;
     
     this.breakableTile1.destroy();
     this.breakableTile1 = null;
     this.breakableTile2.destroy();
     this.breakableTile2 = null;
     this.breakableTile3.destroy();
     this.breakableTile3 = null;

     this.breakingTile_01.destroy();
     this.breakingTile_01 = null;
     this.breakingTile_02.destroy();
     this.breakingTile_02 = null;
     this.breakingTile_03.destroy();
     this.breakingTile_03 = null;

     this.snake.destroy();
     this.snake = null;
      
  },
  clear: function(){
    // not really "destroying" the object - really just disabling the display object 
     this._super(); // call destroy from parent
     this.enabled = false;
  }
});