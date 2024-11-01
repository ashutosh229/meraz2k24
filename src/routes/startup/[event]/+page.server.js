import econclaveData from "$lib/data/e-conclave.json" 

export function load({ params }) {

	let eventsData = econclaveData;
	for (var i = 0; i < eventsData.length; i++){
		let myEvent = eventsData[i];

		if (myEvent.id === params.event){ 
			return myEvent
		}
	}
	return "404";
}
