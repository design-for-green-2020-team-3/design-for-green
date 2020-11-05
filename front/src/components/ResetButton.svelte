<script>
	import {
		resultsStore as results,
		aggregationsStore as aggregations,
		citySuggestionsStore as cities,
		citySelectedStore as citySelected
	} from '../stores';


	const onReset = () => {
		$results = null;
		$aggregations = null;
		$cities = [];
		$citySelected = null;
	};
</script>


<button type="button" on:click={onReset}>Réinitialiser</button>


<style>
	button {
		background-color: var(--negative-color);
		border-color: var(--negative-color);
	}
</style>
