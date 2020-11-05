import {Indices, Zones} from './types/domain';

export const SuggestionsHash = '6ebc138e41dae4d96ce277783310ad2f';
export const ResultsHash = '17cc291b2301f847fba63341205c8efb';

export const IndicesValues = [
	Indices.indice0,
	Indices.indice1,
	Indices.indice2,
	Indices.indice3,
	Indices.global0,
	Indices.global1,
	Indices.global
];

export const AggregationsIndicesValues = [
	Indices.indice0,
	Indices.indice1,
	Indices.indice2,
	Indices.indice3
];

export const IndicesLabels = {
	[Indices.indice0]: 'Accès à l\'information',
	[Indices.indice1]: 'Accès aux interfaces numériques',
	[Indices.indice2]: 'Compétences administratives',
	[Indices.indice3]: 'Compétences numériques / scolaires',
	[Indices.global0]: 'Accès global',
	[Indices.global1]: 'Compétences globales',
	[Indices.global]: 'Global'
};

export const ZoneValues = [
	Zones.epci,
	Zones.department,
	Zones.region
];
