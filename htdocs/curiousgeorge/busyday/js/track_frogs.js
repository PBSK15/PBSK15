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
    'game_id': '5b3299bb-a0d6-43a6-be24-b7c59f879830',
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
			eventID = '3763ab02-a603-4af0-ba54-79e62abe3276';
		break;
		
		case 2020: // Start Round
			eventID = 'e63ad20b-1bdc-4cbc-ba08-3392af02647d';
		break;
		
		case 2030: // Beat Round
			eventID = 'a219033c-b130-4e0e-bba8-68eb6d500c6b';
		break;
		
		case 2040: // Start Level
			eventID = '7373edb4-f6a5-4fde-bfba-b08d86daedca';
		break;
		
		case 2050: // Beat Level
			eventID = '8d430df5-c0bc-459d-9cee-ad0976f0ef4b';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '7533a392-2685-4918-bc9f-31f539b6b185';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '8ee2c8bb-4dad-45b0-9afb-605b4d826bc6';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'dc6e53b4-2fb4-47ba-9e38-78ed2d0784f7';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '009660ad-c3a1-4495-9d29-3b0f71d6e028';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '0f76e0ce-f23d-47d4-946a-7c3c54aa13b8';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'ec6caa18-f484-434f-83b0-c1348fcb9cf4';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'bc33a9e7-e983-46d9-8002-d20c4a0755ee';
		break;
		
		case 4020: // launched meatball
			eventID = 'e8ab9fb0-c086-41eb-b285-9edf687a4e0d';
		break;
		
		case 4090: // Clicked on Help
			eventID = '903561e4-1b1f-4fb4-9978-aad14036b411';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}