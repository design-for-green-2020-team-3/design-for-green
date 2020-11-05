const results = JSON.stringify({
	"inseeCode": "30085",
	"agg": {
		"epci": {
			"Indice0": 93.362555167,
			"Indice1": 98.941096953,
			"Indice2": 75.206406895,
			"Indice3": 107.936497708,
			"Global0": 95.222069096,
			"Global1": 97.026467437,
			"Global": 96.124268266
		},
		"department": {
			"Indice0": 75.5568214,
			"Indice1": 104.308865356,
			"Indice2": 70.303047599,
			"Indice3": 92.747809093,
			"Global0": 85.140836052,
			"Global1": 85.266221929,
			"Global": 85.20352899
		},
		"region": {
			"Indice0": 73.16571996,
			"Indice1": 100.45750305,
			"Indice2": 65.394140434,
			"Indice3": 96.679988104,
			"Global0": 82.26298099,
			"Global1": 86.251372214,
			"Global": 84.257176602
		}
	},
	"data": [
		{
			"code": "300850000",
			"name": "Collias",
			"cityName": "Collias",
			"epci": {
				"name": "CC du Pont du Gard",
				"indices": {
					"Indice0": 93.362555167,
					"Indice1": 98.941096953,
					"Indice2": 75.206406895,
					"Indice3": 107.936497708,
					"Global0": 95.222069096,
					"Global1": 97.026467437,
					"Global": 96.124268266
				}
			},
			"department": {
				"name": "GARD",
				"indices": {
					"Indice0": 75.5568214,
					"Indice1": 104.308865356,
					"Indice2": 70.303047599,
					"Indice3": 92.747809093,
					"Global0": 85.140836052,
					"Global1": 85.266221929,
					"Global": 85.20352899
				}
			},
			"region": {
				"name": "OCCITANIE",
				"indices": {
					"Indice0": 73.16571996,
					"Indice1": 100.45750305,
					"Indice2": 65.394140434,
					"Indice3": 96.679988104,
					"Global0": 82.26298099,
					"Global1": 86.251372214,
					"Global": 84.257176602
				}
			}
		}
	]
});

export const get = (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(results);
};
