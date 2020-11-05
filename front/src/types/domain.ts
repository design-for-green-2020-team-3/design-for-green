export enum Indices {
	indice0 = 'indice0',
	indice1 = 'indice1',
	indice2 = 'indice2',
	indice3 = 'indice3',
	global0 = 'global0',
	global1 = 'global1',
	global = 'global'
}

export type Index = keyof typeof Indices;

export type AggregationIndex =
	Indices.indice0
	| Indices.indice1
	| Indices.indice2
	| Indices.indice3;

export enum Zones {
	epci = 'epci',
	department = 'department',
	region = 'region'
}

export type Zone = keyof typeof Zones;
