
// font format
var FONT_STYLE_1 = "bold 19px Nunito";
var FONT_STYLE_LOADING = "bold 32px Nunito";
var FONT_STYLE_START_BUTTON = "bold 12px Nunito";
var FONT_STYLE_QUESTION = "bold 40px Nunito";
var FONT_STYLE_QUESTION_END = "bold 30px Nunito";
var FONT_STYLE_QUESTION_END_01 = "bold 22px Nunito";
var FONT_STYLE_QUESTION_END_02 = "bold 55px Nunito";
var FONT_STYLE_QUESTION_END_03 = "bold 20px Nunito";

// manifest map for images
function setUpManifest(manifestName){
	var resultManifest = [];

	switch(manifestName){
		case "defaultItems":
			resultManifest = [ 

			]
			break;

		case "section1":
			resultManifest = [
				{"crossOrigin":true,"src":"assets/images/misc/arrows_spritesheet.png", "id":"arrowSheet"},
				{"crossOrigin":true,"src":"assets/images/misc/question_frame.png", "id":"question_frame_png"},
				{"crossOrigin":true,"src":"assets/images/misc/nextQuestionBtn.png", "id":"nextQuestionBtn_png"},
				{"crossOrigin":true,"src":"assets/images/misc/close_button_off.png", "id":"close_button_off_png"},
				{"crossOrigin":true,"src":"assets/images/misc/close_button_on.png", "id":"close_button_on_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menu_button_off.png", "id":"menu_button_off_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menu_button_on.png", "id":"menu_button_on_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menuTitle.png", "id":"menuTitle_png"},
				{"crossOrigin":true,"src":"assets/images/misc/start_btn_off.png", "id":"start_btn_off_png"},
				{"crossOrigin":true,"src":"assets/images/misc/start_btn_on.png", "id":"start_btn_on_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menu_select/morning_locker.png", "id":"morning_locker_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menu_select/cafeteria.png", "id":"cafeteria_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menu_select/apology.png", "id":"apology_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menu_select/sheepdog.png", "id":"sheepdog_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menu_select/silent_treatment.png", "id":"silent_treatment_png"},
				{"crossOrigin":true,"src":"assets/images/misc/menu_select/choose_ending.png", "id":"choose_ending_png"},
				{"crossOrigin":true,"src":"assets/images/misc/questions_button_on.png", "id":"questions_button_on_png"},
				{"crossOrigin":true,"src":"assets/images/misc/questions_button_off.png", "id":"questions_button_off_png"},
				{"crossOrigin":true,"src":"assets/images/misc/continue_button_on.png", "id":"continue_button_on_png"},
				{"crossOrigin":true,"src":"assets/images/misc/continue_button_off.png", "id":"continue_button_off_png"},
				{"crossOrigin":true,"src":"assets/images/misc/dotted_line.png", "id":"dotted_line_png"},

				{"crossOrigin":true,"src":"assets/images/misc/character_select/bg_character_select.png", "id":"bg_character_select_png"},
				{"crossOrigin":true,"src":"assets/images/misc/character_select/arthur_select.png", "id":"arthur_select_png"},
				{"crossOrigin":true,"src":"assets/images/misc/character_select/buster_select.png", "id":"buster_select_png"},
				{"crossOrigin":true,"src":"assets/images/misc/character_select/sue_ellen_select.png", "id":"sue_ellen_select_png"},
				
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_01.jpg", "id":"sc01_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_03.jpg", "id":"sc01_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_05.jpg", "id":"sc01_05_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_06.jpg", "id":"sc01_06_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_07.jpg", "id":"sc01_07_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_09.jpg", "id":"sc01_09_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_10.jpg", "id":"sc01_10_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_11.jpg", "id":"sc01_11_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_12.jpg", "id":"sc01_12_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_13.jpg", "id":"sc01_13_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_14.jpg", "id":"sc01_14_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01/sc01_15.jpg", "id":"sc01_15_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/arthur_bubble.png", "id":"arthur_bubble_png"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/arthur.png", "id":"arthur_png"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/arthur_selected.png", "id":"arthur_selected_png"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/buster_bubble.png", "id":"buster_bubble_png"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/buster.png", "id":"buster_png"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/buster_selected.png", "id":"buster_selected_png"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/sc01_discussion_1.jpg", "id":"sc01_discussion_1_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02_discuss/sc02_discussion_2.jpg", "id":"sc02_discussion_2_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03_discuss/sc03_discussion_2.jpg", "id":"sc03_discussion_2_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/sc06_discussion_2.jpg", "id":"sc06_discussion_2_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/sue_ellen_bubble.png", "id":"sue_ellen_bubble_png"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/sue_ellen.png", "id":"sue_ellen_png"},
				{"crossOrigin":true,"src":"assets/images/sc01_discuss/sue_ellen_selected.png", "id":"sue_ellen_selected_png"},
				{"crossOrigin":true,"src":"assets/images/sc02_discuss/arthur_bubble.png", "id":"arthur_bubble2_png"},
				{"crossOrigin":true,"src":"assets/images/sc02_discuss/buster_bubble.png", "id":"buster_bubble2_png"},
				{"crossOrigin":true,"src":"assets/images/sc02_discuss/sue_ellen_bubble.png", "id":"sue_ellen_bubble2_png"},
				{"crossOrigin":true,"src":"assets/images/sc03_discuss/arthur_bubble.png", "id":"arthur_bubble3_png"},
				{"crossOrigin":true,"src":"assets/images/sc03_discuss/buster_bubble.png", "id":"buster_bubble3_png"},
				{"crossOrigin":true,"src":"assets/images/sc03_discuss/sue_ellen_bubble.png", "id":"sue_ellen_bubble3_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/arthur_bubble.png", "id":"arthur_bubble6_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/buster_bubble.png", "id":"buster_bubble6_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/sue_ellen_bubble.png", "id":"sue_ellen_bubble6_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/arthur.png", "id":"arthur6_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/buster.png", "id":"buster6_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/sue_ellen.png", "id":"sue_ellen6_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/arthur_selected.png", "id":"arthur6_selected_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/buster_selected.png", "id":"buster6_selected_png"},
				{"crossOrigin":true,"src":"assets/images/sc06_discuss/sue_ellen_selected.png", "id":"sue_ellen6_selected_png"}
			];
			break;

		case "section2":
			resultManifest = [
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_01.jpg", "id":"sc02_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_02.jpg", "id":"sc02_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_03.jpg", "id":"sc02_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_04.jpg", "id":"sc02_04_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_05.jpg", "id":"sc02_05_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_06.jpg", "id":"sc02_06_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_07.jpg", "id":"sc02_07_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_10.jpg", "id":"sc02_10_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_11.jpg", "id":"sc02_11_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_12.jpg", "id":"sc02_12_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_13.jpg", "id":"sc02_13_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc02/sc02_14.jpg", "id":"sc02_14_jpg"}
			];
			break;

		case "section3":
			resultManifest = [
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_01.jpg", "id":"sc03_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_02.jpg", "id":"sc03_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_03.jpg", "id":"sc03_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_04.jpg", "id":"sc03_04_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_05.jpg", "id":"sc03_05_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_06.jpg", "id":"sc03_06_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_07.jpg", "id":"sc03_07_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_08.jpg", "id":"sc03_08_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc03/sc03_09.jpg", "id":"sc03_09_jpg"}
				];
			break;

		case "section4_5_6":
			resultManifest = [
				{"crossOrigin":true,"src":"assets/images/sc04/sc04_01.jpg", "id":"sc04_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc04/sc04_02.jpg", "id":"sc04_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc04/sc04_03.jpg", "id":"sc04_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc04/sc04_04.jpg", "id":"sc04_04_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc04/sc04_05.jpg", "id":"sc04_05_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc04/sc04_06.jpg", "id":"sc04_06_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc04/sc04_07.jpg", "id":"sc04_07_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc04/sc04_09.jpg", "id":"sc04_09_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_01.jpg", "id":"sc05_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_02.jpg", "id":"sc05_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_06.jpg", "id":"sc05_06_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_07.jpg", "id":"sc05_07_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_08.jpg", "id":"sc05_08_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_09.jpg", "id":"sc05_09_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_10.jpg", "id":"sc05_10_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_11.jpg", "id":"sc05_11_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_12.jpg", "id":"sc05_12_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_13.jpg", "id":"sc05_13_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc05/sc05_14.jpg", "id":"sc05_14_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc06/sc06_01.jpg", "id":"sc06_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc06/sc06_02.jpg", "id":"sc06_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc06/sc06_03.jpg", "id":"sc06_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc06/sc06_04.jpg", "id":"sc06_04_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc06/sc06_05.jpg", "id":"sc06_05_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc06/sc06_09.jpg", "id":"sc06_09_jpg"}
			];
			break;

		case "section_7_8":
			resultManifest = [
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_01.jpg", "id":"sc07_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_02.jpg", "id":"sc07_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_03.jpg", "id":"sc07_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_04.jpg", "id":"sc07_04_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_05.jpg", "id":"sc07_05_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_06.jpg", "id":"sc07_06_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_07.jpg", "id":"sc07_07_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_08.jpg", "id":"sc07_08_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_10.jpg", "id":"sc07_10_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_11.jpg", "id":"sc07_11_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_13.jpg", "id":"sc07_13_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_14.jpg", "id":"sc07_14_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_15.jpg", "id":"sc07_15_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_18.jpg", "id":"sc07_18_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_19.jpg", "id":"sc07_19_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_21.jpg", "id":"sc07_21_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc07/sc07_23.jpg", "id":"sc07_23_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_01.jpg", "id":"sc08_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_02.jpg", "id":"sc08_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_03.jpg", "id":"sc08_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_04.jpg", "id":"sc08_04_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_05.jpg", "id":"sc08_05_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_06.jpg", "id":"sc08_06_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_07.jpg", "id":"sc08_07_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_08.jpg", "id":"sc08_08_jpg"},
				{"crossOrigin":true,"src":"assets/images/sc08/sc08_09.jpg", "id":"sc08_09_jpg"}
			];
			break;

		case "chooseEndings":
			resultManifest = [
				{"crossOrigin":true,"src":"assets/images/ending/arthur/arthur_pic.png", "id":"arthur_pic_png"},
				{"crossOrigin":true,"src":"assets/images/ending/shared/footer.png", "id":"select_footer_png"},
				{"crossOrigin":true,"src":"assets/images/ending/shared/sueellen_footer_button.png", "id":"sueellen_footer_button_png"},
				{"crossOrigin":true,"src":"assets/images/ending/shared/buster_footer_button.png", "id":"buster_footer_button_png"},
				{"crossOrigin":true,"src":"assets/images/ending/shared/arthur_footer_button.png", "id":"arthur_footer_button_png"},
				{"crossOrigin":true,"src":"assets/images/ending/shared/go_button_on.png", "id":"go_button_on_png"},
				{"crossOrigin":true,"src":"assets/images/ending/shared/go_button_off.png", "id":"go_button_off_png"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/buster_pic.png", "id":"buster_pic_png"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/sue_ellen_pic.png", "id":"sueellen_pic_png"},

				{"crossOrigin":true,"src":"assets/images/ending/arthur/02_arthur_ending_01.jpg", "id":"arthur_ending02_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/arthur/02_arthur_ending_02.jpg", "id":"arthur_ending02_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/arthur/02_arthur_ending_03.jpg", "id":"arthur_ending02_03_jpg"},
				
				{"crossOrigin":true,"src":"assets/images/ending/arthur/03_arthur_ending_01.jpg", "id":"arthur_ending03_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/arthur/03_arthur_ending_02.jpg", "id":"arthur_ending03_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/arthur/03_arthur_ending_03.jpg", "id":"arthur_ending03_03_jpg"},
				
				{"crossOrigin":true,"src":"assets/images/ending/arthur/04_arthur_ending_01.jpg", "id":"arthur_ending04_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/arthur/04_arthur_ending_02.jpg", "id":"arthur_ending04_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/arthur/04_arthur_ending_03.jpg", "id":"arthur_ending04_03_jpg"},
				
				{"crossOrigin":true,"src":"assets/images/ending/arthur/arthur_best_01.png", "id":"arthur_best_01_png"},
				{"crossOrigin":true,"src":"assets/images/ending/arthur/arthur_best_02.png", "id":"arthur_best_02_png"},
				{"crossOrigin":true,"src":"assets/images/ending/arthur/arthur_best_03.png", "id":"arthur_best_03_png"},

				{"crossOrigin":true,"src":"assets/images/ending/buster/02_buster_ending_01.jpg", "id":"buster_ending02_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/02_buster_ending_02.jpg", "id":"buster_ending02_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/02_buster_ending_03.jpg", "id":"buster_ending02_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/03_buster_ending_01.jpg", "id":"buster_ending03_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/03_buster_ending_02.jpg", "id":"buster_ending03_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/03_buster_ending_03.jpg", "id":"buster_ending03_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/04_buster_ending_01.jpg", "id":"buster_ending04_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/04_buster_ending_02.jpg", "id":"buster_ending04_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/04_buster_ending_03.jpg", "id":"buster_ending04_03_jpg"},
				
				{"crossOrigin":true,"src":"assets/images/ending/buster/buster_best_01.png", "id":"buster_best_01_png"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/buster_best_02.png", "id":"buster_best_02_png"},
				{"crossOrigin":true,"src":"assets/images/ending/buster/buster_best_03.png", "id":"buster_best_03_png"},

				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/02_sue_ellen_ending_01.jpg", "id":"sue_ellen_ending02_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/02_sue_ellen_ending_02.jpg", "id":"sue_ellen_ending02_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/02_sue_ellen_ending_03.jpg", "id":"sue_ellen_ending02_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/03_sue_ellen_ending_01.jpg", "id":"sue_ellen_ending03_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/03_sue_ellen_ending_02.jpg", "id":"sue_ellen_ending03_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/03_sue_ellen_ending_03.jpg", "id":"sue_ellen_ending03_03_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/04_sue_ellen_ending_01.jpg", "id":"sue_ellen_ending04_01_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/04_sue_ellen_ending_02.jpg", "id":"sue_ellen_ending04_02_jpg"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/04_sue_ellen_ending_03.jpg", "id":"sue_ellen_ending04_03_jpg"},
				
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/sue_ellen_best_01.png", "id":"sue_ellen_best_01_png"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/sue_ellen_best_02.png", "id":"sue_ellen_best_02_png"},
				{"crossOrigin":true,"src":"assets/images/ending/sue_ellen/sue_ellen_best_03.png", "id":"sue_ellen_best_03_png"},
				
			];
			break;

	}

	return resultManifest;
}

