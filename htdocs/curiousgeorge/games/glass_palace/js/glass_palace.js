var level = 2;
var num_windows  = 15;
var min_num = 11;
var max_num = 99;
var find_num;
var dirty_windows;
var window_min_num;
var global_var;

 ////////////  ////////////  ////////////  ////////////

function newBoard() {
	
	cleanUpWindows();

	// show board
	document.getElementById('cgi-gamespace').style.display = 'block';
	document.getElementById('cgi-gamespace-po').style.display = 'none';
	
	// hide payoff
	document.getElementById('find_num').style.visibility = 'hidden';
	document.getElementById('po-btn-img').style.visibility = 'hidden';
	document.getElementById('myh').style.visibility = 'hidden';
	
	window_min_num=Math.floor(Math.random()*(max_num+2));
	
	// dont let window_min_num go below min_num and above max_num
	window_min_num < min_num ? window_min_num = min_num : '';
	window_min_num > max_num - 15 ? window_min_num = max_num - 15 : '';
	
	// starting with the random number, assign a number to each window	
	var wdColl = document.getElementsByClassName("wd");
	
	// choose a number to look for
	find_num = randNum(window_min_num, window_min_num + (num_windows - 1));

	// load the number we're looking for under the "find" heading
	document.getElementById('find_num').setAttribute('src', '/curiousgeorge/games/glass_palace/img/target_' + find_num + '.gif');
	document.getElementById('find_num').style.visibility = 'hidden'; // hide it


 	// make a list from 1 thru the total number of windows
 	// we'll use this to assign dirty windows later
 	dirty_windows = [];
 	for (var i = 1; i<=num_windows; i++) {
		dirty_windows.push(i);
 	}

	// put a consecutive number in each window
	for (var i = 0; i<15; i++) {	
		document.getElementById(wdColl[i].id).style.backgroundImage='url(/curiousgeorge/games/glass_palace/img/window_' + (window_min_num + i) + '.gif)';

		// if this window contains the correct answer, put a dirty window over it
		// note: this is the id of the correct answer
		if (find_num == window_min_num + i) {
			document.getElementById(wdColl[i].id).innerHTML = '<a href="#" onclick="washIt(parentNode.id); return false;"><img src="img/window_dirty_sm.gif" alt="" width="60" height="70" /></a>';
			document.getElementById(wdColl[i].id).setAttribute('correct', 1);
			var this_wd = wdColl[i].id.substring(3);
			
			// pull this w/d out of the dirty windows array
			dirty_windows.splice(this_wd -1, 1);
		}

	}

	dirtyUpWindows();  // add dirty windows
	
	// fade in find number
	setTimeout("initImage('find_num')",2000);

}

 ////////////  ////////////  ////////////  ////////////

function washIt(thisWindow) {
	// make this global so we can use it in setTimeout
	global_var = thisWindow;

	// wash the window	
	document.getElementById(thisWindow).getElementsByTagName("img")[0].setAttribute('src', '/curiousgeorge/games/glass_palace/img/window_dirty_wash_sm.gif');
	
	// CORRECT
	if (document.getElementById(thisWindow).getAttribute('correct') == 1) {
		level < num_windows - 1 ? level++ : '';
		//newBoard();
		//document.getElementById('bldg').style.display = 'none';
		document.getElementById('po-num-img').setAttribute('src', '/curiousgeorge/games/glass_palace/img/payoff_' + find_num + '.gif');		
		setTimeout("document.getElementById('cgi-gamespace').style.display = 'none'",1500);  // hide game area
		setTimeout("document.getElementById('cgi-gamespace-po').style.display = 'block'",1500);  // show payoff area
		setTimeout("initImage('po-btn-img')",3000);  // fade in more button
	}
	
	// INCORRECT
	else {
		// show myh
		document.getElementById('myh').style.visibility = 'visible';		
		setTimeout("document.getElementById('myh').setAttribute('src', '/curiousgeorge/games/glass_palace/img/myh_try_again.gif')",750);
	
		// disable href and dirty w/d animation after it's clicked
		setTimeout("document.getElementById(global_var).innerHTML = '&nbsp;'",1000);
	}
	
	
}

 ////////////  ////////////  ////////////  ////////////
 
 function dirtyUpWindows() {
 	
  	// assign each one randomly to a window using the window id (wd-1, wd-2, etc)
 	// add an href around the dirty window image with an onclick event handler
 	
 	dirty_windows.shuffle();
	
 	for (var i = 0; i<level-1; i++) {
 		var wd_id = dirty_windows[i];
 		wd_id = 'wd-' + wd_id;
		document.getElementById(wd_id).innerHTML = '<a href="#" onclick="washIt(parentNode.id); return false;"><img src="img/window_dirty_sm.gif" alt="" width="60" height="70" /></a>';
		document.getElementById(wd_id).setAttribute('correct', 0);
 	
 	}
 
 }

////////////  ////////////  ////////////  ////////////

 function cleanUpWindows() {
 	
  	// assign each one randomly to a window using the window id (wd-1, wd-2, etc)
 	// add an href around the dirty window image with an onclick event handler
 	
 	for (var i = 1; i<=num_windows; i++) {

 		wd_id = 'wd-' + i;
		document.getElementById(wd_id).innerHTML = '&nbsp;';
 	}
 
 }

////////////  ////////////  ////////////  ////////////

function initImage(imageId) {
	image = document.getElementById(imageId);
	setOpacity(image, 0);
	image.style.visibility = 'visible';
	//fadeIn(imageId, 0);
	setTimeout("fadeIn('"+imageId+"',"+0+")", 100);  // delay a moment to let image load
}

////////////  ////////////  ////////////  ////////////

function fadeIn(objId,opacity) {
  if (document.getElementById) {
    obj = document.getElementById(objId);
    if (opacity <= 100) {
      setOpacity(obj, opacity);
      opacity += 10;
      window.setTimeout("fadeIn('"+objId+"',"+opacity+")", 100);
    }
  }
}

////////////  ////////////  ////////////  ////////////

function setOpacity(obj, opacity) {
  opacity = (opacity == 100)?99.999:opacity;
  
  // IE/Win
  obj.style.filter = "alpha(opacity:"+opacity+")";
  
  // Safari<1.2, Konqueror
  obj.style.KHTMLOpacity = opacity/100;
  
  // Older Mozilla and Firefox
  obj.style.MozOpacity = opacity/100;
  
  // Safari 1.2, newer Firefox and Mozilla, CSS3
  obj.style.opacity = opacity/100;
}

////////////  ////////////  ////////////  ////////////

document.getElementsByClassName = function(cl) {
	 var retnode = [];
	 var myclass = new  RegExp('\\b'+cl+'\\b');
	 var elem = this.getElementsByTagName('*');
	 for (var i = 0; i < elem.length; i++) {
	 var classes = elem[i].className;
	 if (myclass.test(classes))  retnode.push(elem[i]);
	 }
	 return retnode;
 };

 ////////////  ////////////  ////////////  ////////////

// get a random number between a range

function randNum(min, max) {
   var randomNum = Math.floor(Math.random()*(max-min+1))+min;
   return randomNum;
}


////////////  ////////////  ////////////  ////////////

//////////////////////////////////////////////////////
// Extend array object to include a shuffle function
Array.prototype.shuffle = function(){
  var len = this.length;
  var rand,temp,i;
  for (i = 0; i < len; i++){
    rand = Math.floor(Math.random()*len);
    temp = this[i];
    this[i] = this[rand];
    this[rand] = temp;
  }
}
