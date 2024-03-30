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
    'game_id': '4d8f1f68-414e-4617-a319-be707a5b37d7',
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
			eventID = 'b2c78b66-e8df-4af0-b0ed-f47d962490a3';
		break;
		
		case 2020: // Start Round
			eventID = 'f368ec31-397a-4257-bc58-a8440cc829d6';
		break;
		
		case 2030: // Beat Round
			eventID = '05693080-a7f5-4860-8c1e-9e5ee215b23a';
		break;
		
		case 2040: // Start Level
			eventID = '05d4eeaf-1a75-4870-bd18-75df00f49b16';
		break;
		
		case 2050: // Beat Level
			eventID = '721d7722-fa3b-4b61-a7c9-9b91b0c3c4f5';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = 'f3f8fa11-83ed-41c6-9cd9-983141bd0461';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '3db7630d-6d62-4355-90ac-92db98396ff2';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'a5ff8d31-671c-49bf-947f-7560a551a02f';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '53ba50b6-73a0-4464-9f7c-af9541f5cc1f';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'd82c678c-2a1a-4601-84ee-ee2952f38438';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '086c75a9-3b80-4317-9d2a-a114e7844d67';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '562032b9-3c7a-49c6-81ca-25d79a60e3b2';
		break;
		
		case 4050: // answered question
			eventID = '4ad13bc8-44e3-47f0-ac10-82ad655dccc0';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'bfe7b7cc-4350-40a8-898f-ac5ca4a71189';
		break;
		
		case 4165: // Last Bug Caught
			eventID = '8e24ccd9-23e9-4661-abb4-55a92e3b2d48';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}