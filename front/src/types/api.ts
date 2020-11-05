import type {AggregationIndex, Index, Zone} from './domain'

export interface ApiCity {
	name: string,
	code: string
}

export type ApiAggregation = {
	[I in AggregationIndex]: number
}

export type ApiAggregations = {
	[Z in Zone]: ApiAggregation
}

export type ApiResultIndices = {
	[I in Index]: number
}

export interface ApiResultZone {
	name: string,
	indices: ApiResultIndices
}

export type ApiResultZones = {
	[Z in Zone]: ApiResultZone
}

export interface ApiResult extends ApiResultZones {
	code: string,
	name: string,
	cityName: string,
}

export interface ApiResults {
	agg: ApiAggregations,
	data: ApiResult[]
}