function loadAudio(){
		// load all audio files -  Note: may need to split the load here as well - 'force':'sm2', 'debug':'console' , 'force':'webkitAudio',  'force':'audioTag', 
		lowLag.init({'debug':'none', 'urlPrefix':'assets/audio/','sm2url':'js/sm2/swf/', 'audioTagTimeToLive':30000});

		lowLag.load(['space.mp3','space.ogg'],'space');
		lowLag.load(['sc01/sc01_01-02.mp3','sc01/sc01_01-02.ogg'],'sc01_01-02');
		lowLag.load(['sc01/sc01_03.mp3','sc01/sc01_03.ogg'],'sc01_03');
		lowLag.load(['sc01/sc01_04-05.mp3','sc01/sc01_04-05.ogg'],'sc01_04-05');
		lowLag.load(['sc01/sc01_06.mp3','sc01/sc01_06.ogg'],'sc01_06');
		lowLag.load(['sc01/sc01_07.mp3','sc01/sc01_07.ogg'],'sc01_07');
		lowLag.load(['sc01/sc01_08-09.mp3','sc01/sc01_08-09.ogg'],'sc01_08-09');
		lowLag.load(['sc01/sc01_10.mp3','sc01/sc01_10.ogg'],'sc01_10');
		lowLag.load(['sc01/sc01_11.mp3','sc01/sc01_11.ogg'],'sc01_11');
		lowLag.load(['sc01/sc01_12.mp3','sc01/sc01_12.ogg'],'sc01_12');
		lowLag.load(['sc01/sc01_13.mp3','sc01/sc01_13.ogg'],'sc01_13');
		lowLag.load(['sc01/sc01_14.mp3','sc01/sc01_14.ogg'],'sc01_14');
		lowLag.load(['sc01/sc01_15-16.mp3','sc01/sc01_15-16.ogg'],'sc01_15-16');

		
		lowLag.load(['sc02/sc02_01.mp3','sc02/sc02_01.ogg'],'sc02_01');
		lowLag.load(['sc02/sc02_02.mp3','sc02/sc02_02.ogg'],'sc02_02');
		lowLag.load(['sc02/sc02_03.mp3','sc02/sc02_03.ogg'],'sc02_03');
		lowLag.load(['sc02/sc02_04.mp3','sc02/sc02_04.ogg'],'sc02_04');		
		lowLag.load(['sc02/sc02_05.mp3', 'sc02/sc02_05.ogg'],'sc02_05');
		lowLag.load(['sc02/sc02_06.mp3', 'sc02/sc02_06.ogg'],'sc02_06');
		lowLag.load(['sc02/sc02_07-08-09.mp3', 'sc02/sc02_07-08-09.ogg'],'sc02_07-08-09');
		lowLag.load(['sc02/sc02_10.mp3', 'sc02/sc02_10.ogg'],'sc02_10');
		lowLag.load(['sc02/sc02_11.mp3', 'sc02/sc02_11.ogg'],'sc02_11');
		lowLag.load(['sc02/sc02_12.mp3', 'sc02/sc02_12.ogg'],'sc02_12');
		lowLag.load(['sc02/sc02_13.mp3', 'sc02/sc02_13.ogg'],'sc02_13');
		lowLag.load(['sc02/sc02_14.mp3', 'sc02/sc02_14.ogg'],'sc02_14');

		lowLag.load(['sc03/sc03_01.mp3','sc03/sc03_01.ogg'],'sc03_01');
		lowLag.load(['sc03/sc03_02.mp3','sc03/sc03_02.ogg'],'sc03_02');
		lowLag.load(['sc03/sc03_03.mp3','sc03/sc03_03.ogg'],'sc03_03');
		lowLag.load(['sc03/sc03_04.mp3','sc03/sc03_04.ogg'],'sc03_04');
		lowLag.load(['sc03/sc03_05-06.mp3','sc03/sc03_05-06.ogg'],'sc03_05-06');
		lowLag.load(['sc03/sc03_07.mp3','sc03/sc03_07.ogg'],'sc03_07');
		lowLag.load(['sc03/sc03_08.mp3','sc03/sc03_08.ogg'],'sc03_08');
		lowLag.load(['sc03/sc03_09.mp3','sc03/sc03_09.ogg'],'sc03_09');

		lowLag.load(['sc04/sc04_01.mp3','sc04/sc04_01.ogg'],'sc04_01');
		lowLag.load(['sc04/sc04_02.mp3','sc04/sc04_02.ogg'],'sc04_02');
		lowLag.load(['sc04/sc04_03.mp3','sc04/sc04_03.ogg'],'sc04_03');
		lowLag.load(['sc04/sc04_04.mp3','sc04/sc04_04.ogg'],'sc04_04');
		lowLag.load(['sc04/sc04_05.mp3','sc04/sc04_05.ogg'],'sc04_05');
		lowLag.load(['sc04/sc04_06.mp3','sc04/sc04_06.ogg'],'sc04_06');
		lowLag.load(['sc04/sc04_07.mp3','sc04/sc04_07.ogg'],'sc04_07');
		lowLag.load(['sc04/sc04_08.mp3','sc04/sc04_08.ogg'],'sc04_08');

		lowLag.load(['sc05/sc05_01.mp3','sc05/sc05_01.ogg'],'sc05_01');
		lowLag.load(['sc05/sc05_02-05.mp3','sc05/sc05_02-05.ogg'],'sc05_02-05');
		lowLag.load(['sc05/sc05_06.mp3','sc05/sc05_06.ogg'],'sc05_06');
		lowLag.load(['sc05/sc05_07.mp3','sc05/sc05_07.ogg'],'sc05_07');
		lowLag.load(['sc05/sc05_08.mp3','sc05/sc05_08.ogg'],'sc05_08');
		lowLag.load(['sc05/sc05_09a.mp3','sc05/sc05_09a.ogg'],'sc05_09a');
		lowLag.load(['sc05/sc05_09b.mp3','sc05/sc05_09b.ogg'],'sc05_09b');
		lowLag.load(['sc05/sc05_10.mp3','sc05/sc05_10.ogg'],'sc05_10');
		lowLag.load(['sc05/sc05_11.mp3','sc05/sc05_11.ogg'],'sc05_11');
		lowLag.load(['sc05/sc05_12.mp3','sc05/sc05_12.ogg'],'sc05_12');
		lowLag.load(['sc05/sc05_13.mp3','sc05/sc05_13.ogg'],'sc05_13');
		lowLag.load(['sc05/sc05_14.mp3','sc05/sc05_14.ogg'],'sc05_14');

		lowLag.load(['sc06/sc06_01.mp3','sc06/sc06_01.ogg'],'sc06_01');
		lowLag.load(['sc06/sc06_02.mp3','sc06/sc06_02.ogg'],'sc06_02');
		lowLag.load(['sc06/sc06_03.mp3','sc06/sc06_03.ogg'],'sc06_03');
		lowLag.load(['sc06/sc06_04.mp3','sc06/sc06_04.ogg'],'sc06_04');
		lowLag.load(['sc06/sc06_05-08.mp3','sc06/sc06_05-08.ogg'],'sc06_05-08');
		lowLag.load(['sc06/sc06_09.mp3','sc06/sc06_09.ogg'],'sc06_09');

		lowLag.load(['sc07/sc07_01.mp3','sc07/sc07_01.ogg'],'sc07_01');
		lowLag.load(['sc07/sc07_02.mp3','sc07/sc07_02.ogg'],'sc07_02');
		lowLag.load(['sc07/sc07_03.mp3','sc07/sc07_03.ogg'],'sc07_03');
		lowLag.load(['sc07/sc07_04.mp3','sc07/sc07_04.ogg'],'sc07_04');
		lowLag.load(['sc07/sc07_05.mp3','sc07/sc07_05.ogg'],'sc07_05');
		lowLag.load(['sc07/sc07_07.mp3','sc07/sc07_07.ogg'],'sc07_07');
		lowLag.load(['sc07/sc07_08.mp3','sc07/sc07_08.ogg'],'sc07_08');
		lowLag.load(['sc07/sc07_09-10.mp3','sc07/sc07_09-10.ogg'],'sc07_09-10');
		lowLag.load(['sc07/sc07_11.mp3','sc07/sc07_11.ogg'],'sc07_11');
		lowLag.load(['sc07/sc07_12.mp3','sc07/sc07_12.ogg'],'sc07_12');
		lowLag.load(['sc07/sc07_13.mp3','sc07/sc07_13.ogg'],'sc07_13');
		lowLag.load(['sc07/sc07_14.mp3','sc07/sc07_14.ogg'],'sc07_14');
		lowLag.load(['sc07/sc07_15.mp3','sc07/sc07_15.ogg'],'sc07_15');
		lowLag.load(['sc07/sc07_18.mp3','sc07/sc07_18.ogg'],'sc07_18');
		lowLag.load(['sc07/sc07_19.mp3','sc07/sc07_19.ogg'],'sc07_19');
		lowLag.load(['sc07/sc07_20-21.mp3','sc07/sc07_20-21.ogg'],'sc07_20-21');
		lowLag.load(['sc07/sc07_22a.mp3','sc07/sc07_22a.ogg'],'sc07_22a');
		lowLag.load(['sc07/sc07_22.mp3','sc07/sc07_22.ogg'],'sc07_22');

		lowLag.load(['sc08/sc08_01.mp3','sc08/sc08_01.ogg'],'sc08_01');
		lowLag.load(['sc08/sc08_02.mp3','sc08/sc08_02.ogg'],'sc08_02');
		lowLag.load(['sc08/sc08_03.mp3','sc08/sc08_03.ogg'],'sc08_03');
		lowLag.load(['sc08/sc08_04.mp3','sc08/sc08_04.ogg'],'sc08_04');
		lowLag.load(['sc08/sc08_05.mp3','sc08/sc08_05.ogg'],'sc08_05');
		lowLag.load(['sc08/sc08_06.mp3','sc08/sc08_06.ogg'],'sc08_06');
		lowLag.load(['sc08/sc08_07.mp3','sc08/sc08_07.ogg'],'sc08_07');
		lowLag.load(['sc08/sc08_08.mp3','sc08/sc08_08.ogg'],'sc08_08');

		lowLag.load(['discussion/disc-letsseewhathappens.mp3','discussion/disc-letsseewhathappens.ogg'],'disc-letsseewhathappens');
		lowLag.load(['discussion/disc-thinkingintro_header.mp3','discussion/disc-thinkingintro_header.ogg'],'disc-thinkingintro');

		lowLag.load(['discussion/disc1_q1.mp3','discussion/disc1_q1.ogg'],'disc1-q1-whydoyouthinks');
		lowLag.load(['discussion/disc1_q2.mp3','discussion/disc1_q2.ogg'],'disc1-q2-doyouthinksues');
		lowLag.load(['discussion/disc1_q3.mp3','discussion/disc1_q3.ogg'],'disc1-q3-didbusterlikethes');
		lowLag.load(['discussion/disc1_q4.mp3','discussion/disc1_q4.ogg'],'disc1-q4-nowthatweknows');
		lowLag.load(['discussion/disc1-arthur.mp3','discussion/disc1-arthur.ogg'],'disc1_arthur_imgetting');
		lowLag.load(['discussion/disc1-buster-arthurcracks.mp3','discussion/disc1-buster-arthurcracks.ogg'],'disc1_buster_arthurcracks');
		lowLag.load(['discussion/disc1-sueellen-itspretty.mp3','discussion/disc1-sueellen-itspretty.ogg'],'disc1_sueellen_itspretty');

		lowLag.load(['discussion/disc2-arthur.mp3','discussion/disc2-arthur.ogg'],'disc2_arthur_usuallybuster');
		lowLag.load(['discussion/disc2-buster-arthurwasprettyfunny.mp3','discussion/disc2-buster-arthurwasprettyfunny.ogg'],'disc2_buster_arthurwaspretty');
		lowLag.load(['discussion/disc2-sueellen-arthurismaking.mp3','discussion/disc2-sueellen-arthurismaking.ogg'],'disc2_sueellen_arthurismaking');
		lowLag.load(['discussion/disc2_q1.mp3','discussion/disc2_q1.ogg'],'disc2_q1_whydoesarthurkeep');
		lowLag.load(['discussion/disc2_q2.mp3','discussion/disc2_q2.ogg'],'disc2_q2_howdoessueellen');
		lowLag.load(['discussion/disc2_q3.mp3','discussion/disc2_q3.ogg'],'disc2_q3_howdoesbusterfeel');
		lowLag.load(['discussion/disc2_q4.mp3','discussion/disc2_q4.ogg'],'disc2_q4_nowthatweknow');

		lowLag.load(['discussion/disc3_q1.mp3','discussion/disc3_q1.ogg'],'disc3_q1_whydoyou');
		lowLag.load(['discussion/disc3_q2.mp3','discussion/disc3_q2.ogg'],'disc3_q2_howdoyouthink');
		lowLag.load(['discussion/disc3_q3.mp3','discussion/disc3_q3.ogg'],'disc3_q3_whatdoyouthink');
		lowLag.load(['discussion/disc3_q4.mp3','discussion/disc3_q4.ogg'],'disc3_q4_nowthatweknow');
		lowLag.load(['discussion/disc3-arthur-cantsueellentell.mp3','discussion/disc3-arthur-cantsueellentell.ogg'],'disc3_arthur_cantsueellentell');
		lowLag.load(['discussion/disc3-buster-sueellenisupset.mp3','discussion/disc3-buster-sueellenisupset.ogg'],'disc3_buster_sueellenisupset');
		lowLag.load(['discussion/disc3-sueellen-iamsoangry.mp3','discussion/disc3-sueellen-iamsoangry.ogg'],'disc3_sueellen_iamsoangry');

		lowLag.load(['discussion/disc4-arthur-iwrotealetter.mp3','discussion/disc4-arthur-iwrotealetter.ogg'],'disc4_arthur_iwrotealetter');
		lowLag.load(['discussion/disc4-buster-arthursletterwas.mp3','discussion/disc4-buster-arthursletterwas.ogg'],'disc4_buster_arthursletterwas');
		lowLag.load(['discussion/disc4-sueellen-arthurisntstopping.mp3','discussion/disc4-sueellen-arthurisntstopping.ogg'],'disc4_sueellen_arthurisntstopping');
		lowLag.load(['discussion/disc4_q1.mp3','discussion/disc4_q1.ogg'],'disc4_q1_whydoyouthink');
		lowLag.load(['discussion/disc4_q2.mp3','discussion/disc4_q2.ogg'],'disc4-q2-howdoyouthink');
		lowLag.load(['discussion/disc4_q3.mp3','discussion/disc4_q3.ogg'],'disc4-q3-willbusterthinkthat');
		lowLag.load(['discussion/disc4_q4.mp3','discussion/disc4_q4.ogg'],'disc4_q4_nowthatweknow');
		lowLag.load(['discussion/disc1234-header.mp3','discussion/disc1234-header.ogg'],'disc1234_header');

		lowLag.load(['ending/arthur/art-choice1-panel1.mp3','ending/arthur/art-choice1-panel1.ogg'],'art_choice1_panel1');
		lowLag.load(['ending/arthur/art-choice1-panel2.mp3','ending/arthur/art-choice1-panel2.ogg'],'art_choice1_panel2');
		lowLag.load(['ending/arthur/art-choice1-panel3.mp3','ending/arthur/art-choice1-panel3.ogg'],'art_choice1_panel3');
		lowLag.load(['ending/arthur/art-choice2-panel1.mp3','ending/arthur/art-choice2-panel1.ogg'],'art_choice2_panel1');
		lowLag.load(['ending/arthur/art-choice2-panel2.mp3','ending/arthur/art-choice2-panel2.ogg'],'art_choice2_panel2');
		lowLag.load(['ending/arthur/art-choice2-panel3.mp3','ending/arthur/art-choice2-panel3.ogg'],'art_choice2_panel3');
		lowLag.load(['ending/arthur/art-choice3-panel1.mp3','ending/arthur/art-choice3-panel1.ogg'],'art_choice3_panel1');
		lowLag.load(['ending/arthur/art-choice3-panel2.mp3','ending/arthur/art-choice3-panel2.ogg'],'art_choice3_panel2');
		lowLag.load(['ending/arthur/art-choice3-panel3.mp3','ending/arthur/art-choice3-panel3.ogg'],'art_choice3_panel3');
		lowLag.load(['ending/arthur/art-choicescreen.mp3','ending/arthur/art-choicescreen.ogg'],'art_choicescreen');
		lowLag.load(['ending/arthur/art-end-arthurgooddecision.mp3','ending/arthur/art-end-arthurgooddecision.ogg'],'art_arthurgooddecision');
		lowLag.load(['ending/arthur/art-end-nowthatyouveseen.mp3','ending/arthur/art-end-nowthatyouveseen.ogg'],'art_nowthatyouveseen');
		lowLag.load(['ending/arthur/art-end-whatelsearthurdo.mp3','ending/arthur/art-end-whatelsearthurdo.ogg'],'art_whatelsearthurdo');
		

		lowLag.load(['ending/buster/bus-choice1-panel1.mp3','ending/buster/bus-choice1-panel1.ogg'],'bus_choice1_panel1');
		lowLag.load(['ending/buster/bus-choice1-panel2.mp3','ending/buster/bus-choice1-panel2.ogg'],'bus_choice1_panel2');
		lowLag.load(['ending/buster/bus-choice1-panel3.mp3','ending/buster/bus-choice1-panel3.ogg'],'bus_choice1_panel3');
		lowLag.load(['ending/buster/bus-choice2-panel1.mp3','ending/buster/bus-choice2-panel1.ogg'],'bus_choice2_panel1');
		lowLag.load(['ending/buster/bus-choice2-panel2.mp3','ending/buster/bus-choice2-panel2.ogg'],'bus_choice2_panel2');
		lowLag.load(['ending/buster/bus-choice2-panel3.mp3','ending/buster/bus-choice2-panel3.ogg'],'bus_choice2_panel3');
		lowLag.load(['ending/buster/bus-choice3-panel1.mp3','ending/buster/bus-choice3-panel1.ogg'],'bus_choice3_panel1');
		lowLag.load(['ending/buster/bus-choice3-panel2.mp3','ending/buster/bus-choice3-panel2.ogg'],'bus_choice3_panel2');
		lowLag.load(['ending/buster/bus-choice3-panel3.mp3','ending/buster/bus-choice3-panel3.ogg'],'bus_choice3_panel3');
		lowLag.load(['ending/buster/bus-choicescreen.mp3','ending/buster/bus-choicescreen.ogg'],'bus_choicescreen');
		lowLag.load(['ending/buster/bus-end-bustergooddecision.mp3','ending/buster/bus-end-bustergooddecision.ogg'],'bus_bustergooddecision');
		lowLag.load(['ending/buster/bus-end-nowthatyouveseen.mp3','ending/buster/bus-end-nowthatyouveseen.ogg'],'bus_nowthatyouveseen');
		lowLag.load(['ending/buster/bus-end-whatelsebusterdo.mp3','ending/buster/bus-end-whatelsebusterdo.ogg'],'bus_whatelsebusterdo');		

		lowLag.load(['ending/sue_ellen/sue-choice1-panel1.mp3','ending/sue_ellen/sue-choice1-panel1.ogg'],'sue_choice1_panel1');
		lowLag.load(['ending/sue_ellen/sue-choice1-panel2.mp3','ending/sue_ellen/sue-choice1-panel2.ogg'],'sue_choice1_panel2');
		lowLag.load(['ending/sue_ellen/sue-choice1-panel3.mp3','ending/sue_ellen/sue-choice1-panel3.ogg'],'sue_choice1_panel3');
		lowLag.load(['ending/sue_ellen/sue-choice2-panel1.mp3','ending/sue_ellen/sue-choice2-panel1.ogg'],'sue_choice2_panel1');
		lowLag.load(['ending/sue_ellen/sue-choice2-panel2.mp3','ending/sue_ellen/sue-choice2-panel2.ogg'],'sue_choice2_panel2');
		lowLag.load(['ending/sue_ellen/sue-choice2-panel3.mp3','ending/sue_ellen/sue-choice2-panel3.ogg'],'sue_choice2_panel3');
		lowLag.load(['ending/sue_ellen/sue-choice3-panel1.mp3','ending/sue_ellen/sue-choice3-panel1.ogg'],'sue_choice3_panel1');
		lowLag.load(['ending/sue_ellen/sue-choice3-panel2.mp3','ending/sue_ellen/sue-choice3-panel2.ogg'],'sue_choice3_panel2');
		lowLag.load(['ending/sue_ellen/sue-choice3-panel3.mp3','ending/sue_ellen/sue-choice3-panel3.ogg'],'sue_choice3_panel3');
		lowLag.load(['ending/sue_ellen/sue-choicescreen.mp3','ending/sue_ellen/sue-choicescreen.ogg'],'sue_choicescreen');
		lowLag.load(['ending/sue_ellen/ending_d3_sueellen_whatelse.mp3','ending/sue_ellen/ending_d3_sueellen_whatelse.ogg'],'sue_whatelsesuedo');

		lowLag.load(['ending/ending_a_explore.mp3','ending/ending_a_explore.ogg'],'ending_a_explore');
		lowLag.load(['ending/ending_c_ending.mp3','ending/ending_c_ending.ogg'],'ending_c_ending');

		lowLag.load(['ending/ending_e_whichending.mp3','ending/ending_e_whichending.ogg'],'ending_e_whichending');
		lowLag.load(['ending/ending_f_letssee.mp3','ending/ending_f_letssee.ogg'],'ending_f_letssee');
		lowLag.load(['ending/ending_arthur_ending.mp3','ending/ending_arthur_ending.ogg'],'ending_arthur_ending');
		lowLag.load(['ending/ending_buster_ending.mp3','ending/ending_buster_ending.ogg'],'ending_buster_ending');
		lowLag.load(['ending/ending_sueellen_ending.mp3','ending/ending_sueellen_ending.ogg'],'ending_sueellen_ending');


}