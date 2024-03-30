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
	
	var eventData = {
    'game_id': 'c15addc8-c273-41c8-bf94-77fcbed289ad',
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
			eventID = '794e5ab5-180c-4624-83b5-7088f0224c25';
		break;
		
		case 2020: // Start Round
			eventID = 'b7d617f5-4644-465b-aa61-561ea9dc7a0d';
		break;
		
		case 2030: // Beat Round
			eventID = '9bdc1a4a-cdc3-468e-9590-d4ab8ad80744';
		break;
		
		case 2040: // Start Level
			eventID = '11a97cbc-3b2d-428b-86c0-d2a3c3655fa8';
		break;
		
		case 2050: // Beat Level
			eventID = '90be2cce-c83d-4202-b23c-69617331939e';
		break;
		
		case 2060: // Answered mic question
			eventID = '34ebdc02-1adb-4bf8-a892-becd7e433801';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '62038203-f770-484c-84f0-433faeb187c5';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '793541cb-a5be-41b4-83bc-ebd21c8093f6';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '17d83af8-8481-4dcd-9862-9707f5507811';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '755c08a0-f21d-4571-abc6-a0302cee5c00';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '776bc34c-1190-49ad-8c85-24d0b9efc9dd';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '08bc1ecd-4358-40a9-8eba-49a33c2c2f22';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '79ee91ed-229d-4b23-90aa-86d47cde5c41';
		break;
		
		case 4020: // bubble popped
			eventID = 'bce6800a-0c3d-4456-a211-3e43e3d84fe1';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'b4914099-7bfd-47a5-9b5c-18bd100c01d3';
		break;
		
		case 2061: // no cam detected. Clicked start over.
			eventID = '87237f3a-547f-425e-a434-148b304d0634';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}
