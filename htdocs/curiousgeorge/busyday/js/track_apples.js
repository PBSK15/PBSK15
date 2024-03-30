/**
 * @author Dennis Biron
 * @descript track_apples.js - progress tracking from Apple Picking 
 */

// get instance of tracker and push event up
var trackerCall;

sendTrackingCall = function(trackData){
	var event_id = -1;
	event_id = getEventID(trackData.event_code);
	
	eventData = {
    'game_id': '798acc32-16f9-460f-9d74-db629b46be7f',
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
			eventID = '80328091-005d-4836-bd7e-0f34fbaf97e6';
		break;
		
		case 2020: // Start Round
			eventID = '4b027eab-720b-4410-a714-89c4d23bfc56';
		break;
		
		case 2030: // Beat Round
			eventID = 'd8ca15f2-83d2-463a-af71-7ee8a1b69fcb';
		break;
		
		case 2040: // Start Level
			eventID = 'fd5f56a1-5059-4bee-81ba-1f2a70efa6f0';
		break;
		
		case 2050: // Beat Level
			eventID = '9e7787a6-2fba-4551-a87c-5b4319ba3b9f';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '67dc1d67-d56d-4610-8657-0038fa95cb8a';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '0e9b15de-a4ba-4d42-a710-da021ed1d23a';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '36d77313-02cb-4c2c-a52a-43478e901c18';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = 'ddbb114e-ace2-46e9-86e8-e170f4400ba6';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '655bc57d-e1ce-4970-b0c3-e03ee4883518';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'fdaad0e1-9167-4f1e-99c5-3c567f935f10';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'e904cacc-b76b-40b0-be73-b7c8b1289749';
		break;
		
		case 4020: // click on apple
			eventID = 'abdad9fc-538a-4051-bc89-a50328bb2dfd';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'abba04f1-7da3-4145-885d-3b0ce8a078e7';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}
