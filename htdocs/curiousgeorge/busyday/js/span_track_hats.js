/**
 * @author WGBH - Dennis Biron
 * @descript track_hats.js - progress tracking from train
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

// sendTrackingCall function - ExternalInterface call - @param trackData - meta data from flash content
sendTrackingCall = function(trackData){
	// debug
	//consoleLogger("sendTrackingCall event_code : " + trackData.event_code);
	
	// get event and device id
	var event_id = -1;
	event_id = getEventID(trackData.event_code);
	
	// create data for tracking call
	eventData = {
    'game_id': '01c74e5a-547b-4136-82c5-438043d35fa7',
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
			eventID = 'd537fb22-6ae7-4f75-a682-404e88cc0276';
		break;
		
		case 2020: // Start Round
			eventID = '1d22137c-c5c2-46b2-8388-f564699fa80d';
		break;
		
		case 2030: // Beat Round
			eventID = 'd3f3eadb-538e-4f78-a8ec-b2541ed596f8';
		break;
		
		case 2040: // Start Level
			eventID = '67dd9475-3fc1-4a7a-a55e-fa71a47fcfc7';
		break;
		
		case 2050: // Beat Level
			eventID = '48a097e5-16d0-4984-a43c-85d288c073f8';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '0c2fc255-874d-45b6-9194-14158cc12cf5';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '2881f566-7232-4c44-9349-4240eed85953';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '45cc127b-0b46-4e44-903c-bcd17ac9a6e2';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '49345dea-320a-46ea-b320-65671809f161';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '8e3ff549-4ffa-4183-8ef9-9e00c004a3cb';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '75651d03-5571-425c-8737-9d9d3e397e96';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'a58c25cb-13e0-4f02-9284-863e795fe745';
		break;
		
		case 4020: // passenger clicked on
			eventID = 'a8d3debc-2991-4bd0-807e-e7c95eb14e3e';
		break;
		
		case 4051: // passenger enters from right
			eventID = '34524a45-319b-4280-a7d9-386eb9a73463';
		break;
		
		case 4052: // passenger exits from left
			eventID = '7ab9d23e-4b8e-4828-836c-c982158f5549';
		break;
		
		case 4053: // question answered
			eventID = '0b7b6d74-f0fe-4be1-b515-2a40b55b8923';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'bc3c5762-dd82-4f5d-bc53-8125312b9702';
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