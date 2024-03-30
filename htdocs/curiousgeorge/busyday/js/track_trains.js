/**
 * @author WGBH - Dennis Biron
 * @descript track_trans.js - progress tracking from train
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
	// get event and device id
	var event_id = -1;
	event_id = getEventID(trackData.event_code);

	// create data for tracking call
	eventData = {
    'game_id': '716e31fa-d3ec-47d4-889b-290156610cd1',
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
	
	switch(String(eventCode)){
		case '2000': // Start Game
			eventID = 'add2a333-d8a4-4bb8-a728-6478040c8492';
		break;
		
		case '2020': // Start Round
			eventID = 'd35a3934-3122-47ad-ab8d-76014f5840b8';
		break;
		
		case '2030': // Beat Round
			eventID = '50cecc86-e9dd-408d-9d9a-cff88bf2a033';
		break;
		
		case '2040': // Start Level
			eventID = '8bd4e509-329c-41bf-8a15-f1dec8b144d8';
		break;
		
		case '2050': // Beat Level
			eventID = '31f01cde-b602-4571-bbe9-8f66f94d4354';
		break;
		
		case '3010': // System-Initiated Instruction 
			eventID = 'c39ada7a-31dd-4ab5-a46c-384d50968e9a';
		break;
		
		case '3020': // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'a1b83256-9c18-4653-9fcc-fba55bfd4f1e';
		break;
		
		case '3021': // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'fd05f1fb-646e-43e3-ac22-76c15600c71f';
		break;
		
		case '3121': // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '92d2daba-3510-4cbc-9011-c29a22cc96ee';
		break;
		
		case '3120': // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '6b24e44a-9bd6-451f-bebe-0a0f3198595b';
		break;
		
		case '3110': // End of system-initiated instruction
			eventID = '54d459e8-2144-4b00-bd5d-c6c7d643d1ca';
		break;
		
		case '4010': // Clicked on Start Arrow
			eventID = 'e4cdda12-0b9b-4c4f-99d8-c7e62c91345d';
		break;
		
		case '4030': // Moved Train Section From Yard to Yellow Train
			eventID = '39951245-699c-4740-9c5f-2214e51ffef0';
		break;
		
		case '4040': // Moved Train Section From Yellow Train to Yard
			eventID = '52111a27-7378-4d0d-b0b6-bc9eab039872';
		break;
		
		case '4050': // Moved Train Section From Yellow Train to Space
			eventID = 'a0028c11-6f26-4e1f-a0eb-11cc7bcace83';
		break;
		
		case '4060': // Moved Train Section
			eventID = 'b7169790-2367-4759-81f5-b34bd97734d3';
		break;
		
		case '4090': // Clicked on Help
			eventID = '95c2fa9e-6e5e-43cd-af07-63756af6e5eb';
		break;
		
		case '4100': // Clicked on Whistle
			eventID = '20b63f7d-6d87-4009-9675-f06145b7615d';
		break;
		
		default:
			eventID = -1;
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}