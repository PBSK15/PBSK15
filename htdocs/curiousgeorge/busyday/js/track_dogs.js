/**
 * @author WGBH - Dennis Biron
 * @descript track_dogs.js - progress tracking from dogs - fair shares
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
	
	eventData = {
    'game_id': 'a97b460e-51d1-4669-8b07-df8c487bc36e',
    'event_id' : event_id,
    'event_data': trackData
	}
	
	// debug
	//consoleLogger("event_id : " + event_id);

	if (trackerCall === undefined) {
	  trackerCall = PBS.KIDS.tracker.init();
	  trackerCall.setTracking(true);
	}
	trackerCall.pushEvent(eventData);
	
}

function getEventID(eventCode){
	var eventID;
	
	switch(Number(eventCode)){
		case 2000: // Start Game
			eventID = 'd30137a0-26d6-4ff1-bb3d-221d05cc79ec';
		break;
		
		case 2020: // Start Round
			eventID = 'fb524bef-d5a8-4c6f-abc9-60eaa20f5de8';
		break;
		
		case 2030: // Beat Round
			eventID = '4d6153bd-dbc4-45a9-9f83-d770ab1c1770';
		break;
		
		case 2040: // Start Level
			eventID = '20286641-4d1d-47eb-896e-a601662f0cc4';
		break;
		
		case 2050: // Beat Level
			eventID = '810f1d8d-1e75-4b85-a03f-e2e860f69137';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = 'f601976b-bb3c-43c9-a327-97f1ba966592';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'e33ca296-06e6-4c6d-a120-5637774b7aaf';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'e6d59e9a-982b-4ce1-b14d-584f19ffdb0d';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '3d6eca52-3783-4fab-a6c8-213acae6b1bb';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'b805b7a5-ccb8-42a1-8095-f49d297196d0';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '6db0b433-c84a-4918-ab45-e3ecd1fa489e';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'b8521113-249e-494d-aa97-69133c36f95c';
		break;
		
		case 4020: // treat selected
			eventID = '1d48d060-0734-4082-80e1-89a3c7644e04';
		break;
		
		case 4030: // treat dropped
			eventID = 'd9f8471e-1020-436e-91f0-4f51ba7705ed';
		break;
		
		case 4090: // Clicked on Help
			eventID = '4d6f216a-df5c-45f6-aa22-8e4a8388b5e3';
		break;
		
		case 4100: // Clicked on Whistle
			eventID = 'a7145bf1-6845-4ae5-8271-b875e519aabc';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}