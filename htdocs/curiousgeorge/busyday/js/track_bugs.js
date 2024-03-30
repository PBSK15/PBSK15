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
    'game_id': 'c9e59de2-9efd-4b15-a8ea-b231c4b6fabc',
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
			eventID = 'ab7f9daf-a142-4396-a8a3-19cfff505375';
		break;
		
		case 2020: // Start Round
			eventID = '381b2c96-37ce-4ffd-b465-bd9f5ac318e6';
		break;
		
		case 2030: // Beat Round
			eventID = 'b6dc4ebe-280f-4925-bee6-0fa16d50eb84';
		break;
		
		case 2040: // Start Level
			eventID = 'e1af380b-f821-40ba-9544-b3ff1d9fe081';
		break;
		
		case 2050: // Beat Level
			eventID = '82126a65-897e-42b3-a18f-fba318d6dff5';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = 'f58f7df7-c3c8-43d4-b75a-28f8a47c270a';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '85c4a653-bfa2-4652-a123-d47f12ddccac';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'b639df1d-0eba-4715-9486-74eecdad1c5b';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '3e1bcb7b-1c25-473d-8ecc-2ac58aba7924';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '057c850a-7b1e-4516-a4b0-6636a5d55606';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'dc50f946-b165-4391-bec5-8e148667ccc6';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'b8632d85-3d33-4fc2-b60e-cb8855d47120';
		break;
		
		case 4050: // answered question
			eventID = 'e5009d38-0e6e-452f-a4ff-ace0ea9769ea';
		break;
		
		case 4090: // Clicked on Help
			eventID = '1b820775-70b6-4a59-9c25-14e0018b02ac';
		break;
		
		case 4165: // Last Bug Caught
			eventID = 'abcb25e3-bdc6-43b7-a88b-316183d88ea7';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}