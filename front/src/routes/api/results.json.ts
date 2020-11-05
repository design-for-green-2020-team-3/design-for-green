const results = JSON.stringify({
	aggregations: {
		informationAccess: {
			city: 12,
			dpt: 142,
			region: 5,
			global: 40
		},
		digitalAccess: {
			city: 98,
			dpt: 8,
			region: 32,
			global: 78
		},
		digitalSkills: {
			city: 92,
			dpt: 37,
			region: 36,
			global: 31
		},
		administrativeSkills: {
			city: 8,
			dpt: 85,
			region: 73,
			global: 34
		}
	},
	data: [
		{
			id: '',
			name: '',
			informationAccess: 12,
			digitalAccess: 73,
			digitalSkills: 82,
			administrativeSkills: 54
		}
	]
});

// id nom index1 index2 dpt region

export const get = (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(results);
};
