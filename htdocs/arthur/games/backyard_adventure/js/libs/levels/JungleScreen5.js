/*
 *  JungleScreen5 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Water/Swing Peril, Moving Wall up/down, Bat
*/

var JungleScreen5 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    // set references to elements, boolean flags or animations
    this.arrowSelect_vineBranch = null;
    this.vineBranch = null; 
    this.vineBranchOut = null;
    this.budDWJumpOnBack = null;
    this.waterBlock1Collision = false; // water area - not floor
    this.waterBlock2Collision = false;

    this.bat_audioPlayed = false;
    this.bat_speed = 2400; // milliseconds
    this.bat_delaySpeed = 4000; // milliseconds
    this.bat = null;
    this.tent = null;

    this.selectedTile_invis1 = null;
    this.selectedTile_invis2 = null;

    this.movingWallVertical_1 = null;

    this.timerReset_wallVDown = null;
    this.timerReset_wallVUp = null;

    this.initialHit = true; // used for jumping/swing over water ... need a initial stop of player
  
    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // when a player is up against this tile stop the player
    var intersecTile = this.map.getTile(9,5, this.layerName);
    intersecTile.callback = function(){
        ref.player.bounceOffWall( (9 * tileWidth) );
    }

    var exitDoorTile = this.map.getTile(11,2, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // hide tiles used for water peril
    this.selectedTile_invis1 = this.map.getTile(6, 2, this.layerName); // invisible block
    this.selectedTile_invis1.alpha = 0;
    this.selectedTile_invis2 = this.map.getTile(7, 2, this.layerName); // invisible
    this.selectedTile_invis2.alpha = 0;

    // references to elements for water peril
    var yPosVineBranch = 15;
    this.vineBranch = this.game.add.sprite(6 * tileWidth - 20, yPosVineBranch, 'vine_branch');
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

     // hide bat tile for peril
    this.map.getTile(10, 4, this.layerName).alpha = 0; 
    this.map.getTile(10, 7, this.layerName).alpha = 0;

    // reference to bat element peril
    this.bat = this.game.add.sprite(10*tileWidth, 4*tileHeight, 'game_assets');
    this.bat.body.setRectangle(55, 50, 25, 50);
    this.bat.animations.add('loop', Phaser.Animation.generateFrameNames('flying_bat_', 0, 9, '', 1), 11, true);
    this.bat.play('loop');
    this.bat.scale.x = this.bat.scale.y = .8;
    this.bat.body.allowGravity = false;
    var batTween = this.game.add.tween(this.bat).to({y:7*tileHeight}, this.bat_speed, Phaser.Easing.Quintic.InOut, true, this.bat_delaySpeed, 9999, true);
    this.groupDisplay.add(this.bat); 
    
    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frame = "arthur_idol_01";
    this.idolPiece.x = 11 * tileWidth;
    this.idolPiece.y = 7 * tileHeight;
    this.groupDisplay.add(this.idolPiece);
    this.idolPiece.alpha = 1; 

    // hide idol piece
    var idolPieceTile = this.map.getTile(11, 7, this.layerName); 
    idolPieceTile.alpha = 0; 

    // first screen includes tent elements 
    this.tent = this.game.add.sprite(0,0, 'game_assets', 'tent');
    this.tent.body.allowGravity = false;
    this.groupDisplay.add(this.tent);

    // hide tiles related to moving wall panel up and down peril
    var wallTile_1_1 = this.map.getTile(4, 4, this.layerName);
    wallTile_1_1.alpha = 0;

    var wallTile_1_2 = this.map.getTile(4, 5, this.layerName);
    wallTile_1_2.alpha = 0;

   // reference to moving wall panel up and down peril
    this.movingWallVertical_1 = this.game.add.sprite(4 * tileWidth, 4 * tileHeight, 'PerilActions');
    this.movingWallVertical_1.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.movingWallVertical_1.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.movingWallVertical_1.body.allowGravity = false;
    this.movingWallVertical_1.play('up');
    this.movingWallVertical_1.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.movingWallVertical_1);

    // bounce off wall
    this.map.getTile(4, 5, this.layerName).callback = function(){
      ref.player.bounceOffWall( (4 * tileWidth) );
    };

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
    this.arrowSelectUp_ladder1.x = 7 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 0;
    this.arrowSelectDown_ladder1.x = 7 * tileWidth;
    this.arrowSelectDown_ladder1.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder1);

    this.arrowSelectUp_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder2.body.allowGravity = false;
    this.arrowSelectUp_ladder2.alpha = 0;
    this.arrowSelectUp_ladder2.x = 0;
    this.arrowSelectUp_ladder2.y = 2 * tileWidth - 10;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 0;
    this.arrowSelectDown_ladder2.x =  0;
    this.arrowSelectDown_ladder2.y =  5 * tileWidth - 20;
    this.groupDisplay.add(this.arrowSelectDown_ladder2);

    // referenced in BaseScreen
    this.getItemPlay.scale.x = 1;
    this.getItemPlay.x = 10 * tileWidth - 10;
    this.getItemPlay.y = 8 * tileHeight - 40;
    this.getItemPlay.alpha = 0;

    this.arrowSelect_GetIdol.x = 10 * tileWidth;
    this.arrowSelect_GetIdol.y = 8 * tileHeight;
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

      // physics collision for up and down ladder
      // Note: If selecter button of opposite direction is hit, show that selector button. 
      //       Move animation element based on selector position
      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder1)){
        this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 20;
        this.climbUpDown.y = this.arrowSelectUp_ladder1.y - 12;
        this.arrowSelectUp_ladder1.alpha = 1;
        this.arrowSelectUp_ladder1.inputEnabled = true;
        this.arrowSelectUp_ladder1.events.onInputDown.add(this.moveUpToNextFloor,this);
        this.isLadderFlipped = false;
      }else{
        this.arrowSelectUp_ladder1.alpha = 0;
        this.arrowSelectUp_ladder1.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder1)){
        this.climbUpDown.x = this.arrowSelectUp_ladder1.x - 20;
        this.climbUpDown.y = this.arrowSelectUp_ladder1.y - 12;
        this.arrowSelectDown_ladder1.alpha = 1;
        this.arrowSelectDown_ladder1.inputEnabled = true;
        this.arrowSelectDown_ladder1.events.onInputDown.add(this.moveDownToNextFloor,this);
        this.isLadderFlipped = false;

        // handle bat peril audio
        if(this.bat_audioPlayed === false) {
          this.playAudio('bat-squeal-flap'); // play audio of bat
          this.bat_audioPlayed = true;
        }
        
      }else{
        this.arrowSelectDown_ladder1.alpha = 0;
        this.arrowSelectDown_ladder1.inputEnabled = false;
      }

      //Second Ladder
      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder2)){
        this.climbUpDown.x = this.arrowSelectUp_ladder2.x - 20;
        this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 15;
        this.arrowSelectUp_ladder2.alpha = 1;
        this.arrowSelectUp_ladder2.inputEnabled = true;
        this.arrowSelectUp_ladder2.events.onInputDown.add(this.moveUpToNextFloor,this);
        this.isLadderFlipped = false;
      }else{
        this.arrowSelectUp_ladder2.alpha = 0;
        this.arrowSelectUp_ladder2.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder2)){
        this.climbUpDown.x = this.arrowSelectUp_ladder2.x - 20;
        this.climbUpDown.y = this.arrowSelectUp_ladder2.y - 15;
        this.arrowSelectDown_ladder2.alpha = 1;
        this.arrowSelectDown_ladder2.inputEnabled = true;
        this.arrowSelectDown_ladder2.events.onInputDown.add(this.moveDownToNextFloor,this);
        this.isLadderFlipped = false;
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
      if(this.waterBlock1Collision === true && this.waterBlock2Collision === true && this.playerFail === false){
        if(this.debug === true) logger("Water Block Hit:  this.playerFail: " + this.playerFail);
        this.waterBlock1Collision = false;
        this.waterBlock2Collision = false;
        this.player.sinkDown();
        this.initialHit = true;
        this.playAudio('water-splash'); // play audio of water splash

        this.handleFail("DW and Bud fell into the water.");
      }

      // physics collision for bat peril
      if(this.game.physics.overlap(this.player.sprite, this.bat) && this.playerFail === false){
        // Note: I have to double check the hit collision.
        var batRec = {x:this.bat.x, y:this.bat.y, width:this.bat.body.width, height:this.bat.body.height};
        if(this.doubleCheckCollisionDetection(this.player.sprite, this.bat) === false) return;

        this.player.failedCaught();
        this.handleFail("DW and Bud got caught by Bat.");
      }
  
  },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    // set position for tent element
    this.tent.x = this.startPosX - 50;
    this.tent.y = this.startPosY - 8;

    this.bat.x = 10*tileWidth;
    
    // reset water peril logic
    this.waterBlock1Collision = this.waterBlock2Collision = false;
    this.initialHit = true;
    this.vineBranch.alpha = 1;
    this.vineBranchOut.alpha = 0;
    //this.budDWJumpOnBack.alpha = 0; 

    // handle tile collision - water peril
    this.map.setTileIndexCallback(49, this.onBlockCollision, this, this.layerName);

    this.bat_audioPlayed = false; // enable audio flag for bat

    // reset Vertical wall Up/Down animation
    if(this.timerReset_WallVUp) this.timerReset_WallVUp.stop();
    if(this.timerReset_wallVDown) this.timerReset_wallVDown.stop();
    this.wallVDown(); // start wall animation
     
  },
  // inherited function - Water Swing peril
  //playerJumpOnBackHandler: function(){
  //swingOnVine: function(){
  //onBlockCollision: function(sprite, tile){ 
  
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

      this.arrowSelect_vineBranch.destroy();
      this.arrowSelect_vineBranch = null;

      this.vineBranch.destroy();
      this.vineBranch = null; 

      this.vineBranchOut.destroy();
      this.vineBranchOut = null;

      this.budDWJumpOnBack.destroy();
      this.budDWJumpOnBack = null;

      this.bat.destroy();
      this.bat = null;

      this.tent.destroy();
      this.tent = null;

      this.enabled = false;
  },
  clear: function(){
      // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent
      this.enabled = false;
  }
  
});