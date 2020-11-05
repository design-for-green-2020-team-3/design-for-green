import type {Index, Zone} from './domain'

export interface ApiCity {
	name: string,
	postalCode: string,
	inseeCode: string
}

export type ApiAggregation = {
	[Z in Zone]: number
}

export type ApiAggregations = {
	[I in Index]: ApiAggregation
}

export type ApiResultIndices = {
	[I in Index]: number
}

export interface ApiResult extends ApiResultIndices {
	id: string,
	name: string
}

export interface ApiResults {
	aggregations: ApiAggregations,
	data: ApiResult[]
}
