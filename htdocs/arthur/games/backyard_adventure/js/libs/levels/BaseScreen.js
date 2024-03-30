/*
 *  BaseScreen - Parent Object to Screen Levels
*/

var BaseScreen = Class.extend({
  init: function(game){
    // Common variables used within Screen level objects
    this.debug = true;
  	this.ref = this; // Reference of THIS
    this.game = game; // reference of game object
    this.layer = null; // Reference of Tile Layer
    this.map = null; // Reference of Tile Map
    this.layerName = "" // reference of Tile layer name
    this.startPosX = 0; // X Position of player at start
    this.startPosY = 0; // Y Position of player at start
    this.player = null; // Reference of Player Object
    this.enabled = false; // Flag for enable level - used to stop control nav
    this.playerFail = false; // Flag for player failure - prevent collision loops when reached

    this.tileWidth = 55; // width of tile
    this.tileHeight = 50; // height of tile

    // Reference to arrow selection to move up and down ladders
    this.arrowSelectDown_ladder1 = null; 
    this.arrowSelectUp_ladder1 = null;
    this.arrowSelectDown_ladder2 = null;
    this.arrowSelectUp_ladder2 = null;
    this.arrowSelectDown_ladder3 = null;
    this.arrowSelectUp_ladder3 = null;
    this.arrowSelectDown_ladder4 = null;
    this.arrowSelectUp_ladder4 = null;

    this.climbUpDown = null; // Reference to Climb Up and Down Animation Object
    this.climbUpDownLong = null; // reference to Longer climb Up and down Object // created as needed

    this.idolPiece = null; // Reference to Idol piece Object
    this.isLadderFlipped = false; // flag for animation vertical flipped
    this.idolFound = false; // flag for when idol has been taken/found

    this.getItemPlay = null;// reference to getting idol piece animation

    this.arrowSelect_GetIdol = null; // reference to arrow selection for getting piece action

    this.groupDisplay = null; // Main Display Group

    this.UpDownYValue = 150; // reference to value used for moving up and down floors - amount to move up or down

    this.movingWallVert_openSpeed = 5000; // speed of wall moving - milliseconds
    this.floorDown_openSpeed = 8000; // speed of floor moving down - milliseconds

    this.floorDown = null; //dropping floor water peril sprite
    this.floorDown_2 = null;

    this.movingWallVertical_1 = null;
    this.movingWallVertical_2 = null;

    this.stopPlayerOnceFlag = true;
    this.stopPlayerOnceXPos = 0;

    this.timerReset_blockOn = null;
    this.timerReset_blockOff = null;

  },
  create: function(layerName, map){
    // create function - create tile and common setup elements - Group Display, idol element, audio 
    // Note: This function is inherited or can be overwritten
    this.map = map;
    this.layerName = layerName;
    this.layer = map.createLayer(layerName);

    this.groupDisplay = this.game.add.group(); /// group container for displays that will be part of foreground

    this.idolPiece = this.game.add.sprite(0, 0, 'game_assets', 'arthur_idol_01');
    this.idolPiece.body.allowGravity = false;
    this.idolPiece.alpha = 0;
  },
  postcreate: function(){
    // set elements after inital creation - helpful in certain situations where you need elements on top  
    // Note: This function is inherited or can be overwritten

    // common animations and handlers
    this.climbUpDown = this.game.add.sprite(0, 0, 'Bud_DW_Actions');
    this.climbUpDown.body.allowGravity = false;
    this.climbUpDown.animations.add("climbUp", Phaser.Animation.generateFrameNames('BudDW_Climbs_Up_', 0, 15, '', 2), 11, false);
    this.climbUpDown.animations.add("climbDown", Phaser.Animation.generateFrameNames('BudDW_Climbs_Down_', 0, 15, '', 2), 11, false);
    this.climbUpDown.alpha = 0;
    this.groupDisplay.add(this.climbUpDown);

    this.getItemPlay = this.game.add.sprite(0, 0, 'Bud_DW_Actions');
    this.getItemPlay.body.allowGravity = false;
    this.getItemPlay.animations.add("ANIM_GET_ITEM", 
        Phaser.Animation.generateFrameNames('Bud_DW_get_item_', 0, 25, '', 2), 11, false);
    this.getItemPlay.alpha = 0;
    this.getItemPlay.scale.x = -1;
    this.groupDisplay.add(this.getItemPlay);

    this.arrowSelect_GetIdol = this.game.add.sprite(0, 0, 'game_assets', 'arrow_select_up');
    this.arrowSelect_GetIdol.body.allowGravity = false;
    this.arrowSelect_GetIdol.alpha = 0;

    this.map.setCollisionByExclusion(tilesToIgnore, true, this.layerName);
    this.map.setTileIndexCallback(6, this.onExitCollision, this, this.layerName); // handle exit collision
    this.map.setTileIndexCallback(8, this.handleWallCollision, this, this.layerName); // handle idolMantle collision
    
  },
  handleWallCollision: function(){
      if(this.debug === true) logger("handleWallCollision");
      this.player.stop();
  },
  render: function(){
  	// Note: This function is inherited or can be overwritten
  },
  update: function(){
  	// Note: This function is inherited or can be overwritten
  },
  setPlayer: function(player){
    // set reference to player
    this.player = player;
  },
  setScreen: function(idolPieceName){
    // screen setup function - set tile and display
    // Note: This function is inherited or can be overwritten

    var ref = this.ref; // reference to class
    
    this.idolPiece.frameName = idolPieceName; // set correct frame reference to idol
    if(this.debug === true) logger("idolPieceName " + this.idolPiece.frameName);

    // player setup
    this.player.sprite.x = this.startPosX;
    this.player.sprite.y = this.startPosY;
    this.player.whoIsWalking = this.player.WALKING_BUD_DW;
    this.player.changeIdleState();
    this.player.enablePlayer = false; 
    this.player.sprite.scale.x = 1;
    this.player.stop();
    this.layer.resizeWorld();

    var isTimerEnded = false;

    var timerStart = this.game.time.create(true);
    timerStart.add(1000, function(){
      if(isTimerEnded === false){
        //logger("Fired setscreen");
        isTimerEnded = true;
        ref.player.enablePlayer = true; 
        ref.playerFail = false; // reset playfail flag
        timerStart.destroy();
      }
    },this);
    timerStart.start();

    ref.enabled = true; // enable screen
    
    // get correct thought bubble
    var thoughtBubbleIndex = 0;

    switch(idolPieceName){
      case "arthur_idol_01":
        thoughtBubbleIndex = 0; 
      break;

      case "arthur_idol_02":
        thoughtBubbleIndex = 1; 
      break;

      case "binky_idol_01":
        thoughtBubbleIndex = 3; 
      break;

      case "binky_idol_02":
        thoughtBubbleIndex = 2; 
      break;

      case "dw_idol_01":
        thoughtBubbleIndex = 6; 
      break;

      case "dw_idol_02":
        thoughtBubbleIndex = 7; 
      break;
   
      case "bud_idol_01":
        thoughtBubbleIndex = 5; 
      break;

      case "bud_idol_02":
        thoughtBubbleIndex = 4; 
      break;

      case "idol_bottom_right":
        thoughtBubbleIndex = 9; 
      break;

      case "idol_bottom_left":
        thoughtBubbleIndex = 8; 
      break;
  
    }

    // display thought bubble depending on whether the idol piece was found
    if(this.idolFound == true){
      this.player.getThoughtBubble(10, true);
    }else{
      this.player.getThoughtBubble(thoughtBubbleIndex, true);
    }

    // flag boolean for stopPlayerOnce
    this.stopPlayerOnceFlag = true;

  },
  // handler for broken floor peril
  handleBrokenFloors: function(){
    if(this.debug) logger("Fallen down");
    this.initialHit = true;
    this.player.failedCaught();
    this.handleFail("DW and Bud fell down");
  },
  handleFail: function(failMessage){
    // handler for fail
    var ref = this.ref; // reference to class

    if(this.climbUpDown) this.climbUpDown.alpha = 0;
    if(this.climbUpDownLong) this.climbUpDownLong.alpha = 0;

    this.playerFail = true;
    this.player.enablePlayer = false; 
    this.player.stop();
    var timerStart = ref.game.time.create(true);
    timerStart.add(2000, function(){ 
      ref.playerFailed(failMessage);
      timerStart.destroy();
    },this);
    timerStart.start();
  },
  onIdolMantle: function(){
    // handle animation complete - when player gets idol from mantle

    if(this.idolFound === true) return; // if idol was already found do not continue

    var thisRef = this; // reference to this of class
    // reference animation
    var anim = this.getItemPlay.animations.play("ANIM_GET_ITEM");
    this.getItemPlay.alpha = 1;

    this.arrowSelect_GetIdol.alpha = 0;

    // stop player in current state
    this.player.stop();
    this.player.display(false);
    this.player.enablePlayer = false;
    
    this.game.add.tween(thisRef.idolPiece).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 500);

    // play audio for getting idol piece - time for grab
    var timerAudio_1 = this.game.time.create(true);
    timerAudio_1.add(500, function(){
       timerAudio_1.destroy(); 
       thisRef.playAudio('got-the-idol');
    });
    timerAudio_1.start();

    if(anim){
        // handle animation complete event
        anim.onComplete = function(){
          if(thisRef.idolFound === false){
            this.restart();
            this.stop(true);
            thisRef.player.display(true);
            // reset player
            thisRef.player.enablePlayer = true;
            thisRef.player.sprite.scale.x = 1; 
            thisRef.movingRight = true;
            thisRef.player.stop();
            
            thisRef.getItemPlay.alpha = 0;
            thisRef.idolFound = true;
            
            //thisRef.idolPiece.alpha = 0;
            thisRef.playerSucceeded();
            thisRef.player.getThoughtBubble(10, true);
          }
        };
    }

  },
  onIdolGrab: function(){
    // handle animation complete - when player gets idol 

    if(this.idolFound === true) return; // if idol was already found do not continue

    var thisRef = this; // reference to this of class

    this.arrowSelect_GetIdol.alpha = 0;

    thisRef.playAudio('got-the-idol'); // play audio for getting idol piece

    this.game.add.tween(thisRef.idolPiece).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 500);
    if(thisRef.idolFound === false){
       
        thisRef.player.display(true);
        // reset player
        thisRef.player.enablePlayer = true;
        thisRef.player.sprite.scale.x = 1; 
        thisRef.movingRight = true;
        thisRef.idolFound = true;
        thisRef.playerSucceeded();
        thisRef.player.getThoughtBubble(10, true);
      }

  },
  moveUpToNextFloor: function(sprite){
    // action for moving up
    if(this.enabled === false) return; // if display is enabled continue

    var moveUpValue = this.player.sprite.y - this.UpDownYValue;

    if(this.debug === true) logger("moveUpToNextFloor moveUpValue: " + moveUpValue);
    
    if(moveUpValue < 0) return; // limit movement to canvas area

    var ref = this.ref; // reference back to parent class

    this.player.stop();
    this.player.display(false) //false hide
    this.player.enablePlayer = false;
    this.player.sprite.y = moveUpValue; // move player element up
    //this.player.sprite.x = 522;

    if(this.debug === true) {
      logger(" this.climbUpDown.x " + this.climbUpDown.x);
      logger(" this.player.sprite.x " + this.player.sprite.x);
      logger(" this.player.sprite.y " + this.player.sprite.y);
    }
    //this.player.sprite.x = this.currentArrowSelector.x - 50/2;

    this.ladderArrowClicked = true; // enable arrow clicked flag
    
    // play climb up animation
    var animClimbUp = this.climbUpDown.animations.getAnimation("climbUp");
    animClimbUp.onComplete = function(){
      this.restart();
      this.stop(true);
      ref.postMoveUpLadder();
    };
    this.climbUpDown.play("climbUp");
    this.climbUpDown.alpha = 1;

    // flip graphic - horizontal
    if(this.isLadderFlipped === true){
      this.climbUpDown.scale.x = -1;
      //this.player.sprite.x = this.player.sprite.x - 10;
    }else{
      this.climbUpDown.scale.x = 1;
      //this.player.sprite.x = this.player.sprite.x + 10;
    }

    this.player.stop();

  },
  postMoveUpLadder: function(){
    // complete handler for moving up
    this.climbUpDown.alpha = 0;
    this.player.display(true); // true show
    this.player.enablePlayer = true;
  },
  moveDownToNextFloor: function(sprite){
    // action for moving up
    if(this.enabled === false) return; // if display is enabled continue

    var moveDownValue = this.player.sprite.y + this.UpDownYValue;

    if(this.debug === true) logger("moveDownToNextFloor moveDownValue: " + moveDownValue);
    
    if(moveDownValue > 500) return; // limit movement to canvas area - canvas height 

    var ref = this.ref; // reference back to parent class

    // stop player in current state
    this.player.display(false); 
    this.player.enablePlayer = false;
    this.player.sprite.y = moveDownValue; // move player element down
    this.player.stop();

    this.ladderArrowClicked = true; // enable arrow clicked flag
   
    // play climb down animation
    var animClimbUp = this.climbUpDown.animations.getAnimation("climbDown");
    animClimbUp.onComplete = function(){
      this.restart();
      this.stop(true);
      ref.postMoveDownLadder();
    }
    this.climbUpDown.play("climbDown");
    this.climbUpDown.alpha = 1;

    // flip graphic - horizontal
    if(this.isLadderFlipped === true){
      this.climbUpDown.scale.x = -1;
      this.player.sprite.x = this.player.sprite.x - 20;
    }else{
      this.climbUpDown.scale.x = 1;
      this.player.sprite.x = this.player.sprite.x + 20;
    }

  },
  postMoveDownLadder: function(){
    // complete handler for moving down
    this.climbUpDown.alpha = 0;
    this.player.display(true); // = 1;
    this.player.enablePlayer = true;
  },

  onEnableCageHandler: function(){
    // handler for cage peril
    if(this.enableCagePeril === false){
      if(this.debug === true) logger("onEnableCageHandler");
      var ref = this.ref; // reference back to parent class
      
      this.arrowSelect_GetIdol.alpha = 0; // hide selector arrow

      this.player.display(false)// = 0;
      this.player.enablePlayer = false;
      this.player.stop();
      this.player.sprite.x = this.cage.x + 40;
      
      this.budCaged.alpha = 1;
      this.budCaged.play("captureStart");
      this.playAudio('cage-drop');
      
      this.cage.alpha = 1;
      this.cage.play("down");

      this.dwCaged.alpha = 1;
      
      var anim = this.dwCaged.animations.getAnimation("start");
      anim.onComplete = function(){
        this.restart();
        this.stop(true);
        ref.dwCaged.alpha = 0;
        ref.player.whoIsWalking = ref.player.WALKING_DW;
        ref.player.changeIdleState();
        ref.player.enablePlayer = true;
        ref.player.sprite.alpha = 1;
      };
      this.dwCaged.play("start");

      this.lever.alpha = 1;

      this.enableCagePeril = true; 
    }

  },
  flipLever: function(){
    // handler for cage peril - lever action
    if(this.leverIsOn === true) return;
    
    this.leverIsOn = true;
    
    var ref = this.ref; // reference back to parent class
    this.lever.play("turnOn");
    this.cage.play("up");
    this.budCaged.play("captureEnd");

    this.playAudio('cage-lever'); // play sound of cage lever being pressed

    var anim = this.budCaged.animations.getAnimation("captureEnd");
    anim.onComplete = function(){
      this.restart();
      this.stop(true);
      
      var timerReset = this.game.time.create(true);
      timerReset.add(1000, function(){
        ref.budCaged.alpha = 0;
        ref.player.whoIsWalking = ref.player.WALKING_BUD_DW;
        ref.player.changeIdleState();
        ref.cageLeverFlipped = true;
        ref.cage.alpha = 0;
        this.enableCagePeril = false;
      },this);
      timerReset.start();
      this.onComplete = function(){};
    };
  },
  playerJumpOnBackHandler: function(){
    // handler for water peril change selector button state , add mouse down handler
    if(this.initialHit === true) {
      this.player.stop();
      this.initialHit = false;
    }

    this.arrowSelect_vineBranch.alpha = 1;
    this.arrowSelect_vineBranch.inputEnabled = true;
    this.arrowSelect_vineBranch.events.onInputDown.add(this.swingOnVine,this);
  },
  swingOnVine: function(){
    // handler for water peril change vine and player display state - button click handler
    this.player.stop();
    this.player.display(false); //= 0;
    this.waterBlock1Collision = this.waterBlock2Collision = false;

    this.player.sprite.x = this.vineBranch.x - 100;
    this.player.enablePlayer = false;

    this.vineBranch.alpha = 0;
    this.budDWJumpOnBack.alpha = 1;
    this.budDWJumpOnBack.animations.play('jump', 11, false, true);
    
    var ref = this; // reference object "This"

    var timerAudio_1 = this.game.time.create(true);
    timerAudio_1.add(1500, function(){
      if(ref.debug) logger("timerAudio_1");
      ref.playAudio('vine-swing'); // play audio of vine swinging
    });
    timerAudio_1.start();
  },
  onBlockCollision: function(sprite, tile){
    // handler for water peril change logic state
    if(sprite.name != "buddwvinejump_anim"){ // element that doesn't collide with animation
      // logger("onBlockCollision sprite.name = " + sprite.name + " tile.x = " + tile.x + 
      //   " selectedTileWidth 1:" + (this.selectedTile_invis1.x * tileWidth) +
      //   " selectedTileWidth 2:" + (this.selectedTile_invis2.x * tileWidth));
      tileX = tile.x; 
      if(tile.x == this.selectedTile_invis1.x * tileWidth){
        this.waterBlock1Collision = true;
      }
      if(tile.x == this.selectedTile_invis2.x * tileWidth){
        this.waterBlock2Collision = true;
      }
    }
  },

  blockOn: function(){
    // animation for floor drop - up
    if(this.enabled === false) return; // reference back to parent class

    var ref = this.ref; // reference back to parent class

    this.timerReset_blockOn = this.game.time.create(true);
    
    this.timerReset_blockOn.add(this.floorDown_openSpeed, function(){
      
      this.timerReset_blockOn.destroy(); // remove timer

      if(this.floorDown ==  null) return; // if sprite don't exit this function should not continue 

      ref.floorEnabled = true; // boolean for hit collision enable

      if(ref.enabled === true){ 
        ref.floorDown.play('up');
        ref.playAudio('trapdoor-open-close'); // play audio of opening and closing trap door floor
      }

      this.blockOn_anim_1 = this.floorDown.animations.getAnimation("up");
      this.blockOn_anim_1.onComplete = function(){
        this.restart();
        this.stop(false);
        //ref.floorEnabled = true;
      };

      if(this.floorDown_2){
        this.floorDown_2.play('up');

        this.blockOn_anim_2 = this.floorDown_2.animations.getAnimation("up");
        this.blockOn_anim_2.onComplete = function(){
          this.restart();
          this.stop(false);
          //ref.floorEnabled = true;
        };
      }
      
      this.blockOff();
    },this);
    this.timerReset_blockOn.start();
  },
  blockOff: function(){
    var ref = this;

    // animation for floor drop - down
    if(this.enabled === false) return; // reference back to parent class

    if(this.floorDown == null) return; // if sprite don't exit this function should not continue 

    this.timerReset_blockOff = this.game.time.create(true);
    this.timerReset_blockOff.add(this.floorDown_openSpeed-1000, function(){

      this.timerReset_blockOff.destroy(); // remove timer

      ref.blockOffTimer = ref.game.time.create(true);
      ref.blockOffTimer.add(1000, function(){
        ref.blockOffTimer.destroy();
        ref.floorEnabled = false; // boolean for hit collision enable
      });
      ref.blockOffTimer.start();

      if(ref.enabled === true) {
        ref.playAudio('trapdoor-open-close'); // play audio of opening and closing trap door floor
        ref.floorDown.play('down');
      }

      if(ref.floorDown_2) ref.floorDown_2.play('down');
      
      ref.blockOn();
    },this);
    this.timerReset_blockOff.start();
  },

  moveLogHandler: function (){
    // handler for moving panel/log peril
    if(this.debug === true) logger("moveLogHandler");
    
    var ref = this;

    this.arrowSelect_GetIdol.alpha = 0; // hide selector arrow

    var timerAudio_1 = this.game.time.create(true);
    timerAudio_1.add(2000, function(){
      if(ref.debug) logger("timerAudio_1");
      ref.playAudio('log-down'); // play audio of log going down on lever
      timerAudio_1.destroy();
    });
    timerAudio_1.start();

    var timerAudio_2 = this.game.time.create(true);
    timerAudio_2.add(3500, function(){
      if(ref.debug) logger("timerAudio_2");
      ref.playAudio('door-up-down'); // play audio of door going up and down
      timerAudio_2.destroy();
    });
    timerAudio_2.start();

    if(this.logSprite === null) return; // don't continue if this sprite don't exist
    this.logSprite.animations.play('moveLog', 11, false, true); 
    this.logSprite.alpha = 1;
    this.player.enablePlayer = false;
    this.player.sprite.alpha = 0;
    this.player.stop();
    this.logImg.alpha = 0;
    //this.isLogMoved = true;
    this.map.setCollision([51], false, this.layerName);
  },

  wallVUp: function(){
     // animation for vertical wall - up
    if(this.enabled === false) return;

    var ref = this.ref; // reference back to parent class
    this.timerReset_WallVUp = this.game.time.create(true);
   
    this.timerReset_WallVUp.add(this.movingWallVert_openSpeed, function(){
      this.timerReset_WallVUp.destroy();

      this.map.setCollision([20,21], false, this.layerName);

      if(this.movingWallVertical_1){ // if this first instance exists handle logic
        this.movingWallVertical_1.play('up');
        
        if(this.enabled === true){ 
          this.playAudio('door-up-down'); // play audio of door going up and down
        }

        this.WallVUp_anim_1 = this.movingWallVertical_1.animations.getAnimation("up");
        this.WallVUp_anim_1.onComplete = function(){
          ref.wallVEnabled = true;
        };
      }

      if(this.movingWallVertical_2){ // if this second instance exists handle logic
        this.movingWallVertical_2.play('up');

        this.WallVUp_anim_2 = this.movingWallVertical_2.animations.getAnimation("up");
        this.WallVUp_anim_2.onComplete = function(){
          ref.wallVEnabled = true;
        };
      }

      this.wallVDown();
    },this);
    this.timerReset_WallVUp.start();
  },
  wallVDown: function(){
    // animation for vertical wall - down
    if(this.enabled === false) return;

    var ref = this.ref; // reference of object

    this.timerReset_wallVDown = this.game.time.create(true);
    this.timerReset_wallVDown.add(this.movingWallVert_openSpeed + 1000, function(){
      this.timerReset_wallVDown.destroy();

      if(this.enabled === false) return;

      this.map.setCollision([20,21], true, this.layerName);

      this.wallVEnabled = false;
      
      if(this.movingWallVertical_1){ // if this first instance exists handle logic
        this.movingWallVertical_1.play('down');
        
        if(this.enabled === true){ 
          this.playAudio('door-up-down'); // play audio of door going up and down
        }

        if( this.game.physics.overlap(this.player.sprite, this.movingWallVertical_1) ){
            this.player.failedCaught();
            this.initialHit = true;
            this.handleFail("DW and Bud crushed by Wall.");
        }
      }

      if(this.movingWallVertical_2){ // if this second instance exists handle logic
        this.movingWallVertical_2.play('down');

        if( this.game.physics.overlap(this.player.sprite, this.movingWallVertical_2) ){
            this.player.failedCaught();
            this.initialHit = true;
            this.handleFail("DW and Bud crushed by Wall.");
        }
      }

      this.wallVUp();
    },this);
    this.timerReset_wallVDown.start();
  },
  resetCagePeril: function(){
    // reset cage peril
    this.lever.play("turnOn");
    this.cage.play("up");
    this.budCaged.alpha = 0;
    this.cage.alpha = 0;
    this.enableCagePeril = false;
    this.dwCaged.alpha = 0;
    this.leverIsOn = false;
    this.lever.alpha = 0;
    this.cageLeverFlipped = false;
  },
  onExitCollision: function(sprite, tile){
    // handle exit collision
    if(this.cageLeverFlipped === false || this.idolFound === false) return;

    //this.trapdoor_open_close.play();
    this.exitScreen(); 

    var timerReset = this.game.time.create(true);
    timerReset.add(1000, function(){
      this.player.enablePlayer = true;
    },this);
    timerReset.start();

    this.enabled = false;
  },
  moveUpLongToNextFloor: function(sprite){
    // action for moving up

    if(this.enabled === false) return; // if display is enabled continue

    if(this.debug === true) logger("moveUpLongToNextFloor");

    var ref = this.ref; // reference back to parent class

    // stop player in current state and move
    this.player.stop();
    this.player.display(false) //= 0;
    this.player.enablePlayer = false;
    //this.player.sprite.x = 522;
    this.player.sprite.y = this.player.sprite.y - this.UpDownYValue * 2; // move player element up
    this.player.stop();

    this.ladderArrowClicked = true; // enable arrow clicked flag
    
    // play climb up animation
    var animClimbUp = this.climbUpDownLong.animations.getAnimation("climbUp");
    animClimbUp.onComplete = function(){
      this.restart();
      this.stop(true);
      ref.postMoveUpLongLadder();
    };
    this.climbUpDownLong.play("climbUp");
    this.climbUpDownLong.alpha = 1;
  },
  postMoveUpLongLadder: function(){
    // complete handler for moving up
    this.climbUpDownLong.alpha = 0;
    this.player.display(true);
    this.player.enablePlayer = true;
  },
  moveDownLongToNextFloor: function(sprite){
    // action for moving down

    if(this.enabled === false) return; // if display is enabled continue

    if(this.debug === true) logger("moveDownLongToNextFloor");

    var ref = this.ref; // reference back to parent class

    // stop player in current state and move
    this.player.display(false);
    this.player.enablePlayer = false;
    //this.player.sprite.x = 522;
    this.player.sprite.y = this.player.sprite.y + this.UpDownYValue * 2; // move player element down
    this.player.stop();

    this.ladderArrowClicked = true; // enable arrow clicked flag
    
    // play climb down animation
    var animClimbUp = this.climbUpDownLong.animations.getAnimation("climbDown");
    animClimbUp.onComplete = function(){
      this.restart();
      this.stop(true);
      ref.postMoveDownLongLadder();
    }
    this.climbUpDownLong.play("climbDown");
    this.climbUpDownLong.alpha = 1;

  },
  postMoveDownLongLadder: function(){
    // complete handler for moving down
    this.climbUpDownLong.alpha = 0;
    this.player.display(true); // = 1;
    this.player.enablePlayer = true;
  },
  doubleCheckCollisionDetection: function(rect1, rect2){
    var results = false;
    if(rect1.x < rect2.x + rect2.width &&
     rect1.x + rect1.width > rect2.x &&
     rect1.y < rect2.y + rect2.height &&
     rect1.height + rect1.y > rect2.y){
        results = true;
    }

    return results;
  },
  playerFailed: function(){
    // access outside to handle failed - fall into water
  },
  playerSucceeded:  function(){
    // access outside to handle succeeded
  },
  exitScreen: function(){
    // access outside to open next scene
  },
  stopPlayerOnce: function(){
    //logger("stopPlayer ");
    var ref = this;
    if(this.stopPlayerOnceFlag === true){
      
      this.player.bounceOffWall( this.stopPlayerOnceXPos ); 
    
      var blockOffTimer = this.game.time.create(true);
      blockOffTimer.add(600, function(){
        blockOffTimer.destroy();
        ref.stopPlayerOnceFlag = false;
      });
      blockOffTimer.start();

    }
    
  },
  playAudio: function(audioID){
    this.game.sound.play(audioID);
  },
  destroy: function(){
    // destroy objects

    if(this.arrowSelectDown_ladder1 !== null){
      this.arrowSelectDown_ladder1.destroy();
      this.arrowSelectDown_ladder1 = null;
    } 

    if(this.arrowSelectUp_ladder1 !== null){
      this.arrowSelectUp_ladder1.destroy();
      this.arrowSelectUp_ladder1 = null;
    }

    if(this.arrowSelectDown_ladder2 !== null){
      this.arrowSelectDown_ladder2.destroy();
      this.arrowSelectDown_ladder2 = null;
    }

    if(this.arrowSelectUp_ladder2 !== null){
      this.arrowSelectUp_ladder2.destroy();
      this.arrowSelectUp_ladder2 = null;
    }

    if(this.arrowSelectDown_ladder3 !== null){
      this.arrowSelectDown_ladder3.destroy();
      this.arrowSelectDown_ladder3 = null;
    }

    if(this.arrowSelectUp_ladder3 !== null){
      this.arrowSelectUp_ladder3.destroy();
      this.arrowSelectUp_ladder3 = null;
    }
    
    if(this.arrowSelectDown_ladder4 !== null){
      this.arrowSelectDown_ladder4.destroy();
      this.arrowSelectDown_ladder4 = null;
    }
    
    if(this.arrowSelectUp_ladder4 !== null){
      this.arrowSelectUp_ladder4.destroy();
      this.arrowSelectUp_ladder4 = null;
    }

    if(this.arrowSelect_GetIdol !== null){
      this.arrowSelect_GetIdol.destroy();
      this.arrowSelect_GetIdol = null;
    }

    if(this.climbUpDown !== null){
      this.climbUpDown.destroy();
      this.climbUpDown = null;
    }

    if(this.climbUpDownLong !== null){
      this.climbUpDownLong.destroy();
      this.climbUpDownLong = null;
    }

    if(this.idolPiece !== null){
      this.idolPiece.destroy();
      this.idolPiece = null;
    }

    if(this.movingWallVertical_1 !== null){
      this.movingWallVertical_1.destroy();
      this.movingWallVertical_1 = null;
    }

    if(this.movingWallVertical_2 !== null){
      this.movingWallVertical_2.destroy();
      this.movingWallVertical_2 = null;
    }

    if(this.floorDown !== null){
      this.floorDown.destroy();
      this.floorDown = null;
    }

    if(this.floorDown_2 !== null){
      this.floorDown_2.destroy();
      this.floorDown_2 = null;
    }

    //this.game.time.
    if(this.timerReset_blockOn !== null) {
      this.timerReset_blockOn.destroy();
      this.timerReset_blockOn = null;
    }

    if(this.timerReset_blockOff !== null) {
      this.timerReset_blockOff.destroy();
      this.timerReset_blockOff = null;
    }

    if(this.groupDisplay){
      //this.groupDisplay.removeAll();
      //this.groupDisplay.destroy();
      //this.groupDisplay = null;
    }
    
  },
  clear: function(){
    // clear display
    this.groupDisplay.alpha = 0;
    //this.game = null;
  }
});