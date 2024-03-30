/**
 * @author Dennis Biron
 * @descript track_apples.js - progress tracking from Apple Picking 
 * spanish language version, added 5/2013
 */

// get instance of tracker and push event up
var trackerCall;

sendTrackingCall = function(trackData){
	var event_id = -1;
	event_id = getEventID(trackData.event_code);
	
	eventData = {
    'game_id': 'fafe61ae-7b6f-47b6-8475-13f838065360',
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
			eventID = '206772c6-41a6-4dd1-b6b1-9806ab8cf865';
		break;
		
		case 2020: // Start Round
			eventID = 'aff04d09-c84d-4eeb-baf1-270f8e8140f2';
		break;
		
		case 2030: // Beat Round
			eventID = '0efb55fb-26c1-4e15-b5ef-fa358f81b3f2';
		break;
		
		case 2040: // Start Level
			eventID = '5f2b78ef-4dee-4b10-a887-a76a14c27e0e';
		break;
		
		case 2050: // Beat Level
			eventID = 'e4cc7cf3-522a-4ddf-a4e6-8e3817ae8dd1';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '36487e08-35ff-4eea-8196-18ace600927a';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '1099b8a5-2594-4b1c-93c2-b82a22f261ea';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '5ea94bc3-afe1-4cb1-b6fe-31003d3dabf1';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '69b0830f-2446-44bf-ae65-fe52ead55021';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'f9810442-b3fc-4748-af8c-2cfbd0634c82';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '1e648ddf-2624-43e3-b605-01517f6aa681';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '875420fd-3183-4406-9148-f51d7a4d8958';
		break;
		
		case 4020: // click on apple
			eventID = '11412325-ecc7-455c-bbc5-5c4c623aa0fd';
		break;
		
		case 4090: // Clicked on Help
			eventID = '49dea7eb-7a3c-474e-aa4d-e88b75e0254f';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}
