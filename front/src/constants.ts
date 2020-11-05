import {Indices, Zones} from './types/domain';

export const SuggestionsHash = '6ebc138e41dae4d96ce277783310ad2f';
export const ResultsHash = '17cc291b2301f847fba63341205c8efb';

export const IndicesValues = [
	Indices.Indice0,
	Indices.Indice1,
	Indices.Indice2,
	Indices.Indice3,
	Indices.Global0,
	Indices.Global1,
	Indices.Global
];

export const AggregationsIndicesValues = [
	Indices.Indice0,
	Indices.Indice1,
	Indices.Indice2,
	Indices.Indice3
];

export const IndicesLabels = {
	[Indices.Indice0]: 'Accès à l\'information',
	[Indices.Indice1]: 'Accès aux interfaces numériques',
	[Indices.Indice2]: 'Compétences administratives',
	[Indices.Indice3]: 'Compétences numériques / scolaires',
	[Indices.Global0]: 'Accès global',
	[Indices.Global1]: 'Compétences globales',
	[Indices.Global]: 'Global'
};

export const ZoneValues = [
	Zones.epci,
	Zones.department,
	Zones.region
];
