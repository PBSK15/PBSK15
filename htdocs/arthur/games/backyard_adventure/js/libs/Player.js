
var Player = function(game){
	this.game = game;
	this.sprite = null;
	//this.iconPointer = null;
	this.playerIdle = false;
	this.movingRight = false;
	this.movingLeft = false;
	this.useMouse = true;
	
	this.thoughtBubble = null;

	this.inputXPos = null;
	this.inputYPos = null;

	this.playerX = null;
	this.playerY = null;
	this.velocityMoveValue = 110;
	this.enablePlayer = true;
	this.whoIsWalking = this.WALKING_BUD_DW;

	this.minXPos = 72;
	this.maxXPos = 580;
	this.debug = false;

	this.thoughtAnimation = null;
}

Player.prototype = {
	create: function(x, y, imageId){
		this.sprite = this.game.add.sprite(x, y, imageId);
		//this.game.physics.arcade.enable(this.sprite);
	    this.sprite.body.bounce.y = 0.2;
	    this.sprite.body.minVelocity.y = 5;
	    this.sprite.body.collideWorldBounds = true;
	    this.sprite.name = "player";
	    this.sprite.body.setRectangle(60, 49, 6, 62 - 49); /// width and height of collision area ... adjusting height to keep correct visually

	    this.thoughtBubble = this.game.add.sprite(0, 0, "game_assets");
	    this.thoughtBubble.body.allowGravity = false;
	    this.thoughtAnimation = this.thoughtBubble.animations.add("thoughtBubble", 
	    	Phaser.Animation.generateFrameNames('bubble_', 0, 12, '', 2), 11, true);
	    this.thoughtBubble.x = this.sprite.x + this.sprite.width - 40;
	    this.thoughtBubble.y = this.sprite.y - 30;
	    this.thoughtBubble.alpha = 0;

	    /*
	    this.iconPointer = this.game.add.sprite(x, y, "pointer_icon");
	    this.iconPointer.body.allowGravity = false;
	    this.iconPointer.center.x = 10;
	    this.iconPointer.center.y = 10;
	    this.iconPointer.alpha = 0;
	    */
	    
	    this.sprite.animations.add("Bud_walk", 
	    	Phaser.Animation.generateFrameNames('Bud_walk_', 0, 3, '', 1), 11, true);
	    this.sprite.animations.add("Bud_idle", 
	    	Phaser.Animation.generateFrameNames('Bud_walk_', 0, 0, '', 1), 11, false);

	    this.sprite.animations.add("DW_walk", 
	    	Phaser.Animation.generateFrameNames('DW_walk_', 0, 3, '', 1), 11, true);
	    this.sprite.animations.add("DW_idle", 
	    	Phaser.Animation.generateFrameNames('DW_walk_', 0, 0, '', 1), 11, false);

	    this.sprite.animations.add(Player.prototype.ANIM_SINK_DOWN, 
	    	Phaser.Animation.generateFrameNames('Bud_DW_Sinking_', 0, 5, '', 2), 11, false);

	    this.sprite.animations.add(Player.prototype.ANIM_CRAWL, 
	    	Phaser.Animation.generateFrameNames('Bud_DW_crawl_', 0, 1, '', 1), 11, true);

	    this.sprite.animations.add(Player.prototype.ANIM_IDLE_CRAWL, 
	    	Phaser.Animation.generateFrameNames('Bud_DW_crawl_', 0, 0, '', 1), 11, false);

	     this.sprite.animations.add(Player.prototype.ANIM_WALK, 
	    	Phaser.Animation.generateFrameNames('Bud_DW_walk_', 0, 3, '', 1), 11, true);

	    this.sprite.animations.add(Player.prototype.ANIM_IDLE, 
	    	Phaser.Animation.generateFrameNames('Bud_DW_walk_', 0, 0, '', 1), 11, false);

	    this.sprite.animations.add(Player.prototype.ANIM_CELEBRATE, 
	    	Phaser.Animation.generateFrameNames('Bud_DW_celebrate_', 1, 9, '', 2), 11, true);

	    this.sprite.animations.add(Player.prototype.ANIM_WALKING_CLASSIC, 
	    	Phaser.Animation.generateFrameNames('Bud_DW_walk_classic_', 0, 2, '', 1), 11, true);

	    this.sprite.animations.add(Player.prototype.ANIM_IDLE_CLASSIC, 
	    	Phaser.Animation.generateFrameNames('Bud_DW_walk_classic_', 0, 0, '', 1), 11, false);

	    this.sprite.alpha = 1;

	    this.game.input.onUp.add(this.handleOnUp);
		this.game.input.onDown.add(this.handleOnDown);
	},
	handleOnUp: function(){
		isInputDown = false;
	},

	handleOnDown: function(){
		isInputDown = true;
	},
	stop: function(atIdle){
		if(atIdle && atIdle === true) {
			this.playerIdle = true;
			this.sprite.animations.play(this.ANIM_IDLE);
		}
		this.movingRight = false;
		this.movingLeft = false;

		this.inputXPos = this.roundByFactor(this.playerX,2);
		this.sprite.body.velocity.x = 0;	
	},
	display: function(value){
		if(value === true){
			this.sprite.alpha = 1;	
		}else if(value === false){
			this.sprite.alpha = 0;
		}
		//logger( "this.sprite.alpha " + this.sprite.alpha + " value: " + value );
	},
	changeWalkingState: function(){
		//console.log("changeWalkingState " + this.whoIsWalking);
		switch(this.whoIsWalking){
			case this.WALKING_BUD_DW:
			this.sprite.animations.play(Player.prototype.ANIM_WALK);
			break;

			case this.WALKING_BUD:
			this.sprite.animations.play("Bud_walk");
			break;

			case this.WALKING_DW:
			this.sprite.animations.play("DW_walk");
			break;

			case this.WALKING_BUD_DW_CLASSIC:
			this.sprite.animations.play(Player.prototype.ANIM_WALKING_CLASSIC);
			break;

			case this.CRAWL_BUD_DW:
			this.sprite.animations.play(Player.prototype.ANIM_CRAWL);
			break;
		}
	},
	changeIdleState: function(){
		//console.log("changeIdleState " + this.whoIsWalking);
		switch(this.whoIsWalking){
			case this.WALKING_BUD_DW:
			this.sprite.animations.play(this.ANIM_IDLE);
			break;

			case this.WALKING_BUD:
			this.sprite.animations.play("Bud_idle");
			break;

			case this.WALKING_DW:
			this.sprite.animations.play("DW_idle");
			break;	

			case this.WALKING_BUD_DW_CLASSIC:
			this.sprite.animations.play(Player.prototype.ANIM_IDLE_CLASSIC);
			break;

			case this.CRAWL_BUD_DW:
			this.sprite.animations.play(Player.prototype.ANIM_IDLE_CRAWL);
			break;

			case this.CELEBRATE:
			this.celebrate();
			break;
		}
	},
	runControls: function(){
		if(this.enablePlayer === false) return;

		this.playerX = Math.round( this.sprite.x );
		this.playerY = Math.round( this.sprite.y );

		// set min max restrant on movement / left and right of screen
		if(	(this.playerX <= this.minXPos && this.movingLeft) || 
			(this.playerX >= this.maxXPos && this.movingRight)) {
			this.stop();
		}

		//if (this.game.input.mousePointer.isDown || this.game.input.pointer1.isDown){
		if (isInputDown === true){
		
			
			// get input values depending on touch or Mouse pointer
			// if(this.useMouse){
			// 	this.inputXPos = Math.round( this.game.input.mousePointer.x );
			// 	this.inputYPos = Math.round( this.game.input.mousePointer.y ) ;
			// }else{
			// 	this.inputXPos = Math.round( this.game.input.pointer1.x );
			// 	this.inputYPos = Math.round( this.game.input.pointer1.y );
			// }

			this.inputXPos = Math.round( this.game.input.activePointer.x );
			this.inputYPos = Math.round( this.game.input.activePointer.y );

			//logger("runControls difference: " + Math.abs(this.inputXPos - this.playerX));

			if( Math.abs(this.inputXPos - this.playerX) < 20 ) return;

			// this.iconPointer.x = this.inputXPos - 10;
			// this.iconPointer.y = this.inputYPos - 10;
			// this.iconPointer.alpha = 1;
			
			// var pointerTween = this.game.add.tween(this.iconPointer).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 0, true);
			// pointerTween.onLoop = function(){
		 //      logger("failedTween completed");
		 //      this.restart();
		 //      this.stop(true);
		 //    };

			this.changeWalkingState();

    		this.playerIdle = false;

    		if(this.inputXPos < this.playerX ){ // moving left
    			this.sprite.scale.x = -1; 
    			this.movingLeft = true;
    		}else if(this.inputXPos > this.playerX ){ // moving right
    			this.sprite.scale.x = 1; 
    			this.movingRight = true;
    		}
    	}

		if(this.playerIdle !== true){
			if(this.roundByFactor(this.inputXPos - 40, 2) > this.roundByFactor(this.playerX,2) && this.movingRight){
				this.sprite.body.velocity.x = this.velocityMoveValue;
				this.thoughtBubble.x = this.sprite.x + 70;
	    		this.thoughtBubble.y = this.sprite.y - 70;
	    		this.thoughtBubble.scale.x = 1;
			}else if(this.roundByFactor(this.inputXPos - 40, 2) < this.roundByFactor(this.playerX,2) && this.movingLeft){
				this.sprite.body.velocity.x = -this.velocityMoveValue;
				this.thoughtBubble.x = this.sprite.x - 70;
	    		this.thoughtBubble.y = this.sprite.y - 70;
	    		this.thoughtBubble.scale.x = -1;
			}else{
				//console.log("Here I Am");
				this.stop();
			}
		}

		if(this.roundByFactor(this.inputXPos, 2) === this.roundByFactor(this.playerX,2)){
			this.playerIdle = true;
			this.movingRight = false;
			this.movingLeft = false;
			this.sprite.body.velocity.x = 0;
			this.changeIdleState();
		}


	},
	sinkDown: function(){
		if(this.debug === true) logger("sinkdown called");
		this.playerIdle = true;
		this.movingRight = false;
		this.movingLeft = false;
		this.inputXPos = this.roundByFactor(this.playerX,2);
		this.sprite.body.velocity.x = 0;
		var anim = this.sprite.animations.getAnimation(this.ANIM_SINK_DOWN);
		anim.onComplete = function(){
	      this.restart();
	      this.stop(true);
	    };
		this.sprite.animations.play(this.ANIM_SINK_DOWN);
	},
	crawling: function(){
		this.sprite.animations.play(this.ANIM_CRAWL);
	},
	celebrate: function(){
		logger("celebrate");
		this.sprite.body.setRectangle(60, 50, 6, 26);
		this.sprite.animations.play(this.ANIM_CELEBRATE);
		this.enablePlayer = false;
	},
	failedCaught: function(){
		this.sprite.alpha = 1;
		var that = this;
 		var failedTween = this.game.add.tween(this.sprite).to( { alpha: 0 }, 250, Phaser.Easing.Linear.None, true, 0, 6, true);
		var numberOfLoops = 1;
		failedTween.onLoop.add(function(){
	      //if(this.debug === true) logger("failedTween completed " + numberOfLoops);
	      if(numberOfLoops > 4){
	      	this.stop(true);
	      	that.sprite.alpha = 1;
	      }
	      numberOfLoops++;
	    });
	},
	fadeOut: function(){
		//this.sprite.alpha = 0;
		var failedTween = this.game.add.tween(this.sprite).to( { alpha: 0 }, 800, Phaser.Easing.Linear.None, true);
	},
	render: function(){
		if(this.debug === true) this.game.debug.renderSpriteBody(this.sprite);
	},
	roundByFactor: function(value, factor){
		return Math.round(value/factor)*factor;
	},
	bounceOffWall: function(wallXPosition){
	  this.stop();
      if( this.sprite.x < wallXPosition ){
        this.sprite.x = this.sprite.x - 10;   
      }else{
        this.sprite.x = this.sprite.x + 10;   
      }
	},
	resetPlayer: function(){
		this.sprite.body.setRectangle(60, 50, 6, 62 - 50);
	},
	getThoughtBubble: function(thoughtNumber, synWithPlayer){
		this.thoughtBubble.alpha = 1;
		var blinkingSelectTween = this.game.add.tween(this.thoughtBubble).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 6, true);
		this.thoughtAnimation.frame = 6 + thoughtNumber; //12
		if(synWithPlayer === true){
			this.thoughtBubble.x = this.sprite.x + 70;
			this.thoughtBubble.y = this.sprite.y - 70;
			this.thoughtBubble.scale.x = 1;
		}
		
	},
	destroy: function(){
		this.sprite.destroy();
		this.sprite = null;

		this.thoughtBubble.destroy();
		this.thoughtBubble = null;
	}
}
Player.prototype.ANIM_IDLE = 'idle';
Player.prototype.ANIM_WALK = 'walk';
Player.prototype.ANIM_SINK_DOWN = 'sinking';
Player.prototype.ANIM_CELEBRATE = 'celebrate';
Player.prototype.ANIM_CRAWL = 'crawl';
Player.prototype.ANIM_IDLE_CRAWL = 'idle_crawl';
Player.prototype.ANIM_IDLE_CLASSIC = 'idle_classic';
Player.prototype.ANIM_WALKING_CLASSIC = 'walk_classic';
Player.prototype.WALKING_BUD_DW = "BUD_DW";
Player.prototype.WALKING_BUD = "BUD";
Player.prototype.WALKING_DW = "DW";
Player.prototype.WALKING_BUD_DW_CLASSIC = "Classic";
Player.prototype.CRAWL_BUD_DW = "CRAWL_BUD_DW";
Player.prototype.CELEBRATE  = "CELEBRATE";
