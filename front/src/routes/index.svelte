<script context="module">
	import {citySelectedStore} from '../stores';
	import {fetchResults} from '../api';

    export async function preload(page) {
		const {query} = page;

		if (query.code && query.name) {
			fetchResults(query.code, this.fetch);
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
		aggregationsStore as aggregations,
		citySelectedStore as citySelected
	} from '../stores';
	import Introduction from '../components/Introduction';
	import Search from '../components/Search';
	import CitySearchForm from '../components/CitySearchForm';
	import CitySelector from '../components/CitySelector';
	import IndicesAggregations from '../components/IndicesAggregations';

	const handleSelect = async (city) => {
		$citySelected = city;
		await fetchResults(city.code, fetch);
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
