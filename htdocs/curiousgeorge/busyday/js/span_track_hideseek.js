/**
 * @author Dennis Biron
 * spanish language version, added 5/2013
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
    'game_id': '834bb73a-09d6-46e8-90e7-407f5536c315',
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
			eventID = '71173d98-7ede-46fb-9f1d-9399168ca6fe';
		break;
		
		case 2020: // Start Round
			eventID = 'e62e9b7b-4139-4c2b-a776-dbc737061376';
		break;
		
		case 2030: // Beat Round
			eventID = '8f8d4e9f-c153-4b07-853b-a2e73252d425';
		break;
		
		case 2040: // Start Level
			eventID = 'f446fe40-fe9c-42ae-9ead-554b1ef64dd3';
		break;
		
		case 2050: // Beat Level
			eventID = 'cd26cd56-3ea5-4dbc-8694-e9b64f4cac49';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '4d0b35e9-7d6c-4644-9d00-be4a668cdc32';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '4104c6e6-dfc7-4955-bec5-995f4b409d39';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'a39acf5d-b84b-44fc-93f5-57b987fb497d';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = 'd9aca717-76eb-4013-940b-2aa92ccc0c9d';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'addc66e6-27c0-4ee2-b9c2-c6f801c3d39f';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'e3a3ed44-5997-4ea8-8c74-0d16960eac94';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '3b6ab64b-804d-4031-9e30-a8bdf79430e5';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'ab1d057d-cdcc-4fd8-a776-df4607a9eced';
		break;
		
		case 4120: // found Number
			eventID = '6c4680b5-a376-41ab-aa39-729fd5caeeaf';
		break;
		
		case 4130: // Found Word
			eventID = '2239176e-cae7-4877-93dc-74fae3f12b96';
		break;
		
		case 4140: // Found Object
			eventID = '31522dba-7980-46be-8c77-446bcb96ab58';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}
