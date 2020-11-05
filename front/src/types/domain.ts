export enum Indices {
	Indice0 = 'Indice0',
	Indice1 = 'Indice1',
	Indice2 = 'Indice2',
	Indice3 = 'Indice3',
	Global0 = 'Global0',
	Global1 = 'Global1',
	Global = 'Global'
}

export type Index = keyof typeof Indices;

export type AggregationIndex =
	Indices.Indice0
	| Indices.Indice1
	| Indices.Indice2
	| Indices.Indice3;

export enum Zones {
	epci = 'epci',
	department = 'department',
	region = 'region'
}

export type Zone = keyof typeof Zones;
