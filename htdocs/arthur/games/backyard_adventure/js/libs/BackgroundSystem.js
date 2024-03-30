
var BackgroundSystem = function(game){
	this.game = game;
	this.backgroundIMG = null;
	this.groupDisplay = this.game.add.group();
}
BackgroundSystem.prototype = {
	setViewStateID: function(value){
		console.log("setViewStateID " + value);
		this.clearDisplay();

		this.backgroundIMG = this.game.add.sprite(0, 0, value);
		this.backgroundIMG.body.allowGravity = false;	
 		this.groupDisplay.add(this.backgroundIMG);
	},
	clearDisplay: function(){
		if(this.groupDisplay) this.groupDisplay.removeAll();
	},
	destroy: function(){
		this.groupDisplay.removeAll();
		this.groupDisplay = null;
	}
}

