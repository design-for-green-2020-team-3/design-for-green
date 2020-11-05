<script type="ts">
	import {
		citySuggestionsStore as cities,
		aggregationsStore as aggregations
	} from '../stores';
	import {fetchResults} from '../api';
	import Introduction from '../components/Introduction';
	import CitySearchForm from '../components/CitySearchForm';
	import CitySelector from '../components/CitySelector';
	import IndicesAggregations from '../components/IndicesAggregations';


	const handleSelect = (inseeCode) => {
		fetchResults(inseeCode);
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
	<IndicesAggregations aggregations={$aggregations} />
{/if}
