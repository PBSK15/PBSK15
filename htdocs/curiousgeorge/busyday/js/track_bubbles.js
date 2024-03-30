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
	
	var eventData = {
    'game_id': 'e772173d-db7f-42fd-948a-e3da60230fcf',
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
			eventID = '9a2f541f-e3e5-494c-832c-b1afb644b69b';
		break;
		
		case 2020: // Start Round
			eventID = '27dd3b96-2567-4847-afe3-3c49e860fd03';
		break;
		
		case 2030: // Beat Round
			eventID = 'de49e71b-907a-4211-823b-4cedec43897b';
		break;
		
		case 2040: // Start Level
			eventID = 'c8b3e088-f8d3-4692-a25e-072eb3fe20ef';
		break;
		
		case 2050: // Beat Level
			eventID = '0a394645-d70f-4523-b796-c917c1904309';
		break;
		
		case 2060: // Answered mic question
			eventID = 'f273a9bf-51f1-41fa-aafb-da316662dc8c';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '8c8c26a3-0aab-4217-a574-364d3d1d7c35';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '3b251484-aa27-4ee6-b0a8-fc0383298fee';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '6a5410e7-b841-4625-89f9-0c72cc8ec72b';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '2f601bac-0768-4f28-9192-41e103cada92';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'f13fe7ba-4464-4038-bbde-b529262d288b';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'fa0717fa-508e-4d34-a1b6-520f515d794d';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '867fb762-7e07-40a6-90dd-a329dc766f26';
		break;
		
		case 4020: // bubble popped
			eventID = '2d8d855d-295f-4d23-ac05-5ee603ba14f5';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'e6b377e0-3c0e-4b79-97d7-1d3e3f54a32e';
		break;
		
		case 2061: // no cam detected. Clicked start over.
			eventID = '178ef31d-6af2-4a32-a269-d2f842d324f8';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}
