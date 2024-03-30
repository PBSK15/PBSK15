/**
 * @author Dennis Biron
 * spanish language version, added 5/2013
 */

// get instance of tracker and push event up
var trackerCall;  

function consoleLogger(message){
	if(console){
		console.log(message);
	}
}

sendTrackingCall = function(trackData){
	var event_id = -1;
	event_id = getEventID(trackData.event_code);
	
	eventData = {
    'game_id': 'be503222-645e-4bb5-8c4f-1e4e9b747fba',
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
			eventID = '8b543567-1695-4f8a-879a-e9b6f8f6f493';
		break;
		
		case 2020: // Start Round
			eventID = 'eecb7ce9-c1f7-4679-b912-17428f558827';
		break;
		
		case 2030: // Beat Round
			eventID = 'e8071204-3407-4f2c-b865-a3fc2dd3a440';
		break;
		
		case 2040: // Start Level
			eventID = '20a009b7-d492-4c9e-831e-0b16cd0c09d1';
		break;
		
		case 2050: // Beat Level
			eventID = '3523fb6d-e87e-4ac1-b8fd-f950ce2657f5';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '6cdb491f-137b-4b74-a6c7-268fc8734f81';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '03a878a6-83f2-4641-bb36-a383679ff41e';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '06c2c3cd-dbe3-4471-aaba-9640923623fc';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '734b0bc7-cd8b-4426-8882-50d50f84fd70';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '2c3ec854-78a0-4511-b4c0-637a6ee10d2d';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '050102c1-d6b1-4f4b-9718-dc474a115147';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'e5edd065-2eda-4d02-87b4-da8fb5e2d877';
		break;
		
		case 4020: // clicked flower
			eventID = '9b2f33f3-13ad-4132-aa29-00bc656b686b';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'ae3e18c8-77ea-4d9f-9cf1-b7f1416b306d';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}