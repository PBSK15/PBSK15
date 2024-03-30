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
    'game_id': '08219313-6e18-42f0-9c2d-b64af122b550',
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
			eventID = '3e4d20e9-ef99-4d02-a892-cf9762e0dbdf';
		break;
		
		case 2020: // Start Round
			eventID = '4ac6b56a-6ed1-4361-b37d-b85f01ba27ed';
		break;
		
		case 2030: // Beat Round
			eventID = 'ebcfb83f-6227-4208-9a49-cd26ea3e8031';
		break;
		
		case 2040: // Start Level
			eventID = '4a670eb6-0175-4806-adcc-a331cc8ffc7d';
		break;
		
		case 2050: // Beat Level
			eventID = 'bde55293-da0a-4da5-a7bf-0162ae8ef0e9';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = 'bcf048b7-ad90-47b3-b93e-cb97ab899833';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '47ed4dd6-174c-44f0-8c56-fe5e46f848ca';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'f169893d-cd33-4213-a7e3-2e7920633a5c';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = 'f47d16fd-fe3c-425d-8a05-61c41a1a6ae3';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = '0ae15445-91a6-4a66-8f01-cabab2fd08c0';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = 'f8d0ab84-0372-4155-abdf-53b8c03f2cb6';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'c47e0015-953b-4401-a1f0-8421356237e6';
		break;
		
		case 4170: // Fires when a carrot is collected.
			eventID = 'dfbd5457-fbd9-436c-9cdc-2828f3c62c40';
		break;
		
		case 4175: // Fires when a carrot is passed without collecting it.
			eventID = '336e436d-e448-45ff-a6df-81b966ef8e31';
		break;
		
		case 4090: // Clicked on Help
			eventID = 'b6c64689-f2ff-4db0-af07-7bd786de2415';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}