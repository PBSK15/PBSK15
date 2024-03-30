/**
 * @author Dennis Biron
 * spanish language version, added 5/2013
 */

// consoleLogger function - display debug text via browser console
function consoleLogger(message){
	if(console){
		console.log(message);
	}
}


// get instance of tracker and push event up
var trackerCall;  

sendTrackingCall = function(trackData){
	var event_id = -1;
	event_id = getEventID(trackData.event_code);

	var eventData = {
    'game_id': 'babd4d8d-15a9-4493-97d4-269515e03f86',
   	'event_id' : event_id,
    'event_data': trackData
	}
	
	if (trackerCall === undefined) {
	  trackerCall = PBS.KIDS.tracker.init();
	  trackerCall.setTracking(true);
	}
	trackerCall.pushEvent(eventData);
	
	// debug
	//consoleLogger("eventData : " + eventData);
	
}

function getEventID(eventCode){
	var eventID;
	
	switch(Number(eventCode)){
		case 2000: // Start Game
			eventID = '55eb72f4-326b-40c4-b394-d9475c27d4e7';
		break;
		
		case 2020: // Start Round
			eventID = 'c522bad5-9a48-401d-a643-66a92a34c6bb';
		break;
		
		case 2030: // Beat Round
			eventID = 'db41a066-ec84-4d66-9f11-eea592b310c2';
		break;
		
		case 2040: // Start Level
			eventID = '0263adf9-c368-43cc-bdab-775f86255496';
		break;
		
		case 2050: // Beat Level
			eventID = '380b548b-0c45-4412-bc11-020f00f906c8';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '0036063a-73cc-4bc8-bca5-2200b58363c0';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '4e1065e1-7880-4a67-99a6-103bf04a6d9c';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '59232cbc-f178-491e-a94d-66210d50c25d';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = 'b2b32472-fd36-4533-bb2f-83e013a74848';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'b513fe75-ebc0-4ee7-9c76-b5f14544b67a';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'a1ba80d3-033c-46af-89bd-7fd5815944ef';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '1bb60a93-c8d9-4e8b-8e3f-0c74ec16f109';
		break;
		
		case 4020: // Fires when a hand is painted.
			eventID = '9a97c3ee-3a8f-4f49-af4f-452e9ce1c40b';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'a78f7869-e85f-484c-b17f-085c7c44caea';
		break;
		
		case 4280: // Fires when the trash is clicked.
			eventID = '28a6bc78-a061-4143-9c70-e42ae75c1856';
		break;

		case 4281: // Fires when delete is confirmed.
			eventID = '49bbc1f4-1ff8-47a0-9083-9c265aeb429d';
		break;

		case 4282: // Fires when delete is canceled.
			eventID = '240c01be-a987-4bca-8852-8c57a3a4082f';
		break;

		case 4091: // Fires when the PLAY button is clicked.
			eventID = '1b8b455f-e640-40d4-a443-7299b6340915';
		break;

		case 4092: // Fires when STOP button is clicked.
			eventID = '2c1bea12-2d0f-4ef6-91bc-e4d41c5f9596';
		break;
		
		default:
			eventID = -1;
			consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}