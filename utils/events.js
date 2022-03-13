const events = [
	{
		name: 'Intro to Docs As Code',
		date: '2022-4-5',
		time: '3pm - 4pm EAT',
		description: 'Join us to learn how to write docs as code',
		link: 'https://www.twitter.com',
		speakers: 'Michael Gary Scott',
	},
	{
		name: 'Flutter Basics',
		date: '2022-4-4',
		time: '4pm - 5pm EAT',
		description: 'Come learn the basics of flutter',
		link: 'https://www.twitter.com',
		speakers: 'Dwight Kurt Schroot',
	},
];

// const events = [];

export const sortedEvents = events.sort(({ date: a }, { date: b }) => {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
});
