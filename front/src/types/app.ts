import type {Index, Zone} from './domain';
import type {ApiCity, ApiResult} from './api';

export type City = ApiCity;

export interface Aggregation {
	zone: Zone,
	score: number
}

export type Aggregations = {
	[I in Index]: Aggregation[]
}

export type Results = ApiResult[];
