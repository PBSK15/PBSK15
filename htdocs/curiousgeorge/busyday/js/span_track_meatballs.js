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
    'game_id': '1f9d4184-d7f5-42ae-8d5c-dfac98e3c092',
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
			eventID = '1f64ae57-4621-48f2-9e58-c3c74c490a48';
		break;
		
		case 2020: // Start Round
			eventID = 'fc435182-37be-4109-80b5-925b4c990435';
		break;
		
		case 2030: // Beat Round
			eventID = '3ca004e1-544f-4208-a5d6-e5437607bb6b';
		break;
		
		case 2040: // Start Level
			eventID = 'a13fcc09-a710-4440-93f5-eccfab3cbf2d';
		break;
		
		case 2050: // Beat Level
			eventID = '8db3d58f-2bf8-48fa-87c8-af1e95df26be';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '2bc5f501-ee9f-4ef9-9d14-f47fbee32b2c';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '2c159711-4042-46dd-aba6-7e47b38afe97';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '5805727b-1405-47f7-8458-495d9b3bdafb';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '284a2d0b-1184-4573-bde5-f3a32d917e0b';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '6b6dba79-eae9-4f0b-a9cc-9a818b443741';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'c920edf7-abe8-4966-b0e4-8d8220c01807';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '1e158484-f734-4ab7-a1c6-965f6d8008cd';
		break;
		
		case 4110: // launched meatball
			eventID = 'b67ebc5e-7f27-4549-9ad3-f5dd96e2c8aa';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'ffa5fb81-62be-4999-83d4-035639dd86cd';
		break;
		
		case 4100: // clicked on bell
			eventID = 'ad6e2783-a1f9-4359-87bc-636fb09cc8ce';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}