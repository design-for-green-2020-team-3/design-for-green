import type {AggregationIndex, Index, Zone} from './domain';
import type {ApiCity} from './api';

export type City = ApiCity;

export interface Aggregation {
	zone: Zone,
	score: number
}

export type Aggregations = {
	[I in AggregationIndex]: Aggregation[]
}

export interface ResultData {
	code: string,
	name: string,
	cityName: string,
	epciName: string,
	epciScore: number,
	departmentName: string,
	departmentScore: number,
	regionName: string,
	regionScore: number
}

export interface Result {
	index: Index,
	data: ResultData[]
}
