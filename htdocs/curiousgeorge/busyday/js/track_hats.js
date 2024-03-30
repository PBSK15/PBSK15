/**
 * @author WGBH - Dennis Biron
 * @descript track_hats.js - progress tracking from train
 */

// consoleLogger function - display debug text via browser console
function consoleLogger(message){
	if(console){
		console.log(message);
	}
}

// get instance of tracker and push event up
var trackerCall;

// sendTrackingCall function - ExternalInterface call - @param trackData - meta data from flash content
sendTrackingCall = function(trackData){
	// debug
	//consoleLogger("sendTrackingCall event_code : " + trackData.event_code);
	
	// get event and device id
	var event_id = -1;
	event_id = getEventID(trackData.event_code);
	
	// create data for tracking call
	eventData = {
    'game_id': '353024dc-c72a-497c-b467-28e904826464',
    'event_id' : event_id,
    'event_data': trackData
	}

	if (trackerCall === undefined) {
	  trackerCall = PBS.KIDS.tracker.init();
	  trackerCall.setTracking(true);
	}
	trackerCall.pushEvent(eventData);
	
}

// getEventID function - return the correct event id base on progress tracker admin DB
function getEventID(eventCode){
	var eventID;
	
	switch(Number(eventCode)){
		case 2000: // Start Game
			eventID = '67848ae9-45e9-4981-bf2f-59afb86d6c68';
		break;
		
		case 2020: // Start Round
			eventID = 'a13a5645-35ec-4f45-8ac1-6cf00d94ca4f';
		break;
		
		case 2030: // Beat Round
			eventID = '588673f4-eeaf-4a96-8460-61762173c792';
		break;
		
		case 2040: // Start Level
			eventID = 'd8dd75c4-4d4f-45d6-8dde-0752cf326422';
		break;
		
		case 2050: // Beat Level
			eventID = '7f5fdad4-e2b8-42b2-bb12-725e358be891';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = 'd91aeb87-cb86-492f-9f9a-acb15557a708';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'fd663fac-9cba-4550-97c9-af12e301f0fc';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '9aa7aae8-4734-4be4-8ba5-e1ee39c879a5';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'b6dc2773-d801-4c66-a78c-351121bab048';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '78712ff4-02e5-40c1-8e9a-28bd221c8de7';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'b612d85e-b718-4508-8d84-b2532f60a0a2';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '96417b37-2b18-458d-935c-9d5e336f72fb';
		break;
		
		case 4020: // passenger clicked on
			eventID = '515b57f0-bd57-4b34-b64a-6b33eaa66a3f';
		break;
		
		case 4051: // passenger enters from right
			eventID = '70bf339f-8b15-4fc4-9b80-bb07a70703e5';
		break;
		
		case 4052: // passenger exits from left
			eventID = 'eb555bcf-35a6-40ac-9116-d0a5bc7aa8b7';
		break;
		
		case 4053: // question answered
			eventID = '47ba6acc-c5e2-4874-b973-7bd85052a47f';
		break;
		
		case 4090: // Clicked on Help
			eventID = '7af16168-62d5-4b7d-9001-f57a86680552';
		break;
/*		
		case 4100: // Clicked on Whistle
			eventID = -1;
		break;
*/		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}