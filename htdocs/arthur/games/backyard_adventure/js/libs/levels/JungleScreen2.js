/*
 *  JungleScreen2 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Blocking Wall, Snake
 *    Bug: Block wall collision is not reset when revived  
*/

var JungleScreen2 = BaseScreen.extend({
  init: function(game){

    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 100;
    this.startPosY = 90;

    // set references to elements, boolean flags or animations
    //this.selectedTileLadder = null;
    this.logSprite = null;
    this.logImg = null;
    this.animLogMove = null;
    this.isLogMoved = false;
    this.snake = null;

    this.arrowSelect_log = null;
    this.arrowSelectDown_LongLadder = null;
    this.arrowSelectUp_LongLadder = null;

    this.snake_audioPlayed = false;
    this.snake_speed = 2400;
    this.snake_delaySpeed = 4000;

    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // when a player is up against this tile stop the player
    var intersecTile = this.map.getTile(4,8, this.layerName);
    intersecTile.callback = function(){
        ref.player.bounceOffWall( (4 * tileWidth) );
    }

    var wallBlockage = this.map.getTile(7,2, this.layerName);
    wallBlockage.callback = function(){
       ref.player.bounceOffWall( (7 * tileWidth) );
    }

    var exitDoorTile = this.map.getTile(11,8, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // reference to log graphic and animation for Open panel / log peril 
    this.logSprite = this.game.add.sprite(4*tileWidth - 30, 2*tileHeight - 13, 'Bud_DW_Actions'); 
    this.logSprite.body.velocity.x = 0;
    this.logSprite.body.allowGravity = false;
    this.logSprite.alpha = 0; 
    this.logSprite.animations.add('moveLog', Phaser.Animation.generateFrameNames('Bud_DW_log_', 0, 41, '', 2), 11);
    this.logSprite.name = "logSprite";
    this.groupDisplay.add(this.logSprite); 

    this.animLogMove = this.logSprite.animations.getAnimation('moveLog');
    this.animLogMove.onComplete = function(){
      this.restart();
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
    };

    this.logImg = this.game.add.sprite(6*tileWidth - 50, 3*tileHeight - 10, 'log');
    this.logImg.body.velocity.x = 0;
    this.logImg.body.allowGravity = false;
    this.logImg.alpha = 1;
    this.groupDisplay.add(this.logImg);

    // setup of moving wall UP AND DOWN
    this.blockingWall = this.game.add.sprite(7 * tileWidth, 1 * tileHeight, 'PerilActions');
    this.blockingWall.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.blockingWall.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.blockingWall.body.allowGravity = false;
    this.blockingWall.play('down');
    this.blockingWall.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.blockingWall);

    // hide blocking wall
    var wallTile_3_1 = this.map.getTile(7, 1, this.layerName);
    wallTile_3_1.alpha = 0;
    var wallTile_3_2 = this.map.getTile(7, 2, this.layerName);
    wallTile_3_2.alpha = 0;


    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "arthur_idol_02";
    this.idolPiece.x = 0;
    this.idolPiece.y = 7*tileHeight;
    this.groupDisplay.add(this.idolPiece);
    this.idolPiece.alpha = 1; 

    // hide idol piece
    var idolPieceTile = this.map.getTile(0, 7, this.layerName); 
    idolPieceTile.alpha = 0; 

    // hide snake and bat tile for peril
    this.map.getTile(11, 4, this.layerName).alpha = 0;  
    this.map.getTile(0, 5, this.layerName).alpha = 0; 
    this.map.getTile(7, 5, this.layerName).alpha = 0; 

    // element for snake peril
    this.snake = this.game.add.sprite(0, 5*tileHeight + 15, 'game_assets');
    this.snake.body.setRectangle(55, 35, 20, 0);
    this.snake.animations.add('loop', Phaser.Animation.generateFrameNames('snake_', 0, 19, '', 2), 11, true);
    this.snake.play('loop');
    this.snake.body.allowGravity = false;
    var snakeTween = this.game.add.tween(this.snake).to({x: 6*tileWidth}, this.snake_speed, Phaser.Easing.Sinusoidal.InOut, true, this.snake_delaySpeed, 9999, true);
    this.groupDisplay.add(this.snake); 

    // element for moving wall peril 
    // this.movingWallVertical_1 = this.game.add.sprite(7 * tileWidth, 1 * tileHeight, 'PerilActions');
    // this.movingWallVertical_1.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    // this.movingWallVertical_1.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    // this.movingWallVertical_1.body.allowGravity = false;
    // this.movingWallVertical_1.play('down');
    // this.movingWallVertical_1.body.setRectangle(55, 100, 0, 0);
    // this.groupDisplay.add(this.movingWallVertical_1);
    // this.movingWallVertical_1.alpha = 0;

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // open panel - selector element 
    this.arrowSelect_log = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelect_log.body.allowGravity = false;
    this.arrowSelect_log.x = 4 * tileWidth;
    this.arrowSelect_log.y = 2 * tileHeight;
    this.arrowSelect_log.alpha = 0;

    // Selector elements for moving up and down ladder
    this.arrowSelectDown_LongLadder = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_LongLadder.body.allowGravity = false;
    this.arrowSelectDown_LongLadder.alpha = 1;
    this.arrowSelectDown_LongLadder.x = 9 * tileWidth;
    this.arrowSelectDown_LongLadder.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_LongLadder);
    
    this.arrowSelectUp_LongLadder = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_LongLadder.body.allowGravity = false;
    this.arrowSelectUp_LongLadder.alpha = 1;
    this.arrowSelectUp_LongLadder.x = 9 * tileWidth;
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
    this.arrowSelectUp_ladder2.x = 3 * tileWidth;
    this.arrowSelectUp_ladder2.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 1;
    this.arrowSelectDown_ladder2.x = 3 * tileWidth;
    this.arrowSelectDown_ladder2.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder2);  

    // referenced in BaseScreen
    this.getItemPlay.x = 125;
    this.getItemPlay.y = 8 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 1 * tileWidth;
    this.arrowSelect_GetIdol.y = 8 * tileHeight;
  },
  render: function(){
  	if(this.debug === true) {
      this.game.debug.renderSpriteBody(this.snake);
      this.game.debug.renderSpriteBody(this.arrowSelect_log);
      this.game.debug.renderSpriteBody(this.arrowSelectDown_LongLadder);
      this.game.debug.renderSpriteBody(this.arrowSelectUp_ladder1);
      this.game.debug.renderSpriteBody(this.arrowSelectDown_ladder1);
      this.game.debug.renderSpriteBody(this.arrowSelectUp_ladder2);
      this.game.debug.renderSpriteBody(this.arrowSelectDown_ladder2);
    }
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

      // handle snake peril audio
      if(this.snake_audioPlayed === false) {
        this.playAudio('snake-rattle'); // play audio of snake
        this.snake_audioPlayed = true;
      }

    }else{
      this.arrowSelectDown_ladder1.alpha = 0;
      this.arrowSelectDown_ladder1.inputEnabled = false;
    }

    if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder2)){
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 18) + 85;
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
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 18) + 85;
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

  },
  // setPlayer: function(player){
  // 	this.player = player;
  // },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    this.snake_audioPlayed = false;
  },
  /* inherited function from parent object - BaseScreen */
  // moveLogHandler: function ()
  // onIdolMantle: function(){ },
  // onExitCollision: function(sprite, tile){ },
  // moveUpToNextFloor: function(sprite){ },
  // postMoveUpLadder: function(){ },
  // moveDownToNextFloor: function(sprite){ },
  // postMoveDownLadder: function(){ },
  
  moveUpLongToNextFloor: function(sprite){ 
    if(this.enabled === false) return;

    this._super(sprite); // call moveUpLongToNextFloor from parent
  },
  moveDownLongToNextFloor: function(sprite){
    if(this.enabled === false) return; 

    this._super(sprite); // call moveDownLongToNextFloor from parent
    this.player.sprite.x = (tileWidth * 10) - 20;
  },
  // postMoveDownLongLadder: function(){ },
  // setPlayer: function(player){ },
  destroy: function(){
    // not really "destroying" the object - really just disabling the display object
      this._super(); // call destroy from parent
      
      this.logSprite.destroy();
      this.logSprite = null;

      this.logImg.destroy();
      this.logImg = null;

      this.arrowSelect_log.destroy();
      this.arrowSelect_log = null;

      this.snake.destroy();
      this.snake = null;

      this.enabled = false;
  },
  clear: function(){
    // not really "destroying" the object - really just disabling the display object
      this._super(); // call destroy from parent
      //this.arrowSelect_log.alpha = 0;
      this.enabled = false;
  }
});