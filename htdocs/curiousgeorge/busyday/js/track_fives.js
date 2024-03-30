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
    'game_id': 'c27d6e65-bac9-47a8-8423-edea97ab1368',
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
			eventID = '579c03be-cc24-4dd0-adbd-58e91c55e990';
		break;
		
		case 2020: // Start Round
			eventID = '00e61c49-6860-4554-815d-53005f5a4427';
		break;
		
		case 2030: // Beat Round
			eventID = '7b3f46f5-121c-4ee9-aa8b-5a969585be14';
		break;
		
		case 2040: // Start Level
			eventID = '4109d398-fbd9-43e1-9a71-a8e43db8470f';
		break;
		
		case 2050: // Beat Level
			eventID = 'a54a6f7e-d6d4-4f8c-bc94-afc94a99c1c3';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = 'c9ad7b1a-571b-49d0-952a-2bcbe96d114d';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'f0471d2e-d747-4cb5-a6a0-769d942e1ebd';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '954b0ea7-54a0-4407-bf36-1fc486b40ab5';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '68825f3a-5d64-4c6c-abd1-00bebcfa3abb';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '5a4f2d4f-62a6-4192-9078-e137b18079f0';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'fcdeff96-2014-42b8-a311-7ec3e22ff20e';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'caa4796f-07d0-4eb9-a95b-217f60691389';
		break;
		
		case 4020: // Fires when a hand is painted.
			eventID = 'b657f92f-cf16-4c8f-b6b9-f860a34e5f35';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'dc82e937-39de-41b6-93a3-2a780402aa2e';
		break;
		
		case 4280: // Fires when the trash is clicked.
			eventID = '0d7dc329-c6aa-4d2c-a931-22dc828a4428';
		break;

		case 4281: // Fires when delete is confirmed.
			eventID = '4e76f3bb-c687-4949-b61f-95b0a4b04ef7';
		break;

		case 4282: // Fires when delete is canceled.
			eventID = '367ac0b6-0535-4f6f-907e-2767533fee4f';
		break;

		case 4091: // Fires when the PLAY button is clicked.
			eventID = 'e0286c63-5ff5-4e3f-b9eb-8bd33e17bb86';
		break;

		case 4092: // Fires when STOP button is clicked.
			eventID = 'a3cb5426-cc5c-4648-925a-8f963096ec8d';
		break;
		
		default:
			eventID = -1;
			consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}