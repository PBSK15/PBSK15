/**
 * @author Dennis Biron
 * @descript track_ten.js - progress tracking from Museum of Ten
 */

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
	
	// debug
	//consoleLogger("event_id: " + event_id);

	eventData = {
    'game_id': 'c0cae54f-058b-4cf7-b493-43da49b88996',
    'event_id' : event_id,
    'event_data': trackData
	}
	
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
			eventID = 'd19be2af-1b1c-464f-8971-349a46d770b1';
		break;
		
		case 2020: // Start Round
			eventID = 'ee0c785e-b579-4d70-a867-795def4867f9';
		break;
		
		case 2030: // Beat Round
			eventID = 'ce4aadf5-ddaf-46ce-9676-8da2fa4bb363';
		break;
		
		case 2040: // Start Level
			eventID = '9dcf02ba-1fff-4874-b046-318577d6bfc3';
		break;
		
		case 2050: // Beat Level
			eventID = '4d303378-be77-48a8-a4a9-e77e9b9ed357';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '8973d741-da2b-49ca-bcbe-98e80e31f2d4';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'd80aac99-08ea-4a1d-9b44-75e0e5100855';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '3286ccf7-66ad-4dd8-b203-b0281cd9de65';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '3016aa14-113c-4675-8d8f-ea943cf6a69f';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '55c4eae3-8104-4f03-bf6f-d05e18736c94';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'a9134789-271e-4f0e-946f-0613b7037a16';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '60807e17-fe27-4977-bd05-c25cdef4a66a';
		break;
		
		case 4020: // number answered
			eventID = 'e7e08ed9-1167-40ea-b7e8-ba12fe214e50';
		break;
		
		case 4090: // Clicked on Help
			eventID = '706e76db-f61f-45d6-8295-88427ca92800';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}