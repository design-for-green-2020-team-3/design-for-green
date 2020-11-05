import {map, prop, reverse, sortBy, zipObj} from 'ramda';
import type {ApiResults} from './types/api';
import type {Aggregations, Result} from './types/app';
import {AggregationsIndicesValues, IndicesValues, ZoneValues} from './constants';
import {citySuggestionsStore, aggregationsStore, resultsStore} from './stores';

const mapAggregations = ({agg}: ApiResults): Aggregations =>
	zipObj(
		AggregationsIndicesValues,
		AggregationsIndicesValues.map((index) => {
			const scores = map((zone) => ({
				zone,
				score: agg[zone][index]
			}), ZoneValues);

			return reverse(sortBy(prop('score'), scores));
		})
	);

const mapResults = ({data}: ApiResults): Result[] =>
	IndicesValues.map((index) => ({
		index,
		data: data.map((result) => ({
			code: result.code,
			name: result.name,
			cityName: result.cityName,
			epciName: result.epci.name,
			epciScore: result.epci.indices[index],
			departmentName: result.department.name,
			departmentScore: result.department.indices[index],
			regionName: result.region.name,
			regionScore: result.region.indices[index]
		}))
	}));

export const fetchCitySuggestions = (code: string) => {
	fetch(`/api/suggestions/${code}.json`)
		.then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			return response;
		})
		.then((response) => response.json())
		.then((cities) => {
			citySuggestionsStore.set(cities);
		})
		.catch(function (error) {
			citySuggestionsStore.set([]);
		});
};

export const fetchResults = async (code: string, fetchHelper = fetch) =>
	fetchHelper(`/api/results/${code}.json`)
		.then((response) => response.json())
		.then((response: ApiResults) => {
			aggregationsStore.set(mapAggregations(response));
			resultsStore.set(mapResults(response));
		});
