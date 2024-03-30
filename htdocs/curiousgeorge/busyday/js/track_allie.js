/**
 * @author Dennis Biron
 */

// consoleLogger function - display debug text via browser console
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

	var eventData = {
    'game_id': '1de150d6-e5f4-4f3a-babb-d27e1650ab42',
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
			eventID = '43bbe2fd-b436-4313-ae19-7b509d2f54b6';
		break;
		
		case 2020: // Start Round
			eventID = '5408c16d-e03f-4a8d-9bbd-e93c791dde9e';
		break;
		
		case 2030: // Beat Round
			eventID = '8ecfe7ae-d52e-4edf-9e6a-e6d15a401d39';
		break;
		
		case 2040: // Start Level
			eventID = 'ff3e167c-2653-49f6-825e-66c277c8d590';
		break;
		
		case 2050: // Beat Level
			eventID = 'dbfe5f0e-6105-463d-afc6-b357bec23d4e';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '2df1561b-c3af-431f-abb7-6a51d89b1bd6';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'c797e295-8c2f-42dd-9855-5921cb53f595';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '33876126-4369-4a6e-82c9-47b2866c99d9';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '1373c3f7-fd53-42ad-8bc7-ce593adbd431';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '680e77b9-2335-449e-9116-a70519ec4a93';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '52b7195a-67ed-41f5-a941-40705313437a';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '75655d21-b5aa-4b3f-9f24-88456f5609a7';
		break;
		
		case 4020: // clicked on number
			eventID = 'd619de59-9333-47ca-b960-bfa64ee57214';
		break;
		
		case 4090: // Clicked on Help
			eventID = '5d8152f7-1a9d-4772-8e2f-3699a51f70bb';
		break;
		
		case 4180: // clicked on allie
			eventID = 'c25567ec-539b-4102-9c86-2dbd90ddc032';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}