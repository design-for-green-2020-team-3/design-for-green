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
			return;
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
	import CitySearchForm from '../components/CitySearchForm';
	import CitySelector from '../components/CitySelector';
	import IndicesAggregations from '../components/IndicesAggregations';

	const handleSelect = (city) => {
		fetchResults(city.code);
		$citySelected = city;
		window.history.replaceState(null, null, `?code=${city.code}&name=${city.name}`);
	};

	const handleCancel = () => {
		$cities = [];
	};
</script>

<svelte:head>
	<title>Indice national de Fragilité Numérique</title>
</svelte:head>

<Introduction />
<CitySearchForm />

{#if $cities.length}
	<CitySelector
		cities={$cities}
		onSelect={handleSelect}
		onCancel={handleCancel}
	/>
{/if}

{#if $aggregations}
	<div id="results">
		<IndicesAggregations
			aggregations={$aggregations}
			city={$citySelected}
		/>
		<a href="#citySearchFrom" data-screen-only>
			Retour à la recherche
		</a>
	</div>
{/if}
