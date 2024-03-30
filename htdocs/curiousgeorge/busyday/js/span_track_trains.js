/**
 * @author WGBH - Dennis Biron
 * @descript track_trans.js - progress tracking from train
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
	// get event and device id
	var event_id = -1;
	event_id = getEventID(trackData.event_code);

	// create data for tracking call
	eventData = {
    'game_id': 'd1dbafdd-3a9c-4991-879e-8dfcda3159fb',
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
			eventID = '4d9dde75-4b80-4d8b-8084-b477b273554d';
		break;
		
		case '2020': // Start Round
			eventID = 'ae974542-eae2-46fa-8138-99fcd8357e00';
		break;
		
		case '2030': // Beat Round
			eventID = '74804911-db39-4573-8312-777ad36d438d';
		break;
		
		case '2040': // Start Level
			eventID = '79414a57-dff3-4d53-99fc-b4df80aa2e4a';
		break;
		
		case '2050': // Beat Level
			eventID = '254fc4dc-4d60-43a6-a9fb-89f4c4e2f256';
		break;
		
		case '3010': // System-Initiated Instruction 
			eventID = '0a7ca6c0-c9ea-4508-a5c1-6c4503b76c9b';
		break;
		
		case '3020': // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'e4320845-68c5-4058-b9b5-4b4ad289d69a';
		break;
		
		case '3021': // System-Initiated Feedback (Correct Round Attempt)
			eventID = '48950a4e-869c-403a-8c30-4c364eddae99';
		break;
		
		case '3121': // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '53dbf656-86ca-42b9-8d77-1e4e288aba0e';
		break;
		
		case '3120': // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '7085be28-7d30-4bb5-a965-4c2e615fc358';
		break;
		
		case '3110': // End of system-initiated instruction
			eventID = 'a6bd22c4-9362-49bb-a5eb-dfbdece01b62';
		break;
		
		case '4010': // Clicked on Start Arrow
			eventID = '8e104a68-1435-460e-b911-3a780c37bb2a';
		break;
		
		case '4030': // Moved Train Section From Yard to Yellow Train
			eventID = '9b434f75-50d9-4b1c-90c0-c0b0e9362f06';
		break;
		
		case '4040': // Moved Train Section From Yellow Train to Yard
			eventID = '13b0a5b1-46e6-453c-aa88-2b94268c967b';
		break;
		
		case '4050': // Moved Train Section From Yellow Train to Space
			eventID = 'dddc9a5b-a726-4d79-9052-0554de212ba0';
		break;
		
		case '4060': // Moved Train Section
			eventID = '058556e1-9851-49a0-aa95-d2f15193f947';
		break;
		
		case '4090': // Clicked on Help
			eventID = '2d3d4caa-d938-47e7-b88f-e3e75b5ef651';
		break;
		
		case '4100': // Clicked on Whistle
			eventID = '431de9e6-7f10-4623-970d-c7e2aa6fd2c2';
		break;
		
		default:
			eventID = -1;
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}