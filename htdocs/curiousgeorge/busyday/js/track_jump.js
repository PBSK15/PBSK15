/**
 * @author Dennis Biron
 */

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
    'game_id': '159ae792-1faa-48cd-979d-0c3b1f86df2e',
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
			eventID = '03c8ea94-1014-47e9-bb46-2f990b311a85';
		break;
		
		case 2020: // Start Round
			eventID = '7e615bbe-6a9c-4a3d-85ae-19f337b63652';
		break;
		
		case 2030: // Beat Round
			eventID = '7a8b2980-35f0-4b82-a395-5b53ec0666f2';
		break;
		
		case 2040: // Start Level
			eventID = 'bfe36403-30c3-4b9e-bb72-81991c220641';
		break;
		
		case 2050: // Beat Level
			eventID = 'ed0360ea-dbe8-4502-a3e1-144910aa6f2f';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '8c82bfdd-8573-4fa7-a523-2d6b44845ac7';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'c98a07e6-d390-49de-9beb-22442339f04f';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '7a0d5ad6-29ad-46b2-b5e0-33f8eb60b1ba';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = 'be3c160c-b51c-425f-ac28-1a4e6107f9bc';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '56593993-1527-4889-944a-a74398c66e16';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '27d75ad1-82d5-4be8-8f27-da1f98924bd4';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '5e40d178-be58-49df-ab19-7ff1dc08f51c';
		break;
		
		case 4020: // added ball
			eventID = 'de36f12a-6f0f-4f26-bd1b-fe50ddb0e893';
		break;
		
		case 2060: // Answered camera question
			eventID = '4dc5115d-e0e4-4a10-8b94-24c8bf885f06';
		break;
		
		case 4090: // Clicked on Help
			eventID = '4d5ced93-8769-4b34-9adc-ccf811f016dc';
		break;
		
		case 2061: // no cam detected. Clicked start over.
			eventID = '87ddcfb7-fc47-4472-af9a-6b1e228038f0';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}