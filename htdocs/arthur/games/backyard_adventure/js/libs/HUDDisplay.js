
var HUDDisplay = function(game){
	this.game = game;
	this.HUDDisplayGrp = null;
}

HUDDisplay.prototype = {
	create: function(isSplashPageDisplayed){
		this.HUDDisplayGrp = this.game.add.group();
		this.HUDDisplayGrp.alpha = 1;

		var hudBG = this.game.add.sprite(0, 0, 'game_assets', 'hud_bg');
		hudBG.body.allowGravity = false;
		this.HUDDisplayGrp.add(hudBG);
		this.HUDDisplayGrp.alpha = 0;

		this.SplashPageGrp = this.game.add.group();

    	this.idolPiece_01 = this.game.add.sprite(10, 15, 'game_assets', 'hud_arthur_idol_01');
    	this.idolPiece_01.body.allowGravity = false;
    	this.HUDDisplayGrp.add(this.idolPiece_01);
    	this.idolPiece_01.alpha = 0;

    	this.idolPiece_02 = this.game.add.sprite(this.idolPiece_01.x + 20, 15, 'game_assets', 'hud_arthur_idol_02');
    	this.idolPiece_02.body.allowGravity = false;
    	this.HUDDisplayGrp.add(this.idolPiece_02);
    	this.idolPiece_02.alpha = 0;

    	var idolPiece_03 = this.game.add.sprite(this.idolPiece_02.x + 25, 15, 'game_assets', 'hud_idol_03');
    	idolPiece_03.body.allowGravity = false;
    	this.HUDDisplayGrp.add(idolPiece_03);
    	idolPiece_03.alpha = 0;

    	var idolPiece_04 = this.game.add.sprite(idolPiece_03.x + 15, 15, 'game_assets', 'hud_idol_04');
    	idolPiece_04.body.allowGravity = false;
    	this.HUDDisplayGrp.add(idolPiece_04);
    	idolPiece_04.alpha = 0;

    	if(isSplashPageDisplayed === true){
    		var splashPageIMG = this.game.add.sprite(0, 0, 'splashPage');
	    	splashPageIMG.body.allowGravity = false;
	    	this.SplashPageGrp.add(splashPageIMG);

	    	var startButton = this.game.add.button(352, 377, 'startButton', this.startButtonOnClick, this, 0, 0, 0);
	    	startButton.body.allowGravity = false;
	    	this.SplashPageGrp.add(startButton);

	    	this.SplashPageGrp.x = 0;
	    	this.SplashPageGrp.alpha = 1;
    	}

	},
	startButtonOnClick: function(){
		logger("Start Button Pressed");
		var ref = this; // reference back to parent class

		var splashTween = this.game.add.tween(this.SplashPageGrp).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
		splashTween.onComplete.add(function(){
			this.pendingDelete = true;
			ref.SplashPageGrp.x = -1000;
			ref.onStartHandler();
		});

	},
	onStartHandler: function(){
		// override this function
	},
	setIdols: function(numberOfIdols, charIdol){
		logger("setIdols " + numberOfIdols);

		switch(charIdol){
			case "arthur":
			this.idolPiece_01.frameName = "hud_arthur_idol_01";
			this.idolPiece_02.frameName = "hud_arthur_idol_02";
			break;

			case "binky":
			this.idolPiece_01.frameName = "hud_binky_idol_01";
			this.idolPiece_02.frameName = "hud_binky_idol_02";
			break;

			case "bud":
			this.idolPiece_01.frameName = "hud_bud_idol_01";
			this.idolPiece_02.frameName = "hud_bud_idol_02";
			break;

			case "dw":
			this.idolPiece_01.frameName = "hud_dw_idol_01";
			this.idolPiece_02.frameName = "hud_dw_idol_02";
			break;
		}

		switch(numberOfIdols){
			case 1:
			this.HUDDisplayGrp.getAt(1).alpha = 1;
			this.HUDDisplayGrp.getAt(2).alpha = 0;
			this.HUDDisplayGrp.getAt(3).alpha = 0; 
			this.HUDDisplayGrp.getAt(4).alpha = 0;
			break; 	

			case 2:
			this.HUDDisplayGrp.getAt(1).alpha = 1;
			this.HUDDisplayGrp.getAt(2).alpha = 1;
			this.HUDDisplayGrp.getAt(3).alpha = 0; 
			this.HUDDisplayGrp.getAt(4).alpha = 0;
			break;

			case 3:
			this.HUDDisplayGrp.getAt(1).alpha = 1;
			this.HUDDisplayGrp.getAt(2).alpha = 1;
			this.HUDDisplayGrp.getAt(3).alpha = 1; 
			this.HUDDisplayGrp.getAt(4).alpha = 0;
			break;

			case 4:
			this.HUDDisplayGrp.getAt(1).alpha = 1;
			this.HUDDisplayGrp.getAt(2).alpha = 1;
			this.HUDDisplayGrp.getAt(3).alpha = 1; 
			this.HUDDisplayGrp.getAt(4).alpha = 1;
			break;

			case 0:
			default:
			this.HUDDisplayGrp.getAt(1).alpha = 0;
			this.HUDDisplayGrp.getAt(2).alpha = 0;
			this.HUDDisplayGrp.getAt(3).alpha = 0; 
			this.HUDDisplayGrp.getAt(4).alpha = 0;
			break; 	
		}
		
	},
	resetDisplay: function(){
		//this.HUDDisplayGrp.getAt(1).alpha = 1;
		//this.HUDDisplayGrp.getAt(2).alpha = 1;
		//this.HUDDisplayGrp.getAt(3).alpha = 1; 
		this.HUDDisplayGrp.getAt(1).alpha = 0;
		this.HUDDisplayGrp.getAt(2).alpha = 0;
		this.HUDDisplayGrp.getAt(3).alpha = 0; 
		this.HUDDisplayGrp.getAt(4).alpha = 0;
	},
	showHudBG: function(isDisplayed){
		if(isDisplayed === true){
			this.HUDDisplayGrp.alpha = 1;
		}else{
			this.HUDDisplayGrp.alpha = 0;
			this.resetDisplay();
		}
		
	},
	destroy: function(){
		//this.HUDDisplayGrp.removeAll();
		//this.SplashPageGrp.removeAll();

		// this.SplashPageGrp.destroy();
		// this.SplashPageGrp = null;

		// this.HUDDisplayGrp.destroy();
		// this.HUDDisplayGrp = null;
	}
}

