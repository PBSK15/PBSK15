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
    'game_id': '47270b0a-4dbc-467f-81b7-e7d23f9b0144',
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
			eventID = '8dcc814f-18b8-4698-9389-14dee8b6a688';
		break;
		
		case 2020: // Start Round
			eventID = 'f6e08c81-b0f0-4c06-9f5a-f37e4986c1a7';
		break;
		
		case 2030: // Beat Round
			eventID = '1bc2e754-a392-47fc-a242-d6bea18a5037';
		break;
		
		case 2040: // Start Level
			eventID = '3a8f4189-8381-41c5-98f1-a41aa13e0199';
		break;
		
		case 2050: // Beat Level
			eventID = '6d529636-e5be-4818-b766-5aeea0a7a8e8';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '4b996080-bbc3-4a2f-ae8c-3d35bcc68b0e';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'b0b78b0b-30d0-425b-9c62-e56c8e722574';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '05e8971c-99a5-496b-8795-911593096d64';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '2b7e91bb-126c-494f-a711-fb76a4a58ddf';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'd8d21716-fb69-41b9-a8d1-e61037aeccba';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '59526f61-aa65-488c-83ac-3b03d2ef0069';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '6f06c963-ff65-4ed9-bf89-edc05d17a388';
		break;
		
		case 4090: // Clicked on Help
			eventID = '8fbc8e60-80f2-49dc-a1f7-2e5c535b7a90';
		break;
		
		case 4120: // found Number
			eventID = 'ece98559-b4da-4ce6-a665-87a529bd8112';
		break;
		
		case 4130: // Found Word
			eventID = 'cba51b9b-c57a-4dd0-9a7b-4c7f0f62d444';
		break;
		
		case 4140: // Found Object
			eventID = '683bb16c-758e-4903-b750-7bf295d7f2e7';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}
