
function get_qs(){
    var url = location.search;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}

var missionobj;
var missionfname;
var missionid;
var lastmission;
var missionset=miss['missions'];


var types={'Backyard Mission':'backyard','Jungle Mission':'jungle','Mangrove Mission':'mangrove','Mountain Mission':'mountain','Desert Mission':'desert','Outdoor Mission':'desert'};

function setMission(which) {
		missionobj=null;
		var picked;
		if(which && which!=='undefined') {
			var c=0;
			for(w in missionset) {
				if(which==missionset[w]['id']) {
					missionobj=missionset[w];
					picked=c;
				}
				c++;
			}
		
//			missionobj=allmissions[which];
//			thismission='mission_' + which;
//			picked=which;

			lastmission=picked;
			}
		
		if(missionobj==null)
		{
			if(lastmission!=null) {
				lastmission=(lastmission+1<missionset.length)?lastmission+1:0;
			} else {
				lastmission=parseInt(missionset.length * Math.random());
			}
			
			missionobj=missionset[lastmission];
		}
		
		
		missionid=missionobj['id'];
		missionfname=missionobj['filename'];


			// if there's no username, then what?
		var mimg=missionobj['filename'];
		var mtag=missionobj['tag'];
		var mtype=types[mtag];
		var mdesc=missionobj['web_text'];

		var mtitle=missionobj['title'];
		var tmpimg=new Image();
		var msrc='/plumlanding/pictures/i/'+mimg+'.png';
		
		if(missionobj['web_text2']) {
			mdesc=missionobj['web_text2'];
			msrc='/plumlanding/pictures/i/'+mimg+'.jpg';
		}
		
		var mtext="<h6 class=\"missiontype\">"+mtag+"</h6>\n<h3>"+mtitle+"</h3>\n<p class=\"small\">"+mdesc+"</p>";
		
		$("#missionbox .missioninfo").html(mtext);
		var $mimg=$("#missionbox .missionimg img");
		$mimg.attr('src','/plumlanding/pictures/i/mission_blank.png');
		//$("#missionbox .missionimg img").hide();
		$mimg.removeClass();
		$mimg.addClass(mtype + 'icon image-fluid');


		
		tmpimg.onload=function() {
			$mimg.attr('src',msrc);
			$mimg.show();
		}
		tmpimg.src=msrc;
	}

var urlmission=get_qs()['m'];