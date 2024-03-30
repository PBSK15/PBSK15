/*
 *  JungleScreen1 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Water/Swing Peril, Dropping Floor Peril, Bat, Cage
*/

var JungleScreen1 = BaseScreen.extend({
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
    
    this.arrowSelect_cageLever = null;
    this.selectedTile_invis1 = null;
    this.selectedTile_invis2 = null;
    
    this.animJump = null;
    this.budCaged = null;
    this.cage = null;
    this.dwCaged = null;
    this.lever = null;
    this.enableCagePeril = false;
    this.leverIsOn = false;
    this.cageLeverFlipped = false;
    
    this.initialHit = true; // used for jumping/swing over water ... need a initial stop of player

    this.timerReset_blockOn = null;
    this.timerReset_blockOff = null;
    this.floorDown_openSpeed = 8000;

    this.floorBlock1Collision = false; // dropping floor into water
    this.floorBlock2Collision = false;
    this.floorEnabled = false;
    
    this.bat = null;
    this.tent = null;
  
    this.bat_audioPlayed = false;
    this.bat_speed = 2400; // milliseconds
    this.bat_delaySpeed = 4000; // milliseconds

    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // when a player is up against this tile stop the player
    var intersecTile = this.map.getTile(4,5, this.layerName);
    intersecTile.callback = function(){
        ref.player.bounceOffWall( (4 * tileWidth) );
    }

    var exitDoorTile = this.map.getTile(11,2, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // hide tiles used for water peril
    this.selectedTile_invis1 = this.map.getTile(5, 8, this.layerName); // invisible block
    this.selectedTile_invis1.alpha = 0;
    this.selectedTile_invis2 = this.map.getTile(6, 8, this.layerName); // invisible
    this.selectedTile_invis2.alpha = 0;

    // hide cage tile - used as reference to hit collision
    var selectedTile_cageEnable = this.map.getTile(8, 2, this.layerName); // invisible
    selectedTile_cageEnable.alpha = 0;

    // references to elements for water peril
    this.vineBranch = this.game.add.sprite(260, 322, 'vine_branch');
    this.vineBranch.body.velocity.x = 0;
    this.vineBranch.body.allowGravity = false;
    this.vineBranch.alpha = 1;
    this.groupDisplay.add(this.vineBranch); 

    this.vineBranchOut = this.game.add.sprite(this.vineBranch.x + tileWidth, 324, 'vine_branch_out');
    this.vineBranchOut.body.velocity.x = 0;
    this.vineBranchOut.body.allowGravity = false;
    this.vineBranchOut.alpha = 0;
    this.groupDisplay.add(this.vineBranchOut); 

    this.budDWJumpOnBack = this.game.add.sprite(this.vineBranch.x - 60, 315, 'Bud_DW_jumponback');
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
      ref.player.sprite.x = 470; /// change to non-fixed value
    };
    this.groupDisplay.add(this.budDWJumpOnBack);

    // references to elements for cage Peril
    this.budCaged = this.game.add.sprite(7 * tileWidth + 10,86, 'PerilActions');
    this.budCaged.body.allowGravity = false;
    this.budCaged.animations.add("captureStart", 
      Phaser.Animation.generateFrameNames('bud_captured_start_', 0, 7, '', 2), 11, false);
    this.budCaged.animations.add("captureEnd", 
      Phaser.Animation.generateFrameNames('bud_captured_end_', 0, 4, '', 2), 11, false);
    this.budCaged.alpha = 0;
    this.groupDisplay.add(this.budCaged);
    
    this.cage = this.game.add.sprite(7 * tileWidth,-115, 'PerilActions');
    this.cage.body.allowGravity = false;
    this.cage.animations.add("down", 
      Phaser.Animation.generateFrameNames('cage_comes_down_', 0, 7, '', 2), 11, false);
    this.cage.animations.add("up", 
      Phaser.Animation.generateFrameNames('cage_comes_up_', 0, 8, '', 2), 11, false);
    this.cage.alpha = 0;
    this.groupDisplay.add(this.cage);

    this.dwCaged = this.game.add.sprite(8 * tileWidth,93, 'PerilActions');
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

    this.lever = this.game.add.sprite(9 * tileWidth,118, 'PerilActions');
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

    // hide bat tile for peril
    this.map.getTile(0, 1, this.layerName).alpha = 0; 
    this.map.getTile(4, 1, this.layerName).alpha = 0; 

    // reference to bat element peril
    this.bat = this.game.add.sprite(4*55, 1*50, 'game_assets');
    this.bat.body.setRectangle(55, 50, 25, 50);
    this.bat.animations.add('loop', Phaser.Animation.generateFrameNames('flying_bat_', 0, 9, '', 1), 11, true);
    this.bat.play('loop');
    this.bat.scale.x = this.bat.scale.y = .8;
    this.bat.body.allowGravity = false;
    var batTween = this.game.add.tween(this.bat).to({x: 0}, this.bat_speed, Phaser.Easing.Quintic.InOut, true, this.bat_delaySpeed, 9999, true);
    this.groupDisplay.add(this.bat); 
    
    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frame = "arthur_idol_01";
    this.idolPiece.x = 0;
    this.idolPiece.y = 4*tileHeight;
    this.groupDisplay.add(this.idolPiece);
    this.idolPiece.alpha = 1; 

    // hide idol piece
    var idolPieceTile = this.map.getTile(0, 4, this.layerName); 
    idolPieceTile.alpha = 0;

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(7 * tileWidth - 12, 6*tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    // first screen includes tent elements 
    this.tent = this.game.add.sprite(0,0, 'game_assets', 'tent');
    this.tent.body.allowGravity = false;
    this.groupDisplay.add(this.tent);

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
    this.arrowSelectUp_ladder1.x = 11 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 0;
    this.arrowSelectDown_ladder1.x = 11 * tileWidth;
    this.arrowSelectDown_ladder1.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder1);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 0;
    this.arrowSelectDown_ladder2.x =  5 * tileWidth;
    this.arrowSelectDown_ladder2.y =  5 * tileWidth - 20;
    this.groupDisplay.add(this.arrowSelectDown_ladder2);

    this.arrowSelectUp_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder2.body.allowGravity = false;
    this.arrowSelectUp_ladder2.alpha = 0;
    this.arrowSelectUp_ladder2.x = 5 * tileWidth;
    this.arrowSelectUp_ladder2.y = 2 * tileWidth - 10;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder3 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder3.body.allowGravity = false;
    this.arrowSelectDown_ladder3.alpha = 0;
    this.arrowSelectDown_ladder3.x =  3 * tileWidth;
    this.arrowSelectDown_ladder3.y =  5 * tileWidth - 20;
    this.groupDisplay.add(this.arrowSelectDown_ladder3);

    this.arrowSelectUp_ladder3 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder3.body.allowGravity = false;
    this.arrowSelectUp_ladder3.alpha = 0;
    this.arrowSelectUp_ladder3.x = 3 * tileWidth;
    this.arrowSelectUp_ladder3.y = 2 * tileWidth - 10;
    this.groupDisplay.add(this.arrowSelectUp_ladder3);

    // Selector element for Cage peril
    this.arrowSelect_cageLever = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelect_cageLever.body.allowGravity = false;
    this.arrowSelect_cageLever.alpha = 0;
    this.arrowSelect_cageLever.x = 9 * tileWidth;
    this.arrowSelect_cageLever.y = 2 * tileHeight;

    // referenced in BaseScreen
    this.getItemPlay.x = 120;
    this.getItemPlay.y = 5 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 1 * tileWidth;
    this.arrowSelect_GetIdol.y = 5 * tileHeight;

    // handle tile collision - for cage, floor drop and water peril
    this.map.setTileIndexCallback(35, this.onEnableCageHandler, this, this.layerName);
    this.map.setTileIndexCallback(49, this.onBlockCollision, this, this.layerName);

    // short time blocker - stopPlayerOnce
    this.map.getTile(8, 5, this.layerName).alpha = 0;
    this.map.getTile(9, 5, this.layerName).alpha = 0; 
    this.stopPlayerOnceXPos = (9 * tileWidth); // x coordinates value 
    this.map.setTileIndexCallback(50, this.stopPlayerOnce, this, this.layerName);

    this.map.setTileIndexCallback([54,55], this.onWaterFloorCollision, this, this.layerName);

    //this.map.setTileIndexCallback([56,57], this.handleWallCollision, this, this.layerName);
  },
  render: function(){
  	if(this.debug === true) {
        this.game.debug.renderSpriteBody(this.idolPiece);
        this.game.debug.renderSpriteBody(this.bat);
    }
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
        
        // handle bat peril audio
        if(this.bat_audioPlayed === false) {
          this.playAudio('bat-squeal-flap');
          this.bat_audioPlayed = true;
        }
      }else{
        this.arrowSelectDown_ladder2.alpha = 0;
        this.arrowSelectDown_ladder2.inputEnabled = false;
      }

      //Third Ladder
      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectDown_ladder3)){
        this.climbUpDown.x = this.arrowSelectUp_ladder3.x - (20) + 85;
        this.climbUpDown.y = this.arrowSelectUp_ladder3.y - 15;
        this.arrowSelectUp_ladder3.alpha = 1;
        this.arrowSelectUp_ladder3.inputEnabled = true;
        this.arrowSelectUp_ladder3.events.onInputDown.add(this.moveUpToNextFloor,this);
        this.isLadderFlipped = true;
      }else{
        this.arrowSelectUp_ladder3.alpha = 0;
        this.arrowSelectUp_ladder3.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder3)){
        this.climbUpDown.x = this.arrowSelectUp_ladder3.x - (20) + 85;
        this.climbUpDown.y = this.arrowSelectUp_ladder3.y - 15;
        this.arrowSelectDown_ladder3.alpha = 1;
        this.arrowSelectDown_ladder3.inputEnabled = true;
        this.arrowSelectDown_ladder3.events.onInputDown.add(this.moveDownToNextFloor,this);
        this.isLadderFlipped = true;
      }else{
        this.arrowSelectDown_ladder3.alpha = 0;
        this.arrowSelectDown_ladder3.inputEnabled = false;
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

      // logic for floor drop water peril - fail
      //if((this.floorBlock1Collision === true || this.floorBlock2Collision === true) && this.playerFail === false){
      if((this.floorBlock1Collision === true || this.floorBlock2Collision === true) && this.playerFail === false){  
        if(this.debug === true) logger("Floor Block Hit:  this.playerFail: " + this.playerFail);
        this.floorBlock1Collision = false;
        this.floorBlock2Collision = false;
        this.initialHit = true;
        this.playAudio('water-splash');
        //this.player.sprite.x = (8 * tileWidth) + (tileWidth/2); // far left water drop tile + half title width
        //this.player.sprite.y = this.player.sprite.y + 40; 
        this.player.failedCaught();
        this.handleFail("DW and Bud fell through floors");
      }

      // physics collision for bat peril
      if(this.game.physics.overlap(this.player.sprite, this.bat) && this.playerFail === false){
        this.player.failedCaught();
        this.handleFail("DW and Bud got caught by Bat.");
      }
        
  },
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

    // set position for tent element
    this.tent.x = this.startPosX - 50;
    this.tent.y = this.startPosY - 8;
    
    // reset logic flags for dropping floor into water
    this.floorBlock1Collision = this.floorBlock2Collision = false;
    this.floorEnabled = false;

    // reset water peril logic
    this.waterBlock1Collision = this.waterBlock2Collision = false;
    this.initialHit = true;
    this.vineBranch.alpha = 1;
    this.vineBranchOut.alpha = 0;
    this.budDWJumpOnBack.alpha = 0; 

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    
    // restart water peril animation
    this.blockOn(); // restart floor drop to water

    this.bat_audioPlayed = false; // enable audio flag for bat
  },
  // inherited functions - Cage peril
  // onEnableCageHandler: function(){
  // flipLever: function(){ 

  // inherited function - Water Swing peril
  // playerJumpOnBackHandler: function(){
  // swingOnVine: function(){
  // onBlockCollision: function(sprite, tile){  

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
  
  /* inherited function from parent object */
  // onIdolMantle: function(){ },
  // onExitCollision: function(sprite, tile){ },
  
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

      this.animJump.destroy();
      this.animJump = null;

      this.budCaged.destroy();
      this.budCaged = null;

      this.cage.destroy();
      this.cage = null;

      this.dwCaged.destroy();
      this.dwCaged = null;

      this.lever.destroy();
      this.lever = null;

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