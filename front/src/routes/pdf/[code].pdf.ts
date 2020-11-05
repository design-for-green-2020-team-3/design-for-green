import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';
import fetch from 'node-fetch';
import {IndicesLabels} from '../../constants';
import {fetchResults} from '../../api';

export const get = async (req, res) => {
	const {code} = req.params;
	const url = `http://${req.headers.host}/api/results/${code}.json`;
	const {results} = await fetchResults(url, fetch);
	const doc = new jsPDF({
		filters: [
			// proper encoding of accents
			'ASCIIHexEncode'
		]
	});

	results.forEach((result) => {
		autoTable(doc, {
			theme: 'plain',
			head: [[
				IndicesLabels[result.index],
			]],
			body: [[]]
		});

		autoTable(doc, {
			theme: 'plain',
			head: [[
				'Code',
				'Nom',
				'Ville',
				'EPCI',
				'Score',
				'Département',
				'Score',
				'Région',
				'Score'
			]],
			body: result.data.map((row) => ([
				row.code,
				row.name,
				row.cityName,
				row.epciName,
				row.epciScore.toFixed(2),
				row.departmentName,
				row.departmentScore.toFixed(2),
				row.regionName,
				row.regionScore.toFixed(2)
			]))
		});
	});

	res.writeHead(200, {
		'Content-Type': 'application/pdf',
		'Content-Disposition': `attachment; filename=resultats-${code}.pdf`
	});

	res.end(doc.output());
};
