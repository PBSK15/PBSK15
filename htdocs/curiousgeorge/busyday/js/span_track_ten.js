/**
 * @author Dennis Biron
 * @descript track_ten.js - progress tracking from Museum of Ten
 * spanish language version, added 5/2013
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
    'game_id': '81d33cc2-57e4-4424-976d-4dda9a22d759',
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
			eventID = 'cf11a631-1e05-482e-ab22-bb02613c8507';
		break;
		
		case 2020: // Start Round
			eventID = '8b1a0e24-7c04-4c34-abe2-fb7e589b12eb';
		break;
		
		case 2030: // Beat Round
			eventID = 'cf44d980-53f0-4c8c-83c2-c87549d14f06';
		break;
		
		case 2040: // Start Level
			eventID = '555f8a89-5201-445c-bcc2-c6cce5a28dd2';
		break;
		
		case 2050: // Beat Level
			eventID = 'dfa59757-5b4e-40f0-a10c-67290aea100d';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = 'eda8f4e9-0d72-4a09-9f1f-e876b4cd98ef';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'd3418dfa-f45e-4876-9d23-2e1d62343494';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'f3b01dd7-4386-4daa-88a9-427c2fd94d9e';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '65071dc1-3f64-4b6b-b7bf-f25a9bc2c222';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'd403eb7e-9419-4da7-9b16-ae84713c3e73';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'c7e4c6f6-9d61-4e8f-be40-036811d09b21';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '7da142d3-b128-4079-8ab2-ae797513691f';
		break;
		
		case 4020: // number answered
			eventID = '1fcd4fc5-7756-465c-8b06-85ca4b1a9d6b';
		break;
		
		case 4090: // Clicked on Help
			eventID = '15fd8379-463f-475a-9e68-00bb35e66d98';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}