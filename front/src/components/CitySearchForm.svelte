<script>
	import {
		citySuggestionsStore as cities,
		citySelectedStore as citySelected
	} from '../stores';
	import {storeCitySuggestions} from '../api';
	import ResetButton from './ResetButton';

	const handleSubmit = (event) => {
		event.preventDefault();
		storeCitySuggestions(
			document.getElementById('postal-code').value
		);
	};
</script>

<form on:submit={handleSubmit}>
	<label for="postal-code">Code postal (ex: 49000)</label>

	<div>
		<input id="postal-code" type="search" pattern="(?:[0-8]\d|9[0-8])\d{`{3}`}" required />
		<input type="submit" value="Rechercher" />
		{#if $citySelected || $cities}
			<ResetButton />
		{/if}
	</div>
</form>


<style>
	input[type="submit"] {
		margin-right: var(--quarter-unit);
	}

	div {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-bottom: var(--unit);
	}
</style>
