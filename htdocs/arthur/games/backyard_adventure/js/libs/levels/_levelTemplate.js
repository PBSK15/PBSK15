/*
 *  JungleScreen8 - Jungle Screen Object
 *    Note: This class inherits from BaseScreen. Most functions can be inherited or overwritten
*/

var JungleScreen8 = BaseScreen.extend({
  init: function(game){
    this._super(game); // call parent class

    // set starting position values
    this.startPosX = 0;
    this.startPosY = 390;

  
    this.debug = false;
  },
  create: function(layerName, map){
    this._super(layerName, map); // call create from parent

    var ref = this.ref; // reference back to parent class

  },
  postcreate: function(){
    this._super(); // call postcreate from parent

    // referenced in BaseScreen
    this.getItemPlay.x = 120;
    this.getItemPlay.y = 5 * tileHeight - 40;

    this.arrowSelect_GetIdol.x = 1 * tileWidth;
    this.arrowSelect_GetIdol.y = 5 * tileHeight;
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
  },
  setScreen: function(idolPieceName){
    // Reset or establish starting game state - enable collision handling, reset logic flags and hide/show elements
    this._super(idolPieceName); // call postcreate from parent

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
  revive: function(){
      // this method is not really used, not sure if this will be useful
      this._super(); // call revive from parent
      this.enabled = true;
  }
  
});