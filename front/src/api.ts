import {mapObjIndexed, nth, reverse, sortBy, toPairs} from 'ramda';
import type {Zone} from './types/domain';
import type {ApiAggregations, ApiResults} from './types/api';
import type {Aggregations} from './types/app';
import {citySuggestionsStore, aggregationsStore, resultsStore} from './stores';

const mapAggregations = (aggregations: ApiAggregations): Aggregations =>
	mapObjIndexed((aggregation) => {
		const pairs = toPairs(aggregation);
		const sorted = reverse(sortBy(nth(1), pairs));
		return sorted.map(([zone, score]: [Zone, number]) => ({
			zone,
			score
		}));
	}, aggregations);


export const fetchCitySuggestions = async (postalCode: string) => {
	fetch('/api/city-suggestions.json')
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

export const fetchResults = async (inseeCode: string, fetchHelper = fetch) =>
	fetchHelper('/api/results.json')
		.then((response) => response.json())
		.then((response: ApiResults) => {
			const {aggregations, data} = response;
			aggregationsStore.set(mapAggregations(aggregations));
			resultsStore.set(data);
		});
