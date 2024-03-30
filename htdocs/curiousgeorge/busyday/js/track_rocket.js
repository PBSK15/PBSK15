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

	// debug
	//consoleLogger("event_id : " + event_id);

	eventData = {
    'game_id': '64410dc2-c6f4-4137-963e-286ed56edb9c',
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
			eventID = '836ecd99-b841-4721-9592-ef1643d54376';
		break;
		
		case 2020: // Start Round
			eventID = '1cddbf04-4652-47b0-875e-66ec38baff11';
		break;
		
		case 2030: // Beat Round
			eventID = '5939118d-409d-4968-8439-21b53d474f09';
		break;
		
		case 2040: // Start Level
			eventID = '5350ae53-5b2c-480a-ab24-44eef8901f3d';
		break;
		
		case 2050: // Beat Level
			eventID = '28c06473-22e2-4fa9-92e7-07e091aeabfa';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = 'f81e6388-6b0b-4fe9-940a-071298050a52';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '62c21884-7dfc-4aa2-8191-91c27cb0abbf';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '79b26558-1308-4c4c-b1a6-fb6a5db629c2';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = 'd5ae14b5-6ec6-4bb7-b560-86be38560081';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'cc106061-3d5a-4f2b-a7e5-8df74b218f2a';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'a28317a9-ce7d-41e7-a023-32e1be445124';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '5c0642ef-9a4f-4184-b957-a6810030ddf4';
		break;
		
		case 4020: // Fires when a number-answer is clicked.
			eventID = "ffaaea1f-fcd7-49fc-a798-17a458dccebc";
		break;
		
		case 4090: // Clicked on Help
			eventID = '5661789d-9cb1-45a8-96a5-34dd77ecd439';
		break;
		
		case 4100: // Clicked on launch
			eventID = '97b9f670-3945-46f7-a7e2-804fd121644a';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}