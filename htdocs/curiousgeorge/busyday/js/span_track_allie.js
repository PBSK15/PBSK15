/**
 * @author Dennis Biron
 * spanish language version, added 5/2013
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
    'game_id': 'f24481b6-ab7b-4bad-a2a7-18aa64fd8aa5',
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
			eventID = 'a01216ff-901a-4dfc-b8db-9beb3c6ca439';
		break;
		
		case 2020: // Start Round
			eventID = '42843dfe-a90e-4083-ac14-c00a6987c44d';
		break;
		
		case 2030: // Beat Round
			eventID = '5d78069d-1c56-4eed-8d30-d8f87be2d971';
		break;
		
		case 2040: // Start Level
			eventID = '6ac80e5f-a45d-40b1-8fce-ef4b38ad10b7';
		break;
		
		case 2050: // Beat Level
			eventID = '88908216-528f-40d3-b696-dc4df21effc4';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '84c7c068-f2b4-499a-8516-d672f8f76fff';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '4f89ad9b-b05a-416c-b107-8e692d8faf5d';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = '28bf9cf3-5c2c-4861-bba6-8f356437943c';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = 'a40ccafe-c61e-4cc3-888b-405a255ca51e';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'c89479ec-f67a-4f67-b261-3f24c1f2ab2f';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '68ee8503-9258-4b7e-9ed3-e2ae353b8ee7';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = '6a89b11d-3d38-41b7-b1a0-4f0ffb109f34';
		break;
		
		case 4020: // clicked on number
			eventID = '4a044e19-8d94-4155-8875-82de4d03edbd';
		break;
		
		case 4090: // Clicked on Help
			eventID = '6e89c9eb-ca47-4efa-bb18-515e30f835ce';
		break;
		
		case 4180: // clicked on allie
			eventID = '3ceee110-7262-445d-9ee7-4c0d2dde3483';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}