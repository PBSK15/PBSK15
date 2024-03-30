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
    'game_id': '2f8de533-9856-461b-a9ae-1245b52a8783',
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
			eventID = '5a0df28e-16cc-4f30-9dc3-e66a97b039c1';
		break;
		
		case 2020: // Start Round
			eventID = '8df8c9ba-0ccb-484b-88ae-62b55cd14059';
		break;
		
		case 2030: // Beat Round
			eventID = '253988d4-7afe-4b3e-aa73-99dfb0a6e0be';
		break;
		
		case 2040: // Start Level
			eventID = '3a457644-bafc-49eb-9bda-12d1ba77916b';
		break;
		
		case 2050: // Beat Level
			eventID = '6ae9471e-7400-4b8c-8ec9-046924d1cac2';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '8d58aa76-b2de-45bc-aa2a-2bd188bd8de2';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '1f2f67ea-7c41-434e-8a05-29c98e6418b0';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '075a1a21-3a6c-483e-a31e-a94b106fca68';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '564707c5-f394-4e3a-80cb-ac9bf7fd6dc2';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'fe028784-90af-4617-b395-0748b072882c';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '335d417b-cc61-45e4-a00a-a9b8574ac391';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '8cf943dc-e295-4288-8c24-a4bf2665fdd6';
		break;
		
		case 4020: // launched meatball
			eventID = 'c6551c3a-5dda-4d9d-8131-363398c097fd';
		break;
		
		case 4090: // Clicked on Help
			eventID = '041b68e1-e36b-4cd7-990c-9bf9392925f3';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}