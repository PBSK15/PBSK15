function getPlayerSettings()
{
	 var configObj = {};
	 configObj.releaseEndIndex = 150;
	 configObj.controlLayoutURL = "http://pbskids.org/producerplayer/data/metaLayout-KidsPreschool.xml";
	 configObj.playerSkinURL = "http://www-tc.pbskids.org/producerplayer/swf/skins/skinKidsPreschool.swf";
	 configObj.playerColorScheme =
	 "<colorschemes>"+
	 "<player>"+
		"<backgroundColor>0xef5223</backgroundColor>"+
		"<frameColor>0xFFFFFF</frameColor>"+
		"<controlColor>0xef5223</controlColor>"+
		"<controlBackgroundColor>0xffea79</controlBackgroundColor>"+
		"<controlFrameColor>0x8bd7d6</controlFrameColor>"+
		"<controlHighlightColor>0xfc987b</controlHighlightColor>"+
		"<controlHoverColor>0xfc987b</controlHoverColor>"+
		"<controlSelectedColor>0xF6AE00</controlSelectedColor>"+
		"<loadProgressColor>0xB6CECE</loadProgressColor>"+
		"<playProgressColor>0x9AB5B4</playProgressColor>"+
		"<scrubberColor>0xFFFFFF</scrubberColor>"+
		"<scrubTrackColor>0x8bd7d6</scrubTrackColor>"+
		"<textBackgroundColor>0xFFED1B</textBackgroundColor>"+
		"<textColor>0x9bdef7</textColor>"+
		"<subtitlesBackgroundColor>0x000000</subtitlesBackgroundColor>"+
	 "</player>"+
	 "</colorschemes>";

	 configObj.releaseListSkinURL = "http://www-tc.pbskids.org/producerplayer/swf/skins/skinKidsPreschool.swf";
	 configObj.releaseListColorScheme =
	 "<colorschemes>"+
	 "<releaseList>"+
		"<backgroundColor>0xffea79</backgroundColor>"+
		"<frameColor>0xffea79</frameColor>"+
		"<itemBackgroundColor>0x8bd7d6</itemBackgroundColor>"+
		"<itemBackground2Color>0x8bd7d6</itemBackground2Color>"+
		"<itemBackgroundHoverColor>0xaff0ef</itemBackgroundHoverColor>"+
		"<itemBackgroundSelectedColor>0xef5223</itemBackgroundSelectedColor>"+
		"<itemFrameColor>0x8bd7d6</itemFrameColor>"+
		"<textColor>0x1b7675</textColor>"+
		"<text2Color>0x1b7675</text2Color>"+
		"<textFrameColor>0xFFFFFF</textFrameColor>"+
		"<textHoverColor>0xFFFFFF</textHoverColor>"+
		"<textSelectedColor>0x66210c</textSelectedColor>"+
		"<thumbnailFrameColor>0xFFFFFF</thumbnailFrameColor>"+
		"<thumbnailFrameColor>0xFFFFFF</thumbnailFrameColor>"+
		"<scrollButtonColor>0xef5223</scrollButtonColor>"+
		"<scrollIconColor>0xffea79</scrollIconColor>"+
		"<scrollThumbColor>0x99CC00</scrollThumbColor>"+
		"<scrollTrackColor>0xffea79</scrollTrackColor>"+
	 "</releaseList>"+
	 "</colorschemes>";

	 configObj.dockBanner = "false";
	 configObj.dockReleaseList = "right";
	 configObj.aspectRatio = "16:9";
	 configObj.playerPaddingTop = 20;
	 configObj.playerPaddingLeft = 20;
	 configObj.releaseListWidth = 300;
	 configObj.releaseListHeight = 400;
	 configObj.releaseListPaddingTop = 0;
	 configObj.releaseListPaddingLeft = 70;
	 configObj.containerWidth = 900;
	 configObj.containerHeight = 455;
	 configObj.releaseCols = 1;
	 configObj.autoPlay = "true";
	 return configObj;
}

function getProducerPlayer(){ // Get Instance of ProducerPlayer.swf
        var isIE = navigator.appName.indexOf("Microsoft") != -1;   
        return (isIE) ? window["ProducerPlayer"] : document["ProducerPlayer"];  
}


function changeChannel(channel, imagePath) {
	var btnAll = document.getElementById("btnAll");
	var btnFull = document.getElementById("btnFull");
	var btnClips = document.getElementById("btnClips");
	var btnMusic = document.getElementById("btnMusic");
	var btnImagination = document.getElementById("btnImagination");

	btnAll.src = imagePath + "btnAll.png";
	btnFull.src = imagePath + "btnEpisodes.png";
	btnClips.src = imagePath + "btnClips.png";
	btnMusic.src = imagePath + "btnMusic.png";
	btnImagination.src = imagePath + "btnImagination.png";
	
	switch(channel) {
		case "all" : 
			 getProducerPlayer().refreshReleaseList();
			 btnAll.src = imagePath + "btnAllActive.png";
			 break;
		case "fullepisodes" : 
			 getProducerPlayer().refreshReleaseList(null, null, null, null, "false", null);
			 btnFull.src = imagePath + "btnEpisodesActive.png";
			 break;
		case "clips" : 
			 getProducerPlayer().refreshReleaseList(null, null, null, null, "true", null);
			 btnClips.src = imagePath + "btnClipsActive.png";
			 break;
		case "music" : 
			 getProducerPlayer().refreshReleaseList(null, null, "danielmusic");
			 btnMusic.src = imagePath + "btnMusicActive.png";
			 break;
		case "imagination" : 
			 getProducerPlayer().refreshReleaseList(null, null, "danielimagination");
			 btnImagination.src = imagePath + "btnImaginationActive.png";
			 break;
	}
}