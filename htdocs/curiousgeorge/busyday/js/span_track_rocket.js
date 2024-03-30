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

	// debug
	//consoleLogger("event_id : " + event_id);

	eventData = {
    'game_id': 'ffad1ad9-0534-486a-b87d-41f120cf4e5f',
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
			eventID = '1cec63e7-5368-4f38-96cd-9dfcdd335b99';
		break;
		
		case 2020: // Start Round
			eventID = '319ee3e7-a8ab-4015-9c8b-41513887eba2';
		break;
		
		case 2030: // Beat Round
			eventID = '8675453b-8199-4c58-92cc-8a066be46c5b';
		break;
		
		case 2040: // Start Level
			eventID = '7130040c-3b77-4c6b-aaaa-f5b183127eab';
		break;
		
		case 2050: // Beat Level
			eventID = '0a56005c-a9f7-4929-9a1a-da95913da684';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '65a152fa-4811-4803-b820-8e475d6f4c32';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = 'dc906e74-a790-42ea-a6f1-1afba0dd89cd';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'b88f98d7-8fb4-4576-9094-df56e60c3b3c';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '7ab4c83e-e894-4286-808d-adda495bffc8';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'd70b47ae-499c-4956-967b-898eefef60e5';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '7023d2d8-f24c-461d-8ea7-634ad37d3510';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '03fa9957-610c-487c-829f-0b5e5f6e3e24';
		break;
		
		case 4020: // Fires when a number-answer is clicked.
			eventID = "9a2c91b5-da7a-4d7a-a70e-5a7c3344a3a1";
		break;
		
		case 4090: // Clicked on Help
			eventID = '9f9d2c3b-4437-46f6-991e-abbbafc755fb';
		break;
		
		case 4100: // Clicked on launch
			eventID = 'dedb4745-1ed0-4190-bf9b-61900f279329';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}