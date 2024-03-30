/**
 * @author Dennis Biron
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
    'game_id': '06f90155-80e6-4c4a-93d0-da0cd03c02e2',
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
			eventID = '08638d09-55c1-4cd8-b0b9-ed079ed2ee26';
		break;
		
		case 2020: // Start Round
			eventID = '35d7036d-af56-4f8e-b06b-da715f019990';
		break;
		
		case 2030: // Beat Round
			eventID = '5b37efe5-bddc-48c6-b8b4-4c008de66b5d';
		break;
		
		case 2040: // Start Level
			eventID = '756ba115-e812-4d18-ac72-81972f31b133';
		break;
		
		case 2050: // Beat Level
			eventID = '97db4a30-1991-4b34-9ddd-f249bde8e28e';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '56d5a583-ff6b-48f0-850e-09b7cf1e0dc6';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '2e7cbe66-98f1-483f-b1fb-c6b3ae3b6bce';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'd1f2ec26-a486-44c1-8761-a8f5932ee3a7';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = 'eff9e5bc-f2dc-497d-ae9c-e90414906d9f';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '38d9d596-1093-482d-87ab-d80eef3809ec';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '8082dfbe-6561-4d79-a244-d8ac84284244';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'dd6d1447-5397-4730-a618-55bf65ef4606';
		break;
		
		case 4020: // clicked flower
			eventID = 'c8adbc3a-3df8-4a12-b81c-19d19106d59f';
		break;
		
		case 4090: // Clicked on Help
			eventID = '0a8cfac4-6a6d-41b3-815a-48998ea17c72';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}