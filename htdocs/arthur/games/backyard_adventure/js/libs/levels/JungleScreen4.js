/*
 *  JungleScreen4 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
 *    Perils: Water/Swing Peril, Breaking floor
*/

var JungleScreen4 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 100;
    this.startPosY = 90;

    // set references to elements, boolean flags or animations
    this.arrowSelect_vineBranch = null;
    this.vineBranch = null; 
    this.vineBranchOut = null;
    this.budDWJumpOnBack = null;
    this.waterBlock1Collision = false;
    this.waterBlock2Collision = false;

    this.initialHit = true; // used for jumping/swing over water ... need a initial stop of player

    // set references for breaking floor
    this.numberOfBreakFloorsEnabled = 0;
    this.breakAbleTile0Enabled = false;
    this.breakAbleTile1Enabled = false;
    this.breakAbleTile2Enabled = false;
    this.breakAbleTile3Enabled = false;
    this.breakAbleTile4Enabled = false;

    this.breakableTile0 = null;
    this.breakableTile1 = null;
    this.breakableTile2 = null;
    this.breakableTile3 = null;
    this.breakableTile4 = null;

    this.breakingTile_01 = null;
    this.breakingTile_02 = null;
    this.breakingTile_03 = null;

    this.debug = true;
    
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class
    
    // when a player is up against this tile stop the player
    var exitDoorTile = this.map.getTile(11,8, this.layerName);
    exitDoorTile.callback = function(){
        ref.player.bounceOffWall( (11 * tileWidth) );
    }

    // bounce dividing wall 
    this.map.getTile(3, 5, this.layerName).callback = function(){
      ref.player.bounceOffWall( (3 * tileWidth) );
    };

    // hide tiles used for water peril
    this.selectedTile_invis1 = this.map.getTile(5, 8, this.layerName); // invisible block
    this.selectedTile_invis1.alpha = 0;
    this.selectedTile_invis2 = this.map.getTile(6, 8, this.layerName); // invisible
    this.selectedTile_invis2.alpha = 0;

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

    // reference to idol element, updated to set idol in setScreen function 
    this.idolPiece.frameName = "arthur_idol_02";
    this.idolPiece.x = 9 * tileWidth;
    this.idolPiece.y = 2 * tileHeight;
    this.groupDisplay.add(this.idolPiece);
    this.idolPiece.alpha = 1; 

    // hide idol piece
    this.map.getTile(9, 2, this.layerName).alpha = 0; 

    // handle breakable tile collision - weird logic ...
    
    // re-build tile series
    this.map.putTile(1, 5, 3, this.layerName);
    // this.map.putTile(40, 6, 3, this.layerName);
    // this.map.putTile(40, 7, 3, this.layerName);
    // this.map.putTile(40, 8, 3, this.layerName);

    this.map.getTile(6, 3, this.layerName).alpha = 0;  
    this.map.getTile(7, 3, this.layerName).alpha = 0; 
    this.map.getTile(8, 3, this.layerName).alpha = 0;

    this.map.putTile(1, 7, 6, this.layerName);
    this.map.putTile(1, 8, 6, this.layerName);
    this.map.putTile(1, 9, 6, this.layerName);

    this.breakingTile_01 = this.game.add.sprite(6*tileWidth, 3*tileHeight, 'jungleBreakingTile');
    this.breakingTile_01.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_01);
    this.breakingTile_02 = this.game.add.sprite(7*tileWidth, 3*tileHeight, 'jungleBreakingTile'); 
    this.breakingTile_02.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_02);
    this.breakingTile_03 = this.game.add.sprite(8*tileWidth, 3*tileHeight, 'jungleBreakingTile'); 
    this.breakingTile_03.body.allowGravity = false;
    this.groupDisplay.add(this.breakingTile_03); 

    // need this fourth title when going from right to left ... this prevent the peril result from firing took soon
    this.breakableTile0 = this.map.getTile(5, 3, this.layerName);
    this.breakableTile0.callback = function(){
      if(ref.breakAbleTile0Enabled === false && ref.breakAbleTile1Enabled === true){
         ref.breakAbleTile0Enabled = true;
         ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1; 
      }
    }

    this.breakableTile1 = this.map.getTile(6, 3, this.layerName);
    this.breakableTile1.callback = function(){
      
      // handler for peril
      if(ref.numberOfBreakFloorsEnabled >= 3){
        ref.handleBrokenFloors();
      }
      
      var timerReset = ref.game.time.create(true);
      timerReset.add(500, function(){
        timerReset.destroy();
        //ref.map.putTile(0, 6, 3, ref.layerName);
        ref.breakingTile_01.alpha = 0;
      },this);
      timerReset.start();
      
      if(ref.breakAbleTile1Enabled === false){
        ref.playAudio('floor-crumble'); // play audio of crumbling floor
        ref.breakAbleTile1Enabled = true;

        // handle issue when going right to left
        if(ref.breakAbleTile2Enabled === false && ref.breakAbleTile3Enabled === false){
          ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1;    
        }
        
      }

    };
    
    this.breakableTile2 = this.map.getTile(7, 3, this.layerName);
    this.breakableTile2.callback = function(){
      // handler for peril
      if(ref.numberOfBreakFloorsEnabled >= 3){
        ref.handleBrokenFloors();
      }

      var timerReset = ref.game.time.create(true);
      timerReset.add(500, function(){
        timerReset.destroy();
        //ref.map.putTile(0, 7, 3, ref.layerName);
        ref.breakingTile_02.alpha = 0;
      },this);
      timerReset.start();

      if(ref.breakAbleTile2Enabled === false){
        ref.playAudio('floor-crumble'); // play audio of crumbling floor
        ref.breakAbleTile2Enabled = true;
        ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1;
      }
    };
    
    this.breakableTile3 = this.map.getTile(8, 3, this.layerName);
    this.breakableTile3.callback = function(){
      logger("numberOfBreakFloorsEnabled " + ref.numberOfBreakFloorsEnabled);

      var timerReset = ref.game.time.create(true);
      timerReset.add(500, function(){
        timerReset.destroy();
        //ref.map.putTile(0, 8, 3, ref.layerName);
        ref.breakingTile_03.alpha = 0;
      },this);
      timerReset.start();

      if(ref.breakAbleTile3Enabled === false){
        ref.playAudio('floor-crumble'); // play audio of crumbling floor
        ref.breakAbleTile3Enabled = true;
        ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1;
      }
 
    };

    this.breakableTile4 = this.map.getTile(9, 3, this.layerName);
    this.breakableTile4.callback = function(){
      if(ref.breakAbleTile4Enabled === false && ref.breakAbleTile3Enabled === true){
         ref.breakAbleTile4Enabled = true;
         ref.numberOfBreakFloorsEnabled = ref.numberOfBreakFloorsEnabled + 1; 
      }
    }

  },
  // referenced in BaseScreen
  //handleBrokenFloors: function(){
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
    this.arrowSelectUp_ladder1.x = 2 * tileWidth;
    this.arrowSelectUp_ladder1.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder1);

    this.arrowSelectDown_ladder1 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder1.body.allowGravity = false;
    this.arrowSelectDown_ladder1.alpha = 0;
    this.arrowSelectDown_ladder1.x = 2 * tileWidth;
    this.arrowSelectDown_ladder1.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder1);

    this.arrowSelectUp_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelectUp_ladder2.body.allowGravity = false;
    this.arrowSelectUp_ladder2.alpha = 0;
    this.arrowSelectUp_ladder2.x = 4 * tileWidth;
    this.arrowSelectUp_ladder2.y = 2 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder2);

    this.arrowSelectDown_ladder2 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder2.body.allowGravity = false;
    this.arrowSelectDown_ladder2.alpha = 0;
    this.arrowSelectDown_ladder2.x = 4 * tileWidth;
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
    this.arrowSelectUp_ladder4.x = 0;
    this.arrowSelectUp_ladder4.y = 5 * tileHeight;
    this.groupDisplay.add(this.arrowSelectUp_ladder4);

    this.arrowSelectDown_ladder4 = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_down');
    this.arrowSelectDown_ladder4.body.allowGravity = false;
    this.arrowSelectDown_ladder4.alpha = 1;
    this.arrowSelectDown_ladder4.x = 0 * tileWidth;
    this.arrowSelectDown_ladder4.y = 8 * tileHeight;
    this.groupDisplay.add(this.arrowSelectDown_ladder4); 

    // referenced in BaseScreen
    this.arrowSelect_GetIdol.x = 9 * tileWidth;
    this.arrowSelect_GetIdol.y = 2 * tileHeight;
    

  },
  render: function(){
  	//this.game.debug.renderSpriteBody(this.player.sprite);
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
      this.climbUpDown.x = (this.arrowSelectUp_ladder1.x - 20) + 85;;
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
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 20) 
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
      this.climbUpDown.x = (this.arrowSelectUp_ladder2.x - 20) 
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
    this.waterBlock1Collision = this.waterBlock2Collision = false;

    // handle tile collision - water peril
    this.map.setTileIndexCallback(49, this.onBlockCollision, this, this.layerName);
 
    this.vineBranch.alpha = 1;
    this.vineBranchOut.alpha = 0;
    this.budDWJumpOnBack.alpha = 0;   

    // re-build tile series
    this.map.putTile(1, 5, 3, this.layerName);
    // this.map.putTile(40, 6, 3, this.layerName);
    // this.map.putTile(40, 7, 3, this.layerName);
    // this.map.putTile(40, 8, 3, this.layerName);

    this.breakingTile_01.alpha = 1;
    this.breakingTile_02.alpha = 1;
    this.breakingTile_03.alpha = 1; 

    this.map.putTile(1, 7, 6, this.layerName);
    this.map.putTile(1, 8, 6, this.layerName);
    this.map.putTile(1, 9, 6, this.layerName);
    
    // logic flags for broken floor
    //this.isFloorBroken = false;
    //this.isFloorBroken_b = false;

    //this.map.setCollision([41], true, this.layerName);
    this.numberOfBreakFloorsEnabled = 0;
    this.breakAbleTile1Enabled = false;
    this.breakAbleTile2Enabled = false;
    this.breakAbleTile3Enabled = false;
    this.breakAbleTile4Enabled = false;
    this.breakAbleTile0Enabled = false;

  },
  // inherited function - Water Swing peril
  //playerJumpOnBackHandler: function(){
  //swingOnVine: function(){
  //onBlockCollision: function(sprite, tile){  

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

      this.arrowSelect_vineBranch.destroy();
      this.arrowSelect_vineBranch = null;

      this.vineBranch.destroy();
      this.vineBranch = null; 

      this.vineBranchOut.destroy();
      this.vineBranchOut = null;

      this.budDWJumpOnBack.destroy();
      this.budDWJumpOnBack = null;

      this.breakableTile0.destroy();
      this.breakableTile0 = null;
      this.breakableTile1.destroy();
      this.breakableTile1 = null;
      this.breakableTile2.destroy();
      this.breakableTile2 = null;
      this.breakableTile3.destroy();
      this.breakableTile3 = null;
      this.breakableTile4.destroy();
      this.breakableTile4 = null;

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