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
    'game_id': '1e7005d9-2d56-422e-a4d5-f0abba0f1fe0',
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
			eventID = '10c9a6ae-02cd-4b40-bcf4-f1ef0abdb0ef';
		break;
		
		case 2020: // Start Round
			eventID = 'e6998490-d205-4a72-b09f-3b8d523a1c8d';
		break;
		
		case 2030: // Beat Round
			eventID = '641eb7d5-b3fe-48bf-934c-b4715a2efced';
		break;
		
		case 2040: // Start Level
			eventID = '4fd7a850-988e-463c-affa-45d74b9db4fc';
		break;
		
		case 2050: // Beat Level
			eventID = '66cc0ac4-e72c-4f93-a553-9c9f2f35a92c';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '9c905801-9aba-43bf-960a-891cda2068b6';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'a73bc2c9-78d0-48e3-a979-fe5cf703c016';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'b4a8b949-0ea8-4aa5-b2cc-6a4871829c20';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '2148012c-4ec6-422c-bfae-90e41a46252e';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '0a16273a-1669-4c60-8c00-550267fc417e';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '51fe7ad5-42c5-43cd-9816-dcd23b453672';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '99369ad0-eb45-4aaf-96f1-ab688832ef76';
		break;
		
		case 4110: // launched meatball
			eventID = '082fc124-169a-44ab-b0ed-dcc9c0f03110';
		break;
		
		case 4090: // Clicked on Help
			eventID = '93056b39-fdcf-41e1-92a5-ecaf66946059';
		break;
		
		case 4100: // clicked on bell
			eventID = '65013eae-0c87-4756-a315-20e6fad14b16';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}