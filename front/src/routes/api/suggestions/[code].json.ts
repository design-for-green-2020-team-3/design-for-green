const suggestions = JSON.stringify([
	{
		name: 'Angers',
		code: '12'
	},
	{
		name: 'Avrillé',
		code: '827'
	}
]);

export const get = (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(suggestions);
};
