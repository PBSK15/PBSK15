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
    'game_id': '61a8ba10-d73f-4f2e-8efa-669e911ccbf1',
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
			eventID = '0e2dec35-4429-4eac-9bd8-4c1c4ad68296';
		break;
		
		case 2020: // Start Round
			eventID = 'd6038c17-10f7-4952-aeb2-324c4ab3e8ef';
		break;
		
		case 2030: // Beat Round
			eventID = 'ffa8b599-6d78-45d1-83db-9578c1612761';
		break;
		
		case 2040: // Start Level
			eventID = 'e228c18f-30b2-4b1e-b8eb-108fb67fe3d6';
		break;
		
		case 2050: // Beat Level
			eventID = '17f1e06d-1d03-423e-a4c8-a190e651bea9';
		break;
		
		case 3010: // System-Initiated Instruction 
			eventID = '5557399a-7276-4cc4-9c4d-24ee18c34dbe';
		break;
		
		case 3020: // System-Initiated Feedback (Incorrect Round Attempt)
			eventID = '9133f586-841c-4e30-9038-752172ea272f';
		break;
		
		case 3021: // System-Initiated Feedback (Correct Round Attempt)
			eventID = 'eb11b07b-5873-4f1b-add8-20fd80453fae';
		break;
		
		case 3121: // End of system-initiated feedback (CORRECT ROUND ATTEMPT)
			eventID = '832648ce-87c9-49f8-bad7-650a7d3ffb25';
		break;
		
		case 3120: // End of system-initiated feedback (INCORRECT ROUND ATTEMPT)
			eventID = 'dd8ebef7-7614-410b-bf65-4e90f900bc8a';
		break;
		
		case 3110: // End of system-initiated instruction
			eventID = '26f5188a-d1fe-40c6-9ba6-78e3ac56f87d';
		break;
		
		case 4010: // Clicked on Start Arrow
			eventID = 'c269f192-981f-40cc-a9ca-1e7352b09acd';
		break;
		
		case 4170: // Fires when a carrot is collected.
			eventID = '15a10ba5-d6c4-4acc-a8e0-9baa49b2d86e';
		break;
		
		case 4175: // Fires when a carrot is passed without collecting it.
			eventID = '5738ed8d-7687-4c22-8bd6-2333a877e0a8';
		break;
		
		case 4090: // Clicked on Help
			eventID = '8c317a0f-93fc-46c5-b79c-c1054d119e61';
		break;
		
		default:
			eventID = -1;
			//consoleLogger("eventID not found");
		break;
		
	}
	
	//consoleLogger("eventID " + eventID);
	
	return eventID;
}