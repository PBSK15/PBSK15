/* GameVO object

ScreenLevel1 : LevelObj, LayerName, BGViewStateID
ScreenLevel2 : LevelObj, LayerName, BGViewStateID
ScreenLevel3 : LevelObj, LayerName, BGViewStateID
ScreenLevel4 : LevelObj, LayerName, BGViewStateID

PreloadManifest
*/

var GameLevelVO = Class.extend({
  init: function(levelID, layerName, bgViewStateID){
  	this.levelID = levelID;
  	this.layerName = layerName;
  	this.bgViewStateID = bgViewStateID;
  },
});

var LevelFactory = function(levelName, game){
	var level = null; 
	switch(levelName){
		case "jungle_screen1":
			level = new JungleScreen1(game);
		break;

		case "jungle_screen2":
			level = new JungleScreen2(game);
		break;

		case "jungle_screen3":
			level = new JungleScreen3(game);
		break;

		case "jungle_screen4":
			level = new JungleScreen4(game);
		break;

		case "jungle_screen5":
			level = new JungleScreen5(game);
		break;

		case "jungle_screen6":
			level = new JungleScreen6(game);
		break;

		case "jungle_screen7":
			level = new JungleScreen7(game);
		break;

		case "jungle_screen8":
			level = new JungleScreen8(game);
		break;


		case "temple_screen1":
			level = new TempleScreen1(game);
		break;

		case "temple_screen2":
			level = new TempleScreen2(game);
		break;

		case "temple_screen3":
			level = new TempleScreen3(game);
		break;

		case "temple_screen4":
			level = new TempleScreen4(game);
		break;

		case "temple_screen5":
			level = new TempleScreen5(game);
		break;

		case "temple_screen6":
			level = new TempleScreen6(game);
		break;

		case "temple_screen7":
			level = new TempleScreen7(game);
		break;

		case "temple_screen8":
			level = new TempleScreen8(game);
		break;
		
	}

	return level;
}
