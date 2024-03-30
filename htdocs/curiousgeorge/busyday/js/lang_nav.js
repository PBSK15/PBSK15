/////////////////////////////////////////////////////////////////////////
//                                                                     
//  Curious George Busy Day
//
//  Copyright © 2013 WGBH Interactive                                 
//  WGBH Educational Foundation                                        
//  Kal Gieber, developer                                        
//                                                                     
//  Manages playback navigation between english and spanish versions 
//  of the busy day pages.
//
/////////////////////////////////////////////////////////////////////////

	// open page in other language
	function switchLanguageVersion(){
		var currLoc=window.location.href.toString();
		var newLoc="";
		var frPt=currLoc.lastIndexOf("/");
		var slPt=currLoc.lastIndexOf("/", (frPt-1));
		var midsect=currLoc.substring(slPt+1,frPt);
		// check to see if this is a main level page
		if(midsect=="busyday"){
			// use the last slash as reference point
			slPt=frPt;
		}
		++slPt;
		// determine new location
		if(currLoc.indexOf("span_")!=-1){
			// this is spanish page, go to english version
			newLoc=currLoc.substring(0,(slPt))+currLoc.slice(slPt+5);
		}
		else{
			// this is english page, go to spanish version
			if(slPt==currLoc.length){
				newLoc=currLoc.substring(0,slPt)+"span_index.html";
			}
			else{
				newLoc=currLoc.substring(0,slPt)+"span_"+currLoc.slice(slPt);
			}			
		}
		window.location.href=newLoc;
	}
	
