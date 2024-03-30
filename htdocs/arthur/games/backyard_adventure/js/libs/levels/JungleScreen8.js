/*
 *  JungleScreen8 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Water/Swing Peril, Dropping Floor Peril, Snake
*/

var JungleScreen8 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 80;
    this.startPosY = 90;

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;
    this.floorEnabled = false;
    //this.floorDown = null;
    this.floorDown_openSpeed = 8000;

    // set references to elements, boolean flags or animations
    this.arrowSelect_vineBranch = null;
    this.vineBranch = null; 
    this.vineBranchOut = null;
    this.budDWJumpOnBack = null;
    this.waterBlock1Collision = false;
    this.waterBlock2Collision = false;

    this.snake = null;
    this.snake_audioPlayed = false;
    this.snake_speed = 2400;
    this.snake_delaySpeed = 4000;

    this.initialHit = true; // used for jumping/swing over water ... need a initial stop of player

    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // element for snake peril
    this.snake = this.game.add.sprite(4 * tileWidth, 5*tileHeight + 15, 'game_assets');
    this.snake.body.setRectangle(55, 35, 20, 0);
    this.snake.animations.add('loop', Phaser.Animation.generateFrameNames('snake_', 0, 19, '', 2), 11, true);
    this.snake.play('loop');
    this.snake.body.allowGravity = false;
    var snakeTween = this.game.add.tween(this.snake).to({x: 9*tileWidth}, this.snake_speed, Phaser.Easing.Sinusoidal.InOut, true, this.snake_delaySpeed, 9999, true);
    this.groupDisplay.add(this.snake);

    // hide snake tiles
    this.map.getTile(4, 5, this.layerName).alpha = 0; 
    this.map.getTile(9, 5, this.layerName).alpha = 0; 

    // hide tiles used for water peril
    this.selectedTile_invis1 = this.map.getTile(5, 2, this.layerName); // invisible block
    this.selectedTile_invis1.alpha = 0;
    this.selectedTile_invis2 = this.map.getTile(6, 2, this.layerName); // invisible
    this.selectedTile_invis2.alpha = 0;

    // references to elements for water peril
    var yPosVineBranch = 15;
    this.vineBranch = this.game.add.sprite(5 * tileWidth - 20, yPosVineBranch, 'vine_branch');
    this.vineBranch.body.velocity.x = 0;
    this.vineBranch.body.allowGravity = false;
    this.vineBranch.alpha = 1;
    this.groupDisplay.add(this.vineBranch); 

    this.vineBranchOut = this.game.add.sprite(this.vineBranch.x + tileWidth, yPosVineBranch + 2, 'vine_branch_out');
    this.vineBranchOut.body.velocity.x = 0;
    this.vineBranchOut.body.allowGravity = false;
    this.vineBranchOut.alpha = 0;
    this.groupDisplay.add(this.vineBranchOut); 

    this.budDWJumpOnBack = this.game.add.sprite(this.vineBranch.x - 60, yPosVineBranch, 'Bud_DW_jumponback');
    this.budDWJumpOnBack.animations.add('jump');
    this.budDWJumpOnBack.body.allowGravity = false;
    this.budDWJumpOnBack.alpha = 0;
    this.budDWJumpOnBack.name = "buddwvinejump_anim";
    this.animJump = this.budDWJumpOnBack.animations.getAnimation('jump'); 
    this.animJump.onComplete = function(){
      if(this.debug === true) logger("jump complete");
      this.restart();
      this.stop();
      ref.budDWJumpOnBack.alpha = 0;
      ref.player.sprite.alpha = 1;
      ref.vineBranchOut.alpha = 1;
      ref.arrowSelect_vineBranch.inputEnabled = false;
      ref.arrowSelect_vineBranch.alpha = 0;
      
      ref.player.stop();
      ref.player.enablePlayer = true;
      ref.player.sprite.x = 490; /// change to non-fixed value
    };
    this.groupDisplay.add(this.budDWJumpOnBack);

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "idol_bottom_left";
    this.idolPiece.x = 2*tileWidth;
    this.idolPiece.y = 4*tileHeight;
    this.groupDisplay.add(this.idolPiece);
    this.idolPiece.alpha = 1;

     // hide idol piece
    var idolPieceTile = this.map.getTile(2, 4, this.layerName); // hide idol piece
    idolPieceTile.alpha = 0; 

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(3 * tileWidth - 12, 9 * tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    // when a player is up against this tile stop the player
    this.map.getTile(3, 5, this.layerName).callback = function(){ // blocking wall
      ref.player.bounceOffWall( (3 * tileWidth) );
    };

    var exitDoorTile = this.map.getTile(11,8, this.layerName);
    exitDoorTile.callback = function(){
      ref.player.bounceOffWall( (11 * tileWidth) );
    }

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // water peril - selector element 
    this.arrowSelect_vineBranch = this.game.add.sprite(this.vineBranch.x - 40, 
    this.vineBranch.y + this.vineBranch.height - 10, 'game_assets', 'arrow_select_up');
    this.arrowSelect_vineBranch.body.allowGravity = false;
    this.arrowSelect_vineBranch.alpha = 0;

    // Selector elements for moving up and down ladder
    this.arrowSelectUp_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder1.body.allowGravity = false;
    this.arrowSelectUp_ladder1.alpha = 0;
    this.arrowSelectUp_ladder1.x = 0 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 1;
    this.arrowSelectDown_ladder1.x = 0 * tileWidth;
    this.arrowSelectDown_ladder1.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder1);

    this.arrowSelectUp_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder2.body.allowGravity = false;
    this.arrowSelectUp_ladder2.alpha = 0;
    this.arrowSelectUp_ladder2.x = 8 * tileWidth;
    this.arrowSelectUp_ladder2.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 1;
    this.arrowSelectDown_ladder2.x = 8 * tileWidth;
    this.arrowSelectDown_ladder2.y = 8 * tileHeight;
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

    // referenced in BaseScreen
    this.getItemPlay.scale.x = 1;
    this.getItemPlay.x = 1 * tileWidth;
    this.getItemPlay.y = 5 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 1 * tileWidth;
    this.arrowSelect_GetIdol.y = 5 * tileHeight;

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false;

    // handle tile collision - floor drop
    this.map.setTileIndexCallback([54,55], this.onWaterFloorCollision, this, this.layerName); 

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
      this.game.physics.collide(this.budDWJumpOnBack, this.layer);
    
      // physics collision for water peril
      var vineOverlap = this.game.physics.overlap(this.player.sprite, this.vineBranch, this.playerJumpOnBackHandler, null, this);
      if(!vineOverlap){
        this.arrowSelect_vineBranch.alpha = 0;
        this.arrowSelect_vineBranch.inputEnabled = false;
      }

      // handle play collision with arrow select - down arrow is the hit area for the up arrow
      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder1)){
        this.climbUpDown.x = (this.arrowSelectUp_ladder1.x - 20) + 85;
        this.climbUpDown.y = this.arrowSelectUp_ladder1.y - 12;
        this.arrowSelectUp_ladder1.alpha = 1;
        this.arrowSelectUp_ladder1.inputEnabled = true;
        this.isLadderFlipped = true;
        this.arrowSelectUp_ladder1.events.onInputDown.add(this.moveUpToNextFloor,this);
      }else{
        this.arrowSelectUp_ladder1.alpha = 0;
        this.arrowSelectUp_ladder1.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder1)){
        this.climbUpDown.x = (this.arrowSelectUp_ladder1.x - 20) + 85;
        this.climbUpDown.y = this.arrowSelectUp_ladder1.y - 12;
        this.arrowSelectDown_ladder1.alpha = 1;
        this.arrowSelectDown_ladder1.inputEnabled = true;
        this.isLadderFlipped = true;
        this.arrowSelectDown_ladder1.events.onInputDown.add(this.moveDownToNextFloor,this);
      }else{
        this.arrowSelectDown_ladder1.alpha = 0;
        this.arrowSelectDown_ladder1.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder2)){
        this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 10) 
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
        this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 10) 
        this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 12;

        this.arrowSelectDown_ladder2.alpha = 1;
        this.arrowSelectDown_ladder2.inputEnabled = true;
        this.isLadderFlipped = false;
        this.arrowSelectDown_ladder2.events.onInputDown.add(this.moveDownToNextFloor,this);
      }else{
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

      // logic for water peril - fail
      if((this.floorBlock1Collision === true || this.floorBlock2Collision === true) && this.playerFail === false){
          this.floorBlock1Collision = false;
          this.floorBlock2Collision = false;
          this.playAudio('water-splash'); // play audio of water splash
          this.player.failedCaught();
          this.initialHit = true;
          this.handleFail("DW and Bud fell through floors");
      }

      // logic for water peril - fail
      if(this.waterBlock1Collision === true && this.waterBlock2Collision === true && this.playerFail === false){
        if(this.debug === true) logger("Water Block Hit:  this.playerFail: " + this.playerFail);
        this.waterBlock1Collision = false;
        this.waterBlock2Collision = false;
        this.player.sinkDown();
        this.initialHit = true;
        this.playAudio('water-splash'); // play audio of water splash

        this.handleFail("DW and Bud fell into the water.");
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
  onWaterFloorCollision: function(sprite, tile){
    // handler for floor drop - water
    if(this.floorEnabled === true) return;

    if(sprite.name == "player"){
     
      logger( "sprite.name " + sprite.name + " " + tile.x);
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

  // inherited function - Water Swing peril
  // playerJumpOnBackHandler: function(){
  // swingOnVine: function(){
  // onBlockCollision: function(sprite, tile){ 
  setScreen: function(idolPieceName){

    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    this.blockOn(); // start floor drop animation

    // handle tile collision - water peril
    this.map.setTileIndexCallback(49, this.onBlockCollision, this, this.layerName);
    this.waterBlock1Collision = false;
    this.waterBlock2Collision = false;

    this.vineBranch.alpha = 1;
    this.vineBranchOut.alpha = 0;
    this.budDWJumpOnBack.alpha = 0;  

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false; 

  },
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
  clear: function(){
      // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent
      this.enabled = false;
  }
  
});