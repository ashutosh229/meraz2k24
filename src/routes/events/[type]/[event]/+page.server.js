import scitechData from '$lib/data/scitech.json';
import culturalData from '$lib/data/culturals.json';
import informalsData from '$lib/data/informal.json'

export function load({ params }) {
	let eventsData;
	if (params.type === 'scitech') {
		eventsData = scitechData;
	} else if (params.type === 'culturals') {
		eventsData = culturalData;
	} else if (params.type === 'informals'){
		eventsData = informalsData;
	} else {
		return '404;';
	}

	for (var i = 0; i < eventsData.length; i++) {
		let myEvent = eventsData[i];

		if (myEvent.id === params.event) {
			return myEvent;
		}
	}
	return '404';
}
