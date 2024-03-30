/**
 * @author Dennis Biron
 * spanish language version, added 5/2013
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
    'game_id': '1fbd9919-198c-4722-994c-9668b824a9a1',
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
			eventID = '70a5325e-c8a6-4c44-b89c-b6f39cdc98d4';
		break;
		
		case 2020: // Start Round
			eventID = 'ea03370b-0e30-4256-9412-97f1ba602d06';
		break;
		
		case 2030: // Beat Round
			eventID = '11621fc4-409f-47b9-aa00-2796800f3c25';
		break;
		
		case 2040: // Start Level
			eventID = 'f2e3e9d4-4a31-4651-a27e-ce2604c3b162';
		break;
		
		case 2050: // Beat Level
			eventID = '9ef493e8-b45f-478c-a3fe-beaa35c7ded9';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '3886550a-8c69-40ce-8e88-edd38ad1f0cd';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '096fd0a4-d028-40cb-8aae-aca5dbeb47d3';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'cff2826d-6dad-45e2-bd37-96d40ca9dedf';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '1bfe531f-959b-4711-b7de-6c0aae4ee02a';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '50829112-4f77-4d8c-be1c-d275485b70dd';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'c1447458-131e-41f7-8b78-1cd1ed9e6345';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'b997f657-42b7-4530-b3d4-1006d5e10082';
		break;
		
		case 4020: // added ball
			eventID = 'e1e2482a-957b-4d34-bd4f-fd06b9977f0b';
		break;
		
		case 2060: // Answered camera question
			eventID = '8c441558-dc9c-4c2f-9d96-b42613cec6f5';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'cde9c68f-0b60-4faf-a3d3-3217ef5ec4e8';
		break;
		
		case 2061: // no cam detected. Clicked start over.
			eventID = '1642ebf7-f934-4782-8742-dbc315a0fab0';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}