/*
 *  TempleScreen6 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Breaking floor, Cage
*/

var TempleScreen6 = BaseScreen.extend({
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
    this.breakAbleTile1Enabled = false;
    this.breakAbleTile2Enabled = false;
    this.breakAbleTile3Enabled = false;

    this.breakingTile_01 = null;
    this.breakingTile_02 = null;
    this.breakingTile_03 = null;
  
    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

    // when a player is up against this tile stop the player
    var intersecTile_1 = this.map.getTile(6,8, this.layerName);
    intersecTile_1.callback = function(){
        ref.player.bounceOffWall( (6 * tileWidth) );
    }

    var intersecTile_2 = this.map.getTile(6,5, this.layerName);
    intersecTile_2.callback = function(){
        ref.player.bounceOffWall( (6 * tileWidth) );
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

    //this.map.putTile(41, 3, 3, this.layerName);
    // this.map.putTile(41, 4, 3, this.layerName);
    // this.map.putTile(41, 5, 3, this.layerName);
    this.map.getTile(3, 3, this.layerName).alpha = 0;  
    this.map.getTile(4, 3, this.layerName).alpha = 0; 
    this.map.getTile(5, 3, this.layerName).alpha = 0;

    this.breakingTile_01 = this.game.add.sprite(3*tileWidth, 3*tileHeight, 'templeBreakingTile');
    this.breakingTile_01.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_01);
    this.breakingTile_02 = this.game.add.sprite(4*tileWidth, 3*tileHeight, 'templeBreakingTile'); 
    this.breakingTile_02.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_02);
    this.breakingTile_03 = this.game.add.sprite(5*tileWidth, 3*tileHeight, 'templeBreakingTile'); 
    this.breakingTile_03.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_03); 

    // handle breakable tile collision
    this.breakAbleTile1Enabled = false;
    this.breakableTile1 = this.map.getTile(3, 3, this.layerName);
    this.breakableTile1.callback = function(){
      //ref.map.putTile(0, 3, 3, ref.layerName);
      ref.breakingTile_01.alpha = 0;

      if(ref.breakAbleTile1Enabled === false) {
        ref.breakAbleTile1Enabled = true;
        ref.playAudio('floor-crumble'); // play audio of water splash
      }

    };
    
    this.breakAbleTile2Enabled = false;
    this.breakableTile2 = this.map.getTile(4, 3, this.layerName);
    this.breakableTile2.callback = function(){
      //ref.map.putTile(0, 4, 3, ref.layerName);
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
    this.breakableTile3 = this.map.getTile(5, 3, this.layerName);
    this.breakableTile3.callback = function(){
      //ref.map.putTile(0, 5, 3, ref.layerName);
      ref.breakingTile_03.alpha = 0;

      if(ref.breakAbleTile3Enabled === false) {
        ref.breakAbleTile3Enabled = true;
        ref.playAudio('floor-crumble'); // play audio of water splash
      }
      ref.isFloorBroken = true;
    };

    // references to elements for cage Peril
    var selectedTile_cageEnable = this.map.getTile(3, 5, this.layerName); // invisible
    selectedTile_cageEnable.alpha = 0;

    this.budCaged = this.game.add.sprite(3 * tileWidth + 10, 5 * tileHeight - 12, 'PerilActions');
    this.budCaged.body.allowGravity = false;
    this.budCaged.animations.add("captureStart", 
      Phaser.Animation.generateFrameNames('bud_captured_start_', 0, 7, '', 2), 11, false);
    this.budCaged.animations.add("captureEnd", 
      Phaser.Animation.generateFrameNames('bud_captured_end_', 0, 4, '', 2), 11, false);
    this.budCaged.alpha = 0;
    this.groupDisplay.add(this.budCaged);
    
    this.cage = this.game.add.sprite(3 * tileWidth,1 * tileHeight - 14, 'PerilActions');
    this.cage.body.allowGravity = false;
    this.cage.animations.add("down", 
      Phaser.Animation.generateFrameNames('cage_comes_down_', 0, 7, '', 2), 11, false);
    this.cage.animations.add("up", 
      Phaser.Animation.generateFrameNames('cage_comes_up_', 0, 8, '', 2), 11, false);
    this.cage.alpha = 0;
    this.groupDisplay.add(this.cage);

    this.dwCaged = this.game.add.sprite(2 * tileWidth, 5 * tileHeight - 8, 'PerilActions');
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

    this.lever = this.game.add.sprite(1 * tileWidth + 5, 5 * tileHeight +19, 'PerilActions');
    this.lever.body.allowGravity = false;
    this.lever.animations.add("off", 
      Phaser.Animation.generateFrameNames('lever_', 0, 0, '', 2), 11, false);
    this.lever.animations.add("turnOn", 
      Phaser.Animation.generateFrameNames('lever_', 0, 9, '', 2), 11, false);     
    this.lever.animations.add("on", 
      Phaser.Animation.generateFrameNames('lever_', 9, 9, '', 2), 11, false);   
    this.lever.alpha = 0;
    this.groupDisplay.add(this.lever);

    this.map.getTile(1, 5, this.layerName).alpha = 0; // hide tile for lever
    //this.map.getTile(9, 2, this.layerName).alpha = 0; // hide tile for idol piece

    // re-build tile series 
    this.map.putTile(22, 7, 3, this.layerName);
    // this.map.putTile(41, 3, 3, this.layerName);
    // this.map.putTile(41, 4, 3, this.layerName);
    // this.map.putTile(41, 5, 3, this.layerName);

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // Selector elements for moving up and down ladder
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
    this.arrowSelectUp_ladder3.x = 9 * tileWidth;
    this.arrowSelectUp_ladder3.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder3);

    this.arrowSelectDown_ladder3 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder3.body.allowGravity = false;
    this.arrowSelectDown_ladder3.alpha = 1;
    this.arrowSelectDown_ladder3.x = 9 * tileWidth;
    this.arrowSelectDown_ladder3.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder3);

    this.arrowSelectUp_ladder4 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder4.body.allowGravity = false;
    this.arrowSelectUp_ladder4.alpha = 0;
    this.arrowSelectUp_ladder4.x = 7 * tileWidth;
    this.arrowSelectUp_ladder4.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder4);

    this.arrowSelectDown_ladder4 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder4.body.allowGravity = false;
    this.arrowSelectDown_ladder4.alpha = 1;
    this.arrowSelectDown_ladder4.x = 7 * tileWidth;
    this.arrowSelectDown_ladder4.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder4); 

    // Selector element for Cage peril
    this.arrowSelect_cageLever = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelect_cageLever.body.allowGravity = false;
    this.arrowSelect_cageLever.alpha = 0;
    this.arrowSelect_cageLever.x = 1 * tileWidth;
    this.arrowSelect_cageLever.y = 5 * tileHeight;

    // referenced in BaseScreen
    this.getItemPlay.scale.x = 1;
    this.getItemPlay.x = 10 * tileWidth;
    this.getItemPlay.y = 8 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 10 * tileWidth;
    this.arrowSelect_GetIdol.y = 8 * tileHeight;
    
    // handle tile collision - for cage peril
    this.map.setTileIndexCallback(35, this.onEnableCageHandler, this, this.layerName);

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
        this.climbUpDown.x = (this.arrowSelectUp_ladder4.x - 20) + 10;
        this.climbUpDown.y = this.arrowSelectUp_ladder4.y - 12;

        this.arrowSelectUp_ladder4.alpha = 1;
        this.arrowSelectUp_ladder4.inputEnabled = true;
        this.isLadderFlipped = false;
        this.arrowSelectUp_ladder4.events.onInputDown.add(this.moveUpToNextFloor,this);
      }else{
        this.arrowSelectUp_ladder4.alpha = 0;
        this.arrowSelectUp_ladder4.inputEnabled = false;
      }

      if(this.game.physics.overlap(this.player.sprite, this.arrowSelectUp_ladder4)){
        this.climbUpDown.x = (this.arrowSelectUp_ladder4.x - 20) + 10;
        this.climbUpDown.y = this.arrowSelectUp_ladder4.y - 12;

        this.arrowSelectDown_ladder4.alpha = 1;
        this.arrowSelectDown_ladder4.inputEnabled = true;
        this.isLadderFlipped = false;
        this.arrowSelectDown_ladder4.events.onInputDown.add(this.moveDownToNextFloor,this);
      }else{
        this.arrowSelectDown_ladder4.alpha = 0;
        this.arrowSelectDown_ladder4.inputEnabled = false;
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

  },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    // reset cage if bud is trapped and dw hit a peril 
    if(this.enableCagePeril === true && this.cageLeverFlipped === false){
        this.resetCagePeril();
    }

    // re-build tile series 
    this.map.putTile(22, 7, 3, this.layerName);
    // this.map.putTile(41, 3, 3, this.layerName);
    // this.map.putTile(41, 4, 3, this.layerName);
    // this.map.putTile(41, 5, 3, this.layerName);
    this.breakingTile_01.alpha = 1;
    this.breakingTile_02.alpha = 1;
    this.breakingTile_03.alpha = 1;
    this.isFloorBroken = false;
    this.breakAbleTile1Enabled = false;
    this.breakAbleTile2Enabled = false;
    this.breakAbleTile3Enabled = false;

  },
  
  // inherited functions - Cage peril
  // onEnableCageHandler: function(){
  // flipLever: function(){ 

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

     this.breakingTile_01.destroy();
     this.breakingTile_01 = null;
     this.breakingTile_02.destroy();
     this.breakingTile_02 = null;
     this.breakingTile_03.destroy();
     this.breakingTile_03 = null;

      this.enabled = false;
  },
  clear: function(){
       // not really "destroying" the object - really just disabling the display object 
      this._super(); // call destroy from parent
      this.enabled = false;
  }
  
});