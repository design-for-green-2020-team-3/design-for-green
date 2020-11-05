<script context="module">
	import {citySelectedStore} from '../stores';
	import {storeResults} from '../api';

	export async function preload(page) {
		const {query} = page;

		if (query.code && query.name) {
			storeResults(query.code, this.fetch);
			citySelectedStore.set({
				code: query.code,
				name: query.name
			});
		}
	}
</script>

<script type="ts">
	import {
		citySuggestionsStore as cities,
		citySelectedStore as citySelected,
		aggregationsStore as aggregations,
		resultsStore as results
	} from '../stores';
	import Introduction from '../components/Introduction';
	import Search from '../components/Search';
	import CitySearchForm from '../components/CitySearchForm';
	import CitySelector from '../components/CitySelector';
	import IndicesAggregations from '../components/IndicesAggregations';
	import ResultsTable from '../components/ResultsTable';
	import Download from '../components/Download';

	const handleSelect = async (city) => {
		$citySelected = city;
		await storeResults(city.code, fetch);
		window.history.replaceState(null, null, `?code=${city.code}&name=${city.name}`);
		document.getElementById('results').focus();
	};
</script>

<svelte:head>
	<title>Indice national de Fragilité Numérique {$citySelected ? `à ${$citySelected.name}` : ''}</title>
</svelte:head>

<Introduction />

<Search>
	<CitySearchForm />

	{#if $cities}
		<CitySelector
			cities={$cities}
			onSelect={handleSelect}
		/>
	{/if}
</Search>

{#if $aggregations}
	<div id="results" tabindex="-1">
		<IndicesAggregations
			aggregations={$aggregations}
			city={$citySelected}
		/>

		<ResultsTable results={$results} />
		<Download city={$citySelected} />

		<a href="#citySearchFrom" data-screen-only>
			Retour à la recherche
		</a>
	</div>
{/if}

<style>
	div {
		outline-offset: var(--half-unit);
	}

	a {
		display: inline-block;
		margin-bottom: var(--unit);
	}
</style>
