<script>
	import {
		citySuggestionsStore as cities,
		citySelectedStore as citySelected
	} from '../stores';
	import {fetchCitySuggestions} from '../api';
	import ResetButton from './ResetButton';

	const handleSubmit = (event) => {
		event.preventDefault();
		fetchCitySuggestions(
			document.getElementById('postal-code').value
		);
	};
</script>

<section id="citySearchFrom" data-screen-only>
	<header>
		<h2>Recherche</h2>
	</header>

	<form on:submit={handleSubmit}>
		<label for="postal-code">Code postal (ex: 49000)</label>

		<div>
			<input id="postal-code" type="search" pattern="(?:[0-8]\d|9[0-8])\d{`{3}`}" required />
			<input type="submit" value="Rechercher" />
			{#if $citySelected || $cities.length}
				<ResetButton />
			{/if}
		</div>

	</form>

</section>

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
