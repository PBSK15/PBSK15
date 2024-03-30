/**
 * @author WGBH - Dennis Biron
 * @descript track_dogs.js - progress tracking from dogs - fair shares
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
	
	eventData = {
    'game_id': '357ab99d-aa9c-478d-b464-e4ae68ed27da',
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
			eventID = '32f59bf7-8616-4131-82f6-7f72d6baeacd';
		break;
		
		case 2020: // Start Round
			eventID = '7f567f3f-3f82-4bb9-a69a-d46c01492966';
		break;
		
		case 2030: // Beat Round
			eventID = '71c4ccb3-f6ba-433e-9b18-38154b1223e2';
		break;
		
		case 2040: // Start Level
			eventID = 'f71588ed-a57f-4aa1-8f24-beefdfbfa2a7';
		break;
		
		case 2050: // Beat Level
			eventID = '38a9b9eb-db22-48db-980d-15b8d84f10eb';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '76dd5865-c032-42d8-99b8-021e215b8bec';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '6d176f87-ac6b-4f49-b50e-4fdddd80b8e5';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '385e6ab1-e0be-42dd-9031-d02a13d5fe25';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '64f4c5d9-8cf8-47df-88f8-d939fc06c375';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '0f844cea-06f8-4fbe-91b7-5ec4b722e674';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '0bca9660-7d72-480f-a1a3-cf8dd4b180e4';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '276b46e5-72e4-4a53-865e-b77fafbb506e';
		break;
		
		case 4020: // treat selected
			eventID = '416be518-a109-47ad-b305-f3d5a61181c4';
		break;
		
		case 4030: // treat dropped
			eventID = '91ec8924-1160-406f-9b69-847fdeff1e93';
		break;
		
		case 4090: // Clicked on Help
			eventID = '7605601d-e553-496d-8361-5346da5d41f0';
		break;
		
		case 4100: // Clicked on Whistle
			eventID = '2d2bf079-1aca-49c7-8913-e8ef41a7eb26';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}