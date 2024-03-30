/*
 *  TempleScreen7 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Dropping Floor, Breaking floor, Moving Wall up and down
*/

var TempleScreen7 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

    this.WallVUp_anim_1 = null;
    
    this.floorBlock1Collision = false;// dropping floor into water
    this.floorBlock2Collision = false;
    this.floorEnabled = false;
    this.floorDown_openSpeed = 8000;

     // set references for breaking floor
    this.numberOfBreakFloorsEnabled = 0;
    this.breakAbleTile0Enabled = false;
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
    var intersecTile_1 = this.map.getTile(7,5, this.layerName);
    intersecTile_1.callback = function(){
        ref.player.bounceOffWall( (7 * tileWidth) );
    }

    // when a player is up against this tile stop the player
    var exitDoorTile = this.map.getTile(11,8, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "idol_bottom_left";
    this.idolPiece.x = 2*tileWidth;
    this.idolPiece.y = 5*tileHeight;
    this.groupDisplay.add(this.idolPiece); 
    this.idolPiece.alpha = 1;

    // hide idol piece
    var idolPieceTile = this.map.getTile(2, 5, this.layerName); // hide idol piece
    idolPieceTile.alpha = 0;

    // reference to dropping floor water peril
    this.floorDown = this.game.add.sprite(3 * tileWidth - 12, 9*tileHeight - 21, 'PerilActions');
    this.floorDown.animations.add('down', Phaser.Animation.generateFrameNames('movingFloor_down_', 1, 10, '', 2), 11);
    this.floorDown.animations.add('up', Phaser.Animation.generateFrameNames('movingFloor_up_', 1, 10, '', 2), 11);
    this.floorDown.body.allowGravity = false;
    this.floorDown.play('down');
    this.floorDown.alpha = 1;
    this.groupDisplay.add(this.floorDown);

    this.floorBlock1Collision = false;
    this.floorBlock2Collision = false; 

    // handle breakable tile collision - weird logic ... 
    //this.map.putTile(41, 2, 3, this.layerName);
    //this.map.putTile(41, 3, 3, this.layerName);
    //this.map.putTile(41, 4, 3, this.layerName);

    this.map.getTile(2, 3, this.layerName).alpha = 0;  
    this.map.getTile(3, 3, this.layerName).alpha = 0; 
    this.map.getTile(4, 3, this.layerName).alpha = 0;

    this.breakingTile_01 = this.game.add.sprite(2*tileWidth, 3*tileHeight, 'templeBreakingTile');
    this.breakingTile_01.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_01);
    this.breakingTile_02 = this.game.add.sprite(3*tileWidth, 3*tileHeight, 'templeBreakingTile'); 
    this.breakingTile_02.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_02);
    this.breakingTile_03 = this.game.add.sprite(4*tileWidth, 3*tileHeight, 'templeBreakingTile'); 
    this.breakingTile_03.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_03); 
   
    // Note: need this fourth title when going from right to left ... this prevent the peril result from firing took soon 
    this.breakableTile0 = this.map.getTile(1, 3, this.layerName);
    this.breakableTile0.callback = function(){
      if(ref.breakAbleTile0Enabled === false && ref.breakAbleTile1Enabled === true){
         ref.breakAbleTile0Enabled = true;
         ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1; 
      }
    }

    this.breakableTile1 = this.map.getTile(2, 3, this.layerName);
    this.breakableTile1.callback = function(){

      // handler for peril
      if(ref.numberOfBreakFloorsEnabled >= 3){
        ref.handleBrokenFloors();
      }

      var timerReset = ref.game.time.create(true);
      timerReset.add(500, function(){
        timerReset.destroy();
        //ref.map.putTile(0, 2, 3, ref.layerName);
        ref.breakingTile_01.alpha = 0;
      },this);
      timerReset.start();
      
      if(ref.breakAbleTile1Enabled === false){
        ref.playAudio('floor-crumble'); // play audio of water splash
        ref.breakAbleTile1Enabled = true;

        // handle issue when going right to left
        if(ref.breakAbleTile2Enabled === false && ref.breakAbleTile3Enabled === false){
          ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1;    
        } 
      }
    };
    
    this.breakableTile2 = this.map.getTile(3, 3, this.layerName);
    this.breakableTile2.callback = function(){
      // handler for peril
      if(ref.numberOfBreakFloorsEnabled >= 3){
        ref.handleBrokenFloors();
      }

      var timerReset = ref.game.time.create(true);
      timerReset.add(500, function(){
        timerReset.destroy();
        //ref.map.putTile(0, 3, 3, ref.layerName);
        ref.breakingTile_02.alpha = 0;
      },this);
      timerReset.start();

      if(ref.breakAbleTile2Enabled === false){
        ref.playAudio('floor-crumble'); // play audio of water splash
        ref.breakAbleTile2Enabled = true;
        ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1;
      }

    };

    this.breakableTile3 = this.map.getTile(4, 3, this.layerName);
    this.breakableTile3.callback = function(){
      logger("numberOfBreakFloorsEnabled " + ref.numberOfBreakFloorsEnabled);

      var timerReset = ref.game.time.create(true);
      timerReset.add(500, function(){
        timerReset.destroy();
        //ref.map.putTile(0, 4, 3, ref.layerName);
        ref.breakingTile_03.alpha = 0;
      },this);
      timerReset.start();

      if(ref.breakAbleTile3Enabled === false){
        ref.playAudio('floor-crumble'); // play audio of water splash
        ref.breakAbleTile3Enabled = true;
        ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1;
      }
    };

    // setup of moving wall UP AND DOWN
    this.movingWallVertical_1 = this.game.add.sprite(9 * tileWidth, 1 * tileHeight, 'PerilActions');
    this.movingWallVertical_1.animations.add('up', Phaser.Animation.generateFrameNames('up/MovingWall_Vertical_Up_', 0, 19, '', 2), 11);
    this.movingWallVertical_1.animations.add('down', Phaser.Animation.generateFrameNames('down/MovingWall_Vertical_Down_', 20, 39, '', 2), 11);
    this.movingWallVertical_1.body.allowGravity = false;
    this.movingWallVertical_1.play('down');
    this.movingWallVertical_1.body.setRectangle(55, 100, 0, 0);
    this.groupDisplay.add(this.movingWallVertical_1);

    // enable blocking
    var wallBlockage = this.map.getTile(9,2, this.layerName);
    wallBlockage.callback = function(){
       ref.player.bounceOffWall( (9 * tileWidth) );
    }
    // hide blocking wall tiles
    var wallTile_1_1 = this.map.getTile(9, 1, this.layerName);
    wallTile_1_1.alpha = 0;

    var wallTile_1_2 = this.map.getTile(9, 2, this.layerName);
    wallTile_1_2.alpha = 0;

    // re-build tile series 
    this.map.putTile(22, 3, 6, this.layerName);
    this.map.putTile(22, 4, 6, this.layerName);
  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // open panel - selector element 
    this.arrowSelect_log = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelect_log.body.allowGravity = false;
    this.arrowSelect_log.x = 2 * tileWidth;
    this.arrowSelect_log.y = 2 * tileHeight;
    this.arrowSelect_log.alpha = 0;

    // Selector elements for moving up and down ladder
    this.arrowSelectUp_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder1.body.allowGravity = false;
    this.arrowSelectUp_ladder1.alpha = 0;
    this.arrowSelectUp_ladder1.x = 8 * tileWidth;
    this.arrowSelectUp_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 1;
    this.arrowSelectDown_ladder1.x = 8 * tileWidth;
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
    this.arrowSelectUp_ladder3.x = 6 * tileWidth;
    this.arrowSelectUp_ladder3.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder3);

    this.arrowSelectDown_ladder3 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder3.body.allowGravity = false;
    this.arrowSelectDown_ladder3.alpha = 1;
    this.arrowSelectDown_ladder3.x = 6 * tileWidth;
    this.arrowSelectDown_ladder3.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder3);

    this.arrowSelectUp_ladder4 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder4.body.allowGravity = false;
    this.arrowSelectUp_ladder4.alpha = 0;
    this.arrowSelectUp_ladder4.x = 11 * tileWidth;
    this.arrowSelectUp_ladder4.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder4);

    this.arrowSelectDown_ladder4 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder4.body.allowGravity = false;
    this.arrowSelectDown_ladder4.alpha = 1;
    this.arrowSelectDown_ladder4.x = 11 * tileWidth;
    this.arrowSelectDown_ladder4.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder4); 

    // referenced in BaseScreen
    this.arrowSelect_GetIdol.x = 2 * tileWidth;
    this.arrowSelect_GetIdol.y = 5 * tileHeight;

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

      // physics collision for getting idol selector button
      if(this.game.physics.overlap(this.player.sprite, this.arrowSelect_GetIdol) && this.idolFound === false){
          this.arrowSelect_GetIdol.alpha = 1;
          this.arrowSelect_GetIdol.inputEnabled = true;
          this.arrowSelect_GetIdol.events.onInputDown.add(this.onIdolGrab,this);
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

  },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    
    // re-build tile series 
    this.map.putTile(22, 3, 6, this.layerName);
    this.map.putTile(22, 4, 6, this.layerName);

    this.breakingTile_01.alpha = 1;
    this.breakingTile_02.alpha = 1;
    this.breakingTile_03.alpha = 1;
    //this.isFloorBroken = false;

    this.numberOfBreakFloorsEnabled = 0;
    this.breakAbleTile1Enabled = false;
    this.breakAbleTile2Enabled = false;
    this.breakAbleTile3Enabled = false;
    this.breakAbleTile0Enabled = false;

    // reset Vertical wall Up/Down animation
    if(this.timerReset_WallVUp) this.timerReset_WallVUp.stop();
    if(this.timerReset_wallVDown) this.timerReset_wallVDown.stop();
    this.wallVDown(); // start wall animation

    // reset floor drop animation
    if(this.timerReset_blockOff) this.timerReset_blockOff.stop();
    if(this.timerReset_blockOn) this.timerReset_blockOn.stop();
    this.blockOn(); // start floor drop animation

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