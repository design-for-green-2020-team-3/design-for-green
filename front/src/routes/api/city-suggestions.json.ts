const suggestions = JSON.stringify([
	{
		name: 'Angers',
		postalCode: '49000',
		insee: '12'
	},
	{
		name: 'Avrillé',
		postalCode: '49240',
		insee: '827'
	}
]);

export const get = (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(suggestions);
};
